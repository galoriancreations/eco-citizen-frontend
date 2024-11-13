
"use client";

import { useState } from 'react';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { name: '', email: '', message: '' };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required.';
      valid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
      valid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
      valid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required.';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (validateForm()) {
      try {
        const response = await fetch('/api/contact', {  
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
  
        if (response.ok) {
          setSuccessMessage("Thank you for your message!");
          setFormData({ name: '', email: '', message: '' });
        } else {
          const data = await response.json();
          setErrorMessage(data.error || "Failed to send message");
        }
      } catch (error) {
        setErrorMessage("Failed to send message");
      }
    }
  };
  

  return (
    <div>
      <header className="bg-gradient-to-r from-blue-500 to-teal-400 text-white py-16 text-center">
        <h1 className="text-4xl font-bold">Contact Us: Get in Touch</h1>
        <p className="mt-4 text-lg">
          Have a question or want to learn more about Ting Global Academy? Fill out our inquiry form, and we'll get back to you soon.
        </p>
      </header>

      <main className="py-10 px-6">
        {/* Inquiry Form Section */}
        <section className="max-w-4xl mx-auto mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Send Us a Message</h2>
          {successMessage && <p className="text-green-500 mb-4">{successMessage}</p>}
          {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your Name"
              className={`w-full p-3 border rounded-lg ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Your Email"
              className={`w-full p-3 border rounded-lg ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Your Message"
              className={`w-full p-3 border rounded-lg ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
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
         {/* Newsletter Signup Section */}
         <section className="max-w-4xl mx-auto bg-gray-50 rounded-lg p-10 mb-12 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Newsletter Signup</h2>
          <p className="text-lg text-gray-700 mb-6">
            Stay updated with the latest from Ting Global Academy. Sign up for our newsletter to receive leadership insights, program updates, and community highlights.
            <br />This is in partnership with <span className="font-semibold">MindPlex Magazine</span>.
          </p>
          <form  className="flex flex-col sm:flex-row justify-center gap-4">
            <input
              type="email"
              placeholder="Your Email"
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              className="p-3 border rounded-lg w-full sm:w-auto"
              required
            />
            <button type="submit" className="bg-green-500 text-white py-3 px-6 rounded-lg hover:bg-green-600 transition">Sign Up</button>
          </form>
        </section>

        {/* Social Media Links Section */}
        <section className="text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Follow Us on Social Media</h2>
          <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
            Follow us on our social media platforms for daily inspiration, updates, and a behind-the-scenes look at life at Ting Global Academy.
          </p>
          <div className="flex justify-center space-x-6">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600">
              <FaFacebook size={30} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-400">
              <FaTwitter size={30} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-700">
              <FaLinkedin size={30} />
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
