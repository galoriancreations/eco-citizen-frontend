"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FaArrowRight } from "react-icons/fa";

interface SuccessStory {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

export default function SuccessStoriesPage() {
  const [stories, setStories] = useState<SuccessStory[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const response = await fetch("/api/success-stories");
        const data = await response.json();
        setStories(data);
      } catch (error) {
        console.error("Failed to fetch success stories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStories();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-blue-50">
        <p className="text-xl font-medium text-blue-700 animate-pulse">
          Loading Success Stories...
        </p>
      </div>
    );
  }

  return (
    <main className="bg-gradient-to-b from-blue-50 to-blue-100 text-gray-900 py-16">
      {/* Header Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">Success Stories</h1>
          <p className="text-lg max-w-3xl mx-auto">
            Transformative Leadership Journeys
          </p>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="bg-gradient-to-b from-blue-50 to-blue-100 text-gray-900">
        <div className="container mx-auto px-6 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {stories.map((story) => (
            <div
              key={story.id}
              onClick={() => router.push(`/success-stories/${story.id}`)}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl cursor-pointer flex flex-col justify-between"
            >
              <img
                src={story.imageUrl || "/images/success-stories.jpg"}
                alt={story.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-8 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800">{story.title}</h3>
                  <p className="text-gray-600 mb-6">
                    {story.description.length > 100 ? story.description.slice(0, 100) + "..." : story.description}
                  </p>
                </div>
                <div className="flex items-center justify-end">
                  <button
                    className="flex items-center text-blue-600 hover:text-blue-800 font-semibold"
                    onClick={(e) => {
                      e.stopPropagation();
                      router.push(`/success-stories/${story.id}`);
                    }}
                  >
                    Read More <FaArrowRight className="ml-2" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Explore the impactful projects led by our participants, from sustainability initiatives to innovative startups.
          </p>
          <a
            href="/program"
            className="inline-block mt-6 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
          >
            Explore Initiatives
          </a>
        </div>
      </section>
    </main>
  );
}
