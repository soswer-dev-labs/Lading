import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import { Facebook } from 'lucide-react';

const Footer = ({ content }) => {
  const { description, quickLinksTitle, links, contactTitle, contact, followUsTitle, followUsDescription, copyright, privacy, terms } = content;

  return (
    <footer className="bg-white dark:bg-black pt-20 pb-10 border-t border-gray-200 dark:border-white/10 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <img src="/logo.webp" alt="SOSWER Logo" className="h-8 w-auto" />
              <span className="text-2xl font-semibold text-gray-900 dark:text-white">SOSWER</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              {description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gray-900 dark:text-white font-bold mb-6">{quickLinksTitle}</h4>
            <ul className="space-y-4">
              {links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-neon transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gray-900 dark:text-white font-bold mb-6">{contactTitle}</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                <Mail className="w-5 h-5 text-neon" />
                <span>{contact.email}</span>
              </li>
              <li className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                <Phone className="w-5 h-5 text-neon" />
                <span>{contact.phone}</span>
              </li>
              <li className="flex items-start gap-3 text-gray-600 dark:text-gray-400">
                <MapPin className="w-5 h-5 text-neon mt-1" />
                <span>{contact.address}</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-gray-900 dark:text-white font-bold mb-6">{followUsTitle}</h4>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-gray-100 dark:bg-white/5 flex items-center justify-center hover:bg-neon hover:text-black transition-all duration-300 text-gray-900 dark:text-white"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://www.facebook.com/profile.php?id=61587842230758" 
                className="w-10 h-10 rounded-full bg-gray-100 dark:bg-white/5 flex items-center justify-center hover:bg-neon hover:text-black transition-all duration-300 text-gray-900 dark:text-white"
                aria-label="Facebook"
                target="_blank" rel="noopener noreferrer"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://github.com/soswer-dev-labs" 
                className="w-10 h-10 rounded-full bg-gray-100 dark:bg-white/5 flex items-center justify-center hover:bg-neon hover:text-black transition-all duration-300 text-gray-900 dark:text-white"
                aria-label="Github"
                target="_blank" rel="noopener noreferrer"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-6">
              {followUsDescription}
            </p>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>{copyright}</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">{privacy}</a>
            <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">{terms}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
