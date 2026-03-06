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

// GET - Recupera tutti gli articoli
export async function GET() {
  try {
    const articles = await sql`
      SELECT * FROM articles ORDER BY created_at DESC
    `;

    const formattedArticles = articles.map((article: any) => ({
      id: article.id.toString(),
      title: article.title,
      description: article.description,
      content: article.content,
      category: article.category,
      author: article.author,
      readTime: article.read_time,
      date: article.date,
      thumbnail: article.thumbnail,
      tags: article.tags || [],
    }));

    return NextResponse.json({
      success: true,
      articles: formattedArticles,
    });
  } catch (error) {
    console.error("Error loading articles:", error);
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

    const result = await sql`
      INSERT INTO articles (title, description, content, category, author, read_time, date, thumbnail, tags)
      VALUES (${articleData.title}, ${articleData.description}, ${articleData.content},
              ${articleData.category}, ${articleData.author}, ${articleData.readTime},
              ${articleData.date}, ${articleData.thumbnail || "/images/articles/default.jpg"},
              ${articleData.tags || []})
      RETURNING *
    `;

    const newArticle = result[0];

    return NextResponse.json(
      {
        success: true,
        article: {
          id: newArticle.id.toString(),
          title: newArticle.title,
          description: newArticle.description,
          content: newArticle.content,
          category: newArticle.category,
          author: newArticle.author,
          readTime: newArticle.read_time,
          date: newArticle.date,
          thumbnail: newArticle.thumbnail,
          tags: newArticle.tags,
        },
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Error creating article:", error);
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

    if (!articleData.id) {
      return NextResponse.json(
        { success: false, message: "Article ID required" },
        { status: 400 },
      );
    }

    const result = await sql`
      UPDATE articles
      SET title = ${articleData.title},
          description = ${articleData.description},
          content = ${articleData.content},
          category = ${articleData.category},
          author = ${articleData.author},
          read_time = ${articleData.readTime},
          date = ${articleData.date},
          thumbnail = ${articleData.thumbnail || "/images/articles/default.jpg"},
          tags = ${articleData.tags || []},
          updated_at = CURRENT_TIMESTAMP
      WHERE id = ${parseInt(articleData.id)}
      RETURNING *
    `;

    if (result.length === 0) {
      return NextResponse.json(
        { success: false, message: "Article not found" },
        { status: 404 },
      );
    }

    return NextResponse.json(
      { success: true, message: "Article updated" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error updating article:", error);
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

    const result = await sql`
      DELETE FROM articles WHERE id = ${parseInt(id)}
      RETURNING id
    `;

    if (result.length === 0) {
      return NextResponse.json(
        { success: false, message: "Article not found" },
        { status: 404 },
      );
    }

    return NextResponse.json(
      { success: true, message: "Article deleted" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error deleting article:", error);
    return NextResponse.json(
      { success: false, message: "Error deleting article" },
      { status: 500 },
    );
  }
}
