import { NextResponse } from "next/server";
import { cookies } from "next/headers";

// In produzione, usa variabili d'ambiente e hash delle password
const ADMIN_CREDENTIALS = {
  username: process.env.ADMIN_USERNAME || "admin",
  password: process.env.ADMIN_PASSWORD || "admin123", // Cambia in produzione!
};

export async function POST(request: Request) {
  try {
    const { username, password } = await request.json();

    if (
      username === ADMIN_CREDENTIALS.username &&
      password === ADMIN_CREDENTIALS.password
    ) {
      // Crea un token semplice (in produzione usa JWT)
      const token = Buffer.from(
        `${username}:${Date.now()}:${process.env.JWT_SECRET || "secret"}`,
      ).toString("base64");

      // Imposta cookie con il token
      cookies().set("admin_token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 60 * 60 * 24 * 7, // 7 giorni
        path: "/",
      });

      return NextResponse.json(
        { success: true, message: "Login successful" },
        { status: 200 },
      );
    }

    return NextResponse.json(
      { success: false, message: "Invalid credentials" },
      { status: 401 },
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 },
    );
  }
}
