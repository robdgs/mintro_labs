#!/usr/bin/env node

// Script per eseguire la migrazione dei dati
const { execSync } = require("child_process");
const path = require("path");

console.log("🔄 Esecuzione migrazione dati...\n");

try {
  // Compila ed esegui lo script TypeScript
  execSync("npx tsx scripts/migrate-data.ts", {
    cwd: process.cwd(),
    stdio: "inherit",
  });
} catch (error) {
  console.error("❌ Errore durante la migrazione:", error.message);
  process.exit(1);
}
