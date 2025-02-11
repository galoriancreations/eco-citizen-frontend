import type { NextApiRequest, NextApiResponse } from "next";
import OpenAI from "openai";


console.log("OpenAI API Key:", process.env.OPENAI_API_KEY);

// יצירת מופע OpenAI עם מפתח ה-API
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
 
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end("Method Not Allowed");
  }

  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Message is required" });
  }

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: message }],
    });

    const reply = completion.choices[0].message?.content;
    res.status(200).json({ reply });
  } catch (error) {
    console.error("OpenAI API error:", error);
    res.status(500).json({ error: "Failed to fetch response from OpenAI" });
  }
}
