const portfolio = {
  name: "Adam Hameed",
  identity:
    "Software engineering student building full-stack products, storage systems, and infrastructure tools.",
  links: [
    { label: "GitHub", value: "https://github.com/AdamHameed" },
    {
      label: "Publication",
      value: "https://jps.library.utoronto.ca/index.php/mcsjournal/article/view/45680",
    },
    { label: "Typ-Nique live", value: "https://typ-nique-web-production.up.railway.app/" },
    {
      label: "Voice Depth Analyzer live",
      value: "https://protective-benevolence-production-77b8.up.railway.app/",
    },
  ],
  skills: {
    Languages: ["Go", "TypeScript", "Python", "C++", "Rust", "SQL"],
    "Backend/Data": ["gRPC", "WebSockets", "PostgreSQL", "Redis", "SQLite", "WALs"],
    Infrastructure: ["Docker", "Kubernetes", "Railway", "GHCR", "GitHub Actions"],
    Frontend: ["Next.js", "React", "Vite", "HTML", "CSS"],
    "AI/ML": ["LLM observability", "log analysis", "feature stores", "audio DSP"],
  },
  publication: {
    title: "Predicting Protein Functions: A Deep Learning Approach",
    date: "Sept. 2025",
    authors: ["Dev Shah", "Uyiosa Iyekekpolor", "Adam Hameed", "Tanish Roy"],
    venue: "Journal of Computing, Data, and Exploration, Vol. 1, No. 1.",
    doi: "10.33137/codex.v1i1.45680",
    url: "https://jps.library.utoronto.ca/index.php/mcsjournal/article/view/45680",
    doiUrl: "https://doi.org/10.33137/codex.v1i1.45680",
    summary:
      "Peer-reviewed deep learning publication on protein-function prediction from amino acid sequences.",
    details:
      "Transformer-based model work combining sequence embeddings, auxiliary biological features, and multi-label Gene Ontology classification.",
  },
  projects: [
    {
      id: "typ-nique",
      name: "Typ-Nique",
      summary: "Real-time multiplayer typing platform.",
      tech: ["Next.js", "TypeScript", "WebSockets", "Redis", "PostgreSQL", "Docker", "Railway/GHCR"],
      details:
        "Live multiplayer rooms, scoring, persistence, and deployed web/API services.",
      links: [
        { label: "Live", value: "https://typ-nique-web-production.up.railway.app/" },
        { label: "Code", value: "https://github.com/AdamHameed/typ-nique" },
      ],
    },
    {
      id: "kv",
      name: "Distributed Key-Value Store",
      summary: "Replicated Go storage system built around Raft.",
      tech: ["Go", "Raft", "gRPC", "BadgerDB", "WAL", "Docker"],
      details:
        "Replicated storage with leader election, log replication, snapshots, and recovery.",
      links: [{ label: "Code", value: "https://github.com/AdamHameed/d-key-value-store" }],
    },
    {
      id: "sql",
      name: "Mini SQL Storage Engine",
      summary: "Small SQL storage engine focused on database internals.",
      tech: ["Go", "SQL", "B+ Trees", "MVCC", "WAL"],
      details:
        "Indexing, transactions, range scans, concurrency, and recovery.",
      links: [{ label: "Code", value: "https://github.com/AdamHameed/mini-sql-storage-engine" }],
    },
    {
      id: "contextlens",
      name: "ContextLens",
      summary: "LLM agent observability and context optimization platform.",
      tech: ["FastAPI", "Next.js", "PostgreSQL", "Python SDK", "Docker"],
      details:
        "Captures agent traces, LLM calls, tool calls, context chunks, token usage, cost, evals, and pruning recommendations.",
      links: [{ label: "Code", value: "https://github.com/AdamHameed/contextlens" }],
    },
    {
      id: "redis",
      name: "Redis-Compatible Cache Server",
      summary: "RESP-compatible cache server with persistence and replication.",
      tech: ["Go", "TCP", "RESP", "TTL", "LRU", "Docker"],
      details:
        "Implements PING/GET/SET/DEL, TTLs, LRU eviction, JSON snapshot recovery, and primary-to-replica write fanout.",
      links: [
        { label: "Code", value: "https://github.com/AdamHameed/redis-compatible-cache-server" },
      ],
    },
    {
      id: "k8s",
      name: "Kubernetes Deployment Controller",
      summary: "Go controller for progressive deployments and rollback.",
      tech: ["Go", "Kubernetes", "CRDs", "controller-runtime", "Prometheus"],
      details:
        "A ProgressiveDeployment CRD manages Deployments, tracks health, exposes metrics, and rolls back unhealthy releases.",
      links: [
        { label: "Code", value: "https://github.com/AdamHameed/kubernetes-deployment-controller" },
      ],
    },
    {
      id: "search",
      name: "Mini Search Engine",
      summary: "Go search service with an inverted index and BM25 ranking.",
      tech: ["Go", "BM25", "inverted index", "HTTP", "Docker"],
      details:
        "Builds an index over a JSON corpus with tokenizer normalization, document statistics, deterministic ranking, and search APIs.",
      links: [{ label: "Code", value: "https://github.com/AdamHameed/mini-search-engine" }],
    },
    {
      id: "voice",
      name: "Voice Depth Analyzer",
      summary: "Audio analysis app with a C++ DSP core and Go API.",
      tech: ["C++ DSP core", "Go API", "Docker"],
      details:
        "Signal processing, backend API, browser audio workflow, and deployment.",
      links: [
        {
          label: "Live",
          value: "https://protective-benevolence-production-77b8.up.railway.app/",
        },
        { label: "Code", value: "https://github.com/AdamHameed/how-deep-is-your-voice" },
      ],
    },
  ],
};

