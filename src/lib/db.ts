import { neon } from "@neondatabase/serverless";

// Connessione al database
export const sql = neon(process.env.DATABASE_URL!);
