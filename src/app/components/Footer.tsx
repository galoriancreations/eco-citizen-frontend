import Link from 'next/link';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { LINKS, SOCIALS } from '@/app/constants/footerData';


const ICONS = {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
};

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6 text-center">
        <p className="mb-4">&copy; 2023 Ting Global Academy. All Rights Reserved.</p>
        <div className="space-x-4">
          {LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-gray-400">
              {link.label}
            </Link>
          ))}
        </div>
        <div className="mt-4 flex justify-center space-x-4">
          {SOCIALS.map((social) => {
            const Icon = ICONS[social.icon];
            return (
              <a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <Icon size={24} />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
