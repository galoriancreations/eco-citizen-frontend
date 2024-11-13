// src/app/api/faq/route.ts

import { NextResponse } from 'next/server';

export async function GET() {
  const faqs = [
    {
      id: 1,
      question: "Who is Ting Global Academy's AI-Enhanced Leadership Training Program for?",
      answer: "Our program is designed for a broad audience, including professionals seeking a career change, aspiring and seasoned entrepreneurs, creatives, individuals in transition, students, and anyone looking to discover their purpose and enhance their leadership skills."
    },
    {
      id: 2,
      question: "How does the personalized learning path work?",
      answer: "Through AI-driven technology, each participant receives a customized learning experience. Based on initial assessments and ongoing performance, the AI adapts the curriculum to your specific needs, strengths, and areas for improvement, ensuring a highly personalized and effective learning journey."
    },
    {
      id: 3,
      question: "Can I choose my own AI avatar for the course?",
      answer: "Yes, you can select from a variety of avatars, including digital twins, characters from the TWIN SingularityNET project, celebrities, and thought leaders. Each avatar option comes with a unique charge, allowing you to customize your learning experience."
    },
    {
      id: 4,
      question: "What kind of support will I receive during the program?",
      answer: "Participants have access to AI-driven mentorship, interactive discussions, and feedback, as well as support from a global community of peers. Our collaborative learning networks also offer opportunities to engage with and learn from others in real-world projects."
    },
    {
      id: 5,
      question: "Are there any prerequisites for joining the program?",
      answer: "There are no strict prerequisites, but a keen interest in personal development and leadership, along with an openness to learn and engage with AI technology, will greatly enhance your experience."
    },
    {
      id: 6,
      question: "What is the duration of the program?",
      answer: "The program is self-paced, but most participants complete the core curriculum within 6 months. However, with continuous learning and community support, your journey can extend as long as you find value in the resources and networks available."
    },
    {
      id: 7,
      question: "How much does the program cost?",
      answer: "The program offers one month of free access to get you started. Afterward, the standard access fee is $18/month. Additional charges apply for selecting premium AI avatars, with details provided upon avatar selection."
    },
    {
      id: 8,
      question: "Are there any scholarships or financial aid available?",
      answer: "Yes, we offer scholarships for leaders in developing countries and financial aid options to ensure our program is accessible to a wide range of participants. Please contact us for more information on eligibility and application procedures."
    },
    {
      id: 9,
      question: "What is the refund policy?",
      answer: "Given the one-month free access, we encourage participants to fully engage with the program during this period to assess its value. After the free month, the subscription can be canceled at any time, but refunds for subsequent months are not provided."
    },
    {
      id: 10,
      question: "How can I apply to Ting Global Academy's AI-Enhanced Leadership Training Program?",
      answer: "You can apply directly through our website. The application process includes a brief questionnaire to better understand your goals and how we can support your leadership journey. Upon submission, you'll receive further instructions on how to access your free month and begin your learning path."
    },
    {
      id: 11,
      question: "Can I earn academic points or certifications through this program?",
      answer: "Yes, we offer partnerships with academic institutes that allow participants to earn academic points. Upon completion of the program, you will also receive a certificate of completion that showcases your achievement and commitment to leadership excellence."
    }
  ];
  
  return NextResponse.json(faqs);
}
