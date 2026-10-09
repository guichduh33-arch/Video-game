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
  city block grid, wall-crawl real towers and fight on rooftops in 3D.

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

Touch: the left stick moves, dragging the right half of the screen looks around, and
the JUMP / WEB / PUNCH / VENOM / CAMO buttons do the rest. Hold WEB in the air to swing.

## Goal

Crimes break out on rooftops, marked by a red beacon and an on-screen arrow. Reach
each one, knock out every thug and gunner, and repeat. Stop 8 crimes to win. Score is
driven by combos, so string hits together without taking damage. Best score and time
are saved in the browser.

## Project layout

- `index.html` – the whole 2D game: input, synthesized audio, procedural city, physics,
  enemies, rendering and HUD.
- `3d.html` – the whole 3D game: Three.js scene, procedural city grid, capsule-vs-box
  physics, pendulum web-swinging, wall-crawling, enemy AI, DOM HUD and touch controls.

## Ideas for next steps

- A boss fight at the end of the crime chain.
- Gamepad support.
- A proper soundtrack and more sound variety.
- More enemy types (shield thugs, drones) and civilian rescues.
- Unlockable suits.

## Disclaimer

This is a non-commercial fan tribute. Miles Morales and Spider-Man are trademarks of
Marvel. This project is not affiliated with or endorsed by Marvel, Sony or Insomniac
Games, and it must not be sold or distributed commercially.
