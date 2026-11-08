// Builds offline/kickstorm-offline.html: Kickstorm 3D (football.html) as ONE file that runs with no internet at all.
// three.module.js and every Three.js addon the page imports (plus anything those addons import) are embedded in the
// import map as data: URLs, so the file can be opened straight from disk (file://) or hosted on any static server.
// Relative imports inside an addon are rewritten to their full 'three/addons/...' specifier, which the map also
// covers (a module loaded from a data: URL has no folder to resolve './x.js' against).
// Usage: node scripts/build-football-offline.mjs [path/to/three-package-dir] [--src page.html] [--out file.html]
//   three-package-dir: a local copy of three@0.160.0 (containing build/ and examples/jsm/); downloaded from jsDelivr if omitted.
import fs from 'node:fs';
import path from 'node:path';
const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const VERSION = '0.160.0', CDN = `https://cdn.jsdelivr.net/npm/three@${VERSION}/`;
const args = process.argv.slice(2);
const opt = name => { const i = args.indexOf('--' + name); return i >= 0 ? args.splice(i, 2)[1] : undefined; };
const srcFile = path.resolve(ROOT, opt('src') || 'football.html');
const dest = path.resolve(ROOT, opt('out') || 'offline/kickstorm-offline.html');
const local = args[0];

// file inside the three package, e.g. 'build/three.module.js' or 'examples/jsm/objects/Sky.js'
async function load(rel) {
  if (local) return fs.readFileSync(path.join(local, rel), 'utf8');
  const r = await fetch(CDN + rel);
  if (!r.ok) throw new Error(`could not download ${CDN + rel}: ${r.status}`);
  return r.text();
}
const toData = js => 'data:text/javascript;base64,' + Buffer.from(js, 'utf8').toString('base64');
// static and dynamic import specifiers in a module's source
const specifiers = js => [...js.matchAll(/(?:\bimport|\bexport)\s[^'"`;]*?\bfrom\s*['"]([^'"]+)['"]|\bimport\s*['"]([^'"]+)['"]|\bimport\s*\(\s*['"]([^'"]+)['"]\s*\)/g)].map(m => m[1] || m[2] || m[3]);

const src = fs.readFileSync(srcFile, 'utf8');
const mapRe = /<script type="importmap">\s*(\{[^<]*\})\s*<\/script>/;
const mm = src.match(mapRe);
if (!mm) throw new Error('import map not found in ' + srcFile);
const pageMap = JSON.parse(mm[1]).imports;
if (pageMap.three !== CDN + 'build/three.module.js') throw new Error('page does not load three@' + VERSION + ': ' + pageMap.three);
const mod = src.match(/<script type="module">([\s\S]*?)<\/script>/);
if (!mod) throw new Error('module script not found');

const three = await load('build/three.module.js');
if (!three.includes(`const REVISION = '160'`)) throw new Error('that is not three.js r160');
const imports = { three: toData(three) };

// walk the addon graph starting from the page's own imports
const queue = specifiers(mod[1]).filter(s => s.startsWith('three/addons/'));
const seen = new Set();
while (queue.length) {
  const spec = queue.shift(); if (seen.has(spec)) continue; seen.add(spec);
  const rel = spec.slice('three/addons/'.length);
  let js = await load('examples/jsm/' + rel);
  for (const s of new Set(specifiers(js))) {
    if (s === 'three') continue;
    if (s.startsWith('three/addons/')) { queue.push(s); continue; }
    if (!s.startsWith('.')) throw new Error(`${spec} imports '${s}', which this build does not know how to embed`);
    const full = 'three/addons/' + path.posix.normalize(path.posix.join(path.posix.dirname(rel), s));
    js = js.split(`'${s}'`).join(`'${full}'`).split(`"${s}"`).join(`"${full}"`);
    queue.push(full);
  }
  imports[spec] = toData(js);
  console.log(`  embedded ${spec} (${(js.length / 1024).toFixed(1)} KB)`);
}
// No 'three/addons/' prefix entry: an addon that was not embedded fails loudly instead of quietly needing the network.

let out = src.replace(mapRe, () => `<script type="importmap">${JSON.stringify({ imports })}</script>`);
out = out.replace(/<link rel="manifest"[^>]*>\n?/, '<meta name="build" content="offline single-file">\n');
// home-screen icon: embed the PNG (the boot code then swaps in its canvas-drawn copy anyway)
const iconFile = path.join(ROOT, 'icons', 'kickstorm-180.png');
const icon = fs.existsSync(iconFile) ? 'data:image/png;base64,' + fs.readFileSync(iconFile).toString('base64') : 'data:,';
out = out.replace(/<link rel="apple-touch-icon"[^>]*>/, () => `<link rel="apple-touch-icon" href="${icon}">`).replace(/<link rel="icon"[^>]*>/, () => `<link rel="icon" href="${icon}">`);
if (/https?:\/\/(?!www\.w3\.org)/.test(out.replace(/data:[^"']*/g, ''))) console.warn('warning: the output still mentions an http(s) URL');

fs.mkdirSync(path.dirname(dest), { recursive: true }); fs.writeFileSync(dest, out);
console.log(`wrote ${path.relative(ROOT, dest)} (${(out.length / 1048576).toFixed(2)} MB, three.js ${VERSION} + ${seen.size} addon(s) embedded)`);
