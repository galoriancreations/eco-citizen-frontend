"use client";

interface CardProps {
  title: string;
  description: string;
  link: string;
}

export default function Card({ title, description, link }: CardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition-shadow">
      <h3 className="text-xl font-semibold text-blue-600 mb-4">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      <a href={link} className="text-blue-500 underline hover:text-blue-700">
        test your self
      </a>
    </div>
  );
}
