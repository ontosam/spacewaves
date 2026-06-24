# Space Waves — Kid Edition 🚀

A gentle, one-button space-flying game inspired by *Space Waves* on CrazyGames,
tuned to be playable for a young kid (made for Ezra).

## How to play
- **Hold** anywhere on screen (or hold **Space** / **Up arrow**) to fly up.
- **Let go** to drift down.
- Glide through the gaps in the purple gates. Each gate you pass is a point!
- Touch a wall or a gate and the run ends — then just tap **Play Again**.

The ship waits for your first tap before it starts moving, so there's no
surprise launch.

## Speeds
Pick one on the start screen (your choice is remembered):

| Speed  | Feel          | Who it's for          |
|--------|---------------|-----------------------|
| Baby   | super slow    | youngest kids, never speeds up |
| Easy   | for kids      | the default, big gaps, gentle ramp |
| Normal | a challenge   | when they're ready for more |

You can change speed any time from the start screen or the **Change Speed**
button after a run.

## Running it
It's a single file with no dependencies. Just open `index.html` in any browser,
or serve the folder:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

Works great on a phone or tablet (touch) and on a computer (Space/Up arrow).

## Tuning it further
All the difficulty knobs live in the `PRESETS` object near the top of the
`<script>` in `index.html`:

- `speed` — how fast the world scrolls
- `turn` — how sharply the ship curves
- `gap` — size of the opening (fraction of screen height; bigger = easier)
- `spacing` — distance between gates (bigger = more reaction time)
- `ramp` — how much it speeds up over time (`0` = never speeds up)

Make `gap` bigger or `speed` smaller for an even easier game.
