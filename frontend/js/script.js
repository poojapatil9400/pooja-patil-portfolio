/**
 * Main Portfolio UI Interactive Controller
 * Handles Navigation, Theme Toggling, Typing Animation, Projects Filtering,
 * Interactive Details Modal, and Scroll Spy.
 */

// Project Detailed Specifications (Accurate information from genuine resume & GitHub)
const PROJECTS_DATA = {
    'sms': {
        title: 'Student Management System (Full Stack)',
        category: 'java',
        categoryLabel: 'Java / Full Stack',
        technologies: ['Java', 'Spring Boot', 'React', 'MySQL', 'Spring Data JPA', 'Hibernate', 'REST API', 'Axios'],
        problemStatement: 'Educational institutions frequently face data inconsistency, inefficient paper-based record tracking, and lack of real-time student record updating across academic departments.',
        keyFeatures: [
            'End-to-end CRUD operations for student admission records and academic profiles.',
            'Server-side pagination, multi-column sorting, and dynamic student search filters.',
            'RESTful API architecture with standard HTTP status codes and centralized exception handling.',
            'Layered backend design: Controller, Service, and Repository layers maintaining separation of concerns.',
            'Responsive React user interface integrated with Axios HTTP client.'
        ],
        contribution: 'Designed and developed the entire Spring Boot REST backend, configured Spring Data JPA entities and MySQL relational schema, and connected frontend components to the backend endpoints.',
        githubUrl: 'https://github.com/poojapatil9400/student-management-system-react-springboot'
    },
    'canvas': {
        title: 'Dynamic Canvas Art Generator',
        category: 'java',
        categoryLabel: 'Java / JavaFX',
        technologies: ['Java', 'JavaFX', 'Multithreading', 'OOP Concepts', 'Event Handling'],
        problemStatement: 'Complex graphics generation on single-threaded graphical user interfaces frequently leads to UI freezing, frame drops, and unresponsive user input during high-load visual rendering.',
        keyFeatures: [
            'Asynchronous multi-shape graphics rendering on a dynamic JavaFX canvas.',
            'Worker threads performing heavy computational rendering in background without blocking UI.',
            'Interactive controls for users to dynamically adjust shape geometry, colors, and motion parameters.',
            'Modular object-oriented class hierarchy adhering to encapsulation and inheritance principles.'
        ],
        contribution: 'Architected the core multithreaded rendering pipeline, decoupled the GUI event dispatch thread from computational logic, and optimized real-time render performance.',
        githubUrl: 'https://github.com/poojapatil9400/Dynamic_canvas_art_generator'
    },
    'gotrek': {
        title: 'GoTrek – Trek Booking Platform',
        category: 'web',
        categoryLabel: 'Web Development',
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL', 'Responsive Design'],
        problemStatement: 'Adventure enthusiasts and trekking clubs required a unified, accessible digital platform to explore itineraries, check guide credentials, and reserve trek slots seamlessly.',
        keyFeatures: [
            'Responsive catalog showcasing over 20+ trekking expeditions with comprehensive itineraries.',
            'Secure user authentication, registration, and booking confirmation workflows.',
            'Administrative control panel for adding, updating, and removing trek packages.',
            'Relational database integration for booking logs, slot counts, and user profile management.'
        ],
        contribution: 'Built responsive UI templates using HTML, CSS, and Vanilla JavaScript, developed backend PHP endpoints for user bookings, and structured relational tables in MySQL.',
        githubUrl: 'https://github.com/poojapatil9400/goTrek'
    },
    'banking': {
        title: 'Banking Management System',
        category: 'python',
        categoryLabel: 'Python / Database',
        technologies: ['Python', 'MySQL', 'Database Transactions', 'Exception Handling'],
        problemStatement: 'Financial transactions demand strict ACID guarantees, data integrity, and defensive input validation to prevent runtime failure or balance inconsistencies.',
        keyFeatures: [
            'Menu-driven interactive console interface for banking operations.',
            'Complete CRUD operations: Account creation, balance inquiry, deposit, withdrawal, and fund transfers.',
            'Defensive input validation and comprehensive exception handling for invalid inputs or SQL errors.',
            'Persistent relational storage maintaining ledger logs and customer account balances.'
        ],
        contribution: 'Implemented transaction business logic in Python, designed relational database schema in MySQL, and incorporated thorough exception handling for robust operations.',
        githubUrl: 'https://github.com/poojapatil9400/Banking-Management-System-using-Python-MySQL'
    },
    'guide2hire': {
        title: 'Guide2Hire – Internship Discovery App',
        category: 'flutter',
        categoryLabel: 'Flutter / Mobile',
        technologies: ['Dart', 'Flutter Framework', 'Firebase Auth', 'Cloud Firestore', 'Cloud Storage'],
        problemStatement: 'College graduates and students struggle to discover verified internship opportunities matching their skill profiles through disjointed social media channels.',
        keyFeatures: [
            'Cross-platform mobile application delivering consistent user experience on Android & iOS.',
            'Firebase Authentication for secure student and employer sign-in.',
            'Real-time Firestore database synchronization for instant opportunity updates.',
            'Customizable applicant profile management with resume upload to Firebase Cloud Storage.'
        ],
        contribution: 'Engineered responsive UI screens with reusable Flutter widgets, integrated Firebase backend authentication and Firestore database, and collaborated via Git/GitHub during internship.',
        githubUrl: 'https://github.com/poojapatil9400/Guide2_hire'
    },
    'expense': {
        title: 'Daily Expense Tracker Application',
        category: 'python',
        categoryLabel: 'Python / Desktop GUI',
        technologies: ['Python', 'Tkinter GUI', 'SQLite', 'Treeview'],
        problemStatement: 'Individuals need a lightweight, offline-accessible desktop tool to monitor daily expenditures, categorize spending habits, and review historical summaries without cloud dependencies.',
        keyFeatures: [
            'Interactive graphical user interface developed with Tkinter.',
            'Categorized expense entry (Food, Travel, Utilities, Education) with date tracking.',
            'Tabular Treeview interface to display, filter, and delete expense entries.',
            'Embedded SQLite database guaranteeing persistent local storage.'
        ],
        contribution: 'Developed complete desktop application, structured database tables, implemented calculation logic, and designed clean tabular data views.',
        githubUrl: 'https://github.com/poojapatil9400/Expense-Tracker-Application-Python'
    },
    'dbtable': {
        title: 'Database Table Creation Tool',
        category: 'java',
        categoryLabel: 'Java / GUI Tool',
        technologies: ['Java', 'JavaFX', 'JDBC', 'MySQL', 'OOP Principles'],
        problemStatement: 'Beginning database students and developers benefit from an intuitive visual utility to construct database tables without memorizing complex DDL query syntax.',
        keyFeatures: [
            'Visual JavaFX interface to input table names, specify column names, and choose SQL data types.',
            'Dynamic SQL DDL generator executing CREATE TABLE queries via JDBC.',
            'Interactive table viewer allowing users to inspect created table structures and sample rows.',
            'Clear feedback notifications for successful executions or connection errors.'
        ],
        contribution: 'Built JavaFX UI screens, authored JDBC database connection handlers, and implemented dynamic DDL query assembly with proper error catching.',
        githubUrl: 'https://github.com/poojapatil9400/Database_Table_Creation'
    },
    'quiz': {
        title: 'Dynamic Quiz Application',
        category: 'python',
        categoryLabel: 'Python / API',
        technologies: ['Python', 'JSON', 'REST API Integration', 'Modular Programming'],
        problemStatement: 'Traditional quiz programs rely on hardcoded question lists that quickly become obsolete and lack varied difficulty tiers.',
        keyFeatures: [
            'Dynamically retrieves questions and options from RESTful JSON data endpoints.',
            'Modular application structure separating question fetching, quiz presentation, and score calculation.',
            'Instant validation, score assessment, and comprehensive result summary.',
            'Defensive parsing ensuring seamless progression even during partial network responses.'
        ],
        contribution: 'Developed modular Python code, implemented JSON data consumption, created scoring algorithms, and conducted test runs.',
        githubUrl: 'https://github.com/poojapatil9400/Python-Quiz-Application'
    }
};

