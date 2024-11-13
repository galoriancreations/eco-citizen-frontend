
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface FAQ {
  id: number;
  question: string;
  answer: string;
}

export default function FAQPage() {
  const [faqs, setFaqs] = useState<FAQ[]>([]);
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

  return (
    <main className="bg-gradient-to-r from-blue-500 to-teal-400 text-gray-900">
      {/* Header Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6 text-center">
          <Image
            src="/images/faq-banner.png"
            alt="FAQ Banner"
            width={300}
            height={300}
            className="mx-auto "
          />
          <h1 className="text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-lg max-w-3xl mx-auto">
            Got questions? Explore answers to common inquiries about our
            programs, processes, and more.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 space-y-8">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="bg-white shadow-md rounded-lg p-6 transition-transform transform hover:-translate-y-1"
            >
              <h3 className="text-2xl font-semibold text-blue-800 mb-2">
                {faq.question}
              </h3>
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}






// "use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";

// interface FAQ {
//   id: number;
//   question: string;
//   answer: string;
// }

// export default function FAQPage() {
//   const [faqs, setFaqs] = useState<FAQ[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchFaqs = async () => {
//       try {
//         const response = await fetch("/api/faq");
//         const data = await response.json();
//         setFaqs(data);
//       } catch (error) {
//         console.error("Failed to fetch FAQ data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchFaqs();
//   }, []);

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center min-h-screen bg-gray-50">
//         <p className="text-xl font-medium text-blue-700 animate-pulse">
//           Loading FAQs...
//         </p>
//       </div>
//     );
//   }

//   return (
//     <main className="bg-gray-50 text-gray-900 min-h-screen">
//       {/* Header Section */}
//       <header className="bg-gradient-to-r from-blue-500 to-teal-400 text-white py-16 text-center">
//         <div className="container mx-auto px-6">
//           <Image
//             src="/images/faq-banner.png"
//             alt="FAQ Banner"
//             width={300}
//             height={300}
//             className="mx-auto"
//           />
//           <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
//           <p className="text-lg max-w-3xl mx-auto">
//             Got questions? Explore answers to common inquiries about our programs, processes, and more.
//           </p>
//         </div>
//       </header>

//       {/* FAQ Section */}
//       <section className="py-16 px-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
//         <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">FAQs</h2>
//         <div className="space-y-8">
//           {faqs.map((faq) => (
//             <div
//               key={faq.id}
//               className="bg-gray-50 border border-gray-200 shadow-md rounded-lg p-6 transition-transform transform hover:-translate-y-1"
//             >
//               <h3 className="text-2xl font-semibold text-blue-800 mb-2">
//                 {faq.question}
//               </h3>
//               <p className="text-gray-700">{faq.answer}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Call to Action Section */}
//       <section className="py-16 bg-gray-100 text-center">
//         <div className="max-w-4xl mx-auto px-6">
//           <h2 className="text-3xl font-semibold text-gray-800">Still Have Questions?</h2>
//           <p className="text-gray-700 mt-4">
//             If you need more information, feel free to contact us. We're here to help!
//           </p>
//           <a
//             href="/contact"
//             className="inline-block mt-6 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
//           >
//             Contact Us
//           </a>
//         </div>
//       </section>
//     </main>
//   );
// }
