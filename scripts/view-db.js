// Script per visualizzare il contenuto del database
require("dotenv/config");
const { neon } = require("@neondatabase/serverless");

async function viewDatabase() {
  console.log("📊 Visualizzazione Database\n");
  console.log("=".repeat(60));

  const sql = neon(process.env.DATABASE_URL);

  try {
    // Corsi
    console.log("\n📚 CORSI:\n");
    const courses =
      await sql`SELECT id, title, level, instructor, students FROM courses ORDER BY id`;
    console.table(courses);

    const courseCount = await sql`SELECT COUNT(*) as total FROM courses`;
    console.log(`Totale corsi: ${courseCount[0].total}\n`);

    // Moduli
    const moduleCount = await sql`SELECT COUNT(*) as total FROM course_modules`;
    console.log(`Totale moduli: ${moduleCount[0].total}\n`);

    // Articoli
    console.log("=".repeat(60));
    console.log("\n📄 ARTICOLI:\n");
    const articles =
      await sql`SELECT id, title, author, category, read_time FROM articles ORDER BY id`;
    console.table(articles);

    const articleCount = await sql`SELECT COUNT(*) as total FROM articles`;
    console.log(`Totale articoli: ${articleCount[0].total}\n`);

    // Quiz
    console.log("=".repeat(60));
    console.log("\n❓ QUIZ:\n");
    const quizzes =
      await sql`SELECT id, title, category, difficulty, total_questions FROM quizzes ORDER BY id`;
    console.table(quizzes);

    const quizCount = await sql`SELECT COUNT(*) as total FROM quizzes`;
    console.log(`Totale quiz: ${quizCount[0].total}\n`);

    // Domande quiz
    const questionCount =
      await sql`SELECT COUNT(*) as total FROM quiz_questions`;
    console.log(`Totale domande quiz: ${questionCount[0].total}\n`);

    // Riepilogo
    console.log("=".repeat(60));
    console.log("\n📊 RIEPILOGO DATABASE:\n");
    console.log(`  Corsi:           ${courseCount[0].total}`);
    console.log(`  Moduli:          ${moduleCount[0].total}`);
    console.log(`  Articoli:        ${articleCount[0].total}`);
    console.log(`  Quiz:            ${quizCount[0].total}`);
    console.log(`  Domande Quiz:    ${questionCount[0].total}`);
    console.log("\n" + "=".repeat(60));
  } catch (error) {
    console.error("❌ Errore:", error);
    throw error;
  }
}

viewDatabase()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
