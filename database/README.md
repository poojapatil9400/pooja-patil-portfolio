# Database Setup & MySQL Workbench Guide

This guide explains how to initialize and verify the MySQL database for the portfolio backend.

---

## 🗄️ Database Architecture

- **Database Name:** `pooja_portfolio`
- **Table Name:** `contact_messages`
- **Engine:** `InnoDB`
- **Character Set:** `utf8mb4`

### Table Schema

| Column | Type | Constraints | Description |
|---|---|---|---|
| `id` | `BIGINT` | `PRIMARY KEY, AUTO_INCREMENT` | Unique record identifier |
| `name` | `VARCHAR(100)` | `NOT NULL` | Sender's full name |
| `email` | `VARCHAR(150)` | `NOT NULL, INDEX` | Sender's email address |
| `subject` | `VARCHAR(200)` | `NOT NULL` | Contact subject |
| `message` | `TEXT` | `NOT NULL` | Detailed message content |
| `created_at` | `TIMESTAMP` | `DEFAULT CURRENT_TIMESTAMP, INDEX` | Submission timestamp |

---

## 🖥️ Instructions to Connect via MySQL Workbench

1. **Launch MySQL Workbench**:
   - Open MySQL Workbench on your desktop.
2. **Create New Connection**:
   - Click the **`+`** icon next to *MySQL Connections*.
   - **Connection Name:** `Localhost Portfolio`
   - **Hostname:** `127.0.0.1` (or `localhost`)
   - **Port:** `3306`
   - **Username:** `root`
   - Click **Test Connection**, enter your MySQL root password, and verify success.
3. **Run Schema Script**:
   - Open `database/schema.sql` in MySQL Workbench (`File` -> `Open SQL Script...`).
   - Click the **Execute (Lightning Bolt)** icon.
   - The `pooja_portfolio` schema and `contact_messages` table will be created.
4. **View Stored Messages**:
   ```sql
   USE pooja_portfolio;
   SELECT * FROM contact_messages ORDER BY created_at DESC;
   ```

---

## 🔐 Environment Variables (Security Best Practice)

To avoid hardcoding passwords, use environment variables in PowerShell or your deployment dashboard:

```powershell
$env:DB_URL = "jdbc:mysql://localhost:3306/pooja_portfolio?createDatabaseIfNotExist=true&useSSL=false&serverTimezone=UTC"
$env:DB_USERNAME = "root"
$env:DB_PASSWORD = "YourSecurePassword"
```
