import { NextResponse } from 'next/server';

export async function GET() {
  const programData = {
    title: "Our Program",
    description: "This is an immersive program designed to develop future leaders.",
    paths: [
      "Personalized Learning",
      "Immersive Simulations",
      "Collaborative Projects"
    ],
    benefits: [
      "Enhances leadership skills",
      "Fosters ethical decision-making",
      "Prepares for global challenges"
    ]
  };
  
  return NextResponse.json(programData);
}