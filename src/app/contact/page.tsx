"use client";

import { useState } from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { name: "", email: "", message: "" };

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
      valid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
      valid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
      valid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateForm()) return;

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_TO_COMPANY;
      const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;

      if (!serviceId || !templateId || !userId) {
        Swal.fire("Error", "Email service configuration is missing.", "error");
        return;
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        userId
      );

      Swal.fire("Success!", "Your message has been sent successfully.", "success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Failed to send email:", error);
      Swal.fire("Error", "Failed to send your message. Please try again.", "error");
    }
  };

  return (
    <div>
      <header className="bg-gradient-to-r from-blue-500 to-teal-400 text-white py-16 text-center">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="mt-4 text-lg">
          Have a question? Fill out the form below and we will get back to you.
        </p>
      </header>

      <main className="py-10 px-6">
        <section className="max-w-4xl mx-auto mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Send Us a Message</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your Name"
              className={`w-full p-3 border rounded-lg ${errors.name ? "border-red-500" : "border-gray-300"}`}
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Your Email"
              className={`w-full p-3 border rounded-lg ${errors.email ? "border-red-500" : "border-gray-300"}`}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Your Message"
              className={`w-full p-3 border rounded-lg ${errors.message ? "border-red-500" : "border-gray-300"}`}
              rows={4}
            />
            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition"
            >
              Send Message
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}
