import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { sql } from "@/lib/db";
import jwt from "jsonwebtoken";

const JWT_SECRET =
  process.env.JWT_SECRET || "fallback-secret-change-in-production";

// Verifica se l'utente è admin
function isAuthenticated() {
  const token = cookies().get("admin_token");
  if (!token) return false;

  try {
    const decoded = jwt.verify(token.value, JWT_SECRET) as {
      username: string;
      role: string;
    };
    return decoded.username && decoded.role === "admin";
  } catch {
    return false;
  }
}

// GET - Recupera tutti i corsi
export async function GET() {
  try {
    const courses = await sql`
      SELECT c.*,
        COALESCE(
          json_agg(
            json_build_object(
              'id', cm.module_id,
              'title', cm.title,
              'description', cm.description,
              'duration', cm.duration,
              'order', cm."order",
              'content', cm.content
            ) ORDER BY cm."order"
          ) FILTER (WHERE cm.id IS NOT NULL),
          '[]'
        ) as modules
      FROM courses c
      LEFT JOIN course_modules cm ON c.id = cm.course_id
      GROUP BY c.id
      ORDER BY c.id
    `;

    // Trasforma i dati nel formato atteso
    const formattedCourses = courses.map((course: any) => ({
      id: course.id.toString(),
      title: course.title,
      description: course.description,
      duration: course.duration,
      level: course.level,
      thumbnail: course.thumbnail,
      category: course.category,
      instructor: course.instructor,
      students: course.students,
      modules: course.modules,
    }));

    return NextResponse.json({
      success: true,
      courses: formattedCourses,
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

    // Inserisci il nuovo corso
    const result = await sql`
      INSERT INTO courses (title, description, duration, level, thumbnail, category, instructor, students)
      VALUES (${courseData.title}, ${courseData.description}, ${courseData.duration}, 
              ${courseData.level}, ${courseData.thumbnail || null}, ${courseData.category || null},
              ${courseData.instructor || null}, ${courseData.students || 0})
      RETURNING *
    `;

    const newCourse = result[0];

    // Inserisci i moduli se presenti
    if (courseData.modules && courseData.modules.length > 0) {
      for (const module of courseData.modules) {
        await sql`
          INSERT INTO course_modules (course_id, module_id, title, description, duration, "order", content)
          VALUES (${newCourse.id}, ${module.id}, ${module.title}, ${module.description},
                  ${module.duration}, ${module.order}, ${module.content})
        `;
      }
    }

    return NextResponse.json(
      {
        success: true,
        course: {
          id: newCourse.id.toString(),
          ...courseData,
        },
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Error creating course:", error);
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

    if (!courseData.id) {
      return NextResponse.json(
        { success: false, message: "Course ID required" },
        { status: 400 },
      );
    }

    // Aggiorna il corso
    const result = await sql`
      UPDATE courses 
      SET title = ${courseData.title},
          description = ${courseData.description},
          duration = ${courseData.duration},
          level = ${courseData.level},
          thumbnail = ${courseData.thumbnail || null},
          category = ${courseData.category || null},
          instructor = ${courseData.instructor || null},
          students = ${courseData.students || 0},
          updated_at = CURRENT_TIMESTAMP
      WHERE id = ${parseInt(courseData.id)}
      RETURNING *
    `;

    if (result.length === 0) {
      return NextResponse.json(
        { success: false, message: "Course not found" },
        { status: 404 },
      );
    }

    // Aggiorna i moduli se presenti
    if (courseData.modules) {
      // Elimina i moduli esistenti
      await sql`DELETE FROM course_modules WHERE course_id = ${parseInt(courseData.id)}`;

      // Inserisci i nuovi moduli
      for (const module of courseData.modules) {
        await sql`
          INSERT INTO course_modules (course_id, module_id, title, description, duration, "order", content)
          VALUES (${parseInt(courseData.id)}, ${module.id}, ${module.title}, ${module.description},
                  ${module.duration}, ${module.order}, ${module.content})
        `;
      }
    }

    return NextResponse.json(
      { success: true, message: "Course updated" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error updating course:", error);
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

    // Elimina il corso (i moduli verranno eliminati automaticamente per CASCADE)
    const result = await sql`
      DELETE FROM courses WHERE id = ${parseInt(id)}
      RETURNING id
    `;

    if (result.length === 0) {
      return NextResponse.json(
        { success: false, message: "Course not found" },
        { status: 404 },
      );
    }

    return NextResponse.json(
      { success: true, message: "Course deleted" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error deleting course:", error);
    return NextResponse.json(
      { success: false, message: "Error deleting course" },
      { status: 500 },
    );
  }
}
