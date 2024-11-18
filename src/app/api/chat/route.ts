import { NextResponse } from "next/server";
import { OpenAI } from "openai";

// יצירת מופע של OpenAI עם מפתח ה-API מהסביבה
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,  // הסימן "!" מבטיח שהמפתח לא יהיה null או undefined
});

export async function GET() {
  // טיפול בבקשה מסוג GET
  try {
    console.log("GET request received");
    return NextResponse.json({ message: "Hello from OpenAI API" });
  } catch (error) {
    console.error("GET request error:", error);
    // return NextResponse.json({ error: `Failed to process GET request: ${error.message}` }, { status: 500 });
  }
}

export async function POST(req: Request) {
  // טיפול בבקשה מסוג POST
  console.log("Received POST request");

  try {
    const { message } = await req.json();
    console.log("Message received:", message);

    if (!message) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }

    // קריאה ל-OpenAI API עם המודל הנכון
    const completion = await openai.chat.completions.create({
      model: "gpt-4",  // שם המודל הנכון
      messages: [{ role: "user", content: message }],
    });

    const reply = completion.choices[0].message?.content;
    return NextResponse.json({ reply });  // שליחה של התשובה מה-AI
  } catch (error) {
    console.error("Error in POST request:", error);
    // return NextResponse.json({ error: `Failed to fetch response from OpenAI: ${error.message}` }, { status: 500 });
  }
}
