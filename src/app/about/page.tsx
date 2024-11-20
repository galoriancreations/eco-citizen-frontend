"use client";

import { useEffect, useState } from "react";
import { questionsData } from "@/app/constants/questionsData";

export default function AboutPage() {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    // Fetch team data from API route
    async function fetchTeam() {
      const response = await fetch("/api/team");
      const data = await response.json();
      setTeam(data);
    }
    fetchTeam();
  }, []);

  return (
    <main className="bg-white text-gray-900">
      {/* Section: Header */}
      <header className="bg-gradient-to-r from-blue-500 to-teal-400 text-white py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">About Us</h1>
          <h2 className="text-lg mt-4">Our Mission and Vision</h2>
        </div>
      </header>

      {/* Section: Our Mission and Vision */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6 text-blue-600">Our Story</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Ting Global Academy was founded with a vision to transform traditional leadership training.
            We believe that effective leadership in the 21st century benefits from an evolved approach—one that is personalized, enhanced by technology, and rooted in ethical, equitable, and sustainable decision-making.
          </p>
          <h3 className="text-2xl font-semibold mt-10 text-teal-600">Vision for Leadership</h3>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mt-4">
            Our vision is to nurture leaders who are skilled in navigating technological and global challenges in addition to being committed to making positive, sustainable impacts in their organizations and communities.
          </p>
        </div>
      </section>

      {/* Section: The 5 Ws and H */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {questionsData.map((item, index) => (
              <div key={index} className="bg-white shadow-md rounded-lg p-6">
                <h3 className="text-3xl font-semibold mb-4 flex items-center">
                  {item.question}
                  <img
                    src="/images/question-mark.png" // Path to your uploaded image
                    alt="Question Mark"
                    className="ml-2 w-8 h-8"
                  />
                </h3>
                {Array.isArray(item.answer) ? (
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    {item.answer.map((answer, i) => (
                      <li key={i}>{answer}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-700">{item.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section: Meet the Team */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Meet the Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.length > 0 ? (
              team.map((member) => (
                <div key={member.id} className="text-center bg-gray-100 rounded-lg p-6 shadow-md">
                  <img
                    src={`/images/team-member.WEBP`}
                    alt={member.name}
                    className="rounded-full mx-auto w-32 h-32"
                  />
                  <h3 className="text-xl font-semibold mt-4">{member.name}</h3>
                  <p className="text-gray-600">{member.position}</p>
                  <p className="text-gray-500 text-sm mt-2">{member.description}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-600 text-center col-span-full">Loading team data...</p>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
