import { motion } from 'framer-motion';
import { ExternalLink, Link, Code2, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolio';
import { scrollToSection } from '../utils/scrollTo';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Experience', id: 'experience' },
    { label: 'Contact', id: 'contact' },
  ];

  const socialLinks = [
    { icon: ExternalLink, url: personalInfo.github, label: 'GitHub' },
    { icon: Link, url: personalInfo.linkedin, label: 'LinkedIn' },
    { icon: Code2, url: personalInfo.leetcode, label: 'LeetCode' },
    { icon: Mail, url: `mailto:${personalInfo.email}`, label: 'Email' },
  ];

  return (
    <footer className="relative border-t border-white/6">
      <div className="container-custom py-16 px-6 md:px-12 lg:px-24">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <p className="text-sm font-semibold text-white mb-3">{personalInfo.name}</p>
            <p className="text-xs text-gray-500 mb-6 leading-relaxed">
              Building scalable systems, distributed architectures, and real-time engineering solutions.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2 }}
                  className="w-8 h-8 rounded-lg glass flex items-center justify-center hover:border-white/15 transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-3.5 h-3.5 text-gray-500" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-sm text-gray-500 hover:text-gray-300 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {['Java', 'Spring Boot', 'Kafka', 'Redis', 'PostgreSQL', 'Docker', 'React', 'TypeScript'].map((tech, index) => (
                <span
                  key={index}
                  className="px-2.5 py-1 rounded-md text-xs text-gray-500 bg-white/4 border border-white/6"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="text-xs text-gray-600">
              © {currentYear} {personalInfo.name}. All rights reserved.
            </p>
            <p className="text-xs text-gray-600">
              Built with React, TypeScript & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
