"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

interface FAQ {
  id: number;
  question: string;
  answer: string;
}

export default function FAQPage() {
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [expanded, setExpanded] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const response = await fetch("/api/faq");
        const data = await response.json();
        setFaqs(data);
      } catch (error) {
        console.error("Failed to fetch FAQ data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFaqs();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-blue-50">
        <p className="text-xl font-medium text-blue-700 animate-pulse">
          Loading FAQs...
        </p>
      </div>
    );
  }

  const toggleExpand = (id: number) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <main className="bg-gray-50 text-gray-900">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-blue-500 to-teal-400 text-white py-16 text-center">
        <div className="container mx-auto px-6">
          {/* <Image
            src="/images/faq-banner.png"
            alt="FAQ Banner"
            width={250}
            height={250}
            className="mx-auto"
          /> */}
          <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Got questions? Explore answers to common inquiries about our
            programs, processes, and more.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 space-y-4 max-w-4xl">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="bg-white shadow-md rounded-lg p-4 transition-transform transform hover:shadow-lg"
            >
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold text-gray-800">
                  {faq.question}
                </h3>
                <button
                  onClick={() => toggleExpand(faq.id)}
                  className="text-blue-600 hover:text-blue-800 transition"
                  aria-label={`Toggle answer for ${faq.question}`}
                >
                  {expanded === faq.id ? (
                    <FaChevronUp size={20} />
                  ) : (
                    <FaChevronDown size={20} />
                  )}
                </button>
              </div>
              {expanded === faq.id && (
                <p className="text-gray-700 mt-4">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
