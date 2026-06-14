import { NextRequest, NextResponse } from "next/server";
import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.DATABASE_URL!);

export async function POST(request: NextRequest) {
  try {
    console.log("📸 Inizio upload foto profilo...");

    const formData = await request.formData();
    const file = formData.get("file") as File;
    const userId = formData.get("userId") as string;

    console.log("File:", file?.name, "Size:", file?.size);
    console.log("UserId:", userId);

    if (!file || !userId) {
      console.log("❌ File o userId mancante");
      return NextResponse.json(
        { success: false, error: "Missing file or userId" },
        { status: 400 }
      );
    }

    // Limit file size to 5MB
    if (file.size > 5 * 1024 * 1024) {
      console.log("❌ File troppo grande:", file.size);
      return NextResponse.json(
        { success: false, error: "File too large. Max 5MB allowed" },
        { status: 400 }
      );
    }

    // Convert file to base64
    console.log("🔄 Conversione a base64...");
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const base64 = buffer.toString("base64");
    const dataUrl = `data:${file.type};base64,${base64}`;

    console.log("✅ Base64 creato, lunghezza:", dataUrl.length);

    // Save to database
    console.log("💾 Salvataggio nel database...");
    const result = await sql`
      UPDATE users
      SET profile_picture_url = ${dataUrl},
          updated_at = ${new Date().toISOString()}
      WHERE privy_user_id = ${userId}
      RETURNING profile_picture_url
    `;

    console.log("Database result:", result.length, "righe aggiornate");

    if (result.length === 0) {
      console.log("❌ Utente non trovato:", userId);
      return NextResponse.json(
        { success: false, error: "User not found" },
        { status: 404 }
      );
    }

    console.log("✅ Upload completato con successo");
    return NextResponse.json({
      success: true,
      message: "Profile picture updated successfully",
      pictureUrl: dataUrl,
    });
  } catch (error) {
    console.error("❌ Errore upload foto:", error);
    return NextResponse.json(
      { success: false, error: `Internal server error: ${error instanceof Error ? error.message : "Unknown error"}` },
      { status: 500 }
    );
  }
}
