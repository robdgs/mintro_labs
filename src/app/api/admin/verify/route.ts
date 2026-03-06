import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "fallback-secret-change-in-production";

export async function GET() {
  const token = cookies().get("admin_token");

  if (!token) {
    return NextResponse.json({ authenticated: false }, { status: 401 });
  }

  try {
    const decoded = jwt.verify(token.value, JWT_SECRET) as { username: string; role: string };
    
    if (decoded.username && decoded.role === "admin") {
      return NextResponse.json({ authenticated: true }, { status: 200 });
    }
  } catch (error) {
    // Token invalido o scaduto
  }

  return NextResponse.json({ authenticated: false }, { status: 401 });
}
