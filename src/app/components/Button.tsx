"use client";

interface ButtonProps {
  href: string;
  label: string;
}

export default function Button({ href, label }: ButtonProps) {
  return (
    <a
      href={href}
      className="inline-block bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
    >
      {label}
    </a>
  );
}
