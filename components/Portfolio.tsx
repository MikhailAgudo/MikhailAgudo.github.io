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

const projects = [
  {
    id: 1,
    title: 'Oracle HCM Cloud Automation',
    date: 'August 2023',
    description: 'Developed a suite of automated HCM Cloud reports and integrations using BI Publisher and OIC, reducing manual data entry by 40%.',
    tech: ['Oracle', 'BI Publisher', 'OIC'],
    link: '#',
    gradient: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    id: 2,
    title: 'AI Workflow Integration',
    date: 'January 2024',
    description: 'Integrated LLMs into enterprise workflows to automate decision-making processes and document analysis.',
    tech: ['Python', 'OpenAI', 'Next.js'],
    link: '#',
    gradient: 'from-purple-500/20 to-pink-500/20',
  },
  {
    id: 3,
    title: 'Modern Portfolio Site',
    date: 'February 2024',
    description: 'A high-performance personal portfolio built with Next.js, Tailwind CSS, and Framer Motion.',
    tech: ['Next.js', 'Tailwind', 'Framer Motion'],
    link: '#',
    gradient: 'from-green-500/20 to-emerald-500/20',
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-32 px-4 bg-[#020617]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-gradient">Featured Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of my recent work in enterprise automation, AI integration, and web development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <a href={project.link} className="block group">
                  <Card className="h-full overflow-hidden bg-[#0f172a]/50 border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
                    <div className="p-6">
                      <div className="mb-4">
                        <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-sm text-gray-500 font-medium italic">
                          {project.date}
                        </p>
                      </div>

                      <p className="text-gray-400 text-sm leading-relaxed mb-6">
                        {project.description}
                      </p>

                      <div className={`h-48 w-full bg-gradient-to-br ${project.gradient} relative overflow-hidden rounded-xl mb-6`}>
                        <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-40 transition-opacity duration-500">
                          {/* Stylized placeholder for project photo */}
                          <div className="w-24 h-24 border-2 border-white rounded-lg flex items-center justify-center">
                            <span className="text-white text-xs font-bold uppercase tracking-widest">Preview</span>
                          </div>
                        </div>

                        {/* Tech badges in top-right */}
                        <div className="absolute top-4 right-4 flex flex-wrap gap-2 justify-end max-w-[200px]">
                          {project.tech.map((t) => (
                            <Badge key={t} variant="secondary" className="bg-black/50 text-white border-white/20 backdrop-blur-md text-[10px] px-2 py-0.5">
                              {t}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center text-blue-400 text-sm font-bold group-hover:translate-x-2 transition-transform">
                        View Details <span className="ml-2">→</span>
                      </div>
                    </div>
                  </Card>
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
