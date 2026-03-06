// Script per migrare i dati da platform.ts al database
import "dotenv/config";
import { sql } from "../src/lib/db";
import { courses, articles, quizzes } from "../src/data/platform";

async function migrateData() {
  console.log("🚀 Inizio migrazione dati...\n");

  try {
    // 1. Migra corsi
    console.log("📚 Migrazione corsi...");
    for (const course of courses) {
      const result = await sql`
        INSERT INTO courses (title, description, duration, level, thumbnail, category, instructor, students)
        VALUES (${course.title}, ${course.description}, ${course.duration}, ${course.level}, 
                ${course.thumbnail || null}, ${course.category || null}, 
                ${course.instructor || null}, ${course.students || 0})
        RETURNING id
      `;

      const courseId = result[0].id;
      console.log(`  ✓ Corso "${course.title}" - ID: ${courseId}`);

      // Migra moduli del corso
      if (course.modules && course.modules.length > 0) {
        for (const module of course.modules) {
          await sql`
            INSERT INTO course_modules (course_id, module_id, title, description, duration, "order", content)
            VALUES (${courseId}, ${module.id}, ${module.title}, ${module.description}, 
                    ${module.duration}, ${module.order}, ${module.content})
          `;
        }
        console.log(`    → ${course.modules.length} moduli migrati`);
      }
    }

    // 2. Migra articoli
    console.log("\n📄 Migrazione articoli...");
    for (const article of articles) {
      await sql`
        INSERT INTO articles (title, description, content, category, author, read_time, date, thumbnail)
        VALUES (${article.title}, ${article.description}, ${article.content || null}, 
                ${article.category}, ${article.author || null}, ${article.readTime}, 
                ${article.date || null}, ${article.thumbnail || null})
      `;
      console.log(`  ✓ Articolo "${article.title}"`);
    }

    // 3. Migra quiz
    console.log("\n❓ Migrazione quiz...");
    for (const quiz of quizzes) {
      const result = await sql`
        INSERT INTO quizzes (title, description, category, difficulty, total_questions)
        VALUES (${quiz.title}, ${quiz.description}, ${quiz.category}, 
                ${quiz.difficulty}, ${quiz.questions || 0})
        RETURNING id
      `;

      const quizId = result[0].id;
      console.log(`  ✓ Quiz "${quiz.title}" - ID: ${quizId}`);

      // Migra domande del quiz
      if (quiz.quizQuestions && quiz.quizQuestions.length > 0) {
        for (const question of quiz.quizQuestions) {
          await sql`
            INSERT INTO quiz_questions (quiz_id, question_id, question, options, correct_answer, explanation)
            VALUES (${quizId}, ${question.id}, ${question.question}, 
                    ${JSON.stringify(question.options)}, ${question.correctAnswer}, 
                    ${question.explanation || null})
          `;
        }
        console.log(`    → ${quiz.quizQuestions.length} domande migrate`);
      }
    }

    console.log("\n✅ Migrazione completata con successo!");
    console.log(`\nRiepilogo:`);
    console.log(`  - Corsi: ${courses.length}`);
    console.log(`  - Articoli: ${articles.length}`);
    console.log(`  - Quiz: ${quizzes.length}`);
  } catch (error) {
    console.error("❌ Errore durante la migrazione:", error);
    throw error;
  }
}

// Esegui la migrazione
migrateData()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
