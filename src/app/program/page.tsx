"use client";
import Head from "next/head";
import { useState } from "react";
import { FaWhatsapp, FaTelegram } from "react-icons/fa";
import Card from "../components/Card";
import { programFeatures, testYourselfLinks, initiatives } from "@/app/constants/programData";

export default function OurProgram() {
  const [chatHistory, setChatHistory] = useState<{ role: string; content: string }[]>([]);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async () => {
    setIsLoading(true);
    const currentHistory = [...chatHistory, { role: "user", content: message }];
    setChatHistory(currentHistory);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });

      if (!response.ok) {
        console.error("API Error:", response.statusText);
        return;
      }
      const data = await response.json();
      setChatHistory((prev) => [...prev, { role: "ai", content: data.reply }]);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setMessage("");
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Head>
        <title>Our Program - Ting Global Academy</title>
        <meta name="description" content="Explore our AI-Enhanced Leadership Training Program at Ting Global Academy." />
      </Head>
      <header className="bg-gradient-to-r from-blue-500 to-teal-400 text-white py-16 text-center">
        <h1 className="text-4xl font-bold">Our Program</h1>
        <h2 className="mt-4 text-lg">AI-Enhanced Leadership Training</h2>
      </header>

      <main className="py-10 px-6 space-y-16">
        {/* Section: Program Features */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Program Features</h2>
          
          <ul className="space-y-8">
            {programFeatures.map((feature, index) => (
              <li key={index} className="hover:scale-105 transform transition duration-300">
                <h3 className="text-xl font-medium text-blue-600">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
                {feature.extraDescription && (
                  <p className="text-gray-700 mt-2 font-semibold">{feature.extraDescription}</p>
                )}
                {feature.links && (
                  <div className="mt-6 flex justify-center space-x-4">
                    {feature.links.map((link, linkIndex) => (
                      <a
                        key={linkIndex}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${link.bgColor} text-white p-4 rounded-full ${link.hoverColor} transition flex items-center justify-center`}
                        title={link.label}
                      >
                        {link.icon === "FaWhatsapp" && <FaWhatsapp size={24} />}
                        {link.icon === "FaTelegram" && <FaTelegram size={24} />}
                      </a>
                    ))}
                  </div>
                )}
                {/* Add Chat Section after Immersive Simulations */}
                {feature.title === "Immersive Simulations" && (
                  <section className="max-w-4xl mx-auto text-center mt-12">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Chat with Our AI Avatar</h2>
                    <div className="bg-gray-100 p-6 rounded-lg">
                      {/* Display Chat History */}
                      <div className="space-y-4 mb-4">
                        {chatHistory.map((entry, index) => (
                          <div key={index} className="flex">
                            <p className={`text-${entry.role === "user" ? "blue" : "green"}-600`}>
                              {entry.content}
                            </p>
                          </div>
                        ))}
                      </div>
                      <input
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="border p-2 rounded w-full mb-4"
                        placeholder="Ask something..."
                        disabled={isLoading}
                      />
                      <button
                        onClick={handleSendMessage}
                        className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-teal-500"
                        disabled={isLoading}
                      >
                        {isLoading ? "Loading..." : "Send Message"}
                      </button>
                    </div>
                  </section>
                )}
              </li>
            ))}
          </ul>
        </section>

        {/* Section: Personalized Learning Path */}
        <section className="max-w-6xl mx-auto py-12 px-6 bg-gray-50 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Personalized Learning Path: What You'll Learn
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testYourselfLinks.map((link) => (
              <Card key={link.slug} title={link.title} description={link.description} link={`/${link.slug}`} />
            ))}
          </div>
        </section>

        {/* Section: Ting Global Academy Initiatives */}
        <section className="max-w-4xl mx-auto mt-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-8">Ting Global Academy Initiatives</h2>
          <div className="space-y-8">
            {initiatives.map((initiative, index) => (
              <div key={index} className="hover:scale-105 transform transition duration-300 bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className={`text-xl font-semibold ${initiative.color}`}>{initiative.title}</h3>
                <p className="text-gray-700">{initiative.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
