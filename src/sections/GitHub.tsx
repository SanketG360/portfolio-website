import { motion } from 'framer-motion';
import { ExternalLink, Star, Code2, GitFork } from 'lucide-react';
import { githubStats, projects } from '../data/portfolio';
import { SectionTitle } from '../components/SectionTitle';
import { staggerContainer, staggerItem } from '../animations/variants';

export const GitHubSection = () => {
  const stats = [
    { label: 'Repositories', value: githubStats.totalRepos, icon: GitFork },
    { label: 'Contributions', value: githubStats.totalContributions, icon: Code2 },
    { label: 'Current Streak', value: `${githubStats.currentStreak} days`, icon: Star },
  ];

  return (
    <section id="github" className="section-padding relative">
      <div className="container-custom">
        <SectionTitle
          title="GitHub"
          subtitle="GitHub & Engineering Activity"
        />

        {/* GitHub Stats */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-4 mb-10"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className="card card-hover text-center"
            >
              <div className="w-10 h-10 mx-auto mb-3 rounded-lg bg-blue-500/10 flex items-center justify-center">
                <stat.icon className="w-5 h-5 text-accent-light" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-xs text-gray-500">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card mb-10"
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-16 h-16 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center flex-shrink-0">
              <Code2 className="w-7 h-7 text-gray-400" />
            </div>

            <div className="flex-1 text-center md:text-left">
              <h3 className="text-base font-semibold text-white mb-1">@{githubStats.username}</h3>
              <p className="text-sm text-gray-500 mb-3">
                Building scalable backend systems and distributed applications
              </p>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {githubStats.topLanguages.map((lang, index) => (
                  <span
                    key={index}
                    className="px-2.5 py-1 rounded-md text-xs text-gray-400 bg-white/5 border border-white/8"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            <a
              href={githubStats.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary flex items-center gap-2"
            >
              <ExternalLink className="w-4 h-4" />
              View Profile
            </a>
          </div>
        </motion.div>

        {/* Repository Showcase */}
        <div>
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-6">
            Featured Repositories
          </h3>

          <div className="grid md:grid-cols-3 gap-4">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="card card-hover"
              >
                <div className="flex items-start justify-between mb-4">
                  <Code2 className="w-5 h-5 text-gray-500" />
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-300 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                <h4 className="text-sm font-semibold mb-1.5 text-white line-clamp-1">
                  {project.title.split('–')[0].trim()}
                </h4>
                <p className="text-xs text-gray-500 mb-4 line-clamp-2 leading-relaxed">
                  {project.tagline}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.techStack.slice(0, 3).map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded text-xs text-gray-500 bg-white/4 border border-white/6"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
