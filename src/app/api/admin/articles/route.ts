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

// GET - Recupera tutti gli articoli
export async function GET() {
  try {
    const { articles } = await import("@/data/platform");

    return NextResponse.json({
      success: true,
      articles: articles,
    });
  } catch (error) {
    // Error loading articles
    return NextResponse.json(
      { success: false, message: "Error reading articles" },
      { status: 500 },
    );
  }
}

// POST - Aggiungi un nuovo articolo
export async function POST(request: Request) {
  if (!isAuthenticated()) {
    return NextResponse.json(
      { success: false, message: "Unauthorized" },
      { status: 401 },
    );
  }

  try {
    const articleData = await request.json();
    const filePath = path.join(process.cwd(), "src/data/platform.ts");
    const fileContent = await fs.readFile(filePath, "utf-8");

    const { articles } = await import("@/data/platform");

    // Genera nuovo ID
    const ids = articles.map((a) => parseInt(a.id)).filter((id) => !isNaN(id));
    const newId = (Math.max(...ids, 0) + 1).toString();

    const newArticle = {
      id: newId,
      ...articleData,
      thumbnail: articleData.thumbnail || "/images/articles/default.jpg",
    };

    const updatedArticles = [...articles, newArticle];

    // Ricostruisci il file
    const coursesMatch = fileContent.match(
      /(import[\s\S]*?export const courses:[\s\S]*?\];)/,
    );
    const quizzesMatch = fileContent.match(/(export const quizzes:[\s\S]*)/);

    const articlesString = JSON.stringify(updatedArticles, null, 2);

    const newContent = `${coursesMatch ? coursesMatch[0] : ""}

export const articles: IArticle[] = ${articlesString};

${quizzesMatch ? quizzesMatch[0] : ""}`;

    await fs.writeFile(filePath, newContent, "utf-8");

    return NextResponse.json(
      { success: true, article: newArticle },
      { status: 201 },
    );
  } catch (error) {
    // Create article error
    return NextResponse.json(
      { success: false, message: "Error creating article" },
      { status: 500 },
    );
  }
}

// PUT - Aggiorna un articolo esistente
export async function PUT(request: Request) {
  if (!isAuthenticated()) {
    return NextResponse.json(
      { success: false, message: "Unauthorized" },
      { status: 401 },
    );
  }

  try {
    const articleData = await request.json();
    const filePath = path.join(process.cwd(), "src/data/platform.ts");
    const fileContent = await fs.readFile(filePath, "utf-8");

    const { articles } = await import("@/data/platform");

    const articleIndex = articles.findIndex((a) => a.id === articleData.id);

    if (articleIndex === -1) {
      return NextResponse.json(
        { success: false, message: "Article not found" },
        { status: 404 },
      );
    }

    const updatedArticles = [...articles];
    updatedArticles[articleIndex] = {
      ...articles[articleIndex],
      ...articleData,
    };

    // Ricostruisci il file
    const coursesMatch = fileContent.match(
      /(import[\s\S]*?export const courses:[\s\S]*?\];)/,
    );
    const quizzesMatch = fileContent.match(/(export const quizzes:[\s\S]*)/);

    const articlesString = JSON.stringify(updatedArticles, null, 2);

    const newContent = `${coursesMatch ? coursesMatch[0] : ""}

export const articles: IArticle[] = ${articlesString};

${quizzesMatch ? quizzesMatch[0] : ""}`;

    await fs.writeFile(filePath, newContent, "utf-8");

    return NextResponse.json(
      { success: true, message: "Article updated" },
      { status: 200 },
    );
  } catch (error) {
    // Update article error
    return NextResponse.json(
      { success: false, message: "Error updating article" },
      { status: 500 },
    );
  }
}

// DELETE - Elimina un articolo
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
        { success: false, message: "Article ID required" },
        { status: 400 },
      );
    }

    const filePath = path.join(process.cwd(), "src/data/platform.ts");
    const fileContent = await fs.readFile(filePath, "utf-8");

    const { articles } = await import("@/data/platform");

    const updatedArticles = articles.filter((a) => a.id !== id);

    if (updatedArticles.length === articles.length) {
      return NextResponse.json(
        { success: false, message: "Article not found" },
        { status: 404 },
      );
    }

    // Ricostruisci il file
    const coursesMatch = fileContent.match(
      /(import[\s\S]*?export const courses:[\s\S]*?\];)/,
    );
    const quizzesMatch = fileContent.match(/(export const quizzes:[\s\S]*)/);

    const articlesString = JSON.stringify(updatedArticles, null, 2);

    const newContent = `${coursesMatch ? coursesMatch[0] : ""}

export const articles: IArticle[] = ${articlesString};

${quizzesMatch ? quizzesMatch[0] : ""}`;

    await fs.writeFile(filePath, newContent, "utf-8");

    return NextResponse.json(
      { success: true, message: "Article deleted" },
      { status: 200 },
    );
  } catch (error) {
    // Delete article error
    return NextResponse.json(
      { success: false, message: "Error deleting article" },
      { status: 500 },
    );
  }
}
