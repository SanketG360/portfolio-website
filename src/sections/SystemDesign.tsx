import { motion } from 'framer-motion';
import { Workflow, Database, Radio, Box, GitBranch, Network } from 'lucide-react';
import { systemDesignConcepts } from '../data/portfolio';
import { SectionTitle } from '../components/SectionTitle';
import { staggerContainer, staggerItem } from '../animations/variants';

const iconMap: Record<string, any> = {
  workflow: Workflow,
  database: Database,
  radio: Radio,
  boxes: Box,
  'git-branch': GitBranch,
  network: Network,
};

export const SystemDesign = () => {
  return (
    <section id="system-design" className="section-padding relative">
      <div className="container-custom">
        <SectionTitle
          title="System Design"
          subtitle="Engineering & System Design"
        />

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {systemDesignConcepts.map((concept) => {
            const Icon = iconMap[concept.icon] || Workflow;

            return (
              <motion.div
                key={concept.id}
                variants={staggerItem}
                className="card card-hover"
              >
                <div className="w-9 h-9 mb-4 rounded-lg bg-blue-500/10 flex items-center justify-center">
                  <Icon className="w-4 h-4 text-accent-light" />
                </div>
                <h3 className="text-sm font-semibold mb-2 text-white">{concept.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{concept.description}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Architecture Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 card"
        >
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-8 text-center">
            Distributed System Architecture
          </h3>

          <div className="grid md:grid-cols-3 gap-6 items-center">
            {[
              { icon: Box, label: 'Producer Services', desc: 'Event generation & publishing', color: 'text-accent-light' },
              { icon: Workflow, label: 'Kafka / Redis', desc: 'Message broker & caching', color: 'text-gray-400' },
              { icon: Radio, label: 'Consumer Services', desc: 'Real-time processing & delivery', color: 'text-gray-400' },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-14 h-14 mx-auto mb-3 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center">
                  <item.icon className={`w-6 h-6 ${item.color}`} />
                </div>
                <h4 className="text-sm font-medium text-white mb-1">{item.label}</h4>
                <p className="text-xs text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-3 mt-8">
            <div className="h-px flex-1 bg-white/8" />
            <span className="text-xs text-gray-600 font-mono">Event Flow →</span>
            <div className="h-px flex-1 bg-white/8" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
