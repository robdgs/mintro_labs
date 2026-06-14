import { NextRequest, NextResponse } from "next/server";
import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.DATABASE_URL!);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { privy_user_id, email, wallet_address } = body;

    if (!privy_user_id) {
      return NextResponse.json(
        { success: false, error: "Missing privy_user_id" },
        { status: 400 }
      );
    }

    // Check if user already exists
    const existing = await sql`
      SELECT * FROM users
      WHERE privy_user_id = ${privy_user_id}
    `;

    if (existing.length > 0) {
      // Update existing user
      await sql`
        UPDATE users
        SET email = ${email || null},
            wallet_address = ${wallet_address || null},
            updated_at = ${new Date().toISOString()}
        WHERE privy_user_id = ${privy_user_id}
      `;
    } else {
      // Insert new user
      await sql`
        INSERT INTO users (privy_user_id, email, wallet_address, created_at, updated_at)
        VALUES (${privy_user_id}, ${email || null}, ${wallet_address || null}, ${new Date().toISOString()}, ${new Date().toISOString()})
      `;
    }

    return NextResponse.json({
      success: true,
      message: "User profile saved successfully",
    });
  } catch (error) {
    console.error("Error saving user profile:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
