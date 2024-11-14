import { NextResponse } from "next/server";

const successStories = [
  {
    id: "1",
    title: "Alumni Success Story 1",
    description: "An inspiring journey of transformation.",
    fullStory: "This alumni's journey began with a deep commitment to personal growth and leadership. Through hard work, mentorship, and the opportunities provided by the program, they achieved remarkable results, impacting their community and setting an example for others to follow."
  },
  {
    id: "2",
    title: "Alumni Success Story 2",
    description: "How a graduate is leading change in sustainability.",
    fullStory: "Driven by a passion for sustainability, this graduate has implemented initiatives that make a significant environmental impact. Their story highlights the challenges and triumphs of bringing sustainable practices into their industry and inspiring others to follow suit."
  },
  {
    id: "3",
    title: "Alumni Success Story 3",
    description: "From participant to industry leader in AI.",
    fullStory: "Starting from humble beginnings, this individual developed a deep understanding of AI and quickly rose through the ranks to become a leader in the field. Their journey illustrates the transformative power of dedication and technological innovation."
  },
  {
    id: "4",
    title: "Alumni Success Story 4",
    description: "A story of resilience and leadership in the tech world.",
    fullStory: "This story showcases the resilience needed to navigate the tech world. Facing numerous challenges, the alum demonstrated unwavering commitment, learning from failures, and emerging as a respected leader in their organization."
  },
  {
    id: "5",
    title: "Alumni Success Story 5",
    description: "Building a sustainable future through innovative solutions.",
    fullStory: "Committed to sustainability, this alum has created innovative solutions that have reshaped industry practices. Their full story delves into the development of these solutions and the positive environmental impact they have achieved."
  },
  {
    id: "6",
    title: "Alumni Success Story 6",
    description: "Empowering communities with AI-driven projects.",
    fullStory: "With a focus on community empowerment, this individual uses AI to develop projects that benefit underserved populations. Their story details the impact of these projects on the community and the personal satisfaction of making a difference."
  },
  {
    id: "7",
    title: "Alumni Success Story 7",
    description: "Leading a team to success in a global corporation.",
    fullStory: "As a leader in a global corporation, this alum has overcome significant obstacles to lead a successful team. Their journey reflects the importance of teamwork, effective communication, and adaptability in a fast-paced global environment."
  },
  {
    id: "8",
    title: "Alumni Success Story 8",
    description: "Transitioning from academia to impactful leadership roles.",
    fullStory: "This alum successfully transitioned from academia to leadership roles in the industry, applying their knowledge and research skills in innovative ways. Their story highlights the challenges and successes encountered along the way."
  },
  {
    id: "9",
    title: "Alumni Success Story 9",
    description: "Using AI to tackle real-world challenges in healthcare.",
    fullStory: "In healthcare, this alum applies AI to address pressing issues, developing tools that improve patient outcomes. Their full story emphasizes the dedication required to make a positive impact in such a critical field."
  },
  {
    id: "10",
    title: "Alumni Success Story 10",
    description: "A journey from a novice to a tech entrepreneur.",
    fullStory: "Starting as a tech novice, this alum's journey to entrepreneurship is inspiring. Their full story covers the development of their business, the obstacles they faced, and the successes they achieved along the way."
  }
];

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  const story = successStories.find((story) => story.id === id);

  if (!story) {
    return NextResponse.json({ error: "Story not found" }, { status: 404 });
  }

  return NextResponse.json(story);
}
