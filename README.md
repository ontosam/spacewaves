# Ezra's Games 🚀🎯

Two gentle, kid-friendly browser games, tuned to be easy for a young child:

- **[Space Waves](spacewaves/)** — hold to fly up, let go to dive, glide through the gaps.
- **[Ball Master](ballmaster/)** — aim and shoot, match 3+ colors to pop the balls.

Both are single static HTML files with no dependencies, so they run great on an
iPad in Safari.

## ▶ Play online (GitHub Pages)

Once Pages is turned on (see below), the games live at:

- **Home / game picker:** `https://ontosam.github.io/spacewaves/`
- Space Waves: `https://ontosam.github.io/spacewaves/spacewaves/`
- Ball Master: `https://ontosam.github.io/spacewaves/ballmaster/`

On the iPad, open the home link in Safari, tap the **Share** button, and choose
**Add to Home Screen** — it then opens full-screen like a real app.

## One-time setup to turn on GitHub Pages

This only has to be done once, and it can't be automated from here — it's a
setting in the repo:

1. Go to the repo on GitHub → **Settings** → **Pages**.
2. Under **Build and deployment → Source**, choose **GitHub Actions**.
3. Go to the **Actions** tab → open the latest **Deploy to GitHub Pages**
   run → click **Re-run jobs** (the first runs fail until step 2 is done).
4. When the run is green, the links above are live — usually within a minute.

After this one-time setup, every future push deploys automatically.

> Tip: if you'd rather serve from `main`, merge this branch into `main` and the
> same workflow will deploy from there (or switch Pages Source to
> "Deploy from a branch" and pick the branch + `/ (root)`).

## Run locally (optional)

```bash
python3 -m http.server 8000
# then open http://localhost:8000/
```

Each game folder has its own README with difficulty knobs you can tweak.
