
import React from 'react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from '../components/Icons';
import { personalData } from '../data';

const socialLinks = [
  { name: 'GitHub', icon: GithubIcon, url: 'https://github.com' },
  { name: 'LinkedIn', icon: LinkedinIcon, url: 'https://linkedin.com' },
  { name: 'Twitter', icon: TwitterIcon, url: 'https://twitter.com' },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark/50 border-t border-green-500/20 py-8">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 text-center text-gray-400">
        <div className="flex justify-center gap-6 mb-4">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="text-gray-400 hover:text-primary transition-colors duration-300"
            >
              <social.icon className="w-6 h-6" />
            </a>
          ))}
        </div>
        <p>&copy; {new Date().getFullYear()} {personalData.name}. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
