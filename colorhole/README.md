# Color Hole — Kid Edition 🕳️

Inspired by *Color Hole 3D*. Drag a hole around and swallow everything that
fits inside — the more you eat, the bigger you grow. Made to be easy and very
satisfying for a young kid (made for Ezra).

## How to play
- **Drag your finger** to move the hole around the field.
- Anything **smaller than the hole** gets pulled in and swallowed. 🟦🟠🔴
- Each thing you eat makes the hole **grow a little bigger**, so soon you can
  gulp down the big stuff too.
- Eat as much as you can before **time runs out**. Best score is saved.

No way to "lose" mid-run — it's a relaxed score chase on a timer.

## Times
Pick one on the start screen (remembered between sessions):

| Mode   | Round   | Notes                          |
|--------|---------|--------------------------------|
| Baby   | 90 sec  | starts with a big hole, lots of time |
| Easy   | 60 sec  | the default                    |
| Normal | 45 sec  | shorter, smaller start         |

## Running it
Single file, no dependencies. Open `index.html`, or serve the parent folder:

```bash
python3 -m http.server 8000
# then open http://localhost:8000/colorhole/
```

Works on touch (phone/tablet) and mouse.

## Tuning it further
Knobs live in the `PRESETS` object near the top of the `<script>`:

- `time`   — seconds per round
- `startR` — how big the hole starts (bigger = easier)
- `grow`   — how much the hole grows per object eaten

`TARGET_COUNT` (just below) sets how many objects are on the field at once.
