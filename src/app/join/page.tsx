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

      {/* Program Application Section */}
      <section className="py-16 px-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Program Application</h2>
        <p className="text-gray-700 mb-4">
          Ting Global Academy invites you to embark on a transformative journey with our AI-Enhanced Leadership Training
          Program. Our application process is straightforward and designed to help us understand your goals and aspirations.
        </p>
        <ol className="list-decimal list-inside text-gray-700 space-y-2">
          <li>
            <strong>Step 1:</strong> Submit your application by clicking the button below.
          </li>
          <li>
            <strong>Step 2:</strong> Attend an information session to learn more about the program and meet our team.
          </li>
          <li>
            <strong>Step 3:</strong> Await confirmation and further instructions on how to begin your journey.
          </li>
        </ol>
        <div className="mt-6 text-center">
          <a
            href="/apply"
            className="inline-block bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
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

      {/* Call to Action */}
      <section className="py-16 bg-white text-center">
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
    </main>
  );
}
