"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";

interface SuccessStory {
  id: number;
  title: string;
  description: string;
  fullStory: string;
  imageUrl: string;
}

export default function SuccessStoryPage() {
  const [story, setStory] = useState<SuccessStory | null>(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const router = useRouter();

  useEffect(() => {
    const fetchStory = async () => {
      try {
        const response = await fetch(`/api/success-stories/${id}`);
        const data = await response.json();
        setStory(data);
      } catch (error) {
        console.error("Failed to fetch success story:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStory();
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-blue-100 to-blue-200">
        <p className="text-2xl font-semibold text-blue-700 animate-pulse">
          Loading Story...
        </p>
      </div>
    );
  }

  if (!story) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-blue-50">
        <p className="text-2xl font-semibold text-red-700">Story not found</p>
        <button onClick={() => router.back()} className="mt-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition">
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-16 text-gray-900 max-w-4xl">
      
      <h1 className="text-5xl font-bold text-center text-gray-800 mb-10">
        {story.title}
      </h1>
      
      <div className="relative overflow-hidden rounded-lg shadow-lg mb-10">
        <img
          src={story.imageUrl || "/images/success-stories.jpg"}
          alt={story.title}
          className="w-full h-96 object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      
      <p className="text-lg leading-relaxed text-gray-700 tracking-wide mb-8">
        {story.fullStory}
      </p>

      <button
        onClick={() => router.push("/success-stories")}
        className="mt-4 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition"
      >
        ← Back to Success Stories
      </button>
    </div>
  );
}
