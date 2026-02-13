'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Code, Briefcase, Sparkles } from 'lucide-react';

const timelineData = [
  {
    id: 1,
    icon: GraduationCap,
    title: 'Ateneo de Manila University',
    role: 'BS MIS',
    date: '2019-2020',
    description: 'Bachelor of Science in Management Information Systems',
    color: 'blue',
  },
  {
    id: 2,
    icon: Code,
    title: 'Village88',
    role: 'Trainee',
    date: 'March 2021',
    description: 'Intensive coding bootcamp focused on full-stack development',
    color: 'green',
  },
  {
    id: 3,
    icon: Briefcase,
    title: 'Accenture',
    role: 'Software Engineer',
    date: 'April 2021 - October 2025',
    description:
      'Led Oracle HCM Cloud implementations, integrations, and reporting solutions for enterprise clients',
    achievements: [
      'Delivered 20+ enterprise-scale projects',
      'Specialized in HCM Cloud, OIC, and BI Publisher',
      'Worked with Fortune 500 companies',
    ],
    color: 'purple',
  },
  {
    id: 4,
    icon: Sparkles,
    title: 'Freelance AI Specialist',
    role: 'AI Automation Engineer',
    date: 'Current',
    description:
      'Building AI-powered automation solutions and modern web applications',
    color: 'orange',
  },
];

export function Timeline() {
  return (
    <section className="py-32 px-4 bg-gradient-to-b from-transparent via-gray-900/20 to-transparent">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-gradient">Career Journey</span>
          </h2>
          <p className="text-gray-400 text-lg">
            From education to enterprise solutions
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-orange-500" />

          {timelineData.map((item, index) => {
            const Icon = item.icon;
            const colorClasses = {
              blue: 'from-blue-500/20 to-cyan-500/20 border-blue-500/50',
              green: 'from-green-500/20 to-emerald-500/20 border-green-500/50',
              purple:
                'from-purple-500/20 to-pink-500/20 border-purple-500/50',
              orange:
                'from-orange-500/20 to-red-500/20 border-orange-500/50',
            };

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative pl-20 pb-16 last:pb-0"
              >
                <div className="absolute left-5 -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center border-4 border-[#020617] z-10">
                  <Icon className="w-4 h-4 text-white" />
                </div>

                <div
                  className={`p-6 rounded-xl bg-gradient-to-br ${
                    colorClasses[item.color as keyof typeof colorClasses]
                  } border hover:scale-[1.02] transition-transform duration-300`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">
                        {item.title}
                      </h3>
                      <p className="text-lg text-gray-300">{item.role}</p>
                    </div>
                    <span className="text-sm text-gray-400 bg-gray-800/50 px-3 py-1 rounded-full">
                      {item.date}
                    </span>
                  </div>

                  <p className="text-gray-300 mb-3">{item.description}</p>

                  {item.achievements && (
                    <ul className="space-y-2">
                      {item.achievements.map((achievement, idx) => (
                        <li
                          key={idx}
                          className="text-sm text-gray-400 flex items-start gap-2"
                        >
                          <span className="text-blue-400 mt-1">✓</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
