// Script per inizializzare il database
require("dotenv/config");
const { neon } = require("@neondatabase/serverless");
const fs = require("fs");
const path = require("path");

async function initDatabase() {
  console.log("🚀 Inizializzazione database Neon...\n");

  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL non configurato nel file .env");
  }

  const sql = neon(process.env.DATABASE_URL);

  try {
    console.log("📋 Creazione tabella courses...");
    await sql`
      CREATE TABLE IF NOT EXISTS courses (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description TEXT,
        duration VARCHAR(100),
        level VARCHAR(50),
        thumbnail VARCHAR(500),
        category VARCHAR(100),
        instructor VARCHAR(255),
        students INTEGER DEFAULT 0,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;
    console.log("✓ Tabella courses creata\n");

    console.log("📋 Creazione tabella course_modules...");
    await sql`
      CREATE TABLE IF NOT EXISTS course_modules (
        id SERIAL PRIMARY KEY,
        course_id INTEGER NOT NULL REFERENCES courses(id) ON DELETE CASCADE,
        module_id VARCHAR(50) NOT NULL,
        title VARCHAR(255) NOT NULL,
        description TEXT,
        duration VARCHAR(100),
        "order" INTEGER NOT NULL,
        content TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;
    console.log("✓ Tabella course_modules creata\n");

    console.log("📋 Creazione tabella articles...");
    await sql`
      CREATE TABLE IF NOT EXISTS articles (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description TEXT,
        content TEXT,
        category VARCHAR(100),
        author VARCHAR(255),
        read_time VARCHAR(50),
        date VARCHAR(100),
        thumbnail VARCHAR(500),
        tags TEXT[],
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;
    console.log("✓ Tabella articles creata\n");

    console.log("📋 Creazione tabella quizzes...");
    await sql`
      CREATE TABLE IF NOT EXISTS quizzes (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description TEXT,
        category VARCHAR(100),
        difficulty VARCHAR(50),
        duration VARCHAR(50),
        passing_score INTEGER DEFAULT 70,
        total_questions INTEGER DEFAULT 0,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;
    console.log("✓ Tabella quizzes creata\n");

    console.log("📋 Creazione tabella quiz_questions...");
    await sql`
      CREATE TABLE IF NOT EXISTS quiz_questions (
        id SERIAL PRIMARY KEY,
        quiz_id INTEGER NOT NULL REFERENCES quizzes(id) ON DELETE CASCADE,
        question_id VARCHAR(50) NOT NULL,
        question TEXT NOT NULL,
        options JSONB NOT NULL,
        correct_answer VARCHAR(10) NOT NULL,
        explanation TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;
    console.log("✓ Tabella quiz_questions creata\n");

    console.log("📋 Creazione indici...");
    await sql`CREATE INDEX IF NOT EXISTS idx_courses_category ON courses(category)`;
    await sql`CREATE INDEX IF NOT EXISTS idx_courses_level ON courses(level)`;
    await sql`CREATE INDEX IF NOT EXISTS idx_articles_category ON articles(category)`;
    await sql`CREATE INDEX IF NOT EXISTS idx_articles_author ON articles(author)`;
    await sql`CREATE INDEX IF NOT EXISTS idx_quizzes_category ON quizzes(category)`;
    await sql`CREATE INDEX IF NOT EXISTS idx_course_modules_course_id ON course_modules(course_id)`;
    await sql`CREATE INDEX IF NOT EXISTS idx_quiz_questions_quiz_id ON quiz_questions(quiz_id)`;
    console.log("✓ Indici creati\n");

    console.log("✅ Database inizializzato con successo!\n");
    console.log("Tabelle create:");
    console.log("  ✓ courses");
    console.log("  ✓ course_modules");
    console.log("  ✓ articles");
    console.log("  ✓ quizzes");
    console.log("  ✓ quiz_questions\n");
    console.log("🎯 Prossimo passo: node scripts/run-migration.js");
  } catch (error) {
    console.error("❌ Errore durante l'inizializzazione:", error);
    throw error;
  }
}

initDatabase()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
