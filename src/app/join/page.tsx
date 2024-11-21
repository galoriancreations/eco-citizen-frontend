"use client";

import { useState } from "react";
import Swal from "sweetalert2";
import {
  programSteps,
  programBenefits,
  programFeatures,
  pricingIncentives,
} from "@/app/constants/joinProgramData";

export default function JoinTheProgram() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ fullName: "", email: "", reason: "" });
  const [formErrors, setFormErrors] = useState({ fullName: "", email: "", reason: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    setFormData({ fullName: "", email: "", reason: "" }); // Reset form data when closing
    setFormErrors({ fullName: "", email: "", reason: "" });
  };

  const validateForm = () => {
    const errors = { fullName: "", email: "", reason: "" };
    let isValid = true;

    if (!formData.fullName.trim()) {
      errors.fullName = "Full name is required.";
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errors.email = "Email is required.";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      errors.email = "Invalid email format.";
      isValid = false;
    }

    if (!formData.reason.trim()) {
      errors.reason = "Please provide a reason for joining.";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setFormErrors({ ...formErrors, [name]: "" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/members", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to submit application.");
      }

      const data = await response.json();
      Swal.fire({
        title: "Success!",
        text: data.message || "Your application has been submitted successfully.",
        icon: "success",
        confirmButtonText: "OK",
      });
      toggleModal();
    } catch (error: any) {
      Swal.fire({
        title: "Error",
        text: error.message || "Something went wrong. Please try again.",
        icon: "error",
        confirmButtonText: "OK",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
            <button
              onClick={toggleModal}
              className="inline-block bg-blue-500 text-white py-3 px-6 rounded-md hover:bg-blue-600 transition"
            >
              Apply Now
            </button>
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
        <button
          onClick={toggleModal}
          className="inline-block mt-6 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
        >
          Apply Now
        </button>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full relative">
            <button
              onClick={toggleModal}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
            >
              ✖
            </button>
            <h2 className="text-xl font-semibold mb-4">Application Form</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className={`w-full p-3 border rounded-lg ${formErrors.fullName ? "border-red-500" : "border-gray-300"
                    }`}
                />
                {formErrors.fullName && <p className="text-red-500 text-sm mt-1">{formErrors.fullName}</p>}
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full p-3 border rounded-lg ${formErrors.email ? "border-red-500" : "border-gray-300"
                    }`}
                />
                {formErrors.email && <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>}
              </div>
              <div>
                <textarea
                  name="reason"
                  placeholder="Why do you want to join?"
                  value={formData.reason}
                  onChange={handleInputChange}
                  className={`w-full p-3 border rounded-lg ${formErrors.reason ? "border-red-500" : "border-gray-300"
                    }`}
                  rows={4}
                />
                {formErrors.reason && <p className="text-red-500 text-sm mt-1">{formErrors.reason}</p>}
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit Application"}
              </button>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}