const commands = {
  help: () =>
    [
      "Available commands:",
      "  help             List commands",
      "  about            Short intro",
      "  publication      Show publication",
      "  projects         List strongest projects",
      "  project <id>     Show project details",
      "",
      "Project ids:",
      ...portfolio.projects.map((project) => `  ${project.id}`),
      "",
      "  skills           Show technical skills",
      "  links            Show available links",
      "  contact          Show contact info",
      "  clear            Clear the terminal",
      "  theme            Toggle terminal contrast",
    ].join("\n"),
  about: () => `${portfolio.name}\n${portfolio.identity}`,
  publication: () => formatPublication(),
  publications: () => formatPublication(),
  projects: () => {
    const width = Math.max(...portfolio.projects.map((project) => project.id.length));
    return portfolio.projects
      .map((project) => `${project.id.padEnd(width)}  ${project.name} - ${project.summary}`)
      .join("\n");
  },
  skills: () =>
    Object.entries(portfolio.skills)
      .map(([group, items]) => `${group}: ${items.join(", ")}`)
      .join("\n"),
  links: () => portfolio.links.map((link) => `${link.label}: ${link.value}`).join("\n"),
  contact: () => "adam.hameed@utoronto.ca",
};

const terminal = {
  history: [],
  historyIndex: 0,
  theme: "dark",
};

const screen = document.querySelector("[data-terminal-screen]");
const form = document.querySelector("[data-terminal-form]");
const input = document.querySelector("[data-terminal-input]");
const projectList = document.querySelector("[data-project-list]");
const publicationSlot = document.querySelector("[data-publication]");

function createElement(tag, className, text) {
  const element = document.createElement(tag);
  if (className) {
    element.className = className;
  }
  if (text) {
    element.textContent = text;
  }
  return element;
}

function printEntry(command, output, variant = "normal") {
  const entry = createElement("div", "terminal-entry");
  const commandLine = createElement("div", "terminal-command");
  const prompt = createElement("span", "prompt", "adam@portfolio:~$ ");
  const commandText = document.createTextNode(command);
  const outputBlock = createElement(
    "pre",
    variant === "error" ? "terminal-output error" : "terminal-output",
    output,
  );

  commandLine.append(prompt, commandText);
  entry.append(commandLine, outputBlock);
  screen.append(entry);
  screen.scrollTop = screen.scrollHeight;
}

