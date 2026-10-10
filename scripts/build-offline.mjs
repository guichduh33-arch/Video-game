// Builds offline/brooklyn-nights-offline.html: the 3D game as ONE file that runs with no internet at all.
// Three.js (the only thing the page loads from the web) is embedded in the import map as a data: URL, so the
// file can be saved anywhere and opened straight from disk (file://) or hosted on any static server.
// Usage: node scripts/build-offline.mjs [path/to/three.module.js]   (downloads three@0.160.0 if no path is given)
import fs from 'node:fs';
import path from 'node:path';
const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const VERSION = '0.160.0', CDN = `https://cdn.jsdelivr.net/npm/three@${VERSION}/build/three.module.js`;
let three;
if (process.argv[2]) three = fs.readFileSync(process.argv[2], 'utf8');
else { const r = await fetch(CDN); if (!r.ok) throw new Error('could not download three.js: ' + r.status); three = await r.text(); }
if (!three.includes(`const REVISION = '160'`)) throw new Error('that is not three.js r160');
const src = fs.readFileSync(path.join(ROOT, '3d.html'), 'utf8');
const mapRe = /<script type="importmap">\{[^<]*\}<\/script>/;
if (!mapRe.test(src)) throw new Error('import map not found in 3d.html');
const dataUrl = 'data:text/javascript;base64,' + Buffer.from(three, 'utf8').toString('base64');
const map = { imports: { three: dataUrl, 'three/addons/': `https://cdn.jsdelivr.net/npm/three@${VERSION}/examples/jsm/` } };
let out = src.replace(mapRe, `<script type="importmap">${JSON.stringify(map)}</script>`);
out = out.replace('<link rel="manifest" href="manifest.webmanifest">', '<meta name="build" content="offline single-file">');
out = out.replace(/<link rel="apple-touch-icon"[^>]*>\n?/, '').replace(/<link rel="icon"[^>]*>\n?/, '');
const dest = path.join(ROOT, 'offline', 'brooklyn-nights-offline.html');
fs.mkdirSync(path.dirname(dest), { recursive: true }); fs.writeFileSync(dest, out);
console.log(`wrote ${path.relative(ROOT, dest)} (${(out.length / 1048576).toFixed(2)} MB, three.js ${VERSION} embedded)`);
