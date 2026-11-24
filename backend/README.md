# Pooja Patil - Developer Portfolio (Spring Boot Backend)

RESTful API backend for Pooja Patil's Developer Portfolio. Engineered with Java, Spring Boot 3, Spring Data JPA, and MySQL.

---

## 🏗️ Architecture & Design Pattern

The application implements a clean **Layered Architecture (Controller - Service - Repository)**:

```
[ HTTP Client / Portfolio Frontend ]
                │
                ▼ (JSON Request / Response)
┌─────────────────────────────────────────┐
│        Presentation Layer               │
│  - ContactController                    │
│  - HealthController                     │
│  - CorsConfig (Cross-Origin Policy)     │
│  - GlobalExceptionHandler               │
└──────────────────┬──────────────────────┘
                   │ DTO / Domain Objects
                   ▼
┌─────────────────────────────────────────┐
│           Service Layer                 │
│  - ContactService                       │
│    (Business Validation, Transactions)  │
└──────────────────┬──────────────────────┘
                   │ Entity Mapping
                   ▼
┌─────────────────────────────────────────┐
│         Data Access Layer               │
│  - ContactRepository                    │
│    (Spring Data JPA & Hibernate)        │
└──────────────────┬──────────────────────┘
                   │ SQL Queries / Dialect
                   ▼
┌─────────────────────────────────────────┐
│         Database (MySQL)                │
│  - Table: contact_messages              │
└─────────────────────────────────────────┘
```

---

## 🔌 REST API Specifications

### 1. Health Check Endpoint
- **URL:** `GET /api/health`
- **Response (200 OK):**
```json
{
  "status": "UP",
  "service": "Pooja Patil Portfolio Backend",
  "version": "1.0.0",
  "framework": "Spring Boot 3.2.5 (Java 17+)",
  "timestamp": "2026-11-24T12:00:00"
}
```

### 2. Submit Contact Inquiry
- **URL:** `POST /api/contact`
- **Headers:** `Content-Type: application/json`
- **Request Body:**
```json
{
  "name": "Jane Recruiter",
  "email": "jane@techfirm.com",
  "subject": "Java Developer Role Interview",
  "message": "Hi Pooja, we were impressed with your portfolio projects and would love to connect."
}
```
- **Response (201 CREATED):**
```json
{
  "status": "SUCCESS",
  "message": "Contact message received and saved successfully.",
  "data": {
    "id": 1,
    "name": "Jane Recruiter",
    "email": "jane@techfirm.com",
    "subject": "Java Developer Role Interview",
    "message": "Hi Pooja, we were impressed with your portfolio projects and would love to connect.",
    "createdAt": "2026-11-24T12:05:00"
  },
  "timestamp": "2026-11-24T12:05:00"
}
```

### 3. List Inquiries (Admin)
- **URL:** `GET /api/contact`
- **Response (200 OK):**
```json
{
  "status": "SUCCESS",
  "message": "Retrieved contact messages successfully.",
  "data": [ ... ]
}
```

---

## 🛠️ Environment Variables

| Variable | Default Value | Description |
|---|---|---|
| `PORT` | `8080` | Web server listening port |
| `DB_URL` | `jdbc:mysql://localhost:3306/pooja_portfolio` | MySQL JDBC Connection URL |
| `DB_USERNAME` | `root` | Database username |
| `DB_PASSWORD` | `""` (empty) | Database password |
| `JPA_DDL_AUTO` | `update` | Hibernate schema management |

---

## 🧪 Build and Test Locally

1. **Compile & Package JAR:**
   ```bash
   mvn clean package -DskipTests
   ```
2. **Run Application:**
   ```bash
   java -jar target/portfolio-backend-1.0.0.jar
   ```
3. **Or run with Spring Boot plugin:**
   ```bash
   mvn spring-boot:run
   ```
