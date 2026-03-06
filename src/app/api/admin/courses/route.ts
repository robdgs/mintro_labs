import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import fs from "fs/promises";
import path from "path";

// Verifica se l'utente è admin
function isAuthenticated() {
  const token = cookies().get("admin_token");
  if (!token) return false;

  try {
    const decoded = Buffer.from(token.value, "base64").toString();
    const parts = decoded.split(":");
    return (
      parts.length === 3 && parts[0] === (process.env.ADMIN_USERNAME || "admin")
    );
  } catch {
    return false;
  }
}

// GET - Recupera tutti i corsi
export async function GET() {
  try {
    // Importa direttamente i dati
    const { courses } = await import("@/data/platform");

    return NextResponse.json({
      success: true,
      courses: courses,
    });
  } catch (error) {
    console.error("Error loading courses:", error);
    return NextResponse.json(
      { success: false, message: "Error reading courses" },
      { status: 500 },
    );
  }
}

// POST - Aggiungi un nuovo corso
export async function POST(request: Request) {
  if (!isAuthenticated()) {
    return NextResponse.json(
      { success: false, message: "Unauthorized" },
      { status: 401 },
    );
  }

  try {
    const courseData = await request.json();
    const filePath = path.join(process.cwd(), "src/data/platform.ts");
    const fileContent = await fs.readFile(filePath, "utf-8");

    // Importa i corsi attuali
    const { courses } = await import("@/data/platform");

    // Genera nuovo ID
    const ids = courses.map((c) => parseInt(c.id)).filter((id) => !isNaN(id));
    const newId = (Math.max(...ids, 0) + 1).toString();

    const newCourse = {
      id: newId,
      ...courseData,
      thumbnail: courseData.thumbnail || undefined,
      category: courseData.category || undefined,
      modules: courseData.modules || [],
    };

    // Aggiungi il nuovo corso
    const updatedCourses = [...courses, newCourse];

    // Ricostruisci il file
    const coursesString = JSON.stringify(updatedCourses, null, 2);
    const articlesMatch = fileContent.match(/(export const articles:[\s\S]*)/);

    const newContent = `import { ICourse, IArticle, IQuiz } from "@/types";

export const courses: ICourse[] = ${coursesString};

${articlesMatch ? articlesMatch[0] : ""}`;

    await fs.writeFile(filePath, newContent, "utf-8");

    return NextResponse.json(
      { success: true, course: newCourse },
      { status: 201 },
    );
  } catch (error) {
    console.error("Create error:", error);
    return NextResponse.json(
      { success: false, message: "Error creating course" },
      { status: 500 },
    );
  }
}

// PUT - Aggiorna un corso esistente
export async function PUT(request: Request) {
  if (!isAuthenticated()) {
    return NextResponse.json(
      { success: false, message: "Unauthorized" },
      { status: 401 },
    );
  }

  try {
    const courseData = await request.json();
    const filePath = path.join(process.cwd(), "src/data/platform.ts");
    const fileContent = await fs.readFile(filePath, "utf-8");

    // Importa i corsi attuali
    const { courses } = await import("@/data/platform");

    // Trova e aggiorna il corso
    const courseIndex = courses.findIndex((c) => c.id === courseData.id);

    if (courseIndex === -1) {
      return NextResponse.json(
        { success: false, message: "Course not found" },
        { status: 404 },
      );
    }

    const updatedCourses = [...courses];
    updatedCourses[courseIndex] = {
      ...courses[courseIndex],
      ...courseData,
    };

    // Ricostruisci il file
    const coursesString = JSON.stringify(updatedCourses, null, 2);
    const articlesMatch = fileContent.match(/(export const articles:[\s\S]*)/);

    const newContent = `import { ICourse, IArticle, IQuiz } from "@/types";

export const courses: ICourse[] = ${coursesString};

${articlesMatch ? articlesMatch[0] : ""}`;

    await fs.writeFile(filePath, newContent, "utf-8");

    return NextResponse.json(
      { success: true, message: "Course updated" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Update error:", error);
    return NextResponse.json(
      { success: false, message: "Error updating course" },
      { status: 500 },
    );
  }
}

// DELETE - Elimina un corso
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
        { success: false, message: "Course ID required" },
        { status: 400 },
      );
    }

    const filePath = path.join(process.cwd(), "src/data/platform.ts");
    const fileContent = await fs.readFile(filePath, "utf-8");

    // Importa i corsi attuali
    const { courses } = await import("@/data/platform");

    // Filtra il corso da eliminare
    const updatedCourses = courses.filter((c) => c.id !== id);

    if (updatedCourses.length === courses.length) {
      return NextResponse.json(
        { success: false, message: "Course not found" },
        { status: 404 },
      );
    }

    // Ricostruisci il file
    const coursesString = JSON.stringify(updatedCourses, null, 2);
    const articlesMatch = fileContent.match(/(export const articles:[\s\S]*)/);

    const newContent = `import { ICourse, IArticle, IQuiz } from "@/types";

export const courses: ICourse[] = ${coursesString};

${articlesMatch ? articlesMatch[0] : ""}`;

    await fs.writeFile(filePath, newContent, "utf-8");

    return NextResponse.json(
      { success: true, message: "Course deleted" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Delete error:", error);
    return NextResponse.json(
      { success: false, message: "Error deleting course" },
      { status: 500 },
    );
  }
}
