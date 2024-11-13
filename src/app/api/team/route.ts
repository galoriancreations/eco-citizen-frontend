import { NextResponse } from 'next/server';

export async function GET() {
  const team = [
    { id: 1, name: "Ben Goertzel", position: "Co-Founder", description: "Expert in AI and futurism." },
    { id: 2, name: "David Hanson", position: "Co-Founder", description: "Pioneer in robotics and AI development." },
    { id: 3, name: "Sophia Robot", position: "Thought Leader", description: "AI-driven robot inspiring future leaders." }
  ];
  return NextResponse.json(team);
}
