// Smoke test for any single-file game in this repo. Used as the test gate after every build step.
//   node scripts/game-smoke.mjs <page.html> [--demo] [--seconds 60] [--shots 3] [--out dir] [--size 1180x820]
// 1. Syntax-checks the page's <script type="module"> with `node --check`.
// 2. Opens the page in headless Chromium (software WebGL), collects page errors and console errors.
// 3. If the page exposes window.__fast(nSteps) (60 steps = 1 s of game time), fast-forwards the game;
//    otherwise it just lets the page run in real time. Takes screenshots along the way.
// 4. Reports game state (window.__G), draw calls / triangles (window.__r = renderer) and exits 1 on any error.
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { createRequire } from 'node:module';

const args = process.argv.slice(2);
const opt = (name, def) => { const i = args.indexOf('--' + name); return i >= 0 ? args[i + 1] : def; };
const page = args.find(a => a.endsWith('.html'));
if (!page) { console.error('usage: node scripts/game-smoke.mjs <page.html> [--demo] [--seconds 60] [--shots 3] [--out dir]'); process.exit(2); }
const file = path.resolve(page), seconds = +opt('seconds', 60), shots = Math.max(1, +opt('shots', 3));
const out = path.resolve(opt('out', path.join(os.tmpdir(), 'game-smoke'))); fs.mkdirSync(out, { recursive: true });
const [w, h] = opt('size', '1180x820').split('x').map(Number);
const report = { page, syntax: 'ok', errors: [], screenshots: [] };

// ---- 1. syntax check of the module script
const html = fs.readFileSync(file, 'utf8');
const m = html.match(/<script type="module">([\s\S]*?)<\/script>/);
if (m) {
  const tmp = path.join(out, path.basename(file, '.html') + '.check.mjs'); fs.writeFileSync(tmp, m[1]);
  try { execFileSync(process.execPath, ['--check', tmp], { stdio: 'pipe' }); }
  catch (e) { report.syntax = String(e.stderr || e.message).trim(); }
} else report.syntax = 'no <script type="module"> found (skipped)';

// ---- 2. run it in a browser
const require = createRequire(import.meta.url);
const { chromium } = require('playwright');
const proxy = process.env.HTTPS_PROXY ? { server: process.env.HTTPS_PROXY } : undefined;
const browser = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--ignore-gpu-blocklist'], proxy });
const pg = await browser.newPage({ viewport: { width: w, height: h }, ignoreHTTPSErrors: true, hasTouch: true });
pg.on('pageerror', e => report.errors.push('pageerror: ' + e.message));
pg.on('console', msg => { if (msg.type() === 'error') report.errors.push('console: ' + msg.text().slice(0, 300)); });
await pg.goto('file://' + file + (args.includes('--demo') ? '?demo' : ''));
await pg.waitForTimeout(2500);

const hasFast = await pg.evaluate(() => typeof window.__fast === 'function');
for (let i = 0; i < shots; i++) {
  const chunk = seconds / shots;
  if (hasFast) await pg.evaluate(n => window.__fast(n), Math.round(chunk * 60));
  else await pg.waitForTimeout(Math.min(chunk, 10) * 1000);
  await pg.waitForTimeout(400); // let a few real frames render
  const shot = path.join(out, `${path.basename(file, '.html')}-${i}.png`);
  await pg.screenshot({ path: shot }); report.screenshots.push(shot);
}
report.fastForward = hasFast;
report.game = await pg.evaluate(() => {
  const G = window.__G, r = window.__r;
  return {
    state: G?.state, score: G?.score, clock: G?.clock != null ? Math.round(G.clock) : undefined,
    events: G?.log?.slice(-20), counters: G?.cnt,
    drawCalls: r?.info.render.calls, triangles: r?.info.render.triangles,
    geometries: r?.info.memory.geometries, textures: r?.info.memory.textures
  };
});
await browser.close();

console.log(JSON.stringify(report, null, 2));
process.exit(report.syntax === 'ok' || report.syntax.startsWith('no <script') ? (report.errors.length ? 1 : 0) : 1);
