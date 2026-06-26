# Tower Survivor — Kid Edition 🛡️

A gentle "survive the swarm" arena game (inspired by the Survivor.io / Vampire-
Survivors genre). Your knight **attacks automatically** while monsters swarm in —
you just move, dodge, grab gems, and level up. Survive as long as you can! Made
to be easy for a young kid — made for Ezra.

## How to play
- **Drag your finger** to move your hero around the field.
- The hero **swings/shoots at the nearest monster all by itself** — no buttons.
- Killed monsters drop **blue gems** 💎 — they fly to you when you're close and
  fill your XP bar.
- Fill the bar to **Level Up!** ⭐ — your hero automatically gets stronger (more
  damage, faster attacks, extra shots, more speed, or another heart).
- Touching a monster costs a ❤️ (you get a moment of safety after each hit).
  Survive until your hearts run out. Best time + level are saved.

## Tough-ness
Pick one on the start screen (remembered between sessions):

| Mode   | Feel       | Notes                                  |
|--------|------------|----------------------------------------|
| Baby   | very easy  | 6 hearts, strong hits, slow & few monsters |
| Easy   | for kids   | 5 hearts, the default                  |
| Normal | a fight    | 4 hearts, faster & more monsters       |

## Running it
Single file, no dependencies. Open `index.html`, or serve the parent folder:

```bash
python3 -m http.server 8000
# then open http://localhost:8000/survivor/
```

Works on touch (phone/tablet) and mouse.

## Tuning it further
Knobs live in the `PRESETS` object near the top of the `<script>`:

- `hp`    — how many hearts the hero starts with
- `dmg`   — attack damage
- `eSpd`  — monster speed
- `spawn` — seconds between monster spawns (bigger = calmer)
- `ramp`  — how much it speeds up over time (`0` = stays calm)

Level-up upgrades are in the `levelUp()` function if you want to change them.
