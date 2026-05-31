import { motion } from 'framer-motion';
import { Mail, ExternalLink, Link, Code2, Send, Download } from 'lucide-react';
import { personalInfo } from '../data/portfolio';
import { SectionTitle } from '../components/SectionTitle';

export const Contact = () => {
  const socialLinks = [
    { icon: ExternalLink, url: personalInfo.github, label: 'GitHub' },
    { icon: Link, url: personalInfo.linkedin, label: 'LinkedIn' },
    { icon: Code2, url: personalInfo.leetcode, label: 'LeetCode' },
  ];

  return (
    <section id="contact" className="section-padding relative">
      <div className="container-custom">
        <SectionTitle
          title="Contact"
          subtitle="Let's Build Together"
        />

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <p className="text-gray-400 text-sm leading-relaxed mb-8">
                I'm always open to discussing new opportunities, challenging projects,
                and collaborations on distributed systems and backend engineering.
              </p>

              {/* Email */}
              <a
                href={`mailto:${personalInfo.email}`}
                className="card card-hover flex items-center gap-4 mb-3 no-underline"
              >
                <div className="w-9 h-9 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-accent-light" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-0.5">Email</div>
                  <div className="text-sm text-white">{personalInfo.email}</div>
                </div>
              </a>

              {/* Social Links */}
              <div className="space-y-3 mb-8">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="card card-hover flex items-center gap-4 no-underline"
                  >
                    <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0">
                      <social.icon className="w-4 h-4 text-gray-400" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 mb-0.5">{social.label}</div>
                      <div className="text-sm text-white">@{social.url.split('/').pop()}</div>
                    </div>
                  </motion.a>
                ))}
              </div>

              <a
                href={personalInfo.resumeUrl}
                className="btn-secondary w-full flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="card"
            >
              <h3 className="text-base font-semibold text-white mb-6">Send a Message</h3>
              <form className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-gray-500 mb-1.5">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-3 py-2.5 rounded-lg bg-white/4 border border-white/8 focus:border-blue-500/50
                             text-sm text-white placeholder-gray-600 focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-gray-500 mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-3 py-2.5 rounded-lg bg-white/4 border border-white/8 focus:border-blue-500/50
                             text-sm text-white placeholder-gray-600 focus:outline-none transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-medium text-gray-500 mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-3 py-2.5 rounded-lg bg-white/4 border border-white/8 focus:border-blue-500/50
                             text-sm text-white placeholder-gray-600 focus:outline-none transition-colors resize-none"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="btn-primary w-full flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
