# Miles Morales: Brooklyn Nights

A fan-made, browser-based web-swinging game starring Miles Morales. Swing across a
night-time Brooklyn skyline, wall-crawl up buildings, and stop rooftop crimes with
punches, Venom Strikes and camouflage stealth takedowns.

Everything in the game (art, sound effects, physics, city generation) is written in
plain JavaScript on an HTML5 canvas. There are no dependencies, no build step and no
external assets.

Three games live in this repo:

- `index.html` – the original 2D side-scrolling game (no dependencies at all).
- `3d.html` – **Brooklyn Nights 3D**: a third-person, fully 3D remake built on
  Three.js. Same hero, same moves, but you swing through a procedurally generated
  city block grid, wall-crawl real towers and fight on rooftops in 3D. After the
  8th crime the Rhino shows up for a boss fight, and Venom after him. The city is rendered with real-time
  sun shadows, sky reflections, textured facades with recessed windows, storefronts,
  parapets, water towers, trees, street lamps, crosswalks and traffic.
- `spiderman2.html` – **Spider-Man 2: Brooklyn Nights**, the sequel. Two playable
  Spider-Men, a bigger two-borough city split by the East River, web wings, wind
  tunnels, slingshot pads, parrying, Kraven's hunters and a three-boss campaign
  (the Lizard, Kraven, Venom). See [Spider-Man 2](#spider-man-2-brooklyn-nights) below.

## Spider-Man 2: Brooklyn Nights

Open `spiderman2.html`. It is built on the 3D engine, so everything from Brooklyn
Nights 3D (swinging, wall-crawling, web shots, the comic look, the radio, the PWA)
carries over. What is new:

### Two Spider-Men

You start as **Peter Parker** with **Miles Morales** swinging beside you as your AI
partner. Press `Tab` (SWAP on touch) at any moment to trade places: the partner's
body becomes the one you drive and your old hero drops into the partner role. Each
hero keeps his own health, his own power meter and his own suits, and the benched
hero slowly heals, so swapping out when you are low is a real tactic.

| Hero | Power (`K`, costs 50) | Extras | Suits (`N` / `B`) |
| --- | --- | --- | --- |
| Peter | **Spider-Arms**: four mechanical arms unfold from his back and hammer everything in front of him. In the black suit this becomes **Symbiote Surge**: hits everything around him and heals him | Black suit: double punch damage, longer reach, every hit heals | Advanced Suit 2.0, Black Suit (story unlock), Classic (triple jump), Spider-Noir |
| Miles | **Venom Strike**: shocks everything nearby. After Act II it evolves into **chain lightning** with a much bigger radius | Camouflage (`L`) and stealth takedowns | Upgraded Suit, Spider-Verse hoodie, Spider-Man 2099 (fast talons), Spider-Punk (cheap strikes) |

The radio (`T`) now talks to whichever hero you are not playing. Peter and Miles each
have their own scripted lines and voices; opened from its claude.ai artifact link the
partner answers with a real language model, in character, with the live game state.

### The city

Manhattan (west, towers up to 160 m, the **Oscorp** tower marked by a green beam) and
Brooklyn / Queens (east, low-rise, more parks and shops) sit on either side of the
**East River**. Two suspension bridges with real towers and cables cross it; you can
land on the decks, climb the towers and web to them. Fall in the water and you are
bounced straight back out on a web. Crimes usually break out across the river from
where you are, so you will cross it a lot.

### Getting around

- **Web Wings**: hold `C` (WINGS on touch) in the air. Look down to dive and build
  speed, look up to trade speed for height, steer with the stick or the camera. Press
  jump to flick out of the glide.
- **Wind tunnels**: the glowing streams of air over the river, over an avenue on each
  shore and along both bridges. Glide into one and it pushes you along at 46 m/s.
- **Slingshot pads**: ten yellow rings on rooftops. Stand on one and press `Space` to
  be fired in the direction the camera faces. Hold `C` at the top for a huge glide.

### Combat

- **Parry**: `Q` (PARRY on touch). When the spider-sense ring over your head flashes
  **yellow**, a parry stops the hit, stuns the attacker and builds power. When it
  flashes **red** the attack cannot be parried: move or jump.
- **Kraven's hunters** (Act II): armoured, spears, four hits to drop, and they close
  the distance with a leaping stab. Parry the leap.
- Symbiote thugs (Act III) see through camouflage.

### The campaign

Eight crimes and three bosses, with act titles and story beats between them:

1. **Act I: Something in the River.** Three street crimes, then **the Lizard**. Parry
   his lunge (yellow). Jump the tail sweep (red). At half health he bolts to another
   roof: follow the beacon. Beating him puts the symbiote on Peter: he gets the
   **black suit** and Symbiote Surge.
2. **Act II: The Hunt.** Three hunter crimes, then **Kraven the Hunter**. Parry the
   spear thrust, dodge the thrown spear and the charge (red). He vanishes and strikes
   from behind: when the ring goes red, move. He calls hunters at 60% and 30%. After
   the fight Peter tears the symbiote off and Miles' venom evolves.
3. **Act III: We Are Venom.** Two symbiote nests, then **Venom** on the roof of Oscorp
   tower. He sees through camo and your spider-sense is silent; a Venom Strike or a
   Symbiote Surge shocks him and doubles every hit.

### Spider-Man 2 controls

| Action | Keys |
| --- | --- |
| Move / look / jump / swing / wall-crawl / punch / web shot | as in Brooklyn Nights 3D |
| Web Wings | hold `C` in the air (look down to dive, up to climb) |
| Slingshot | stand on a yellow pad, `Space` |
| Swap Peter / Miles | `Tab` |
| Parry | `Q` when the spider-sense ring flashes yellow |
| Hero power | `K` (Peter: Spider-Arms / Symbiote Surge, Miles: Venom Strike) |
| Camouflage | `L` (Miles only) |
| Suits | `N` / `B` (each hero has his own list) |
| Radio your partner | `T` (`Y` or 🎤 to speak), `G` benches him |
| Comic / realistic, fullscreen, pause | `V`, `F`, `Esc` |

Touch adds WINGS, PARRY and SWAP buttons next to the existing ones. Best score and
time are saved separately from the first game.

## Install as an app

The 3D game is a Progressive Web App. Once the folder is served over HTTPS (GitHub
Pages, Vercel, Netlify or any static host), it installs like a native app and runs
fullscreen and offline:

- **Android / Chrome / Edge**: open `3d.html` (or `spiderman2.html` for the sequel),
  press the INSTALL APP button on the title screen (or the install icon in the
  address bar).
- **iPhone / iPad**: open it in Safari, tap Share, then "Add to Home Screen".
- **Desktop Chrome / Edge**: same INSTALL APP button; it opens in its own window.

The app files are `manifest.webmanifest`, `sw.js` (service worker, caches the game and
the Three.js library for offline play) and the `icons/` folder.

To host it on GitHub Pages: repository Settings → Pages → Source "Deploy from a branch",
pick the branch and the root folder, save, then open
`https://<user>.github.io/<repo>/3d.html`.

## Play

Open `index.html` (2D), `3d.html` (3D) or `spiderman2.html` (the sequel) in any modern browser.

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

### Spider-Gwen, your AI partner (3D only)

Gwen swings with you from the start. She follows behind Miles, leaps roof to roof on her
own webs, catches up by dropping in from above if she falls far behind, and runs into
every crime to punch thugs and gunners. Her knockouts count toward clearing the crime,
she chips in on both bosses, and she calls out quips over her head. Press `G` to bench
her or bring her back, or open `3d.html?partner=off` to play solo.

### Street life (3D only)

Brooklyn is populated: pedestrians walk the sidewalks and scatter when a fight breaks out
on the street or a bullet flies past, pigeons perch on the low roofs and burst into the
air when you or Gwen land near them, and the city has an ambient soundtrack of wind,
traffic rumble and distant sirens that changes with your altitude.

### Spider-Society HQ (3D only)

The tallest tower in the city is Spider-Society headquarters, marked by an orange beam.
When no crime is active the on-screen arrow turns orange and points there. A dozen
Spider-People from across the multiverse hang out on its roof, wander around, turn to
face you and drop one-liners. HQ has a glass pavilion with an orange steel frame and a spider emblem on its roof, floating holo-screens of multiverse data, and landing lights round the portal; some of the Spider-People crouch on the parapets scanning the city. Next to the glowing portal is an orange pad: step on it
during a crime and the portal drops you (and Gwen) out of the sky right over the crime
scene.

### Suits: the Spider-Verse roster (3D only)

Press `N` to cycle forward and `B` to cycle back (SUIT button on touch). Each suit is a
different Spider-Person built on the same rig, with its own perk:

| Suit | Look | Perk |
| --- | --- | --- |
| Miles · Spider-Verse | black suit, red spray spider, hoodie, Jordans | camouflage and stealth takedowns |
| Venom symbiote | glossy black, white spider, tendrils | double punch damage, longer reach, no camo |
| Peter Parker · Classic | red webbed mask and chest, blue body, red boots and gloves | triple jump |
| Spider-Man 2099 | navy with a red spider, red lenses, talons | fast punches with long reach |
| Spider-Punk | dark blue, studs, spiked collar, mohawk, white spider | Venom Strike costs 35 and venom builds faster |
| Spider-Noir | grey suit, trench coat, fedora, goggles | camouflage lasts 10 seconds and recharges fast |

The current suit shows under the status bars and is remembered between sessions.

### Talking to Gwen

Press `T` (or the 💬 button under the fullscreen button) to open Gwen's radio and type to
her. The game pauses while the radio is open; `Esc` closes it. When the game is opened
from its claude.ai artifact link, Gwen answers with a real language model (the page asks
you once to allow it, and it uses your own Claude usage): she stays in character, knows
the live game state and gives tips about the real controls. Everywhere else (GitHub
Pages, the installed app, a local file) she falls back to a scripted radio with canned
lines about tips, bosses, your score and her band.

Gwen also talks out loud: her replies and her in-game call-outs are spoken with the
browser's speech voice (the 🔊 button in the radio mutes her). Hold the 🎤 button, or
press `Y` while the radio is open, to speak to her instead of typing; the game listens
with the browser's speech recognition (Chrome, Edge and Safari) and sends what you said.
Some embedded viewers block the microphone; opening the game in its own tab fixes that.

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
| Web shot | `E` (SHOOT on touch). Fires a web at the nearest thug in front of the camera and wraps him in a cocoon for five seconds; webbed thugs cannot move or shoot, and any hit on one is an instant takedown |
| Venom Strike | `K` (needs 50 venom; hits everything within a few metres) |
| Camouflage | `L` (6 seconds; punching from camo is a one-hit stealth takedown) |
| Pause | `Esc` or `P` |
| Fullscreen | `F`, the ⛶ button, or the FULLSCREEN button on the title screen. Inside a viewer that blocks fullscreen (the claude.ai artifact frame) the button reads OPEN FULL TAB and launches the game in its own tab, where `F` works |
| Comic / realistic look | `V` |
| Gwen on / off | `G` |
| Talk to Gwen | `T` or the 💬 button |
| Cycle suits | `N` forward, `B` back |

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

Crimes break out on rooftops, marked by a red beacon and an on-screen arrow. In 3D the
criminals are built on the same jointed rig as the heroes: street clothes (hoodies,
jackets, jeans, sneakers), real faces with varied skin tones, hair, beanies, caps or ski
masks, bats and crowbars for thugs and pistols for gunners, with knees and elbows that
bend as they run, square up and swing. Reach
each one, knock out every thug and gunner, and repeat. Stop 8 crimes to win (in 3D, then beat the Rhino and Venom). Score is
driven by combos, so string hits together without taking damage. Best score and time
are saved in the browser.

## Project layout

- `index.html` – the whole 2D game: input, synthesized audio, procedural city, physics,
  enemies, rendering and HUD.
- `3d.html` – the whole 3D game: Three.js scene, procedural city grid, capsule-vs-box
  physics, pendulum web-swinging, wall-crawling, enemy AI, DOM HUD and touch controls.
- `spiderman2.html` – the sequel, same engine: two-borough city with the river and
  bridges, two heroes and the swap, web wings and wind tunnels, slingshots, parry,
  hunters, the Lizard / Kraven / Venom fights and the act structure.
- `manifest.webmanifest` / `manifest-sm2.webmanifest` – PWA manifests for the two 3D
  games; `sw.js` caches both for offline play.

## Ideas for next steps

- Gamepad support.
- A proper soundtrack and more sound variety.
- More enemy types (shield thugs, drones) and civilian rescues.
- Unlockable suits.

## Disclaimer

This is a non-commercial fan tribute. Spider-Man, Peter Parker, Miles Morales, the
Lizard, Kraven, Venom and related characters are trademarks of Marvel. This project is not affiliated with or endorsed by Marvel, Sony or Insomniac
Games, and it must not be sold or distributed commercially.
