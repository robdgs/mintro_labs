import { NextRequest, NextResponse } from "next/server";
import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.DATABASE_URL!);

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get("userId");

    if (!userId) {
      return NextResponse.json(
        { success: false, error: "User ID required" },
        { status: 400 }
      );
    }

    // Get user profile
    const userResult = await sql`
      SELECT privy_user_id, email, wallet_address, profile_picture_url, created_at
      FROM users
      WHERE privy_user_id = ${userId}
    `;

    if (userResult.length === 0) {
      return NextResponse.json(
        { success: false, error: "User not found" },
        { status: 404 }
      );
    }

    const user = userResult[0];

    // Get completed courses with details
    const completedCourses = await sql`
      SELECT DISTINCT
        c.id,
        c.title,
        c.description,
        c.duration,
        c.level,
        c.thumbnail,
        c.category,
        c.instructor,
        MAX(up.completed_at) as completed_at
      FROM user_progress up
      JOIN courses c ON c.id = up.content_id
      WHERE up.user_id = ${userId}
        AND up.content_type = 'course'
        AND up.completed = true
      GROUP BY c.id, c.title, c.description, c.duration, c.level, c.thumbnail, c.category, c.instructor
      ORDER BY MAX(up.completed_at) DESC
    `;

    // Get completed articles with details
    const completedArticles = await sql`
      SELECT DISTINCT
        a.id,
        a.title,
        a.description,
        a.category,
        a.author,
        a.read_time,
        a.date,
        a.thumbnail,
        MAX(up.completed_at) as completed_at
      FROM user_progress up
      JOIN articles a ON a.id = up.content_id
      WHERE up.user_id = ${userId}
        AND up.content_type = 'article'
        AND up.completed = true
      GROUP BY a.id, a.title, a.description, a.category, a.author, a.read_time, a.date, a.thumbnail
      ORDER BY MAX(up.completed_at) DESC
    `;

    // Get completed quizzes with details and score
    const completedQuizzes = await sql`
      SELECT DISTINCT
        q.id,
        q.title,
        q.description,
        q.category,
        q.difficulty,
        q.total_questions,
        MAX(up.completed_at) as completed_at
      FROM user_progress up
      JOIN quizzes q ON q.id = up.content_id
      WHERE up.user_id = ${userId}
        AND up.content_type = 'quiz'
        AND up.completed = true
      GROUP BY q.id, q.title, q.description, q.category, q.difficulty, q.total_questions
      ORDER BY MAX(up.completed_at) DESC
    `;

    return NextResponse.json({
      success: true,
      user: {
        privy_user_id: user.privy_user_id,
        email: user.email,
        wallet_address: user.wallet_address,
        profile_picture_url: user.profile_picture_url,
        created_at: user.created_at,
      },
      completedCourses,
      completedArticles,
      completedQuizzes,
      stats: {
        coursesCompleted: completedCourses.length,
        articlesRead: completedArticles.length,
        quizzesPassed: completedQuizzes.length,
      },
    });
  } catch (error) {
    console.error("Error fetching user profile:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
