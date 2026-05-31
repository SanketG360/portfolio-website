import { motion } from 'framer-motion';
import { experience } from '../data/portfolio';
import { SectionTitle } from '../components/SectionTitle';

export const Experience = () => {
  return (
    <section id="experience" className="section-padding relative">
      <div className="container-custom">
        <SectionTitle
          title="Experience"
          subtitle="Experience & Journey"
        />

        <div className="max-w-3xl mx-auto">
          {experience.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="card"
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-base font-semibold text-white">{item.title}</h3>
                  <p className="text-sm text-accent-light mt-0.5">{item.company}</p>
                  <p className="text-xs text-gray-600 mt-0.5">{item.location}</p>
                </div>
                <span className="text-xs text-gray-500 font-mono whitespace-nowrap">{item.period}</span>
              </div>

              {/* Summary */}
              <p className="text-sm text-gray-400 leading-relaxed mb-5">{item.description}</p>

              {/* Highlights */}
              <ul className="space-y-2 mb-5">
                {item.highlights.map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-500">
                    <span className="text-blue-500 mt-0.5 text-xs flex-shrink-0">▸</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/6">
                {item.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-md text-xs text-gray-400 bg-white/5 border border-white/8"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