function clearScreen() {
  screen.replaceChildren();
}

function findProject(id) {
  return portfolio.projects.find((project) => project.id === id);
}

function formatPublication() {
  const publication = portfolio.publication;
  return [
    publication.title,
    publication.date,
    publication.authors.join(", "),
    publication.venue,
    `DOI: ${publication.doi}`,
    "",
    publication.summary,
    publication.details,
    "",
    `Article: ${publication.url}`,
    `DOI URL: ${publication.doiUrl}`,
  ].join("\n");
}

function formatProject(project) {
  const links = project.links.map((link) => `${link.label}: ${link.value}`).join("\n");
  return [
    project.name,
    project.summary,
    "",
    `Tech: ${project.tech.join(", ")}`,
    project.details,
    links,
  ].join("\n");
}

function runCommand(rawCommand) {
  const command = rawCommand.trim().replace(/\s+/g, " ");
  if (!command) {
    return;
  }

  terminal.history.push(command);
  terminal.historyIndex = terminal.history.length;

  if (command === "clear") {
    clearScreen();
    return;
  }

  if (command === "theme") {
    terminal.theme = terminal.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = terminal.theme;
    printEntry(command, `Theme set to ${terminal.theme}.`);
    return;
  }

  if (command.startsWith("project ")) {
    const id = command.slice("project ".length);
    const project = findProject(id);
    if (project) {
      printEntry(command, formatProject(project));
      return;
    }
  }

  if (Object.hasOwn(commands, command)) {
    printEntry(command, commands[command]());
    return;
  }

  printEntry(
    command,
    `command not found: ${command}. Type "help" to see available commands.`,
    "error",
  );
}

function renderProjectCards() {
  const cards = portfolio.projects.map((project) => {
    const card = createElement("article", "project-card");
    const body = createElement("div");
    const title = createElement("h3", "", project.name);
    const summary = createElement("p", "", project.summary);
    const techList = createElement("ul");
    const link = document.createElement("a");

    project.tech.slice(0, 4).forEach((item) => {
      techList.append(createElement("li", "", item));
    });

    link.href = project.links[0].value;
    link.textContent = project.links[0].label;

    body.append(title, summary);
    card.append(body, techList, link);
    return card;
  });

  projectList.replaceChildren(...cards);
}

function renderPublication() {
  const publication = portfolio.publication;
  const card = createElement("article", "publication-card");
  const body = createElement("div");
  const title = createElement("h3", "", publication.title);
  const meta = createElement(
    "p",
    "publication-meta",
    `${publication.date} | ${publication.venue}`,
  );
  const authors = createElement("p", "", publication.authors.join(", "));
  const summary = createElement("p", "", publication.summary);
  const links = createElement("div", "publication-links");
  const articleLink = document.createElement("a");
  const doiLink = document.createElement("a");

  articleLink.href = publication.url;
  articleLink.textContent = "Article";
  doiLink.href = publication.doiUrl;
  doiLink.textContent = publication.doi;

  body.append(title, meta, authors, summary);
  links.append(articleLink, doiLink);
  card.append(body, links);
  publicationSlot.replaceChildren(card);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const command = input.value;
  input.value = "";
  runCommand(command);
});

input.addEventListener("keydown", (event) => {
  if (event.key === "ArrowUp") {
    event.preventDefault();
    terminal.historyIndex = Math.max(0, terminal.historyIndex - 1);
    input.value = terminal.history[terminal.historyIndex] || "";
  }

  if (event.key === "ArrowDown") {
    event.preventDefault();
    terminal.historyIndex = Math.min(terminal.history.length, terminal.historyIndex + 1);
    input.value = terminal.history[terminal.historyIndex] || "";
  }
});

document.querySelector("[data-terminal]").addEventListener("click", () => {
  input.focus();
});

renderProjectCards();
renderPublication();
printEntry("help", commands.help());
