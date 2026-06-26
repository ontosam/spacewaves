# Number Run — Kid Edition 🔢

A number-gate runner inspired by the "Count Masters / 2048 run / Merge Master"
genre. You run forward and steer through math gates to grow your number as big
as you can before the finish line. Made to be easy (and a sneaky bit of math
practice) for a young kid — made for Ezra.

## How to play
- **Slide your finger** left/right to steer your runner.
- Run through a **gate** to change your number: `×2` doubles it, `+10` adds, etc.
- **Green gates are good, red gates are bad** — steer toward green! When both
  gates are green, pick the one that grows your number the most.
- Reach the **finish line** 🏁 with the biggest number you can. Best is saved.

There's no way to "lose" — it's a relaxed race to grow your number, so the worst
that happens is a smaller score.

## Speeds
Pick one on the start screen (remembered between sessions):

| Speed  | Feel          | Notes                                    |
|--------|---------------|------------------------------------------|
| Baby   | easy & short  | **every gate is good** — no wrong choice, short run |
| Easy   | for kids      | some red gates appear, medium run        |
| Normal | a challenge   | more red gates, longer run               |

## Running it
Single file, no dependencies. Open `index.html`, or serve the parent folder:

```bash
python3 -m http.server 8000
# then open http://localhost:8000/numberrun/
```

Works on touch (phone/tablet) and mouse/keyboard.

## Tuning it further
Knobs live in the `PRESETS` object near the top of the `<script>`:

- `v`    — run speed
- `dist` — length of the run (bigger = longer)
- `hard` — how often a gate pair includes a red (bad) option (`0` = never)

`GATE_GAP` (just below) controls the spacing between gates.
