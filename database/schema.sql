-- =============================================================================
-- MySQL Database Creation Script: pooja_portfolio
-- Developer: Pooja Patil | Full-Stack Java Developer
-- Target Database: MySQL 8.0+
-- Description: Sets up database, table structure, indexes, and sample records.
-- =============================================================================

-- 1. Create the Database
CREATE DATABASE IF NOT EXISTS pooja_portfolio
    CHARACTER SET utf8mb4
    COLLATE utf8mb4_unicode_ci;

-- 2. Switch to Database
USE pooja_portfolio;

-- 3. Create contact_messages Table
CREATE TABLE IF NOT EXISTS contact_messages (
    id BIGINT NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL,
    subject VARCHAR(200) NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT pk_contact_messages PRIMARY KEY (id),
    INDEX idx_created_at (created_at DESC),
    INDEX idx_email (email)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 4. Sample Verification Records
INSERT INTO contact_messages (name, email, subject, message, created_at)
VALUES 
    (
        'Amit Sharma',
        'amit.sharma@talentconnect.in',
        'Java Developer Role Discussion',
        'Hi Pooja, we reviewed your Student Management System project and your Java certification from Core2web. We would love to discuss an open software developer opportunity with our engineering team.',
        NOW() - INTERVAL 2 DAY
    ),
    (
        'Priya Nair',
        'priya.nair@cloudventures.io',
        'Project Collaboration Inquiry',
        'Greetings Pooja, your Dynamic Canvas Art Generator with multithreading is really impressive. We have a desktop data visualization project and would love to chat.',
        NOW() - INTERVAL 1 DAY
    );

-- 5. Verification Queries
SELECT 'Database pooja_portfolio created successfully!' AS status;
DESCRIBE contact_messages;
SELECT id, name, email, subject, created_at FROM contact_messages;
