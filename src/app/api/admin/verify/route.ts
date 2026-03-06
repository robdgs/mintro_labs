import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET() {
  const token = cookies().get("admin_token");

  if (!token) {
    return NextResponse.json({ authenticated: false }, { status: 401 });
  }

  // Verifica il token (semplificato)
  // In produzione, usa JWT con verifica della firma
  try {
    const decoded = Buffer.from(token.value, "base64").toString();
    const parts = decoded.split(":");

    if (
      parts.length === 3 &&
      parts[0] === (process.env.ADMIN_USERNAME || "admin")
    ) {
      return NextResponse.json({ authenticated: true }, { status: 200 });
    }
  } catch (error) {
    // Token invalido
  }

  return NextResponse.json({ authenticated: false }, { status: 401 });
}
