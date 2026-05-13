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

## Deployment Recommendation

Deploy this on GitHub Pages.

This portfolio is static HTML and CSS, so GitHub Pages is the simplest and best fit: free hosting, no server process, no environment variables, no database, and very little operational maintenance.

Railway is a better fit for the actual application projects in this workspace, especially services like Typ-Nique or Virtual Closet that need web servers, APIs, workers, databases, persistent volumes, or environment variables.

## GitHub Pages Setup

Option 1: Make `portfolio-website` its own repository.

1. Create a new GitHub repo, for example `AdamHameed.github.io` or `portfolio`.
2. Push the contents of this folder as the repo root.
3. In GitHub, open `Settings -> Pages`.
4. Set the source to the default branch and root directory.

Option 2: Keep it inside an existing repo.

1. Move these files to a `/docs` directory in that repo, or configure a Pages workflow.
2. In `Settings -> Pages`, set the source to the default branch and `/docs`.

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
