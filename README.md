# 🌐 Adrian Dean - Navy IT Portfolio

Welcome to my professional portfolio site! This project showcases my experience as an Information Systems Technician (IT) in the U.S. Navy — including my certifications, technical training, and development projects. Built with **React**, **TailwindCSS**, and **Vite**, it's designed for both performance and polish.

## 🔗 Live Site

**[adrian-dean.github.io](https://adrian-dean.github.io/)**

---

## 📸 Features

* 🌗 Dark/Light Mode Toggle (ThemeContext-based)
* 🧭 Smooth navigation via `react-router-dom`
* 📚 Filterable education timeline (Military Training, College, Certifications)
* 🧪 Dynamic project showcase with tech-stack filters
* 📬 Functional contact form (powered by [Formspree](https://formspree.io))
* 💅 TailwindCSS styling throughout
* ⚡ Animated transitions + full mobile responsiveness

---

## 🛠️ Tech Stack

* **React** (Hooks, Router)
* **Vite** (super fast builds and hot reload)
* **TailwindCSS** (utility-first CSS framework)
* **Lucide / React Icons** (modern UI icons)
* **Formspree** (contact form integration)

---

## 📁 Project Structure

```
my-portfolio/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── PaginatedEducation.jsx
│   ├── context/
│   │   └── ThemeContext.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Education.jsx
│   │   ├── Projects.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── tailwind.config.js
└── vite.config.js
```

---

## 📦 Getting Started (Local Development)

### 1. Clone the repository

```bash
git clone https://github.com/adrian-dean/adrian-dean.github.io
cd adrian-dean.github.io
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

### 4. Build for production (GitHub Pages)

```bash
npm run build
```

### 5. Deploy to GitHub Pages

Make sure your production build is pushed to the correct branch (e.g., `gh-pages`) and configured under **Settings > Pages** in your repository.

---

## 🔧 Configuration Notes

* This site uses **HashRouter** for client-side routing (GitHub Pages compatible).
* Dark mode is controlled via a **ThemeContext** and toggles the `dark` class on the `<html>` tag.
* In `vite.config.js`, set your correct GitHub Pages base:

```js
// vite.config.js
export default defineConfig({
  base: '/your-repo-name/', // Adjust if deploying under a subdirectory
});
```

---

## 📬 Contact

Want to connect? Reach out via the site or through:

* **GitHub:** [@adrian-dean](https://github.com/adrian-dean)
* **LinkedIn:** *Coming Soon*
* **Discord:** *\[Server Link]*

---

© 2025 Adrian Dean. Built with ❤️, React, and a terminal.
