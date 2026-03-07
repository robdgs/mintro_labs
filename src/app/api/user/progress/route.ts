import { NextRequest, NextResponse } from "next/server";
import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.DATABASE_URL!);

// GET - Retrieve user progress
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get("userId");

    if (!userId) {
      return NextResponse.json(
        { success: false, error: "User ID required" },
        { status: 400 },
      );
    }

    // Count completed courses
    const coursesCompleted = await sql`
      SELECT COUNT(*) as count 
      FROM user_progress 
      WHERE user_id = ${userId} 
      AND content_type = 'course' 
      AND completed = true
    `;

    // Count articles read
    const articlesRead = await sql`
      SELECT COUNT(*) as count 
      FROM user_progress 
      WHERE user_id = ${userId} 
      AND content_type = 'article' 
      AND completed = true
    `;

    // Count quizzes passed
    const quizzesPassed = await sql`
      SELECT COUNT(*) as count 
      FROM user_progress 
      WHERE user_id = ${userId} 
      AND content_type = 'quiz' 
      AND completed = true
    `;

    return NextResponse.json({
      success: true,
      progress: {
        coursesCompleted: parseInt(coursesCompleted[0].count),
        articlesRead: parseInt(articlesRead[0].count),
        quizzesPassed: parseInt(quizzesPassed[0].count),
      },
    });
  } catch (error) {
    console.error("Error fetching user progress:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 },
    );
  }
}

// POST - Save or update user progress
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { userId, contentType, contentId, completed } = body;

    if (!userId || !contentType || !contentId) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 },
      );
    }

    // Check if record already exists
    const existing = await sql`
      SELECT * FROM user_progress 
      WHERE user_id = ${userId} 
      AND content_type = ${contentType} 
      AND content_id = ${contentId}
    `;

    if (existing.length > 0) {
      // Update existing record
      await sql`
        UPDATE user_progress 
        SET completed = ${completed}, 
            completed_at = ${completed ? new Date().toISOString() : null}
        WHERE user_id = ${userId} 
        AND content_type = ${contentType} 
        AND content_id = ${contentId}
      `;
    } else {
      // Insert new record
      await sql`
        INSERT INTO user_progress (user_id, content_type, content_id, completed, completed_at)
        VALUES (
          ${userId}, 
          ${contentType}, 
          ${contentId}, 
          ${completed}, 
          ${completed ? new Date().toISOString() : null}
        )
      `;
    }

    return NextResponse.json({
      success: true,
      message: "Progress updated successfully",
    });
  } catch (error) {
    console.error("Error updating user progress:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 },
    );
  }
}
