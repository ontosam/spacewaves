# Galaxia — Kid Edition 👾

A classic *Galaga/Galaxian*-style formation shooter. A swarm of aliens hovers at
the top and peels off to dive at you; blast them all to clear the wave. Made to
be easy for a young kid (made for Ezra).

## How to play
- **Slide your finger** to move your ship. It **shoots automatically** — no
  tapping needed.
- Blast the aliens. Some **dive** down at you in a swoop — shoot them for bonus
  points, or just slide out of the way.
- **Clear the whole wave** to advance to the next one (a little bigger/faster).
- You have **three ❤️**. Getting hit by a diving alien (or an alien shot, in the
  harder modes) costs one; at zero it's game over. Best score + wave are saved.

Keyboard (desktop): ← and → also move the ship.

## Speeds
Pick one on the start screen (remembered between sessions):

| Speed  | Feel        | Notes                                   |
|--------|-------------|-----------------------------------------|
| Baby   | no shots    | aliens never shoot back, slow gentle dives, small swarm |
| Easy   | for kids    | a few alien shots, medium dives         |
| Normal | a challenge | more shots, faster dives, bigger swarm  |

## Running it
Single file, no dependencies. Open `index.html`, or serve the parent folder:

```bash
python3 -m http.server 8000
# then open http://localhost:8000/galaxia/
```

Works on touch (phone/tablet) and mouse/keyboard.

## Tuning it further
Knobs live in the `PRESETS` object near the top of the `<script>`:

- `fire`    — ship auto-shot interval (smaller = shoots faster)
- `dive`    — seconds between alien dives (bigger = calmer)
- `diveSpd` — how fast a diving alien falls
- `eFire`   — chance aliens shoot back (`0` = never)
- `cols` / `rows` — size of the alien formation
