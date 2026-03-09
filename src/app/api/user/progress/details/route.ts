import { NextRequest, NextResponse } from "next/server";
import { neon } from "@neondatabase/serverless";
import { courses, articles, quizzes } from "@/data/platform";

const sql = neon(process.env.DATABASE_URL!);

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get("userId");
    const type = searchParams.get("type");

    if (!userId || !type) {
      return NextResponse.json(
        { success: false, error: "User ID and type required" },
        { status: 400 },
      );
    }

    let contentType: string;
    switch (type) {
      case "articles":
        contentType = "article";
        break;
      case "courses":
        contentType = "course";
        break;
      case "quizzes":
        contentType = "quiz";
        break;
      default:
        return NextResponse.json(
          { success: false, error: "Invalid type" },
          { status: 400 },
        );
    }

    // Get completed items from database
    const completedItems = await sql`
      SELECT content_id, completed_at
      FROM user_progress 
      WHERE user_id = ${userId} 
      AND content_type = ${contentType} 
      AND completed = true
      ORDER BY completed_at DESC
    `;

    // Map database IDs to actual content
    let items;
    if (type === "articles") {
      items = completedItems
        .map((item) => articles.find((a) => a.id === String(item.content_id)))
        .filter(Boolean);
    } else if (type === "courses") {
      items = completedItems
        .map((item) => courses.find((c) => c.id === String(item.content_id)))
        .filter(Boolean);
    } else if (type === "quizzes") {
      items = completedItems
        .map((item) => quizzes.find((q) => q.id === String(item.content_id)))
        .filter(Boolean);
    }

    return NextResponse.json({
      success: true,
      items,
    });
  } catch (error) {
    console.error("Error fetching progress details:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 },
    );
  }
}
