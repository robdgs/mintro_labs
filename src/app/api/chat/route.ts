import { NextRequest, NextResponse } from "next/server";
import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function POST(request: NextRequest) {
  try {
    console.log("🤖 Chat API called");
    console.log("API Key exists:", !!process.env.GROQ_API_KEY);

    const body = await request.json();
    const { messages } = body;

    console.log("Messages:", messages);

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { success: false, error: "Invalid messages format" },
        { status: 400 }
      );
    }

    console.log("📤 Sending to Groq...");

    const response = await groq.chat.completions.create({
      model: "openai/gpt-oss-120b",
      max_tokens: 1024,
      messages: [
        {
          role: "user",
          content: `You are a helpful learning assistant for an educational platform. Help users with questions about courses, articles, and quizzes. Keep responses concise and friendly. If users ask about specific content, guide them to explore the platform.`,
        },
        ...messages.map((msg: any) => ({
          role: msg.type === "user" ? "user" : "assistant",
          content: msg.content,
        })),
      ],
    });

    console.log("✅ Response received:", response.choices[0]?.message?.content?.substring(0, 100));

    const content = response.choices[0]?.message?.content;
    if (!content) {
      throw new Error("No content in response");
    }

    return NextResponse.json({
      success: true,
      message: content,
    });
  } catch (error) {
    console.error("❌ Error in chat API:", error);
    const errorMessage = error instanceof Error ? error.message : String(error);
    return NextResponse.json(
      { success: false, error: `Failed to process message: ${errorMessage}` },
      { status: 500 }
    );
  }
}
