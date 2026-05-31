import { motion } from 'framer-motion';
import { Code2, Trophy, Target, TrendingUp, ExternalLink } from 'lucide-react';
import { leetcodeStats } from '../data/portfolio';
import { SectionTitle } from '../components/SectionTitle';
import { staggerContainer, staggerItem } from '../animations/variants';

export const DSA = () => {
  const problemStats = [
    { label: 'Easy', value: leetcodeStats.easy, color: 'bg-emerald-500', percentage: (leetcodeStats.easy / leetcodeStats.totalSolved) * 100 },
    { label: 'Medium', value: leetcodeStats.medium, color: 'bg-amber-500', percentage: (leetcodeStats.medium / leetcodeStats.totalSolved) * 100 },
    { label: 'Hard', value: leetcodeStats.hard, color: 'bg-red-500', percentage: (leetcodeStats.hard / leetcodeStats.totalSolved) * 100 },
  ];

  return (
    <section id="dsa" className="section-padding relative">
      <div className="container-custom">
        <SectionTitle
          title="DSA"
          subtitle="DSA & Problem Solving"
        />

        <div className="max-w-4xl mx-auto">
          {/* Main Stats Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card mb-8"
          >
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left: Total Solved */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center">
                    <Code2 className="w-7 h-7 text-accent-light" />
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-white">{leetcodeStats.totalSolved}</div>
                    <div className="text-sm text-gray-500">Problems Solved</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 mb-6">
                  <Trophy className="w-5 h-5 text-amber-400" />
                  <div>
                    <div className="text-xl font-bold text-white">{leetcodeStats.contestRating}</div>
                    <div className="text-xs text-gray-500">Contest Rating</div>
                  </div>
                </div>

                <a
                  href={leetcodeStats.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary inline-flex items-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  View LeetCode Profile
                </a>
              </div>

              {/* Right: Problem Breakdown */}
              <div className="space-y-5">
                {problemStats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-sm text-gray-400">{stat.label}</span>
                      <span className="text-sm font-semibold text-white">{stat.value}</span>
                    </div>
                    <div className="h-1.5 bg-white/6 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${stat.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: index * 0.1 }}
                        className={`h-full ${stat.color} rounded-full`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Activity Highlights */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-4"
          >
            {[
              { icon: Target, title: 'Consistent Practice', desc: 'Regular problem-solving to maintain algorithmic thinking' },
              { icon: TrendingUp, title: 'Growing Skills', desc: 'Continuously improving problem-solving efficiency' },
              { icon: Trophy, title: 'Contest Participation', desc: 'Active in coding contests and competitive programming' },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="card card-hover"
              >
                <div className="w-9 h-9 mb-4 rounded-lg bg-white/5 flex items-center justify-center">
                  <item.icon className="w-4 h-4 text-gray-400" />
                </div>
                <h4 className="text-sm font-semibold mb-1.5 text-white">{item.title}</h4>
                <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Activity Heatmap */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card mt-8"
          >
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-5">
              Coding Activity
            </h3>
            <div className="grid grid-cols-12 gap-1.5">
              {Array.from({ length: 84 }).map((_, index) => {
                const intensity = Math.random();
                return (
                  <div
                    key={index}
                    className="aspect-square rounded-sm"
                    style={{
                      backgroundColor: intensity > 0.7
                        ? 'rgba(37, 99, 235, 0.7)'
                        : intensity > 0.4
                        ? 'rgba(37, 99, 235, 0.3)'
                        : 'rgba(255, 255, 255, 0.04)',
                    }}
                  />
                );
              })}
            </div>
            <p className="text-xs text-gray-600 mt-3">
              Consistent problem-solving activity over the past months
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
