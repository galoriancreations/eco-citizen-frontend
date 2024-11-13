
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6 text-center">
        <p className="mb-4">&copy; 2023 Ting Global Academy. All Rights Reserved.</p>
        <div className="space-x-4">
          <Link href="/privacy-policy" className="hover:text-gray-400">Privacy Policy</Link>
          <Link href="/terms-of-service" className="hover:text-gray-400">Terms of Service</Link>
          <Link href="/contact" className="hover:text-gray-400">Contact Us</Link>
        </div>
        <div className="mt-4 flex justify-center space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaFacebook size={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaTwitter size={24} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}

