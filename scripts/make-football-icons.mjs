// Renders the Kickstorm 3D home-screen icons into icons/ (kickstorm-180.png, -192, -512 and a maskable 512).
// The drawing is the same as the canvas icon football.html draws at boot (green striped pitch, ball, KICKSTORM),
// so the installed icon and the in-game one match. Needs Playwright (headless Chromium).
// Usage: node scripts/make-football-icons.mjs
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const require = createRequire(import.meta.url);
const { chromium } = require('playwright');

// draw(size, inset): the 180-unit boot icon scaled to `size` px; `inset` < 1 shrinks the artwork into the
// maskable safe zone (the background still fills the whole square).
function draw(size, inset) {
  const cv = document.createElement('canvas'); cv.width = cv.height = size; const c = cv.getContext('2d');
  const k = size / 180;
  c.scale(k, k);
  const g = c.createLinearGradient(0, 0, 0, 180); g.addColorStop(0, '#1fb35e'); g.addColorStop(1, '#0a5c2c'); c.fillStyle = g; c.fillRect(0, 0, 180, 180);
  c.fillStyle = 'rgba(255,255,255,0.08)'; for (let i = 0; i < 6; i += 2) c.fillRect(i * 30, 0, 30, 180);
  c.translate(90, 90); c.scale(inset, inset); c.translate(-90, -90);
  c.beginPath(); c.arc(90, 82, 48, 0, 7); c.fillStyle = '#fff'; c.fill(); c.lineWidth = 4; c.strokeStyle = '#111'; c.stroke();
  c.fillStyle = '#111'; c.beginPath(); for (let i = 0; i < 5; i++) { const a = -Math.PI / 2 + i * Math.PI * 2 / 5; c.lineTo(90 + Math.cos(a) * 17, 82 + Math.sin(a) * 17); } c.fill();
  c.font = '900 italic 30px -apple-system,Segoe UI,Helvetica,Arial,sans-serif'; c.textAlign = 'center'; c.fillStyle = '#fff'; c.fillText('KICKSTORM', 90, 165, 164);
  return cv.toDataURL('image/png');
}

const browser = await chromium.launch();
const page = await browser.newPage();
await page.setContent('<!doctype html><html><body></body></html>');
const jobs = [['kickstorm-180.png', 180, 1], ['kickstorm-192.png', 192, 1], ['kickstorm-512.png', 512, 1], ['kickstorm-maskable-512.png', 512, 0.8]];
fs.mkdirSync(path.join(ROOT, 'icons'), { recursive: true });
for (const [name, size, inset] of jobs) {
  const url = await page.evaluate(`(${draw})(${size}, ${inset})`);
  const buf = Buffer.from(url.split(',')[1], 'base64');
  fs.writeFileSync(path.join(ROOT, 'icons', name), buf);
  console.log(`wrote icons/${name} (${size}x${size}, ${buf.length} bytes)`);
}
await browser.close();
