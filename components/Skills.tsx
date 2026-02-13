'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Cloud,
  Database,
  FileText,
  GitBranch,
  Zap,
  Code2,
} from 'lucide-react';

const skillCategories = [
  {
    id: 1,
    title: 'Oracle SaaS',
    icon: Cloud,
    gradient: 'from-blue-500 to-cyan-500',
    skills: [
      { name: 'HCM Cloud', years: '4.5 years', level: 95 },
      { name: 'Core HR', years: '1 year', level: 75 },
      { name: 'Benefits', years: '2 months', level: 60 },
      { name: 'Payroll', years: '10 months', level: 70 },
    ],
  },
  {
    id: 2,
    title: 'Oracle Integration',
    icon: GitBranch,
    gradient: 'from-purple-500 to-pink-500',
    skills: [
      { name: 'OIC', years: '1 year', level: 75 },
      { name: 'HCM Extracts', years: '3.5 years', level: 90 },
    ],
  },
  {
    id: 3,
    title: 'Reporting',
    icon: FileText,
    gradient: 'from-green-500 to-emerald-500',
    skills: [{ name: 'BI Publisher Reports', years: '3.5 years', level: 90 }],
  },
  {
    id: 4,
    title: 'Formula Development',
    icon: Database,
    gradient: 'from-orange-500 to-red-500',
    skills: [{ name: 'Fast Formula', years: '3 years', level: 85 }],
  },
  {
    id: 5,
    title: 'AI/LLM Platforms',
    icon: Zap,
    gradient: 'from-indigo-500 to-purple-500',
    skills: [
      { name: 'Claude Sonnet', level: 80 },
      { name: 'ChatGPT-4o Mini', level: 80 },
      { name: 'Gemini 3.0/2.0 Flash', level: 75 },
    ],
  },
  {
    id: 6,
    title: 'Web Development',
    icon: Code2,
    gradient: 'from-cyan-500 to-blue-500',
    skills: [
      { name: 'React', level: 85 },
      { name: 'Next.js', level: 85 },
      { name: 'Node.js', level: 80 },
      { name: 'TypeScript', level: 80 },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-gradient">Skills & Expertise</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit spanning enterprise systems, AI automation,
            and modern web technologies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full p-6 bg-gradient-to-br from-gray-800/30 to-gray-900/30 border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 group">
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className={`p-3 rounded-lg bg-gradient-to-br ${category.gradient} bg-opacity-20`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">
                      {category.title}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill) => (
                      <div key={skill.name}>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-gray-300">
                            {skill.name}
                          </span>
                          {'years' in skill && skill.years && (
                            <span className="text-xs text-gray-400">
                              {skill.years}
                            </span>
                          )}
                        </div>
                        <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className={`h-full bg-gradient-to-r ${category.gradient} rounded-full`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="flex flex-wrap justify-center gap-3">
            <Badge
              variant="secondary"
              className="bg-blue-500/10 text-blue-300 border-blue-500/30 text-sm px-4 py-2"
            >
              Enterprise Solutions
            </Badge>
            <Badge
              variant="secondary"
              className="bg-purple-500/10 text-purple-300 border-purple-500/30 text-sm px-4 py-2"
            >
              AI Integration
            </Badge>
            <Badge
              variant="secondary"
              className="bg-green-500/10 text-green-300 border-green-500/30 text-sm px-4 py-2"
            >
              Full Stack Development
            </Badge>
            <Badge
              variant="secondary"
              className="bg-orange-500/10 text-orange-300 border-orange-500/30 text-sm px-4 py-2"
            >
              Cloud Architecture
            </Badge>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
