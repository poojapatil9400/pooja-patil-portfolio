# Pooja Patil – Full-Stack Developer Portfolio

A responsive, high-performance, full-stack developer portfolio application engineered from scratch. Represents academic achievements, software projects, professional experiences, technical certifications, and open-source contributions.

Developed with a **Java Spring Boot 3 RESTful API backend**, **MySQL database**, and a **lightweight, dependency-free Vanilla HTML5, CSS3, and JavaScript frontend**.

---

## 🌟 Live Demo & Architecture Overview
### 🔗 Live Project Links

- **Live Portfolio Website:** https://tubular-cheesecake-43dea7.netlify.app/
- **Backend API:** https://pooja-portfolio-backend-27he.onrender.com
- **Backend Health Check:** https://pooja-portfolio-backend-27he.onrender.com/api/health
- 
┌─────────────────────────────────────────────────────────────┐
│                       Client Browser                        │
│               (Desktop, Tablet, Mobile)                     │
└──────────────────────────────┬──────────────────────────────┘
                               │
               HTTPS Requests  │ Fetch API
                               ▼
┌─────────────────────────────────────────────────────────────┐
│                 Frontend (Netlify CDN)                      │
│   - HTML5 Semantic Structure                                │
│   - CSS3 Responsive Design (Dark/Light Modes)               │
│   - Vanilla JavaScript (github.js, contact.js, script.js)   │
│   - Static Resume & Profile Assets                          │
└──────────────┬──────────────────────────────┬───────────────┘
               │                              │
               │ GitHub REST API (v3)         │ POST /api/contact
               ▼                              ▼
┌──────────────────────────────┐ ┌────────────────────────────┐
│      GitHub Public API       │ │    Spring Boot Backend     │
│   - Fetches Live Repos       │ │         (Render)           │
│   - Stars, Forks, Language   │ │  - ContactController       │
│   - Fallback Rate Protection │ │  - HealthController        │
└──────────────────────────────┘ │  - ContactService          │
                                 │  - ContactRepository (JPA) │
                                 │  - Bean Validation & CORS  │
                                 └─────────────┬──────────────┘
                                               │
                                               │ JDBC (TLS/SSL)
                                               ▼
                                 ┌────────────────────────────┐
                                 │    Production Database     │
                                 │      (Managed MySQL)       │
                                 │  - Table: contact_messages │
                                 └────────────────────────────┘
