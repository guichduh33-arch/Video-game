# Miles Morales: Brooklyn Nights

A fan-made, browser-based web-swinging game starring Miles Morales. Swing across a
night-time Brooklyn skyline, wall-crawl up buildings, and stop rooftop crimes with
punches, Venom Strikes and camouflage stealth takedowns.

Everything in the game (art, sound effects, physics, city generation) is written in
plain JavaScript on an HTML5 canvas. There are no dependencies, no build step and no
external assets.

## Play

Open `index.html` in any modern browser. That's it.

If your browser blocks audio on `file://` pages, serve the folder instead:

```
npx http-server . -p 8080
# then open http://localhost:8080
```

## Controls

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

## Goal

Crimes break out on rooftops, marked by a red beacon and an on-screen arrow. Reach
each one, knock out every thug and gunner, and repeat. Stop 8 crimes to win. Score is
driven by combos, so string hits together without taking damage. Best score and time
are saved in the browser.

## Project layout

- `index.html` – the whole game: input, synthesized audio, procedural city, physics,
  enemies, rendering and HUD.

## Ideas for next steps

- A boss fight at the end of the crime chain.
- Gamepad and touch controls.
- A proper soundtrack and more sound variety.
- More enemy types (shield thugs, drones) and civilian rescues.
- Unlockable suits.

## Disclaimer

This is a non-commercial fan tribute. Miles Morales and Spider-Man are trademarks of
Marvel. This project is not affiliated with or endorsed by Marvel, Sony or Insomniac
Games, and it must not be sold or distributed commercially.
