# Balloon Pop — Kid Edition 🎈

A bright, happy tap game: balloons float up, you tap to pop them. Made to be
easy and joyful for a young kid (made for Ezra).

## How to play
- **Tap a balloon** to pop it with a confetti burst. That's the whole game!
- **⭐ Gold balloon** = bonus points.
- **🌈 Rainbow balloon** = pops *every* balloon on screen at once.
- **💣 Bomb balloon** = do NOT tap it — it costs a ❤️. (There are **no bombs in
  Baby mode**, so the littlest kids can pop with zero risk.)
- Pop balloons quickly in a row to build a **combo** for bonus points.
- Balloons that float off the top are fine — no penalty.

## Speeds
Pick one on the start screen (remembered between sessions):

| Speed  | Feel        | Notes                         |
|--------|-------------|-------------------------------|
| Baby   | no bombs    | pure, no-fail popping; lives hidden |
| Easy   | for kids    | a few bombs, gentle ramp      |
| Normal | a challenge | more bombs, faster balloons   |

## Running it
Single file, no dependencies. Open `index.html`, or serve the parent folder:

```bash
python3 -m http.server 8000
# then open http://localhost:8000/balloonpop/
```

Works on touch (phone/tablet) and mouse.

## Tuning it further
Knobs live in the `PRESETS` object near the top of the `<script>`:

- `spawn` — seconds between new balloons (bigger = calmer)
- `rise`  — how fast balloons float up (smaller = easier to tap)
- `bomb`  — chance a balloon is a bomb (`0` = none)
- `ramp`  — how much it speeds up over time (`0` = stays calm forever)
