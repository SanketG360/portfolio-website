import { motion } from 'framer-motion';
import { GitFork, Link2, Code2, Download, Mail, ArrowDown } from 'lucide-react';
import { personalInfo } from '../data/portfolio';
import { staggerContainer, staggerItem } from '../animations/variants';
import { scrollToSection } from '../utils/scrollTo';

export const Hero = () => {
  const socialLinks = [
    { icon: GitFork, url: personalInfo.github, label: 'GitHub' },
    { icon: Link2, url: personalInfo.linkedin, label: 'LinkedIn' },
    { icon: Code2, url: personalInfo.leetcode, label: 'LeetCode' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Subtle grid */}
      <div className="absolute inset-0 grid-pattern" />

      {/* Very subtle ambient glow — not cartoonish */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom px-6 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="max-w-3xl"
        >
          {/* Greeting */}
          <motion.p variants={staggerItem} className="text-accent-light text-sm font-mono mb-4 tracking-widest uppercase">
            Hello, I'm
          </motion.p>

          {/* Name */}
          <motion.h1
            variants={staggerItem}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-white leading-tight"
          >
            {personalInfo.name}
          </motion.h1>

          {/* Title */}
          <motion.h2
            variants={staggerItem}
            className="text-xl md:text-2xl font-medium text-gray-400 mb-6"
          >
            {personalInfo.title}
          </motion.h2>

          {/* Divider */}
          <motion.div
            variants={staggerItem}
            className="w-12 h-0.5 bg-blue-500 mb-8"
          />

          {/* Description */}
          <motion.p
            variants={staggerItem}
            className="text-base md:text-lg text-gray-400 max-w-2xl mb-10 leading-relaxed"
          >
            {personalInfo.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={staggerItem}
            className="flex flex-wrap items-center gap-3 mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => scrollToSection('projects')}
              className="btn-primary gap-2"
            >
              View Projects
              <ArrowDown className="w-4 h-4" />
            </motion.button>

            <motion.a
              href={personalInfo.resumeUrl}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-secondary gap-2"
            >
              <Download className="w-4 h-4" />
              Resume
            </motion.a>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => scrollToSection('contact')}
              className="btn-secondary gap-2"
            >
              <Mail className="w-4 h-4" />
              Contact
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={staggerItem}
            className="flex items-center gap-4"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                className="w-10 h-10 rounded-lg glass flex items-center justify-center hover:border-white/20 transition-all duration-200"
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4 text-gray-400" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1.5"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-0.5 h-1.5 bg-gray-500 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};
