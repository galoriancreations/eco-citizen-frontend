import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    console.log("Received POST request");
    // Parse the request body
    const { fullName, email, reason } = await req.json();

    // Validate input data
    if (!fullName || !email || !reason) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    // Simulate saving the data (e.g., in a database or external service)
    console.log("New application received:", { fullName, email, reason });

    // Return a success response
    return NextResponse.json({ message: "Application submitted successfully!" });
  } catch (error) {
    console.error("Error handling form submission:", error);
    return NextResponse.json(
      { error: "Failed to process the application." },
      { status: 500 }
    );
  }
}
