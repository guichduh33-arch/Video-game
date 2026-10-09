# Miles Morales: Brooklyn Nights

A fan-made, browser-based web-swinging game starring Miles Morales. Swing across a
night-time Brooklyn skyline, wall-crawl up buildings, and stop rooftop crimes with
punches, Venom Strikes and camouflage stealth takedowns.

Everything in the game (art, sound effects, physics, city generation) is written in
plain JavaScript on an HTML5 canvas. There are no dependencies, no build step and no
external assets.

Two versions live in this repo:

- `index.html` – the original 2D side-scrolling game (no dependencies at all).
- `3d.html` – **Brooklyn Nights 3D**: a third-person, fully 3D remake built on
  Three.js. Same hero, same moves, but you swing through a procedurally generated
  city block grid, wall-crawl real towers and fight on rooftops in 3D. After the
  8th crime the Rhino shows up for a boss fight, and Venom after him. The city is rendered with real-time
  sun shadows, sky reflections, textured facades with recessed windows, storefronts,
  parapets, water towers, trees, street lamps, crosswalks and traffic.

## Install as an app

The 3D game is a Progressive Web App. Once the folder is served over HTTPS (GitHub
Pages, Vercel, Netlify or any static host), it installs like a native app and runs
fullscreen and offline:

- **Android / Chrome / Edge**: open `3d.html`, press the INSTALL APP button on the
  title screen (or the install icon in the address bar).
- **iPhone / iPad**: open it in Safari, tap Share, then "Add to Home Screen".
- **Desktop Chrome / Edge**: same INSTALL APP button; it opens in its own window.

The app files are `manifest.webmanifest`, `sw.js` (service worker, caches the game and
the Three.js library for offline play) and the `icons/` folder.

To host it on GitHub Pages: repository Settings → Pages → Source "Deploy from a branch",
pick the branch and the root folder, save, then open
`https://<user>.github.io/<repo>/3d.html`.

## Play

Open `index.html` (2D) or `3d.html` (3D) in any modern browser.

The 3D version loads Three.js from a CDN, so it needs an internet connection the
first time it opens. Everything else (city, hero, enemies, sound) is generated in code.

If your browser blocks audio on `file://` pages, serve the folder instead:

```
npx http-server . -p 8080
# then open http://localhost:8080
```

## Controls

**Touch (iPad / phone):** drag on the left side of the screen to move, touch and hold
the sky to web-swing toward your finger, and use the JUMP, PUNCH, VENOM and CAMO
buttons on the right. Landscape works best. Add the page to your home screen for a
full-screen experience.

**Keyboard and mouse:**

| Action | Keys |
| --- | --- |
| Move | `A` / `D` or arrow keys |
| Jump / double jump / launch off a web | `W` or `↑` |
| Web-swing (hold) | `Space` or left mouse button. Aim with the mouse. `W`/`S` shorten or lengthen the web while swinging |
| Wall-crawl | Push into a wall, then `W`/`S` to climb |
| Punch | `J` or right mouse button |
| Venom Strike | `K` (needs 50 venom, built by landing hits) |
| Camouflage | `L` or `Shift` (6 seconds, enemies lose you; punching from camo is a one-hit stealth takedown) |
| Pause | `P` or `Esc` |

### Spider-Verse look (3D only)

The 3D game renders in an "Across the Spider-Verse" comic style by default: ink outlines
drawn from depth, Ben-Day halftone dots in the shadows, cel-stepped shading, misprinted
red and blue colour fringes that get worse when the screen shakes, paper grain, and
comic onomatopoeia (POW!, KRAK!, THWIP) on hits and web shots. Press `V` in game to
switch between the comic look and the realistic one, or open `3d.html?look=real`.

### 3D quality

Desktop defaults to soft shadows at full resolution, touch devices to smaller hard
shadows. Add `?quality=low` to the URL to turn shadows off on a slow machine, or
`?quality=high` to force the full look on a tablet.

### 3D controls

| Action | Keys |
| --- | --- |
| Move | `W` `A` `S` `D` or arrow keys (relative to the camera) |
| Look | Mouse (the game grabs the pointer; `Esc` releases it) |
| Jump / double jump | `Space` |
| Web-swing (hold) | Left mouse button or `Shift`. Webs attach to the nearest tower ahead of the camera; hold `W` to pump, press `Space` mid-swing to launch |
| Wall-crawl | Run into a wall and keep pushing: `W`/`S` climb up or down, `A`/`D` shuffle sideways, `Space` kicks off the wall |
| Punch | `J` or right mouse button (lunges at the closest thug in front of you) |
| Venom Strike | `K` (needs 50 venom; hits everything within a few metres) |
| Camouflage | `L` (6 seconds; punching from camo is a one-hit stealth takedown) |
| Pause | `Esc` or `P` |
| Fullscreen | `F`, the ⛶ button, or the FULLSCREEN button on the title screen |
| Comic / realistic look | `V` |

Touch: the left stick moves, dragging the right half of the screen looks around, and
the JUMP / WEB / PUNCH / VENOM / CAMO buttons do the rest. Hold WEB in the air to swing.
Tapping PLAY goes fullscreen where the browser allows it (iPhone Safari does not; add the
page to your home screen there instead).

### The Rhino (3D only)

After the eighth crime a boss beacon appears. The Rhino is armored: punches barely
scratch him and his charge takes a quarter of your health. Bait a charge, get out of
the way, and he slams into the roof edge and goes dazed for a few seconds. Everything
you land while he is dazed does double damage. At half health he calls in backup.
Venom Strikes and sneak attacks from camouflage hurt him even when he is not dazed.

### Venom (3D only)

Beat the Rhino and a second beacon lights up: Venom. The symbiote sees straight through
camouflage and your spider-sense stays silent, so watch him instead. He lashes tendrils at
the spot you are standing (a dark ring marks it, move), leaps across the roof and lands
with a shockwave, and claws anything within reach. He also regenerates. A Venom Strike
shocks the symbiote for a few seconds, which stops the regeneration and doubles every hit,
so build venom with punches, shock him, and pile on. At 60 and 30 percent health he
spawns symbiote-possessed goons who are fast and can see you in camo.

## Goal

Crimes break out on rooftops, marked by a red beacon and an on-screen arrow. Reach
each one, knock out every thug and gunner, and repeat. Stop 8 crimes to win (in 3D, then beat the Rhino and Venom). Score is
driven by combos, so string hits together without taking damage. Best score and time
are saved in the browser.

## Project layout

- `index.html` – the whole 2D game: input, synthesized audio, procedural city, physics,
  enemies, rendering and HUD.
- `3d.html` – the whole 3D game: Three.js scene, procedural city grid, capsule-vs-box
  physics, pendulum web-swinging, wall-crawling, enemy AI, DOM HUD and touch controls.

## Ideas for next steps

- Gamepad support.
- A proper soundtrack and more sound variety.
- More enemy types (shield thugs, drones) and civilian rescues.
- Unlockable suits.

## Disclaimer

This is a non-commercial fan tribute. Miles Morales and Spider-Man are trademarks of
Marvel. This project is not affiliated with or endorsed by Marvel, Sony or Insomniac
Games, and it must not be sold or distributed commercially.
