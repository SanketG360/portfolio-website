import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';

export const Loading = () => {
  return (
    <div className="fixed inset-0 bg-gray-950 flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center"
      >
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-20 h-20 mx-auto mb-6 rounded-full glass flex items-center justify-center border-2 border-neon-blue"
        >
          <Code2 className="w-10 h-10 text-neon-blue" />
        </motion.div>
        
        <motion.h2
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-2xl font-bold neon-text"
        >
          Loading...
        </motion.h2>
        
        <div className="flex gap-2 justify-center mt-4">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                delay: i * 0.2,
              }}
              className="w-2 h-2 rounded-full bg-neon-blue"
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};
