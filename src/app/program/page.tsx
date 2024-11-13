"use client";
import Head from "next/head";
import { useState } from "react";

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
            <li className="hover:scale-105 transform transition duration-300">
              <h3 className="text-xl font-medium text-blue-600">Personalized Learning Paths</h3>
              <p className="text-gray-700">
                Our AI-driven platform creates a customized learning journey for each participant, focusing on their strengths, areas for development, and leadership aspirations. Experience a leadership training program that evolves with you.
              </p>
            </li>
            <li className="hover:scale-105 transform transition duration-300">
              <h3 className="text-xl font-medium text-blue-600">Personalized Learning Paths with AI Avatars</h3>
              <p className="text-gray-700">
                At the heart of Ting Global Academy's innovative approach to leadership training is the integration of AI avatars, offering a highly personalized and immersive learning experience.
              </p>
            </li>
            <li className="hover:scale-105 transform transition duration-300">
              <h3 className="text-xl font-medium text-blue-600">Immersive Simulations</h3>
              <p className="text-gray-700">
                Step into virtual scenarios that challenge your decision-making, strategy, and ethical reasoning. From crisis management to steering organizational change, our VR simulations provide real-world leadership practice without the risks.
              </p>
              <p className="text-gray-700 mt-2 font-semibold">
                Have conversations and specialized training with the AI avatar.
              </p>
            </li>
            <li className="hover:scale-105 transform transition duration-300">
              <h3 className="text-xl font-medium text-blue-600">Collaborative Learning Networks</h3>
              <p className="text-gray-700">
                Connect with peers across the globe in our Leadership Labs. Collaborate on projects, share insights, and build a network of future leaders committed to making a difference.
              </p>
              <p className="text-gray-700 mt-2 font-semibold">
                This includes dedicated chatrooms, WhatsApp & Telegram groups, and Think Tanks.
              </p>
              <div className="mt-6 flex justify-center space-x-4">
                <a
                  href="https://chat.whatsapp.com/YOUR_WHATSAPP_GROUP_LINK"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
                >
                  Join WhatsApp Group
                </a>
                <a
                  href="https://t.me/YOUR_TELEGRAM_GROUP_LINK"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                >
                  Join Telegram Group
                </a>
              </div>
            </li>
            <li className="hover:scale-105 transform transition duration-300">
              <h3 className="text-xl font-medium text-blue-600">Ethics and Sustainability in Leadership</h3>
              <p className="text-gray-700">
                Leadership is more than achieving targets. It's about making wise choices that are supported by subject knowledge and intuitive acumen that inform regenerative practices. Our program emphasizes the importance of integrity and environmental stewardship in leadership.
              </p>
            </li>
            <li className="hover:scale-105 transform transition duration-300">
              <h3 className="text-xl font-medium text-blue-600">Continuous Learning and Community</h3>
              <p className="text-gray-700">
                Graduating from our program is just the beginning. Join our alumni network for ongoing learning opportunities, mentorship, and support as you continue your leadership journey.
              </p>
            </li>
          </ul>
        </section>

        {/* Section: AI in Leadership */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">AI in Leadership: Our Approach</h2>
          <div className="space-y-8">
            <div className="hover:scale-105 transform transition duration-300">
              <h3 className="text-xl font-medium text-teal-600">Technology Behind the Training</h3>
              <p className="text-gray-700">
                Discover the cutting-edge AI technology that powers Ting Global Academy’s training program. Our tech-driven approach sets a new standard for leadership training.
              </p>
            </div>
            <div className="hover:scale-105 transform transition duration-300">
              <h3 className="text-xl font-medium text-teal-600">Benefits of AI-Enhanced Learning</h3>
              <p className="text-gray-700">
                Our AI-driven learning offers personalized, engaging, and relevant leadership training to prepare you for the digital era’s challenges and opportunities.
              </p>
            </div>
          </div>
        </section>

        {/* Section: Join the Program */}
        <section className="text-center max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-800">Join the Program</h2>
          <p className="mt-4 text-gray-600">
            Ready to transform your leadership potential? Start your journey with Ting Global Academy's AI-Enhanced Leadership Training Program.
          </p>
          <a
            href="/join"
            className="inline-block mt-6 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition transform hover:scale-105"
          >
            Apply Now
          </a>

          {/* Information Sessions */}
          <h2 className="text-2xl font-semibold text-gray-800 mt-12">Information Sessions</h2>
          <p className="mt-4 text-gray-600">
            Join our virtual sessions to learn more about the program, meet our team, and get your questions answered. Reserve your spot today.
          </p>
          <div className="mt-6">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/watch?v=GiLuloy37yM" // החליפי את VIDEO_ID עם הקוד של הסרטון
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="mx-auto"
            ></iframe>
          </div>
        </section>

        {/* Section: Ting Global Academy Initiatives */}
        <section className="max-w-4xl mx-auto mt-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-8">Ting Global Academy Initiatives</h2>
          <div className="space-y-8">
            <div className="hover:scale-105 transform transition duration-300 bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-500">Future Leaders Program</h3>
              <p className="text-gray-700">
                A comprehensive training initiative to equip young talents with the skills, knowledge, and mindset for innovative, ethical, and sustainable leadership.
              </p>
            </div>
            <div className="hover:scale-105 transform transition duration-300 bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-teal-500">The Innovation Nations Games (TING) Olympics</h3>
              <p className="text-gray-700">
                A global event where think tanks work on Sustainable Development Goals (SDGs) and the data economy. This multi-week event fosters innovation and change.
              </p>
            </div>
            <div className="hover:scale-105 transform transition duration-300 bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-600">TING Future of Work Portal</h3>
              <p className="text-gray-700">
                A platform exploring the future of work with resources to help adapt to an evolving job market.
              </p>
            </div>
            <div className="hover:scale-105 transform transition duration-300 bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-teal-400">TING Thinking Method Workshops</h3>
              <p className="text-gray-700">
                Interactive workshops teaching innovative thinking methods for creative problem-solving.
              </p>
            </div>
            <div className="hover:scale-105 transform transition duration-300 bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-400">Share On Magic Games</h3>
              <p className="text-gray-700">
                Engaging games designed to create a free environment for sharing and caring.
              </p>
            </div>
          </div>
        </section>

        {/* Section: AI Avatar Chat */}
        <section className="max-w-4xl mx-auto text-center mt-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Chat with Our AI Avatar</h2>
          <div className="bg-gray-100 p-6 rounded-lg">
            {/* Display Chat History */}
            <div className="space-y-4 mb-4">
              {chatHistory.map((entry, index) => (
                <div key={index} className={`${entry.role === "user" ? "text-right" : "text-left"}`}>
                  <p className={`text-sm ${entry.role === "user" ? "bg-blue-100" : "bg-green-100"} p-2 rounded-lg`}>
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
            <button onClick={handleSendMessage} className="bg-purple-500 text-white py-2 px-4 rounded-lg hover:bg-purple-600" disabled={isLoading}>
              {isLoading ? "Loading..." : "Send Message"}
            </button>
          </div>
   
        </section>
      
      </main>
    </div>
   

  );
}
