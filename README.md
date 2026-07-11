<div align="center">

<img src="https://readme-typing-svg.demolab.com?font=Silkscreen&size=50&duration=2500&pause=1000&color=00F0FF&center=true&vCenter=true&width=1001&lines=HACK+LATENCY.IO;PASSWORD+THREAT+ANALYTICS;100%25+CLIENT-SIDE+%E2%80%A2+ZERO+BACKEND" alt="Typing SVG" />

<br/>

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![No Backend](https://img.shields.io/badge/Backend-None%20Required-00FF00?style=for-the-badge)](#-architecture)

<br/>

[![Repo Size](https://img.shields.io/github/repo-size/suman-das07/hack-latency.io?style=flat-square&color=00f0ff)](https://github.com/suman-das07/hack-latency.io)
[![Last Commit](https://img.shields.io/github/last-commit/suman-das07/hack-latency.io?style=flat-square&color=00f0ff)](https://github.com/suman-das07/hack-latency.io/commits/main)
[![Stars](https://img.shields.io/github/stars/suman-das07/hack-latency.io?style=flat-square&color=00f0ff)](https://github.com/suman-das07/hack-latency.io/stargazers)
[![Forks](https://img.shields.io/github/forks/suman-das07/hack-latency.io?style=flat-square&color=00f0ff)](https://github.com/suman-das07/hack-latency.io/forks)
[![Open Issues](https://img.shields.io/github/issues/suman-das07/hack-latency.io?style=flat-square&color=00f0ff)](https://github.com/suman-das07/hack-latency.io/issues)

<br/>

### A futuristic, terminal-styled cybersecurity console that audits password strength entirely in your browser — no servers, no APIs, no data ever leaves the device.

<br/>
</div>

<br/>

---

## 📖 Overview

**HackLatency.io** simulates a cybersecurity operations console. Instead of the usual "weak / medium / strong" meter, it breaks a password down the way an actual threat model would — character-set entropy, brute-force search space, and estimated crack time against a fixed-rate attacker — and renders it as a live, glitch-styled terminal readout.

Every calculation runs **locally, in the browser**. The password you type is never transmitted, logged, or stored — making it safe to demo, safe to audit, and a genuinely useful reference for explaining password hygiene to non-technical stakeholders.

> Built as a front-end systems project to demonstrate DOM architecture, real-time state-driven UI updates, and applied information-theory math (entropy, combinatorics) — without a single external dependency.

<br/>

## 🖥️ Live Demo

<div align="center">

| | |
|---|---|
| 🔗 **Repository** | [github.com/suman-das07/hack-latency.io](https://github.com/suman-das07/hack-latency.io) |
| 🌐 **Hosted Demo** | https://hacklatencyio.netlify.app/ |

</div>

<br/>

## ✨ Features

<table>
<tr>
<td width="50%" valign="top">

### 🔍 Real-Time Threat Metrics
- Instant analysis on click — no lag, no reload
- Password length classification with visual thresholds
- Live character-type breakdown (upper / lower / digits / symbols)

</td>
<td width="50%" valign="top">

### 🧮 Applied Security Math
- Effective **character set size** calculation
- Brute-force **search space** (`charset^length`)
- Shannon **entropy** in bits
- **Time-to-crack** estimate at a fixed guess rate

</td>
</tr>
<tr>
<td width="50%" valign="top">

### 🛡️ Composite Threat Engine
- Aggregated **threat level** verdict — `CRITICAL → VULNERABLE → MODERATE → SECURE → FORTIFIED`
- Multi-factor scoring (length + entropy + crack time + charset)
- Color-coded, glanceable severity states

</td>
<td width="50%" valign="top">

### 🎨 Console-Grade UI/UX
- Cyberpunk terminal aesthetic with neon glow effects
- Fully responsive — desktop console down to mobile
- Zero third-party JS dependencies or frameworks

</td>
</tr>
</table>

<br/>

## 🧠 How the Analysis Works

<div align="center">

```
┌──────────────┐     ┌───────────────────┐     ┌───────────────┐
│  User Input  │ ──▶ │  Character Audit   │ ──▶ │ Charset Size   │
└──────────────┘     │ (upper/lower/num/  │     │  Calculation   │
                      │      symbol)       │     └───────┬───────┘
                      └───────────────────┘             │
                                                          ▼
┌──────────────┐     ┌───────────────────┐     ┌───────────────┐
│ Threat Level │ ◀── │   Crack Time Est.   │ ◀── │ Entropy (bits) │
│   Verdict    │     │ (search space ÷     │     │  length × log2 │
└──────────────┘     │  guess rate)        │     │  (charset)     │
                      └───────────────────┘     └───────────────┘
```

</div>

Each metric feeds the next in a single deterministic pipeline — `passLength → characterTypes → characterSetSize → searchSpace → entropy → estimateCrackTime → threatAnalysis` — so every card on the dashboard reflects one consistent, cascading calculation.

<br/>

## 🧰 Tech Stack

<div align="center">

| Layer | Technology | Purpose |
|---|---|---|
| **Structure** | Semantic HTML5 | Accessible, dependency-free markup |
| **Styling** | Vanilla CSS3 (Custom Properties, Flexbox, Media Queries) | Responsive neon/terminal UI |
| **Logic** | Vanilla JavaScript (ES6+, DOM API) | Real-time entropy & threat calculations |
| **Typography** | Google Fonts — `Silkscreen`, `Share Tech Mono` | Retro-terminal / HUD feel |
| **Hosting** | Static — deployable anywhere (GitHub Pages, Netlify, Vercel) | No build step, no server |

</div>

<br/>

## 📂 Project Structure

```
hack-latency.io/
├── assets/               # Logo, favicon & static media
├── index.html            # App shell & DOM structure
├── style.css             # Terminal/HUD theme & responsive layout
├── app.js                # Core analysis engine & UI state logic
└── README.md             # You are here
```

<br/>

## 🚀 Getting Started

### Prerequisites
Just a modern web browser. No Node, no package manager, no build tooling.

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/suman-das07/hack-latency.io.git

# 2. Move into the project directory
cd hack-latency.io

# 3. Open it — that's it
open index.html          # macOS
start index.html         # Windows
xdg-open index.html      # Linux
```

> 💡 **Tip:** For live-reload during development, serve it with any static server, e.g. `npx serve .` or the VS Code *Live Server* extension.

<br/>

## 🗺️ Roadmap

- [ ] Integrate a k-anonymity breach-check (e.g. Have I Been Pwned range API) as an opt-in check
- [ ] Add dictionary / common-password pattern detection
- [ ] Configurable attacker profile (adjustable guesses-per-second)
- [ ] Dark/light HUD theme toggle
- [ ] Deploy live demo via GitHub Pages
- [ ] Add automated test suite for the calculation engine

Have an idea? Open an [issue](https://github.com/suman-das07/hack-latency.io/issues) — contributions and suggestions are welcome.

<br/>

## 🤝 Contributing

Contributions make the open-source community a great place to learn and build. Any contributions are **greatly appreciated**.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

<br/>

## 📜 License

This project does not yet declare a license. Until one is added, all rights are reserved by the author. If you're the maintainer, consider adding an [MIT](https://choosealicense.com/licenses/mit/) or similar permissive license so others know how they may use this code.

<br/>

## 👤 Author

<div align="center">

**Suman Das**

[![GitHub](https://img.shields.io/badge/GitHub-suman--das07-181717?style=for-the-badge&logo=github)](https://github.com/suman-das07)

</div>

<br/>

<div align="center">

### If this project helped you understand password security a little better, consider giving it a ⭐

<sub>Built with vanilla HTML, CSS & JavaScript — no frameworks, no tracking, no compromises.</sub>

</div>
