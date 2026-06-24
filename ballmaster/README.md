# Ball Master — Kid Edition 🎯

A gentle bubble-shooter inspired by *Ball Master*, tuned to be easy for a young
kid (made for Ezra).

## How to play
- **Aim** by moving your finger (or mouse) — a dotted guide line shows where the
  ball will go, including bounces off the walls.
- **Let go** to shoot the ball up.
- Match **3 or more** balls of the same color and they pop!
- Balls that get disconnected from the top fall away (bonus points).
- Clear the whole board to win. 🏆

The next ball is previewed in the bottom-right corner, and the shooter prefers
colors that are still on the board so you're rarely stuck.

## Color modes
Pick one on the start screen (your choice is remembered):

| Mode      | Colors | Who it's for          |
|-----------|--------|-----------------------|
| 3 colors  | 3      | youngest kids (easiest) |
| 4 colors  | 4      | a good middle ground  |
| 5 colors  | 5      | when they want a challenge |

Fewer colors = far more matches happen by luck, which keeps a little kid
popping balls and smiling.

## Running it
Single file, no dependencies. Open `index.html` in any browser, or serve the
parent folder:

```bash
# from the repo root
python3 -m http.server 8000
# then open http://localhost:8000/ballmaster/
```

Works on touch (phone/tablet) and mouse.

## Tuning it further
Knobs live near the top of the `<script>` in `index.html`:

- `MODES` — number of colors and starting rows per mode.
- The aim guide and a slow "new row every 6 shots" drip keep games going
  without sudden pressure. Increase the `6` in `shotsSinceDrop >= 6` to make new
  rows appear less often (easier), or lower it for more action.
- `speed = 740` in `fire()` controls how fast the shot travels.
