import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import fs from "fs/promises";
import path from "path";

// Verifica se l'utente è admin
function isAuthenticated() {
  const token = cookies().get("admin_token");
  if (!token) return false;

  try {
    const decoded = Buffer.from(token.value, "base64").toString();
    const parts = decoded.split(":");
    return (
      parts.length === 3 && parts[0] === (process.env.ADMIN_USERNAME || "admin")
    );
  } catch {
    return false;
  }
}

// GET - Recupera tutti i quiz
export async function GET() {
  try {
    const { quizzes } = await import("@/data/platform");

    return NextResponse.json({
      success: true,
      quizzes: quizzes,
    });
  } catch (error) {
    // Error loading quizzes
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
    const filePath = path.join(process.cwd(), "src/data/platform.ts");
    const fileContent = await fs.readFile(filePath, "utf-8");

    const { quizzes } = await import("@/data/platform");

    // Genera nuovo ID
    const ids = quizzes.map((q) => parseInt(q.id)).filter((id) => !isNaN(id));
    const newId = (Math.max(...ids, 0) + 1).toString();

    const newQuiz = {
      id: newId,
      ...quizData,
      quizQuestions: quizData.quizQuestions || [],
    };

    const updatedQuizzes = [...quizzes, newQuiz];

    // Ricostruisci il file
    const beforeQuizzesMatch = fileContent.match(
      /(import[\s\S]*?export const articles:[\s\S]*?\];)/,
    );

    const quizzesString = JSON.stringify(updatedQuizzes, null, 2);

    const newContent = `${beforeQuizzesMatch ? beforeQuizzesMatch[0] : ""}

export const quizzes: IQuiz[] = ${quizzesString};
`;

    await fs.writeFile(filePath, newContent, "utf-8");

    return NextResponse.json({ success: true, quiz: newQuiz }, { status: 201 });
  } catch (error) {
    // Create quiz error
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
    const filePath = path.join(process.cwd(), "src/data/platform.ts");
    const fileContent = await fs.readFile(filePath, "utf-8");

    const { quizzes } = await import("@/data/platform");

    const quizIndex = quizzes.findIndex((q) => q.id === quizData.id);

    if (quizIndex === -1) {
      return NextResponse.json(
        { success: false, message: "Quiz not found" },
        { status: 404 },
      );
    }

    const updatedQuizzes = [...quizzes];
    updatedQuizzes[quizIndex] = {
      ...quizzes[quizIndex],
      ...quizData,
    };

    // Ricostruisci il file
    const beforeQuizzesMatch = fileContent.match(
      /(import[\s\S]*?export const articles:[\s\S]*?\];)/,
    );

    const quizzesString = JSON.stringify(updatedQuizzes, null, 2);

    const newContent = `${beforeQuizzesMatch ? beforeQuizzesMatch[0] : ""}

export const quizzes: IQuiz[] = ${quizzesString};
`;

    await fs.writeFile(filePath, newContent, "utf-8");

    return NextResponse.json(
      { success: true, message: "Quiz updated" },
      { status: 200 },
    );
  } catch (error) {
    // Update quiz error
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

    const filePath = path.join(process.cwd(), "src/data/platform.ts");
    const fileContent = await fs.readFile(filePath, "utf-8");

    const { quizzes } = await import("@/data/platform");

    const updatedQuizzes = quizzes.filter((q) => q.id !== id);

    if (updatedQuizzes.length === quizzes.length) {
      return NextResponse.json(
        { success: false, message: "Quiz not found" },
        { status: 404 },
      );
    }

    // Ricostruisci il file
    const beforeQuizzesMatch = fileContent.match(
      /(import[\s\S]*?export const articles:[\s\S]*?\];)/,
    );

    const quizzesString = JSON.stringify(updatedQuizzes, null, 2);

    const newContent = `${beforeQuizzesMatch ? beforeQuizzesMatch[0] : ""}

export const quizzes: IQuiz[] = ${quizzesString};
`;

    await fs.writeFile(filePath, newContent, "utf-8");

    return NextResponse.json(
      { success: true, message: "Quiz deleted" },
      { status: 200 },
    );
  } catch (error) {
    // Delete quiz error
    return NextResponse.json(
      { success: false, message: "Error deleting quiz" },
      { status: 500 },
    );
  }
}
