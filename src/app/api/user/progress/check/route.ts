import { NextRequest, NextResponse } from "next/server";
import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.DATABASE_URL!);

// GET - Check if user has completed specific content
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get("userId");
    const contentType = searchParams.get("contentType");
    const contentId = searchParams.get("contentId");

    if (!userId || !contentType || !contentId) {
      return NextResponse.json(
        { success: false, error: "Missing required parameters" },
        { status: 400 },
      );
    }

    const result = await sql`
      SELECT completed, completed_at 
      FROM user_progress 
      WHERE user_id = ${userId} 
      AND content_type = ${contentType} 
      AND content_id = ${contentId}
    `;

    return NextResponse.json({
      success: true,
      completed: result.length > 0 ? result[0].completed : false,
      completedAt: result.length > 0 ? result[0].completed_at : null,
    });
  } catch (error) {
    console.error("Error checking progress:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 },
    );
  }
}
