# Ezra's Games 🚀🎯

Two gentle, kid-friendly browser games, tuned to be easy for a young child:

- **[Space Waves](spacewaves/)** — hold to fly up, let go to dive, glide through the gaps.
- **[Ball Master](ballmaster/)** — aim and shoot, match 3+ colors to pop the balls.
- **[Star Blaster](starblaster/)** — slide to move, auto-fire, blast the space rocks before they get past.
- **[Balloon Pop](balloonpop/)** — tap floating balloons to pop them; grab gold/rainbow, dodge the bomb.

Both are single static HTML files with no dependencies, so they run great on an
iPad in Safari.

## ▶ Play online (GitHub Pages)

Once Pages is turned on (see below), the games live at:

- **Home / game picker:** `https://ontosam.github.io/spacewaves/`
- Space Waves: `https://ontosam.github.io/spacewaves/spacewaves/`
- Ball Master: `https://ontosam.github.io/spacewaves/ballmaster/`
- Star Blaster: `https://ontosam.github.io/spacewaves/starblaster/`
- Balloon Pop: `https://ontosam.github.io/spacewaves/balloonpop/`

On the iPad, open the home link in Safari, tap the **Share** button, and choose
**Add to Home Screen** — it then opens full-screen like a real app.

## GitHub Pages setup (already done)

Pages is configured under **Settings → Pages** with:

- **Source:** Deploy from a branch
- **Branch:** `main` + **`/ (root)`**

With this mode, GitHub automatically rebuilds and republishes the site on every
push to `main` — no extra workflow needed. You can watch builds under the
**Actions** tab as **"pages build and deployment"**.

A `.nojekyll` file is included so the files are served exactly as-is (Jekyll
processing is skipped).

## Run locally (optional)

```bash
python3 -m http.server 8000
# then open http://localhost:8000/
```

Each game folder has its own README with difficulty knobs you can tweak.
