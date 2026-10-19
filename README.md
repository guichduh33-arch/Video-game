# Miles Morales: Brooklyn Nights

A fan-made, browser-based web-swinging game starring Miles Morales. Swing across a
night-time Brooklyn skyline, wall-crawl up buildings, and stop rooftop crimes with
punches, Venom Strikes and camouflage stealth takedowns.

Everything in the game (art, sound effects, physics, city generation) is written in
plain JavaScript on an HTML5 canvas. There are no dependencies, no build step and no
external assets.

Six games live in this repo:

- `index.html` – the original 2D side-scrolling game (no dependencies at all).
- `3d.html` – **Brooklyn Nights 3D**: a third-person, fully 3D remake built on
  Three.js. Same hero, same moves, but you swing through a procedurally generated
  city block grid, wall-crawl real towers and fight on rooftops in 3D. After the
  8th crime the Rhino shows up for a boss fight, then Venom, the Spot, and the Prowler. Beat him
  and Act II opens: the Sinister Ten, ten more rogues in a random order. The city is rendered with real-time
  sun shadows, sky reflections, textured facades with recessed windows, storefronts,
  parapets, water towers, trees, street lamps, crosswalks and traffic.
- `spiderman2.html` – **Spider-Man 2: Brooklyn Nights**, the sequel. Two playable
  Spider-Men, a bigger two-borough city split by the East River, web wings, wind
  tunnels, slingshot pads, parrying, Kraven's hunters and a three-boss campaign
  (the Lizard, Kraven, Venom). See [Spider-Man 2](#spider-man-2-brooklyn-nights) below.
- `rocket.html` – **Rocket Run 3D**: something completely different. Pilot a rocket
  across an alien canyon world, hopping from launch pad to launch pad, flying through
  rings and setting it down gently on the beacon. See [Rocket Run 3D](#rocket-run-3d)
  below.
- `car.html` – **Apex Drift 3D**: an arcade racing game. Three laps against three AI
  rivals on a procedurally generated circuit, with handbrake drifting, nitro pickups,
  three cars and three track themes. See [Apex Drift 3D](#apex-drift-3d) below.
- `cola.html` – **Cola Rocket 3D**: build a cola-and-mints rocket in the backyard. Collect
  bottles and mint rolls, shake the bottle, drop the mints in, run, and watch it fly. Upgrade
  it in the garage until it reaches the edge of space. See [Cola Rocket 3D](#cola-rocket-3d)
  below.

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

## Rocket Run 3D

Open `rocket.html`. It is a 3D rocket-piloting game in the Lunar Lander tradition,
built on the same Three.js-only, one-file, no-assets approach as the other games.

### The mission

You start on the home pad **H** of a procedurally generated alien world: dunes and
mountains, an acid sea, boulders, violet crystals, a ringed planet on the horizon.
Eight more launch pads stand on pylons along a wandering route. The next pad you have
to reach glows green and shoots a beacon into the sky; the HUD arrow at the top points
to it and shows the distance (`↑`/`↓` when it is well above or below you).

Between each pair of pads float **three golden rings** (+100 each, +250 for all three
on a leg) and **two fuel cells** (+35 fuel, +50 points). Land on the beacon pad to
score the leg and refuel; land on the eighth pad to finish the mission. You have
**three rockets**.

### Flying

The engine only pushes along the rocket's axis, so to go somewhere you tilt and
thrust. With **flight assist** on (the default) the controls are fly-by-wire: holding
`W` tilts the nose forward to 42° and letting go levels the rocket again. `Q`/`E`
side-tilt the same way, and `A`/`D` turn the heading. Press `F` for manual attitude:
the tilt then accumulates while you hold the key and nothing brings you back.

**Hover hold** (`H`) is an auto-throttle that holds your altitude so you can line up a
landing; pressing the engine still climbs. It burns fuel like any other thrust.

Gravity is 9 m/s², the engine gives 23 m/s², and full throttle burns about 15 seconds
of fuel. Hovering costs about 40 % throttle. From pad 4 on there is a sideways wind,
stronger with each pad (shown in the HUD).

### Landing

A landing is safe when, as the engine bell touches the pad:

- descent is under **7 m/s**,
- sideways drift is under **5 m/s**,
- tilt is under **15°**,
- the rocket is inside the pad (clipping the edge counts as a crash).

The three readouts in the HUD turn yellow and red as you approach the limits. A
landing is worth 500 points, plus up to 300 for softness, up to 300 for landing in the
centre, and a time bonus for a quick leg. Landing on a pad that is not the beacon is a
pit stop: a smaller refuel and no score. Hitting the ground, the sea or the underside
of a pad, or landing too hard, blows up the rocket; after a crash you respawn on the
last pad you reached with a full tank.

The rocket's altitude readout is height above whatever is directly below: the ground,
the sea or a pad top.

### The hangar: upgrades

Every point you score is also a **credit**. While the rocket is standing on any pad,
press `U` (or tap the HANGAR button) to open the hangar and spend them. Upgrades last
for the mission and reset when you start a new one.

| Upgrade | Levels | Cost | Effect |
|---|---|---|---|
| Engine | 3 | 350 / 600 / 900 | +12 % thrust per level; the engine bell grows |
| Fuel tank | 3 | 300 / 550 / 850 | +30 fuel capacity per level and a fill-up; side boosters appear |
| Efficiency | 3 | 400 / 650 / 950 | burns 12 % less fuel per level; the flame turns blue |
| Gyro | 3 | 250 / 450 / 700 | 25 % faster tilt and turn and +4° max tilt per level |
| Landing gear | 3 | 450 / 750 / 1100 | safe landing limits +1.5 m/s descent, +1 m/s drift, +3° tilt per level; landing legs appear |
| Spare rocket | 2 | 800 / 1200 | one more rocket, up to five |

Press the number key of an upgrade or tap BUY; `U` or `Esc` closes the hangar. The
engine is locked while the hangar is open, so you cannot lift off by accident.

### Rocket Run controls

| Key | Action |
|---|---|
| `W` / `S` or `↑` / `↓` | Tilt forward / back |
| `A` / `D` or `←` / `→` | Turn left / right |
| `Q` / `E` | Side-tilt (strafe) |
| `Space` or `Shift` | Main engine |
| `H` | Hover hold on / off |
| `F` | Flight assist on / off |
| `U` | Hangar: buy upgrades (only while on a pad) |
| `C` | Near / far chase camera |
| Mouse / finger drag | Look around (springs back) |
| `M` | Mute |
| `P` | Pause |
| `R` | Restart (or respawn / replay after a crash or the ending) |

On a phone the tilt, turn, HOLD and THRUST buttons appear on screen. Your best score is
kept in the browser. Add `?seed=123` to the URL to play the same world again; the pad
route, terrain and pickups are generated from the seed.

## Apex Drift 3D

Open `car.html`. It is a third-person arcade racer in the Three.js-only, one-file,
no-assets style of the other games. Pick a circuit and a car on the title screen,
then race three laps against three AI drivers.

### Circuits

Each circuit is generated from a seed: a closed Catmull-Rom loop with gentle hills,
a 14 m asphalt ribbon with lane markings, red-and-white curbs, a grass run-off strip
and a barrier wall on both sides. The start/finish arch, grandstands, trees, rocks and
track-side lamps are placed around it, and ten glowing blue **nitro cells** sit on the
racing line.

| Circuit | Setting |
| --- | --- |
| Green Hills | rolling meadows, pine forest, afternoon sun |
| Red Canyon | desert dusk, mesas, cactus and long sweepers |
| Neon Midnight | night race under track lights and stars, with real headlights |

### Cars

| Car | Character |
| --- | --- |
| Viper GT | balanced coupe: quick, forgiving, drifts on demand |
| Thunder V8 | brutal top speed, low grip, slides wide in corners |
| Dune Rally | glued to the road and barely slowed by grass |

### Driving

The handling is arcade: the car has a top speed, engine power and lateral grip, the
steering lock shrinks as you go faster, and the yaw rate is capped by how much
cornering force the tyres can give. Push past that and the tail slides. Grass cuts
grip and speed, the barriers bounce you back and scrub speed, and cars collide with
each other.

- **Handbrake** (`Space`) cuts grip to a third and lets the car rotate faster, so a
  tap on corner entry kicks the tail out for a drift. Tyre marks and smoke follow.
- **Nitro** (`Shift`) raises power and top speed by a quarter while the bar lasts.
  Driving through a blue cell refills half the bar; cells respawn after 12 s.
- The **AI drivers** follow the racing line with a look-ahead, brake for the
  curvature ahead, move over to pass, use nitro on straights and back out when
  stuck. They have three skill levels and a mix of the three cars.

Laps count only after passing the far side of the circuit, so cutting back across
the line does not help. Position, lap, race time, last lap and best lap are on the
HUD along with a minimap, speedometer, gear and nitro bar. `C` cycles chase,
hood and far cameras, `R` puts the car back on the centreline if you get stuck,
`M` mutes and `Esc` pauses. The engine, tyre squeal, wind, hits and chimes are
all synthesized with the Web Audio API.

Best race time and best lap are saved per circuit and car in `localStorage`, and
the results screen shows the finishing order with everyone's best laps.

### Apex Drift controls

| Action | Keyboard | Touch |
| --- | --- | --- |
| Accelerate | `W` / `↑` | GAS |
| Brake, then reverse | `S` / `↓` | BRAKE |
| Steer | `A` `D` / `←` `→` | ◀ ▶ |
| Handbrake / drift | `Space` | DRIFT |
| Nitro | `Shift` | NITRO |
| Camera | `C` | CAM |
| Reset to track | `R` | |
| Mute / pause | `M` / `Esc` | |

## Cola Rocket 3D

Open `cola.html`. It is a third-person backyard game in the same one-file Three.js style,
starring a cartoon kid in a red cap, cola T-shirt, jeans and sneakers. He is built from
rounded parts on a joint hierarchy and animated in code: walk and run cycles, breathing,
blinking, glancing around, both hands on the bottle while shaking, and cheering at the sky
during a flight. The game loads no model files.

### A launch

1. **Gather.** Cola bottles (red light beams), mint rolls (blue beams) and loose bottle
   caps are scattered around the yard. You need one bottle per rocket stage and as many
   mints as your pocket holds.
2. **Build.** Walk to the pad in the middle of the yard and press `E`. The bottles are
   flipped neck-down and stacked, then the fins, nozzle, nose cone and parachute go on.
3. **Shake.** Mash `Space` to build up pressure. A small rocket is lifted and shaken in
   both hands, a tall stack gets wobbled on the pad. Stop in the white zone. Past 100 %
   the bottle bursts and the launch is lost.
4. **Drop the mints and run.** `E` takes the caps off and drops the mints in. You have
   three seconds to get outside the white circle, or you get soaked.
5. **Fly.** The foam jet pushes the rocket up. Without fins it wobbles, so hold it
   straight with `WASD`. Fins weathervane it into the airflow on their own. Stages
   separate when a bottle runs dry and the empty one tumbles away.

Height milestones are placed in the sky: over the roof, the treetops, the kite, a flock
of birds, a hot-air balloon, the cloud layer at 250 m, an airliner at 500 m, a weather
balloon at 800 m, and above 1000 m the sky turns black and the stars come out.

### The garage: upgrades

Every flight earns bottle caps (altitude, first-time milestones, staying dry, parachute
recovery). Spend them in the garage (`G`, or walk in):

| Upgrade | Levels |
| --- | --- |
| Bottle size | 0.5 L → 1.25 L → 2 L → 3 L → 5 L jumbo |
| Mint pocket | 3 → 5 → 8 → 12 → 16 mints |
| Fins | none → cardboard → plastic → carbon |
| Nose cone | flat → paper → plastic → ogive |
| Nozzle | open neck → drilled cap → tornado tube → rocket nozzle |
| Stages | 1 → 2 → 3 stacked bottles |
| Parachute | soft landing, +25 % caps |
| Sneakers | run faster in the yard |

The physics is a game version of a real soda rocket: exhaust speed grows with mints,
shaking and the nozzle, burn time with bottle size, drag falls with the nose cone and the
air thins with height. A first, unshaken launch reaches about 10 m. A fully upgraded
three-stage rocket with a well-timed shake passes 1000 m. Caps, upgrades and your record
are saved in the browser.

### Cola Rocket controls

| Action | Keyboard / mouse | Touch |
| --- | --- | --- |
| Walk / run | `WASD` / arrows, `Shift` | stick, RUN |
| Look around | drag, mouse wheel to zoom | drag on the right |
| Build, drop the mints, garage | `E` | ACTION |
| Shake | `Space` | SHAKE |
| Keep the rocket straight | `WASD` in flight | stick |
| Garage · camera · mute · pause | `G` `C` `M` `Esc` | |

## The hero model

Miles is the hand-built lanky-teen model wearing the Across the Spider-Verse suit from the
Spider-Man games (navy halftone body, red-orange comic spider, thin red side stripes, red
fingertips, big white lenses with orange rims). Add `?hero=mocap` to the URL for the
experimental skinned version: a motion-captured character the Mixamo "X Bot" rig (67 bones, from the
three.js examples, `models/xbot.glb`) dressed by a procedural suit shader. The shader paints
the suit straight onto the body in bind space: head webbing, teardrop lenses with rims, the
chest and back spiders with spray-paint flecks, red fingertips and sneakers with white soles,
plus fabric grain. Idle, walk and run are motion-capture clips blended by speed; jumps, falls,
web-swings (the arm aims at the web anchor), wall-crawls and punches pose the bones
procedurally. Every suit in the roster is a palette for the same shader, with head props
for Spider-Noir's fedora and Spider-Punk's mohawk. If the model fails to load the game falls
back to the earlier procedural hero. Gwen, the Society crowd and the criminals still use the
procedural rig.

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

## Play with no wifi

Two ways to play without an internet connection:

1. **The single offline file.** `offline/brooklyn-nights-offline.html` is the whole 3D
   game in one file, with Three.js embedded, so it needs nothing from the web. Download
   it (GitHub: open the file, press "Download raw file"), keep it anywhere on your
   computer, phone or a USB stick, and open it in Chrome, Edge, Safari or Firefox. Your
   best score, suit and settings are remembered in that browser. Gwen's radio runs in
   scripted mode there, since the live conversation needs Claude. Rebuild it after
   changing the game with `node scripts/build-offline.mjs`.
2. **The installed app.** Once the game has been opened online from a hosted copy
   (GitHub Pages or any static host) and installed, the service worker keeps the game and
   Three.js cached, so the app launches and plays offline afterwards.

The claude.ai artifact link always needs a connection, because that page is loaded from
claude.ai each time.

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

**Touch (iPad / phone):** drag on the left side of the screen to move (in 3D a stick appears under your thumb), touch and hold
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
she chips in on all four bosses, and she calls out quips over her head. Press `G` to bench
her or bring her back, or open `3d.html?partner=off` to play solo.

### Street life (3D only)

Brooklyn is populated: pedestrians walk the sidewalks and scatter when a fight breaks out
on the street or a bullet flies past, pigeons perch on the low roofs and burst into the
air when you or Gwen land near them, and the city has an ambient soundtrack of wind,
traffic rumble and distant sirens that changes with your altitude.

### Soundtrack (3D only)

The game has an original score, "Brooklyn Nights": a Spider-Verse-flavoured trap beat in
D minor with an 808 kick and bass, half-time snare, hi-hats, a warm pad and a plucked hook
with a dotted-eighth echo. Like every other sound in the game it is synthesized in code with
Web Audio, sequenced in 16th-note steps, so there is no audio file to download. The track
reacts to what is happening: on patrol it stays sparse, a crime doubles the hi-hats and opens
up the pad, and a boss fight adds a sawtooth arpeggio and extra kicks. Press `M` (or the 🎵
button) to turn it off; the choice is remembered.

**Sunflower.** A second original track, written for the game in the spirit of a sunny Spider-Verse
afternoon: a laid-back bounce in C major at 92 BPM over Cmaj7 - Am7 - Fmaj7 - G(add9), with a soft
kick, a clap on the back beat, shaker, glassy bells on the off-beats and a bright plucked hook that
rides the echo. It is synthesized live like Brooklyn Nights, so there is still no audio file. `M`
(or the 🎵 button) now cycles **Brooklyn Nights → Sunflower → off**, the choice is remembered, and
you can ask Gwen on the radio: "play Sunflower" or "play Brooklyn Nights". While Sunflower plays,
Gwen hums a few lines of it between fights.

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

**Gwen takes orders.** Anything you type or say on the radio is checked for an order
first, and the game carries it out at once (in live mode she then confirms what she did
in character; in scripted mode her reply is the outcome):

| Say | Gwen does |
| --- | --- |
| `medkit`, `heal me`, `I'm hurt` | tosses a medkit at your feet (25 s cooldown) |
| `come here`, `follow me`, `stay close` | sticks to you for 30 s, swinging over if she is far |
| `attack`, `get him`, `help me` | hunts and hits everything in sight for 30 s, punching faster |
| `stay back`, `hold`, `stop`, `let me handle it` | hangs back and stops fighting for 40 s |
| `web him`, `tie him up` | webs the nearest thug, or tangles the boss the way your own web shot would |
| `distract him`, `bait him`, `cover me` | dropkicks the boss and dazes him for a few seconds (24 s cooldown) |
| `portal`, `take me to the crime` | opens a Spider-Society portal that drops you on the current crime (40 s cooldown) |
| `music off` / `play the song` | mutes or unmutes the soundtrack |
| `suit noir` (punk, 2099, symbiote, classic, hoodie) | changes your suit |
| `comic look` / `realistic look` | switches the look |

She tells you when an order cannot be done (no boss to distract, no crime to jump to, a
cooldown still running, or she is benched with `G`).

### Spider-Verse look (3D only)

The 3D game has two looks. Press `V` in game to switch, or ask Gwen on the radio.

**Realistic (default)**: late-afternoon light with a lower, warmer sun and long soft
shadows, a hazy horizon under a deep blue sky, cool fill light from the sky, and a
realistic post pass: screen-space ambient occlusion (creases, building bases, under roof
props and around people are darkened), a soft glow on the brightest spots, a filmic
colour grade with warm lights and cool shadows, film grain and a vignette. Buildings
cast a contact shadow onto the pavement, streets have lane edge lines, trees are
smooth-shaded.

**Spider-Verse comic** (`3d.html?look=comic`): ink outlines drawn from depth,
cel-stepped shading, misprinted red and blue colour fringes that get worse when the
screen shakes, paper grain, flat-shaded trees, a brighter noon sky, and comic
onomatopoeia (POW!, KRAK!, THWIP) on hits and web shots.

### 3D quality

The game watches its own frame time and steps the render load down (resolution, shadow
size, anti-aliasing, then the comic post-process) when frames get slow, and back up when
there is headroom, so it stays smooth on weaker machines. Every device starts at a
conservative level (native resolution, hard 1024 shadows, no anti-aliasing) and climbs
after a few seconds of fast frames; the level it settles on is remembered for next time.
Gwen, the Society crowd and the enemy outfits are built and their shaders compiled on the
title screen, so starting play, spawning a crime or swapping suits never hitches. Add `?quality=low`
to the URL to start with shadows off, or `?quality=high` to lock full detail and disable
the auto-tuning.

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
| Soundtrack | `M` or the 🎵 button: Brooklyn Nights → Sunflower → off |
| Tech Lab (upgrades) | `U` or the 🔧 button (also on the title screen) |

Touch: the left stick moves, dragging the right half of the screen looks around, and
the JUMP / WEB / PUNCH / VENOM / CAMO buttons do the rest. Hold WEB in the air to swing.
Tapping PLAY goes fullscreen where the browser allows it (iPhone Safari does not; add the
page to your home screen there instead).

### The Tech Lab: upgrades (3D only)

Press `U` (or tap the 🔧 button; it also sits on the title screen) to open the Tech Lab.
Every crime you stop earns **1 tech point** and every boss or rogue you beat earns **3**;
spend them on two trees. Levels and unspent points are saved in the browser, so they carry
over from run to run, and buying something mid-fight pauses the game while the lab is open.

**Web shooters**

| Upgrade | Levels | What it does |
| --- | --- | --- |
| Rapid Fire | 3 | Web shot reload 1.1 s → 0.85 → 0.65 → 0.45 s |
| Long Shot | 2 | Auto-aim lock-on range 34 m → 44 → 54 m |
| Sticky Webs | 3 | Cocoons hold thugs 5 s → 7 → 9 → 12 s |
| Twin Shooters | 1 | Every shot fires from both wrists; the second web takes the next nearest thug |
| Web Burst | 1 | Needs Twin Shooters. A web that lands cocoons every thug within 4 m |
| Impact Webs | 2 | Web shots also deal 1, then 2, damage on the way in |

**Skills**

| Upgrade | Levels | What it does |
| --- | --- | --- |
| Spider Vitality | 3 | Max health 100 → 120 → 140 → 160 |
| Tough Skin | 2 | Take 15%, then 30%, less damage and get a longer breather after a hit |
| Heavy Hitter | 3 | Punches hit 1.5×, 2×, then 2.5× as hard, on thugs and bosses |
| Venom Battery | 3 | Venom regenerates faster (1.5 → 2.2 → 3 → 4 per second) and every hit charges +3 / +6 / +9 more |
| Venom Strike | 3 | Reach 8 m → 10 → 12 → 14 m and +1 damage per level |
| Camouflage | 3 | Lasts +2 / +4 / +7 s longer and recharges faster |
| Swing Kinetics | 2 | Pump 25%, then 50%, harder on the line and launch higher on release |

### Miles' home (3D only)

The Morales brownstone stands on its own lot a couple of blocks from where you start: four
floors of brown stone with a stoop up to the blue door (number 1610), a bay window, a
cornice, a fire escape down the side, Miles' lit bedroom window with posters on the top
floor, a roof hatch and water tank, a HOME sign over the roof, and Jeff's NYPD patrol
car parked at the kerb.

Stand on the roof hatch (the blue ring) for three seconds to **rest**: full health,
poison cured, 30 venom back, and a line from Rio or Jeff through the window. Resting
has a 45 second cooldown, and the hatch is a safe spot: crimes never land on this roof.
A blue HUD arrow points home when Miles is hurt and no crime is running, or when you
tell Gwen "take me home".

### Medkits (3D only)

Miles can heal mid-patrol now. Medkits are red first-aid boxes with a glowing teal beam:

- **Thug drops**: a KO'd thug sometimes leaves one behind. The chance rises as Miles
  gets hurt (15% at high health, 35% below 70, 60% below 35). Street packs heal 25 and
  fade after 45 seconds.
- **Boss roofs**: every boss roof starts with a pack in each far corner. Roof packs heal
  35, cure Scorpion's poison and never expire.
- **Gwen's emergency drop**: during a boss fight, when Miles is under 40% and no roof
  pack is left, Gwen drops a fresh one somewhere on the roof.

Walk or land on a pack to grab it. A pack is left alone while Miles is at full health, so
you can save it for later. Ask Gwen about health on the radio for a tip.

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

### The Spot (3D only)

Venom goes down and a third beacon lights up: the Spot, a white man made of portals. He
blinks across the roof through holes in the floor and cannot be hurt while he is inside one
(hits read GONE), so punching him often just sends him through the floor. His main attack
opens a black portal under your feet: step off it before the fist comes up through it. When
a fist is out, punch it and he is dragged through his own portal and dumped beside you,
stunned for double damage. That is the way to win. He also hurls spot discs in a spread and
swipes up close. A web shot (`E`) jams his portals for six seconds so he cannot blink away,
and a Venom Strike stuns him. At half health he opens three portals at once and blinks far
more often.

### The Prowler (3D only)

The Spot goes down and a fourth beacon lights up: the Prowler. He is fast and he cloaks.
When he vanishes he circles round behind you for a claw ambush that hits for a fifth of
your health, but two things give him away: his shadow still falls on the roof, and your
spider-sense fires just before every strike, so move when it tingles. In the open he fires
green gauntlet blasts from range and pounces across the roof, landing with a shockwave.
Your web shot (`E`) is the answer: it aims at him while he is visible, snags him out of
cloak if you aim close enough while he is invisible, and tangles him in a cocoon for three
seconds during which every hit does double damage. A Venom Strike also knocks him out of
cloak and stuns him, and any punch that connects while he is cloaked breaks it and
counts double. At half health he gets faster, chains three claws and fires three blasts
at once. Beating him finishes the game. Miles may recognise the voice.

### Act II: the Sinister Ten (3D only)

Beat the Prowler and the win screen offers NEXT: THE SINISTER TEN. Your score and clock
carry on, and ten more rogues come for you one at a time, in a random order, with a street
crime between each. They all run on one shared boss engine, but each has a tell and a
weakness. The hint when they arrive tells you which; Gwen will too.

| Rogue | What he does | How to beat him |
| --- | --- | --- |
| Scorpion | Poison sting (health drains for a few seconds), tail slam, charge | Keep moving while poisoned. A tail slam that misses sticks in the roof: hit him then |
| Electro | Lightning bolts, electric shockwaves, a charged blast | Venom Strikes heal him. Web him while he glows to short him out |
| Sandman | Sand waves, a grab that throws you, turns to sand | Jump the waves. Nothing hurts him as sand, so wait for him to go solid. A Venom Strike glasses him |
| Vulture | Circles out of reach, dive-bombs, drops bombs | Web him (`E`) and he is grounded for a few seconds |
| Mysterio | Orb volleys, two illusion doubles; hits swap him with a double | Punch the fakes to pop them, keep track of the real one |
| Shocker | Triple shockwaves and blasts that shove you toward the edge | Jump the waves. After three his gauntlets overheat: hit him then |
| Green Goblin | Glider rams, pumpkin bombs that explode where they land | Web the glider and he eats the roof |
| Doc Ock | Four tentacle slams around you, a grab and throw | Step off the rings. A slam that misses leaves the arms stuck for a moment |
| Kingpin | Heavy punches, a charge, a ground pound, calls goons | Blocks anything from the front and turns slowly: get behind him, or hit him while he is dazed |
| Carnage | Three-claw combos, leaps, spikes from the floor, regenerates, calls symbiotes | Only a Venom Strike stops the healing: shock him, then pile on |

Every rogue can be webbed once in a while for a short stun, and any of them is stunned
while dazed, grounded or stuck, so hits count double. Add `?boss=scorpion` (or `electro`,
`sandman`, `vulture`, `mysterio`, `shocker`, `goblin`, `ock`, `kingpin`, `carnage`, or
`rhino`, `venom`, `spot`, `prowler`) to the URL to open with that boss on the first beacon.

## Goal

Crimes break out on rooftops, marked by a red beacon and an on-screen arrow. In 3D the
criminals are built on the same jointed rig as the heroes: street clothes (hoodies,
jackets, jeans, sneakers), real faces with varied skin tones, hair, beanies, caps or ski
masks, bats and crowbars for thugs and pistols for gunners, with knees and elbows that
bend as they run, square up and swing. Reach
each one, knock out every thug and gunner, and repeat. Stop 8 crimes to win (in 3D, then beat the Rhino, Venom, the Spot and the Prowler, and
optionally the Sinister Ten after them). Score is
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
- `rocket.html` – Rocket Run 3D: noise terrain, pad route, rocket physics and
  fly-by-wire attitude, landing rules, the hangar upgrade shop, instanced exhaust
  and debris, synthesized engine and chimes, DOM HUD and touch controls.
- `car.html` – Apex Drift 3D: seeded spline circuit, ribbon road / curb / barrier
  meshes, two-level terrain, arcade car physics, AI drivers, skid marks and smoke,
  synthesized engine audio, minimap, DOM HUD and touch controls.
- `cola.html` – Cola Rocket 3D: backyard scene, the procedural cartoon kid, lathe-modelled bottles, stacked-stage
  rocket builder, soda-rocket physics with staging and attitude, instanced foam, the
  garage shop, synthesized fizz and sound, DOM HUD and touch controls.
- `manifest.webmanifest` / `manifest-sm2.webmanifest` – PWA manifests for the two
  Spider-Man 3D games; `sw.js` caches them, Rocket Run, Apex Drift and Cola Rocket for offline play.

## Ideas for next steps

- Gamepad support.
- More sound variety.
- More enemy types (shield thugs, drones) and civilian rescues.
- Unlockable suits.

## Disclaimer

This is a non-commercial fan tribute. Spider-Man, Peter Parker, Miles Morales, the
Lizard, Kraven, Venom and related characters are trademarks of Marvel. This project is not affiliated with or endorsed by Marvel, Sony or Insomniac
Games, and it must not be sold or distributed commercially.
