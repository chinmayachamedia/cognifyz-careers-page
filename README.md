# 🌐 Cognifyz Web Developer Internship — Landing Page

A premium, fully responsive landing page built for the **Web Developer Internship** program at **Cognifyz Technologies**. Designed with a dark "code editor at night" glassmorphism aesthetic — gradients, glass surfaces, scroll animations, and a live-typing hero visual — all built with **pure HTML, CSS, and JavaScript** (no React, no build tools).

🔗 **Live Demo:** [cognifyz-careers-page.vercel.app](https://cognifyz-careers-page.vercel.app/)

---

## ✨ Features

- **Sticky glassmorphic navbar** with logo, smooth-scroll links, and an animated hamburger menu for mobile
- **Hero section** with a signature "code editor" visual — a glass panel with a live typing animation and floating tech badges (HTML5, CSS3, JavaScript, Git)
- **About the Internship** section with a quick-facts panel
- **Benefits grid** — glassmorphic cards highlighting certificates, mentorship, real projects, and more
- **Qualifications checklist** with custom animated checkmarks
- **Why Choose Cognifyz** — stat highlights and feature callouts
- **CTA section** with a gradient glass panel driving applications
- **Footer** with contact info, website, LinkedIn, and Instagram links
- **Scroll-reveal animations** powered by `IntersectionObserver`
- **Fully responsive** — optimized for desktop, tablet, and mobile
- **Accessible** — visible keyboard focus states, `prefers-reduced-motion` support, semantic HTML
- **Bootstrap 5** integrated (`container`, `row`, `col-*`, `card` classes) as a structural layer on top of the custom design — no visual changes, ready for future component work

---

## 🛠️ Tech Stack

| Layer      | Tools Used                                  |
|------------|----------------------------------------------|
| Structure  | HTML5                                        |
| Styling    | CSS3 (custom properties, Grid, Flexbox, glassmorphism) + Bootstrap 5 (grid/card utilities) |
| Behavior   | Vanilla JavaScript (`IntersectionObserver`, DOM APIs) |
| Fonts      | [Poppins](https://fonts.google.com/specimen/Poppins) (UI/body) + [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) (code accents) |
| Hosting    | GitHub Pages |

No frameworks, no build step, no dependencies to install — just open and go.

---

## 📁 Project Structure

```
├── index.html   # Page markup and structure
├── style.css    # Design system, layout, animations, responsiveness
├── script.js    # Navbar, hamburger menu, scroll-reveal, typing effect
└── README.md    # You are here
```

---

## 🚀 Running Locally

No installation needed:

1. Clone or download this repository
2. Open `index.html` directly in your browser

   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   open index.html   # or just double-click the file
   ```

That's it — everything runs client-side.

---

## 🌍 Deployment

This project is currently deployed on **Vercel**:
👉 **[cognifyz-careers-page.vercel.app](https://cognifyz-careers-page.vercel.app/)**

### Deploying your own copy on Vercel
1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → **Add New Project**
3. Import the repo — no build settings needed, it's detected as a static site
4. Deploy — Vercel gives you a live URL immediately, and redeploys automatically on every push to `main`

### Alternative: GitHub Pages
1. Push this repo to GitHub
2. Go to **Settings → Pages**
3. Under **Source**, select the `main` branch and `/ (root)` folder
4. Save — your site will be live at `https://your-username.github.io/your-repo-name/` within a minute

---

## 📱 Responsiveness

Tested and optimized across:
- Desktop (1200px+)
- Laptop (992px–1200px)
- Tablet (768px–992px)
- Mobile (up to 768px)

---

## 📄 License

This project is open for learning and portfolio purposes. Feel free to fork and adapt it for your own use.

---

## 🙋 Contact

Built as a landing page concept for **Cognifyz Technologies**.
For internship inquiries: `careers@cognifyz.com`
