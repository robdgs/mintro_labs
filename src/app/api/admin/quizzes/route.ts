import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { sql } from "@/lib/db";
import jwt from "jsonwebtoken";

const JWT_SECRET =
  process.env.JWT_SECRET || "fallback-secret-change-in-production";

// Verifica se l'utente è admin
function isAuthenticated() {
  const token = cookies().get("admin_token");
  if (!token) return false;

  try {
    const decoded = jwt.verify(token.value, JWT_SECRET) as {
      username: string;
      role: string;
    };
    return decoded.username && decoded.role === "admin";
  } catch {
    return false;
  }
}

// GET - Recupera tutti i quiz
export async function GET() {
  try {
    const quizzes = await sql`
      SELECT q.*,
        COALESCE(
          json_agg(
            json_build_object(
              'id', qq.question_id,
              'question', qq.question,
              'options', qq.options,
              'correctAnswer', qq.correct_answer,
              'explanation', qq.explanation
            )
          ) FILTER (WHERE qq.id IS NOT NULL),
          '[]'
        ) as questions
      FROM quizzes q
      LEFT JOIN quiz_questions qq ON q.id = qq.quiz_id
      GROUP BY q.id
      ORDER BY q.id
    `;

    const formattedQuizzes = quizzes.map((quiz: any) => {
      const quizQuestions = Array.isArray(quiz.questions)
        ? quiz.questions.map((q: any) => ({
            ...q,
            correctAnswer: parseInt(q.correctAnswer, 10), // Converti stringa in numero
          }))
        : [];
      return {
        id: quiz.id.toString(),
        title: quiz.title,
        description: quiz.description,
        category: quiz.category,
        difficulty: quiz.difficulty,
        duration: quiz.duration,
        passingScore: quiz.passing_score,
        questions: quizQuestions.length, // Numero di domande
        quizQuestions: quizQuestions, // Array delle domande
      };
    });

    return NextResponse.json({
      success: true,
      quizzes: formattedQuizzes,
    });
  } catch (error) {
    console.error("Error loading quizzes:", error);
    return NextResponse.json(
      { success: false, message: "Error reading quizzes" },
      { status: 500 },
    );
  }
}

// POST - Aggiungi un nuovo quiz
export async function POST(request: Request) {
  if (!isAuthenticated()) {
    return NextResponse.json(
      { success: false, message: "Unauthorized" },
      { status: 401 },
    );
  }

  try {
    const quizData = await request.json();

    // Inserisci il nuovo quiz
    const result = await sql`
      INSERT INTO quizzes (title, description, category, difficulty, duration, passing_score, total_questions)
      VALUES (${quizData.title}, ${quizData.description}, ${quizData.category},
              ${quizData.difficulty}, ${quizData.duration}, ${quizData.passingScore || 70},
              ${quizData.questions?.length || 0})
      RETURNING *
    `;

    const newQuiz = result[0];

    // Inserisci le domande se presenti
    if (quizData.questions && quizData.questions.length > 0) {
      for (const question of quizData.questions) {
        await sql`
          INSERT INTO quiz_questions (quiz_id, question_id, question, options, correct_answer, explanation)
          VALUES (${newQuiz.id}, ${question.id}, ${question.question},
                  ${JSON.stringify(question.options)}, ${question.correctAnswer},
                  ${question.explanation || null})
        `;
      }
    }

    return NextResponse.json(
      {
        success: true,
        quiz: {
          id: newQuiz.id.toString(),
          ...quizData,
        },
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Error creating quiz:", error);
    return NextResponse.json(
      { success: false, message: "Error creating quiz" },
      { status: 500 },
    );
  }
}

// PUT - Aggiorna un quiz esistente
export async function PUT(request: Request) {
  if (!isAuthenticated()) {
    return NextResponse.json(
      { success: false, message: "Unauthorized" },
      { status: 401 },
    );
  }

  try {
    const quizData = await request.json();

    if (!quizData.id) {
      return NextResponse.json(
        { success: false, message: "Quiz ID required" },
        { status: 400 },
      );
    }

    // Aggiorna il quiz
    const result = await sql`
      UPDATE quizzes
      SET title = ${quizData.title},
          description = ${quizData.description},
          category = ${quizData.category},
          difficulty = ${quizData.difficulty},
          duration = ${quizData.duration},
          passing_score = ${quizData.passingScore || 70},
          total_questions = ${quizData.questions?.length || 0},
          updated_at = CURRENT_TIMESTAMP
      WHERE id = ${parseInt(quizData.id)}
      RETURNING *
    `;

    if (result.length === 0) {
      return NextResponse.json(
        { success: false, message: "Quiz not found" },
        { status: 404 },
      );
    }

    // Aggiorna le domande se presenti
    if (quizData.questions) {
      // Elimina le domande esistenti
      await sql`DELETE FROM quiz_questions WHERE quiz_id = ${parseInt(quizData.id)}`;

      // Inserisci le nuove domande
      for (const question of quizData.questions) {
        await sql`
          INSERT INTO quiz_questions (quiz_id, question_id, question, options, correct_answer, explanation)
          VALUES (${parseInt(quizData.id)}, ${question.id}, ${question.question},
                  ${JSON.stringify(question.options)}, ${question.correctAnswer},
                  ${question.explanation || null})
        `;
      }
    }

    return NextResponse.json(
      { success: true, message: "Quiz updated" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error updating quiz:", error);
    return NextResponse.json(
      { success: false, message: "Error updating quiz" },
      { status: 500 },
    );
  }
}

// DELETE - Elimina un quiz
export async function DELETE(request: Request) {
  if (!isAuthenticated()) {
    return NextResponse.json(
      { success: false, message: "Unauthorized" },
      { status: 401 },
    );
  }

  try {
    const { id } = await request.json();

    if (!id) {
      return NextResponse.json(
        { success: false, message: "Quiz ID required" },
        { status: 400 },
      );
    }

    // Elimina il quiz (le domande verranno eliminate automaticamente per CASCADE)
    const result = await sql`
      DELETE FROM quizzes WHERE id = ${parseInt(id)}
      RETURNING id
    `;

    if (result.length === 0) {
      return NextResponse.json(
        { success: false, message: "Quiz not found" },
        { status: 404 },
      );
    }

    return NextResponse.json(
      { success: true, message: "Quiz deleted" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error deleting quiz:", error);
    return NextResponse.json(
      { success: false, message: "Error deleting quiz" },
      { status: 500 },
    );
  }
}
