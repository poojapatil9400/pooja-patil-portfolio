# Pooja Patil - Developer Portfolio (Frontend)

Modern, responsive, high-performance developer portfolio website designed for full-stack engineering roles. Built with vanilla HTML5, CSS3, and JavaScript (ES6+) for maximum clarity, lightweight footprint, and zero dependency overhead.

---

## 🚀 Key Features

- **Professional Design Theme:** Dark navy / charcoal base theme with purple, blue, and violet gradient highlights.
- **Light / Dark Mode Toggle:** Instant theme switcher with `localStorage` persistence and CSS custom properties (`var(--...)`).
- **Responsive Navigation:** Sticky header with glassmorphism backdrop blur, active section scroll-spy indicator, and responsive mobile hamburger menu.
- **Hero & Typing Animation:** Dynamic typewriter effect looping through developer specializations, call-to-action buttons, profile headshot with an animated glowing gradient halo, and instant resume download.
- **Categorized Technical Skills:** Clean skill cards grouped by Programming Languages, Backend, Frontend, Databases, Frameworks, and Tools without fake percentage bars.
- **Featured Projects Showcase:** Interactive project cards with dynamic category filtering (`Java`, `Web`, `Flutter`, `Python`) and "View Details" modal dialogs.
- **Authentic Experience Timeline:** Vertical timeline presenting the Mobile App Developer Internship (Guide2Hire) and genuine Business Development / Sales responsibilities (FotoOwl.ai).
- **Verified Education & Certifications:** Comprehensive education cards displaying degree CGPA (9.52 at SPPU), diploma CGPA (8.72), and certifications from Core2web Technologies and IBM.
- **Live GitHub REST API Integration:** Dynamic profile header, repository card feed sorted by update date, star and fork counts, language badges, "Show More" pagination, and fallback protection against API rate limiting.
- **Full-Stack Contact Form:** Client-side validation, anti-spam duplicate prevention, loading spinner, and integration with the Spring Boot REST backend (`POST /api/contact`).

---

## 📁 Directory Structure

```
frontend/
├── index.html            # Main semantic HTML5 webpage
├── css/
│   └── style.css         # Modern responsive CSS3 stylesheet & design tokens
├── js/
│   ├── config.js         # Central configuration (API base URL, profile, fallback repos)
│   ├── github.js         # GitHub REST API fetcher & rate-limit fallback handler
│   ├── contact.js        # Contact form validation & Spring Boot REST API integration
│   └── script.js         # Navigation, theme toggle, typing effect, modal & filters
├── assets/
│   ├── images/           # Profile photo and graphical assets
│   ├── icons/            # SVG / icon assets
│   └── resume/
│       └── Pooja_Patil_Resume.pdf  # Downloadable PDF resume
└── README.md
```

---

## ⚙️ Configuration (`js/config.js`)

Central configuration settings:

```javascript
const CONFIG = {
    // Automatically selects localhost for local testing or your Render URL in production
    API_BASE_URL: window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
        ? 'http://localhost:8080'
        : 'https://pooja-portfolio-backend.onrender.com',

    PROFILE: {
        name: "Pooja Patil",
        email: "poojapatil121076@gmail.com",
        githubUsername: "poojapatil9400",
        githubUrl: "https://github.com/poojapatil9400",
        linkedinUrl: "https://www.linkedin.com/in/poojapatil9400"
    }
};
```

---

## 💻 Local Execution

To preview locally:
1. Open `index.html` directly in any modern web browser.
2. Or serve via Python:
   ```bash
   python -m http.server 3000
   ```
   and navigate to `http://localhost:3000`.
