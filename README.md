# Adam Hameed Portfolio Website

Minimal static portfolio for Adam Hameed, focused on full-stack products,
distributed systems, infrastructure, and reliability-focused engineering work.

## Included Projects

- Typ-Nique
- Distributed Key-Value Store
- Mini SQL Storage Engine
- Embedded Flight Recorder
- ServiceOps Platform
- Kubernetes Deployment Controller
- AI Log Analyzer
- Virtual Closet
- How Deep Is Your Voice

## Deployment

Deploy this on GitHub Pages.

This portfolio is static HTML and CSS, so GitHub Pages is the simplest and best fit: free hosting, no server process, no environment variables, no database, and very little operational maintenance.

Railway is a better fit for the actual application projects in this workspace, especially services like Typ-Nique or Virtual Closet that need web servers, APIs, workers, databases, persistent volumes, or environment variables.

## GitHub Pages Setup

Recommended: push this folder as its own repository.

1. Create a new GitHub repo, for example `AdamHameed.github.io` or `portfolio`.
2. Add the remote and push:

```bash
git remote add origin git@github.com:AdamHameed/<repo-name>.git
git push -u origin main
```

3. In GitHub, open `Settings -> Pages`.
4. Set `Source` to `Deploy from a branch`.
5. Select `main` and `/root`, then save.

If the repo is named `AdamHameed.github.io`, the site will publish at:

```text
https://AdamHameed.github.io
```

Otherwise it will publish at:

```text
https://AdamHameed.github.io/<repo-name>/
```

## Local Preview

Open `index.html` in a browser, or run:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Repository Layout

```text
.
├── index.html
├── styles.css
├── README.md
├── LICENSE
└── .gitignore
```
