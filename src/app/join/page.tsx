"use client";

import { programSteps, programBenefits, programFeatures, pricingIncentives } from "@/app/constants/joinProgramData";

export default function JoinTheProgram() {
  return (
    <main className="bg-gray-50 text-gray-900 min-h-screen">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-blue-500 to-teal-400 text-white py-16 text-center">
        <h1 className="text-4xl font-bold">Join the Program</h1>
        <p className="mt-4 text-lg max-w-3xl mx-auto">
          Start your leadership journey today. Explore the transformative power of AI-enhanced training and discover your purpose.
        </p>
      </header>

      <section className="py-16 px-6 max-w-5xl mx-auto space-y-16">
        {/* Program Application Section */}
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Program Application</h2>
          <p className="text-gray-700 mb-8">
            Embark on a transformative journey with Ting Global Academy's AI-Enhanced Leadership Training Program.
          </p>
          <h3 className="text-2xl font-medium text-gray-800 mb-4">Who Is This Course Good For?</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            {programFeatures.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>

        {/* Steps Section */}
        <div className="bg-gray-100 p-8 rounded-lg shadow-lg space-y-6">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Steps to Join</h2>
          {programSteps.map((step, index) => (
            <div key={index} className="flex items-start bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg shadow-md">
              <span className="text-2xl font-semibold text-blue-500 mr-4">{step.number}</span>
              <p className="text-gray-700">{step.description}</p>
            </div>
          ))}
          <div className="text-center mt-8">
            <a
              href="/apply"
              className="inline-block bg-blue-500 text-white py-3 px-6 rounded-md hover:bg-blue-600 transition"
            >
              Apply Now
            </a>
          </div>
        </div>

        {/* Program Benefits Section */}
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">What You'll Learn</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-4">
            {programBenefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </div>

        {/* Pricing Section */}
        <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Pricing and Incentives</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-4">
            {pricingIncentives.map((incentive, index) => (
              <li key={index}>{incentive}</li>
            ))}
          </ul>
        </div>
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