document.addEventListener('DOMContentLoaded', () => {
    initThemeManager();
    initStickyNavbar();
    initMobileMenu();
    initTypingEffect();
    initProjectFilters();
    initProjectModal();
    initScrollSpy();
    initBackToTop();
    setCurrentYear();
});

/* ==========================================================================
   Theme Manager (Dark / Light Mode)
   ========================================================================== */
function initThemeManager() {
    const themeBtn = document.getElementById('theme-toggle-btn');
    if (!themeBtn) return;

    // Check saved preference or default to dark
    const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
    applyTheme(savedTheme);

    themeBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        applyTheme(newTheme);
        localStorage.setItem('portfolio-theme', newTheme);
    });
}

function applyTheme(theme) {
    const themeBtn = document.getElementById('theme-toggle-btn');
    if (theme === 'light') {
        document.documentElement.setAttribute('data-theme', 'light');
        if (themeBtn) themeBtn.innerHTML = '<i class="fas fa-moon"></i>';
    } else {
        document.documentElement.removeAttribute('data-theme');
        if (themeBtn) themeBtn.innerHTML = '<i class="fas fa-sun"></i>';
    }
}

/* ==========================================================================
   Sticky Navbar & Mobile Menu
   ========================================================================== */
function initStickyNavbar() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 30) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

