# Slice Master — Kid Edition 🍉

A swipe-to-slice game (inspired by the fruit-slashing genre). Fruit gets tossed
up, you swipe a finger to slice it with a glowing blade trail. Made to be easy
and very satisfying for a young kid (made for Ezra).

## How to play
- **Swipe your finger** across the flying fruit to slice it in half. 🍉🍊🍇
- Slice **several in one swipe** for a **combo** (more points).
- **💣 Bomb** = do NOT slice it — it costs a ❤️. (There are **no bombs in Baby
  mode**, so the littlest kids can slice with zero risk.)
- Fruit you miss just falls away — no penalty.

## Speeds
Pick one on the start screen (remembered between sessions):

| Speed  | Feel        | Notes                              |
|--------|-------------|------------------------------------|
| Baby   | no bombs    | slower tosses, one at a time; lives hidden |
| Easy   | for kids    | a few bombs, up to 2 at a time     |
| Normal | a challenge | more bombs, up to 3 at a time, faster |

## Running it
Single file, no dependencies. Open `index.html`, or serve the parent folder:

```bash
python3 -m http.server 8000
# then open http://localhost:8000/slicemaster/
```

Works on touch (phone/tablet) and mouse.

## Tuning it further
Knobs live in the `PRESETS` object near the top of the `<script>`:

- `spawn` — seconds between tosses (bigger = calmer)
- `vyMul` — launch power / how high fruit flies
- `bomb`  — chance a thrown item is a bomb (`0` = none)
- `multi` — max number tossed at once
- `ramp`  — how much it speeds up over time (`0` = stays calm)
