"use client";

import { useParams } from "next/navigation";

const pageContent = {
  "discover-purpose": {
    title: "Discover Your Purpose",
    content: "This is the content for Discover Your Purpose. Find clarity about what drives you and your goals in life.",
  },
  "evaluate-leadership": {
    title: "Evaluate Leadership Fundamentals",
    content: "This page helps you assess your understanding of leadership fundamentals and how to improve.",
  },
  "identify-values": {
    title: "Identify Your Core Values",
    content: "Discover your top 10 values and understand how they influence your decisions and goals.",
  },
  // הוסף כאן תוכן נוסף לכל יעד
};

export default function DynamicPage() {
  const params = useParams();
  const { slug } = params;
  const content = pageContent[slug];

  if (!content) {
    return (
      <div className="max-w-4xl mx-auto py-12 text-center">
        <h1 className="text-3xl font-bold text-gray-800">Page Not Found</h1>
        <p className="text-gray-600 mt-4">Sorry, we couldn't find the page you're looking for.</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-12 px-6 bg-gray-50 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">{content.title}</h1>
      <p className="text-gray-700">{content.content}</p>
    </div>
  );
}
