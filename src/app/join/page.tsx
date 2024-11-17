"use client";

export default function JoinTheProgram() {
  return (
    <main className="bg-gray-50 text-gray-900 min-h-screen">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-blue-500 to-teal-400 text-white py-16 text-center">
        <h1 className="text-4xl font-bold">Join the Program</h1>
        <p className="mt-4 text-lg">
          Start your leadership journey today. Explore the transformative power of AI-enhanced training and discover your purpose.
        </p>
      </header>

      {/* Program Application Section */}
      <section className="py-16 px-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Program Application</h2>
        <p className="text-gray-700 mb-8">
          Embark on a transformative journey with Ting Global Academy's AI-Enhanced Leadership Training Program. Designed for a wide range of individuals, from professionals seeking a career shift to students planning their futures, this program revolutionizes leadership, purpose, and personal growth with cutting-edge technology and AI guidance.
        </p>

        {/* Who Is This Course Good For */}
        <h3 className="text-2xl font-medium text-gray-800 mb-4">Who Is This Course Good For?</h3>
        <ul className="list-inside list-disc text-gray-700 space-y-4">
          <li>Professionals contemplating career changes</li>
          <li>Aspiring and seasoned entrepreneurs</li>
          <li>Creatives and artists aiming for impact</li>
          <li>Individuals navigating transitions, including mid-life crises or re-entering the workforce</li>
          <li>Students seeking direction for their futures</li>
          <li>Leaders motivated to make a global difference</li>
          <li>Anyone looking to break free from inconsistency and discover a deeper purpose</li>
        </ul>

        {/* Steps Section */}
        <div className="mt-8 space-y-6">
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

      {/* Unprecedented Features Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-gray-800">Unprecedented Features</h2>
          <ul className="list-inside list-disc text-gray-700 mt-6 space-y-4 text-left">
            <li>
              <strong>Avatar-Enhanced Learning Experience:</strong> Dive into an immersive environment with AI-driven avatars. Choose from options like your digital twin, figures from the TWIN SingularityNET project, celebrities, or thought leaders.
            </li>
            <li>
              <strong>Comprehensive Curriculum:</strong> Access exhaustive material on finding your purpose, guided by AI.
            </li>
            <li>
              <strong>Exclusive Content & Free Lifetime Upgrades:</strong> Receive future course expansions at no extra cost.
            </li>
            <li>
              <strong>Practical Tools:</strong> Actionable techniques, worksheets, and guided exercises.
            </li>
            <li>
              <strong>Instant Online Access:</strong> Begin your journey immediately with insights from world-class experts.
            </li>
          </ul>
        </div>
      </section>

      {/* Program Benefits Section */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-3xl font-semibold text-gray-800">What You'll Learn</h2>
        <ul className="list-inside list-disc text-gray-700 mt-6 space-y-4">
          <li>Alignment with your top values and strengths</li>
          <li>Overcoming fears and limiting beliefs</li>
          <li>Crafting a compelling personal vision</li>
          <li>Identifying your niche in the marketplace</li>
          <li>Building strong habits and maintaining motivation</li>
        </ul>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gray-100 text-center">
        <h2 className="text-3xl font-semibold text-gray-800">Pricing and Incentives</h2>
        <ul className="list-inside list-disc text-gray-700 mt-6 space-y-4">
          <li>Introductory Offer: Enjoy one month of FREE access.</li>
          <li>
            <strong>Avatar Selection Pricing:</strong> Choose your preferred avatar with varying price points.
          </li>
          <li>
            <strong>Incentives for Top Graduates:</strong> Earn AGIX tokens for outstanding performance.
          </li>
          <li>
            <strong>Global Scholarships:</strong> Access packages designed to make the program globally accessible.
          </li>
          <li>
            <strong>Academic Partnerships:</strong> Earn academic points through collaboration with universities.
          </li>
        </ul>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-3xl font-semibold text-gray-800">Start Your Leadership Journey Now</h2>
        <p className="text-gray-700 mt-4 max-w-3xl mx-auto">
          Take the first step with Ting Global Academy. Explore your leadership potential and pave the way for a purposeful future.
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
