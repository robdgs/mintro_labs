#!/usr/bin/env node

// Script per inizializzare il database
import { sql } from "../src/lib/db.js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function initDatabase() {
  console.log("🚀 Inizializzazione database...\n");

  try {
    // Leggi il file SQL
    const sqlFile = fs.readFileSync(
      path.join(__dirname, "init-db.sql"),
      "utf-8",
    );

    // Divide il file in singole query (semplificato)
    const statements = sqlFile
      .split(";")
      .map((s) => s.trim())
      .filter((s) => s.length > 0 && !s.startsWith("--"));

    console.log(`Esecuzione di ${statements.length} query SQL...\n`);

    // Esegui ogni statement
    for (const statement of statements) {
      if (statement.trim()) {
        await sql([statement]);
        console.log("✓ Query eseguita");
      }
    }

    console.log("\n✅ Database inizializzato con successo!");
    console.log("\nTabelle create:");
    console.log("  - courses");
    console.log("  - course_modules");
    console.log("  - articles");
    console.log("  - quizzes");
    console.log("  - quiz_questions");
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
