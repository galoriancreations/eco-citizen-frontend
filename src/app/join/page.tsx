"use client";

export default function JoinTheProgram() {
  return (
    <main className="bg-gray-50 text-gray-900 min-h-screen">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-blue-500 to-teal-400 text-white py-16 text-center">
        <h1 className="text-4xl font-bold">Join the Program</h1>
        <p className="mt-4 text-lg">
          Ready to take the next step in your leadership journey? Learn about our application process and start today.
        </p>
      </header>

      <section className="py-16 px-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
  <h2 className="text-3xl font-semibold text-gray-800 mb-6">Program Application</h2>
  <p className="text-gray-700 mb-8">
    Ting Global Academy invites you to embark on a transformative journey with our AI-Enhanced Leadership Training Program. 
    Our application process is straightforward and designed to help us understand your goals and aspirations.
  </p>

  {/* Steps Section */}
  <div className="space-y-6">
    <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg shadow-md flex items-start">
      <span className="text-2xl font-semibold text-blue-500 mr-4">Step 1</span>
      <p className="text-gray-700">
        Submit your application by clicking the button below.
      </p>
    </div>

    <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg shadow-md flex items-start">
      <span className="text-2xl font-semibold text-blue-500 mr-4">Step 2</span>
      <p className="text-gray-700">
        Attend an information session to learn more about the program and meet our team.
      </p>
    </div>

    <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg shadow-md flex items-start">
      <span className="text-2xl font-semibold text-blue-500 mr-4">Step 3</span>
      <p className="text-gray-700">
        Await confirmation and further instructions on how to begin your journey.
      </p>
    </div>
  </div>

  <div className="mt-8 text-center">
    <a
      href="/apply"
      className="inline-block bg-blue-500 text-white py-3 px-6 rounded-md hover:bg-blue-600 transition"
    >
      Apply Now
    </a>
  </div>
</section>


      {/* Information Sessions Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-gray-800">Information Sessions</h2>
          <p className="text-gray-700 mt-4">
            Join us for a virtual information session to learn more about our program, meet our team, and get your
            questions answered. These sessions are designed to provide a comprehensive overview of the program and what
            you can expect.
          </p>
          <a
            href="https://www.youtube.com"
            target="_blank"
            className="inline-block mt-6 bg-teal-500 text-white py-2 px-4 rounded-md hover:bg-teal-600 transition"
          >
            Watch Now on YouTube
          </a>
        </div>
      </section>

      {/* Additional Information Section: Program Benefits */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-3xl font-semibold text-gray-800">Program Benefits</h2>
        <p className="text-gray-700 mt-4 max-w-3xl mx-auto">
          As a participant, you will gain access to a unique learning experience tailored to your strengths and aspirations.
          Our program offers personalized learning paths, interactive simulations, and AI-driven mentorship, setting a new
          standard for leadership training.
        </p>
        <ul className="list-inside list-disc text-gray-700 mt-6 space-y-4">
          <li>Personalized Learning Paths with AI Avatars</li>
          <li>Interactive and immersive VR simulations</li>
          <li>Global Collaborative Learning Networks</li>
          <li>Focus on ethics and sustainability in leadership</li>
          <li>Continuous learning and community support</li>
        </ul>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-100 text-center">
        <h2 className="text-3xl font-semibold text-gray-800">Take the Next Step</h2>
        <p className="text-gray-700 mt-4">
          Start your leadership journey today by applying to Ting Global Academy. Discover your potential and join a
          global network of future leaders.
        </p>
        <a
          href="/apply"
          className="inline-block mt-6 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
        >
          Apply Now
        </a>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-3xl font-semibold text-gray-800">Frequently Asked Questions</h2>
        <p className="text-gray-700 mt-4 max-w-3xl mx-auto">
          Do you have questions about the program? Check out our FAQ section for answers on the application process, program
          benefits, and more.
        </p>
        <div className="mt-6 text-center">
          <a
            href="/faq"
            className="inline-block bg-teal-500 text-white py-2 px-4 rounded-md hover:bg-teal-600 transition"
          >
            Go to FAQ
          </a>
        </div>
      </section>
    </main>
  );
}
