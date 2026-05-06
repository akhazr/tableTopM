# Amoka Cafe

Static website for Amoka Cafe, ready to host for free on GitHub Pages at `amoka.ca`.

## Logo Asset

The site now expects your official logo at:

- `logo-amoka.png` (in the project root)

If the file is missing, the site uses a text fallback automatically.

## Local Preview

Open `index.html` in a browser, or run:

```bash
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.

## GitHub Pages

This repo is designed to publish from the repository root. The `CNAME` file points GitHub Pages at `amoka.ca`.

After publishing, configure the domain DNS:

- Apex/root `amoka.ca` A records:
  - `185.199.108.153`
  - `185.199.109.153`
  - `185.199.110.153`
  - `185.199.111.153`
- Optional `www.amoka.ca` CNAME:
  - `<your-github-username>.github.io`
