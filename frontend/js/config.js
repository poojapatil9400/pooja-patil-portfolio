/**
 * Portfolio Global Configuration
 * Central place to manage API URLs, social links, and fallback data.
 */
const CONFIG = {
    // Backend API Base URL
    // In local development: http://localhost:8080
    // In production: update this with your deployed Render backend URL (e.g. https://pooja-portfolio-backend.onrender.com)

    // Backend API Base URL
    API_BASE_URL: window.location.hostname === 'localhost' ||
        window.location.hostname === '127.0.0.1'
        ? 'http://localhost:8080'
        : 'https://pooja-portfolio-backend-27he.onrender.com',

    // Personal & Profile Details
    PROFILE: {
        name: "Pooja Patil",
        title: "Computer Engineering Graduate | Java Developer | Software Developer",
        email: "poojapatil121076@gmail.com",
        phone: "+91 8010758265",
        location: "Pune, Maharashtra, India",
        githubUsername: "poojapatil9400",
        githubUrl: "https://github.com/poojapatil9400",
        linkedinUrl: "https://www.linkedin.com/in/pooja-patil-94498a232/",
        resumePath: "assets/resume/Pooja_Patil_Resume.pdf"
    },

    // Static Fallback Repositories (Used if GitHub API rate limit is exceeded or offline)
    FALLBACK_REPOS: [
        {
            name: "student-management-system-react-springboot",
            description: "Full-stack student management application following Controller-Service-Repository architecture with CRUD, pagination, sorting, and search.",
            html_url: "https://github.com/poojapatil9400/student-management-system-react-springboot",
            language: "Java",
            stargazers_count: 1,
            forks_count: 0,
            updated_at: "2026-04-12T20:15:02Z"
        },
        {
            name: "Dynamic_canvas_art_generator",
            description: "Interactive real-time multi-shape dynamic art generator leveraging multithreading in JavaFX for responsive background rendering.",
            html_url: "https://github.com/poojapatil9400/Dynamic_canvas_art_generator",
            language: "Java",
            stargazers_count: 1,
            forks_count: 0,
            updated_at: "2026-04-12T20:13:23Z"
        },
        {
            name: "Banking-Management-System-using-Python-MySQL",
            description: "Console-based banking platform implementing full CRUD operations, robust exception handling, and persistent MySQL database storage.",
            html_url: "https://github.com/poojapatil9400/Banking-Management-System-using-Python-MySQL",
            language: "Python",
            stargazers_count: 0,
            forks_count: 0,
            updated_at: "2026-01-23T19:03:12Z"
        },
        {
            name: "Expense-Tracker-Application-Python",
            description: "GUI-based daily expense tracking software built with Python and Tkinter, featuring SQLite database and Treeview tabular display.",
            html_url: "https://github.com/poojapatil9400/Expense-Tracker-Application-Python",
            language: "Python",
            stargazers_count: 0,
            forks_count: 0,
            updated_at: "2026-01-24T20:40:08Z"
        },
        {
            name: "Guide2_hire",
            description: "Cross-platform Flutter internship and placement discovery application with Firebase Authentication and Cloud Firestore backend.",
            html_url: "https://github.com/poojapatil9400/Guide2_hire",
            language: "Dart",
            stargazers_count: 0,
            forks_count: 0,
            updated_at: "2025-09-24T18:56:35Z"
        },
        {
            name: "Database_Table_Creation",
            description: "GUI application using JavaFX and JDBC that enables interactive schema design, custom SQL data types, and dynamic table creation.",
            html_url: "https://github.com/poojapatil9400/Database_Table_Creation",
            language: "Java",
            stargazers_count: 1,
            forks_count: 0,
            updated_at: "2026-04-12T20:13:30Z"
        }
    ]
};
