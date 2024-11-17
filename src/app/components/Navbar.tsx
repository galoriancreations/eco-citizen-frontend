"use client";
import Link from 'next/link';
import { useState } from 'react';
import { FaHome, FaInfoCircle, FaBook, FaQuestionCircle, FaEnvelope, FaStar, FaUserPlus, FaBars, FaTimes } from 'react-icons/fa';
import Image from 'next/image';

interface NavbarProps {
  className?: string;
}

export default function Navbar({ className }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-100 bg-opacity-70 backdrop-blur-md shadow-md z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <Image src="/images/ting-global-logo.png" alt="Ting Global Academy Logo" width={60} height={60} />
        </Link>

        {/* Hamburger icon for mobile */}
        <div className="lg:hidden" onClick={toggleMenu}>
          {isOpen ? <FaTimes size={24} className="text-gray-800"/> : <FaBars size={24} className="text-gray-800"/>}
        </div>

        {/* Links */}
        <div className={`lg:flex lg:space-x-6 ${isOpen ? "block" : "hidden"} absolute lg:static top-full left-0 right-0 bg-gray-100 lg:bg-transparent lg:backdrop-blur-none py-4 lg:py-0`}>
          <Link href="/" className="flex items-center gap-2 hover:text-gray-500 text-gray-700 px-6 lg:px-0 py-2 lg:py-0">
            <FaHome /> Home
          </Link>
          <Link href="/about" className="flex items-center gap-2 hover:text-gray-500 text-gray-700 px-6 lg:px-0 py-2 lg:py-0">
            <FaInfoCircle /> About Us
          </Link>
          <Link href="/program" className="flex items-center gap-2 hover:text-gray-500 text-gray-700 px-6 lg:px-0 py-2 lg:py-0">
            <FaBook /> Program
          </Link>
          <Link href="/faq" className="flex items-center gap-2 hover:text-gray-500 text-gray-700 px-6 lg:px-0 py-2 lg:py-0">
            <FaQuestionCircle /> FAQ
          </Link>
          <Link href="/success-stories" className="flex items-center gap-2 hover:text-gray-500 text-gray-700 px-6 lg:px-0 py-2 lg:py-0">
            <FaStar /> Success Stories
          </Link>
          <Link href="/contact" className="flex items-center gap-2 hover:text-gray-500 text-gray-700 px-6 lg:px-0 py-2 lg:py-0">
            <FaEnvelope /> Contact
          </Link>
          <Link href="/join" className="flex items-center gap-2 hover:text-gray-500 text-gray-700 px-6 lg:px-0 py-2 lg:py-0">
            <FaUserPlus /> Join
          </Link>
        </div>
      </div>
    </nav>
  );
}
