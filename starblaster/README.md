# Star Blaster — Kid Edition 💥

A gentle space shooter: things fly toward you, your ship blasts them. Made to
be easy for a young kid (made for Ezra).

## How to play
- **Slide your finger** (or move the mouse) to move your ship left and right.
- The ship **shoots automatically** — no tapping needed. The kid just lines up
  under the falling targets.
- Pop the **space rocks** 🪨 and friendly **aliens** 👾 before they slip past the
  bottom. Each one that gets past costs a ❤️ — you have three.
- Grab the glowing **⭐ star power-up** for a few seconds of rapid triple-shot.
- Game ends at 0 hearts; tap **Play Again**. Best score is saved.

Keyboard (desktop): ← and → also move the ship.

## Speeds
Pick one on the start screen (remembered between sessions):

| Speed  | Feel        | Who it's for          |
|--------|-------------|-----------------------|
| Baby   | super calm  | youngest kids, never speeds up |
| Easy   | for kids    | default, gentle ramp  |
| Normal | a challenge | when they want more   |

## Running it
Single file, no dependencies. Open `index.html`, or serve the parent folder:

```bash
python3 -m http.server 8000
# then open http://localhost:8000/starblaster/
```

Works on touch (phone/tablet) and mouse/keyboard.

## Tuning it further
Knobs live in the `PRESETS` object near the top of the `<script>`:

- `spawn` — seconds between new targets (bigger = calmer)
- `fall`  — how fast targets drop (smaller = easier)
- `fire`  — seconds between the ship's auto-shots (smaller = shoots faster)
- `ramp`  — how much it speeds up over time (`0` = stays calm forever)

Make `fall` smaller or `spawn` bigger for an even gentler game.
