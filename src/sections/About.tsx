import { motion } from 'framer-motion';
import { Code2, Database, Zap, Server } from 'lucide-react';
import { aboutText } from '../data/portfolio';
import { SectionTitle } from '../components/SectionTitle';
import { staggerContainer, staggerItem } from '../animations/variants';

export const About = () => {
  const highlights = [
    {
      icon: Server,
      title: 'Backend Engineering',
      description: 'Building scalable REST APIs and microservices',
    },
    {
      icon: Database,
      title: 'Distributed Systems',
      description: 'Event-driven architecture with Kafka & Redis',
    },
    {
      icon: Zap,
      title: 'Real-Time Systems',
      description: 'WebSocket-based instant communication',
    },
    {
      icon: Code2,
      title: 'System Design',
      description: 'Scalable, fault-tolerant architectures',
    },
  ];

  return (
    <section id="about" className="section-padding relative">
      <div className="container-custom">
        <SectionTitle
          title="About Me"
          subtitle="Backend Engineer & Distributed Systems Enthusiast"
        />

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-4 text-gray-400 leading-relaxed">
              {aboutText.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-2"
            >
              {['Java', 'Spring Boot', 'Kafka', 'Redis', 'PostgreSQL', 'Docker', 'Microservices'].map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 rounded-md text-xs font-medium text-gray-300 bg-white/5 border border-white/10"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="card card-hover p-5"
              >
                <div className="w-9 h-9 mb-4 rounded-lg bg-blue-500/10 flex items-center justify-center">
                  <item.icon className="w-4 h-4 text-accent-light" />
                </div>
                <h3 className="text-sm font-semibold mb-1 text-white">{item.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
