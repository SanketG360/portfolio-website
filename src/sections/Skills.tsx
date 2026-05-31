import { motion } from 'framer-motion';
import { skills } from '../data/portfolio';
import { SectionTitle } from '../components/SectionTitle';
import { staggerContainer, staggerItem } from '../animations/variants';

export const Skills = () => {
  return (
    <section id="skills" className="section-padding relative">
      <div className="container-custom">
        <SectionTitle
          title="Skills"
          subtitle="Skills & Technologies"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, skillList], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.08 }}
              className="card card-hover"
            >
              <h3 className="text-sm font-semibold text-accent-light mb-5 uppercase tracking-wider">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillList.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 rounded-md text-sm text-gray-300 bg-white/5 border border-white/8 hover:border-white/15 hover:text-white transition-colors duration-150"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tags */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mt-14 flex flex-wrap justify-center gap-3"
        >
          {['Event-Driven', 'Scalable', 'Real-Time', 'Distributed', 'Cloud-Native', 'Microservices'].map((tag, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className="px-4 py-2 rounded-full text-sm text-gray-400 bg-white/4 border border-white/8"
            >
              {tag}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
