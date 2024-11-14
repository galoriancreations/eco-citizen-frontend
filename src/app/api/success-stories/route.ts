import { NextResponse } from "next/server";

const successStories = [
  { id: "1", title: "Alumni Success Story 1", description: "An inspiring journey of transformation." },
  { id: "2", title: "Alumni Success Story 2", description: "How a graduate is leading change in sustainability." },
  { id: "3", title: "Alumni Success Story 3", description: "From participant to industry leader in AI." },
  { id: "4", title: "Alumni Success Story 4", description: "A story of resilience and leadership in the tech world." },
  { id: "5", title: "Alumni Success Story 5", description: "Building a sustainable future through innovative solutions." },
  { id: "6", title: "Alumni Success Story 6", description: "Empowering communities with AI-driven projects." },
  { id: "7", title: "Alumni Success Story 7", description: "Leading a team to success in a global corporation." },
  { id: "8", title: "Alumni Success Story 8", description: "Transitioning from academia to impactful leadership roles." },
  { id: "9", title: "Alumni Success Story 9", description: "Using AI to tackle real-world challenges in healthcare." },
  { id: "10", title: "Alumni Success Story 10", description: "A journey from a novice to a tech entrepreneur." }
];

export async function GET() {
  return NextResponse.json(successStories);
}
