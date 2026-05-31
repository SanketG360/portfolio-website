import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export const SectionTitle = ({ title, subtitle, centered = true }: SectionTitleProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`mb-16 ${centered ? 'text-center' : ''}`}
    >
      <p className={`text-accent-light text-xs font-mono tracking-widest uppercase mb-3 ${centered ? 'text-center' : ''}`}>
        {title}
      </p>
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        {subtitle || title}
      </h2>
      <div className={`w-8 h-0.5 bg-blue-500 ${centered ? 'mx-auto' : ''}`} />
    </motion.div>
  );
};
