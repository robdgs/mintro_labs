const { neon } = require("@neondatabase/serverless");
require("dotenv").config({ path: ".env.local" });

const sql = neon(process.env.DATABASE_URL);

async function createUserProgressTable() {
  try {
    console.log("🚀 Creazione tabella user_progress...");

    // Creazione tabella
    await sql`
      CREATE TABLE IF NOT EXISTS user_progress (
        id SERIAL PRIMARY KEY,
        user_id VARCHAR(255) NOT NULL,
        content_type VARCHAR(50) NOT NULL,
        content_id INTEGER NOT NULL,
        completed BOOLEAN DEFAULT false,
        completed_at TIMESTAMP,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        UNIQUE(user_id, content_type, content_id)
      )
    `;

    console.log("✅ Tabella user_progress creata con successo");

    // Creazione indici
    await sql`CREATE INDEX IF NOT EXISTS idx_user_progress_user_id ON user_progress(user_id)`;
    await sql`CREATE INDEX IF NOT EXISTS idx_user_progress_content ON user_progress(content_type, content_id)`;

    console.log("✅ Indici creati con successo");

    // Verifica tabella
    const result = await sql`
      SELECT column_name, data_type 
      FROM information_schema.columns 
      WHERE table_name = 'user_progress'
      ORDER BY ordinal_position
    `;

    console.log("\n📋 Struttura tabella user_progress:");
    result.forEach((col) => {
      console.log(`  - ${col.column_name}: ${col.data_type}`);
    });

    console.log("\n✅ Migrazione completata!");
  } catch (error) {
    console.error("❌ Errore durante la migrazione:", error);
    process.exit(1);
  }
}

createUserProgressTable();