function initMobileMenu() {
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (!hamburgerBtn || !navMenu) return;

    hamburgerBtn.addEventListener('click', () => {
        hamburgerBtn.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburgerBtn.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

/* ==========================================================================
   Typing Effect
   ========================================================================== */
function initTypingEffect() {
    const typingElement = document.getElementById('typing-text');
    if (!typingElement) return;

    const words = [
        "Java Developer",
        "Software Developer",
        "Full Stack Developer",
        "Problem Solver"
    ];

    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingSpeed = 110;
    const deletingSpeed = 60;
    const delayBetweenWords = 1800;

    function type() {
        const currentWord = words[wordIndex];

        if (isDeleting) {
            typingElement.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingElement.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
        }

        let speed = isDeleting ? deletingSpeed : typingSpeed;

        if (!isDeleting && charIndex === currentWord.length) {
            speed = delayBetweenWords;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            speed = 400;
        }

        setTimeout(type, speed);
    }

    type();
}

/* ==========================================================================
   Project Category Filtering
   ========================================================================== */
function initProjectFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            projectCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                if (filterValue === 'all' || cardCategory === filterValue) {
                    card.style.display = 'flex';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 50);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.95)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 200);
                }
            });
        });
    });
}

/* ==========================================================================
   Interactive Project Details Modal
   ========================================================================== */
function initProjectModal() {
    const modalOverlay = document.getElementById('project-modal');
    const modalCloseBtn = document.getElementById('modal-close-btn');
    const detailButtons = document.querySelectorAll('.btn-view-details');

    if (!modalOverlay) return;

    detailButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const projectId = btn.getAttribute('data-project');
            const data = PROJECTS_DATA[projectId];
            if (!data) return;

            // Populate Modal Content
            document.getElementById('modal-title').textContent = data.title;
            document.getElementById('modal-category').textContent = data.categoryLabel;
            document.getElementById('modal-problem').textContent = data.problemStatement;
            document.getElementById('modal-contribution').textContent = data.contribution;

            const featuresList = document.getElementById('modal-features');
            featuresList.innerHTML = data.keyFeatures.map(f => `<li>${f}</li>`).join('');

            const techContainer = document.getElementById('modal-tech-stack');
            techContainer.innerHTML = data.technologies.map(t => `<span class="tech-pill">${t}</span>`).join('');

            const repoLink = document.getElementById('modal-github-link');
            if (repoLink) repoLink.href = data.githubUrl;

            // Show Modal
            modalOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    const closeModal = () => {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = '';
    };

    if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);

    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) closeModal();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
            closeModal();
        }
    });
}

/* ==========================================================================
   Scroll Spy & Active Section Indicator
   ========================================================================== */
function initScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let scrollY = window.pageYOffset;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 120;
            const sectionId = current.getAttribute('id');

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
}

/* ==========================================================================
   Back To Top Button
   ========================================================================== */
function initBackToTop() {
    const backBtn = document.getElementById('back-to-top-btn');
    if (!backBtn) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            backBtn.classList.add('visible');
        } else {
            backBtn.classList.remove('visible');
        }
    });

    backBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

function setCurrentYear() {
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
}