```

---

## 🚀 Key Features

1. **Modern Minimalist UI/UX:**
   - Professional dark navy theme with purple, blue, and violet gradient highlights.
   - Smooth light/dark theme switch with `localStorage` persistence.
   - Fully responsive on desktop, tablet, and mobile with a custom hamburger menu.
   - Subtle scroll animations, glassmorphism headers, and interactive floating elements.

2. **Hero & Typing Effect:**
   - Dynamic typing animation looping through developer specializations.
   - Profile avatar with an animated rotating gradient halo ring.
   - Direct download button for `Pooja_Patil_Resume.pdf`.

3. **Curated Skills (No Fake Percentages):**
   - Categorized cards for Programming Languages, Backend, Frontend, Databases, Frameworks, and Tools.

4. **Featured Projects with Filter & Modals:**
   - Dynamic category filter: All, Java & Spring Boot, Web Development, Flutter, Python.
   - Interactive "View Details" modal for deep technical overviews (Problem statement, key features, architecture, personal contribution, and GitHub code links).

5. **Genuine Career Timeline & Education:**
   - Solution Architect at FotoOwl.ai (AI-powered media management platform, client requirements, product demos, platform workflows).
   - Software Developer Intern at Shris Tech (Bhumi Maitri – Farmer Community & Farm Management mobile app with Flutter & Firebase).
   - Mobile Application Developer Intern at Incubators Systems Pvt. Ltd. (Guide2Hire – Internship Platform with Flutter & Firebase).
   - High-achieving academic background: **9.52 CGPA** in B.E. Computer Engineering (SPPU) and **8.72 CGPA** in Diploma.

6. **Live GitHub REST API Integration:**
   - Real-time showcase of public repositories, stars, forks, and language badges.
   - Graceful offline and rate-limit fallbacks so the UI never displays broken data.

7. **Production-Ready Spring Boot Backend:**
   - RESTful endpoints (`POST /api/contact`, `GET /api/health`, `GET /api/contact`).
   - Layered architecture: Controller, Service, Repository, Entity, DTO, Config, Exception.
   - Strict Bean Validation (`@NotBlank`, `@Email`, `@Size`).
   - Cross-Origin Resource Sharing (CORS) configured for Netlify and local environments.
   - Centralized `@RestControllerAdvice` error handling.

---

## 📁 Repository Structure

```
portfolio/
├── frontend/                     # Vanilla Web Client
│   ├── index.html                # Semantic HTML5 single-page application
│   ├── css/
│   │   └── style.css             # Theme variables, responsive styles, animations
│   ├── js/
│   │   ├── config.js             # API URLs, personal profile, fallback datasets
│   │   ├── github.js             # GitHub REST API consumer with rate handling
│   │   ├── contact.js            # Contact form controller & AJAX communication
│   │   └── script.js             # Nav, typing effect, modal, filter controller
│   ├── assets/
│   │   ├── images/profile.png    # Profile headshot
│   │   └── resume/               # Official downloadable PDF resume
│   ├── netlify.toml              # Netlify build & security headers config
│   └── README.md
│
├── backend/                      # Java Spring Boot 3 Backend
│   ├── src/main/java/com/pooja/portfolio/
│   │   ├── PortfolioApplication.java
│   │   ├── controller/           # ContactController, HealthController
│   │   ├── service/              # ContactService
│   │   ├── repository/           # ContactRepository
│   │   ├── entity/               # ContactMessage
│   │   ├── dto/                  # ContactRequest, ApiResponse
│   │   ├── config/               # CorsConfig
│   │   └── exception/            # GlobalExceptionHandler, ResourceNotFoundException
│   ├── src/main/resources/
│   │   └── application.properties # Environment-driven properties
│   ├── src/test/                 # JUnit 5 & SpringBootTest integration suite
│   ├── pom.xml                   # Maven dependencies & build plugins
│   ├── Dockerfile                # Multi-stage container build
│   └── README.md
│
├── database/                     # MySQL Database Schemas
│   ├── schema.sql                # Table DDL, indexes, and initial records
│   └── README.md                 # Workbench connection instructions
│
├── render.yaml                   # Infrastructure-as-code for Render deployment
├── .gitignore                    # Git ignore file for Java, IDEs, and OS
└── README.md                     # Root project documentation
```

---

## 💻 Local Quickstart Guide

### Prerequisites
- Java JDK 17 or higher (`java -version`)
- Apache Maven 3.8+ (`mvn -v`)
- MySQL Server 8.0+ (`mysql --version`)

### Step 1: Initialize Database
```bash
# Execute schema in MySQL CLI or Workbench
mysql -u root -p < database/schema.sql
```

### Step 2: Run Spring Boot Backend
```bash
cd backend
mvn clean spring-boot:run
```
Backend will start on `http://localhost:8080`. Verify health:
```bash
curl http://localhost:8080/api/health
```

### Step 3: Launch Frontend
Open `frontend/index.html` in your browser or run:
```bash
cd frontend
python -m http.server 3000
```
Open `http://localhost:3000` in your browser.

---

## 🌐 Cloud Deployment Guide

### A. Deploy Backend to Render
1. Create a free account at [render.com](https://render.com/).
2. Click **New +** -> **Web Service**.
3. Connect your GitHub repository: `pooja-patil-portfolio`.
4. Configure service settings:
   - **Root Directory:** `backend`
   - **Runtime:** `Java` or `Docker`
   - **Build Command:** `mvn clean package -DskipTests`
   - **Start Command:** `java -jar target/portfolio-backend-1.0.0.jar`
5. Add Environment Variables:
   - `PORT`: `8080`
   - `DB_URL`: `jdbc:mysql://<host>:<port>/<dbname>?useSSL=true&serverTimezone=UTC`
   - `DB_USERNAME`: `<db_user>`
   - `DB_PASSWORD`: `<db_password>`
   - `JPA_DDL_AUTO`: `update`
6. Click **Create Web Service**. Note your backend live URL (e.g. `https://pooja-portfolio-backend.onrender.com`).

### B. Deploy Frontend to Netlify
1. Create a free account at [netlify.com](https://www.netlify.com/).
2. Click **Add new site** -> **Import an existing project**.
3. Select your GitHub repository: `pooja-patil-portfolio`.
4. Set **Base directory:** `frontend`, **Publish directory:** `frontend`.
5. Update `frontend/js/config.js` with your deployed Render URL:
   ```javascript
   API_BASE_URL: 'https://pooja-portfolio-backend.onrender.com'
   ```
6. Commit and push. Netlify automatically deploys the frontend with HTTPS!

---

## 👩‍💻 Author

**Pooja Patil**
- **Title:** Computer Engineering Graduate | Java Developer | Software Developer
- **Email:** [poojapatil121076@gmail.com](mailto:poojapatil121076@gmail.com)
- **GitHub:** [@poojapatil9400](https://github.com/poojapatil9400)
- **LinkedIn:** [Pooja Patil](https://www.linkedin.com/in/pooja-patil-94498a232/)
- **Location:** Pune, Maharashtra, India
