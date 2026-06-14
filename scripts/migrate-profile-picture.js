#!/usr/bin/env node

// Script per aggiornare la colonna profile_picture_url a TEXT
require("dotenv/config");
const { neon } = require("@neondatabase/serverless");

async function migrateColumn() {
  console.log("🔄 Aggiornamento colonna profile_picture_url...\n");

  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL non configurato nel file .env");
  }

  const sql = neon(process.env.DATABASE_URL);

  try {
    console.log("📝 Conversione VARCHAR(500) → TEXT...");
    await sql`
      ALTER TABLE users
      ALTER COLUMN profile_picture_url TYPE TEXT
    `;
    console.log("✅ Migrazione completata con successo!\n");
  } catch (error) {
    console.error("❌ Errore durante la migrazione:", error.message);
    process.exit(1);
  }
}

migrateColumn()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
