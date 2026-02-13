'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Cloud, Zap, Code, Activity } from 'lucide-react';

const workCards = [
  {
    id: 1,
    title: 'Oracle SaaS Expertise',
    subtitle: 'Enterprise Scale',
    icon: Cloud,
    size: 'large' as const,
    gradient: 'from-blue-500/20 to-cyan-500/20',
    content: {
      mainStats: [
        { label: 'Oracle HCM Cloud', value: '4.5 years' },
        { label: 'BI Publisher Reports', value: '3.5 years' },
        { label: 'HCM Extracts', value: '3.5 years' },
        { label: 'Fast Formula', value: '3 years' },
      ],
      modules: [
        { name: 'Core HR Module', duration: '1 year' },
        { name: 'Benefits Module', duration: '2 months' },
        { name: 'Payroll Module', duration: '10 months' },
        { name: 'Integration Cloud', duration: '1 year' },
      ],
      projects: [
        'Analytics reports and fast formulas for an American Healthcare Consortium',
        'Oracle HCM Cloud setup and email integrations for an American Cleantech Company',
        'Enhanced integrations with HCM Extracts for a Multinational Hospitality Company',
      ],
    },
  },
  {
    id: 2,
    title: 'AI Automation Specialist',
    subtitle: 'LLM Integration & Optimization',
    icon: Zap,
    size: 'medium' as const,
    gradient: 'from-purple-500/20 to-pink-500/20',
    content: {
      llms: ['Claude Sonnet', 'ChatGPT-4o Mini', 'Gemini 3.0/2.0 Flash'],
      focus: [
        'Workflow Optimization',
        'Process Automation',
        'Integration Development',
      ],
    },
  },
  {
    id: 3,
    title: 'Web Development',
    subtitle: 'Modern Stack',
    icon: Code,
    size: 'small' as const,
    gradient: 'from-green-500/20 to-emerald-500/20',
    content: {
      tech: ['React', 'Next.js', 'Node.js', 'TypeScript'],
    },
  },
  {
    id: 4,
    title: 'Current Focus',
    subtitle: 'System Status',
    icon: Activity,
    size: 'small' as const,
    gradient: 'from-orange-500/20 to-red-500/20',
    animated: true,
  },
];

export function BentoGrid() {
  return (
    <section id="experience" className="py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-gradient">Work Experience</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Delivering enterprise-scale solutions across Oracle SaaS, AI
            automation, and modern web development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[280px]">
          {workCards.map((card, index) => {
            const Icon = card.icon;
            const sizeClasses = {
              large: 'md:col-span-2 md:row-span-2',
              medium: 'md:col-span-2 md:row-span-1',
              small: 'md:col-span-1 md:row-span-1',
            };

            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={sizeClasses[card.size]}
              >
                <Card className={`h-full p-6 bg-gradient-to-br ${card.gradient} border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 group overflow-hidden relative`}>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30">
                          <Icon className="w-5 h-5 text-blue-400" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white">
                            {card.title}
                          </h3>
                          <p className="text-sm text-gray-400">
                            {card.subtitle}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {card.animated ? (
                    <div className="flex flex-col items-center justify-center h-[calc(100%-80px)]">
                      <motion.div
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.5, 1, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                        className="w-16 h-16 rounded-full bg-gradient-to-r from-orange-500 to-red-500 blur-xl"
                      />
                      <p className="text-white font-semibold mt-4">
                        Optimizing...
                      </p>
                      <p className="text-sm text-gray-400">
                        Building the future
                      </p>
                    </div>
                  ) : card.size === 'large' && 'mainStats' in card.content ? (
                    <div className="space-y-4 overflow-y-auto h-[calc(100%-80px)] pr-2 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
                      <div className="grid grid-cols-2 gap-3">
                        {card.content.mainStats.map((stat) => (
                          <div
                            key={stat.label}
                            className="p-3 rounded-lg bg-gray-800/50 border border-gray-700/50"
                          >
                            <p className="text-xs text-gray-400 mb-1">
                              {stat.label}
                            </p>
                            <p className="text-lg font-bold text-white">
                              {stat.value}
                            </p>
                          </div>
                        ))}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-300 mb-2">
                          Key Modules:
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {card.content.modules.map((module) => (
                            <Badge
                              key={module.name}
                              variant="secondary"
                              className="bg-blue-500/10 text-blue-300 border-blue-500/30"
                            >
                              {module.name} ({module.duration})
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-300 mb-2">
                          Notable Projects:
                        </p>
                        <ul className="space-y-2">
                          {card.content.projects.map((project, idx) => (
                            <li
                              key={idx}
                              className="text-xs text-gray-400 flex items-start gap-2"
                            >
                              <span className="text-blue-400 mt-1">•</span>
                              <span>{project}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ) : card.size === 'medium' && 'llms' in card.content ? (
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm font-semibold text-gray-300 mb-2">
                          LLM Platforms:
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {card.content.llms.map((llm) => (
                            <Badge
                              key={llm}
                              variant="secondary"
                              className="bg-purple-500/10 text-purple-300 border-purple-500/30"
                            >
                              {llm}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-300 mb-2">
                          Focus Areas:
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {card.content.focus.map((area) => (
                            <Badge
                              key={area}
                              variant="secondary"
                              className="bg-pink-500/10 text-pink-300 border-pink-500/30"
                            >
                              {area}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : card.content && 'tech' in card.content ? (
                    <div className="space-y-3">
                      <div className="flex flex-wrap gap-2">
                        {card.content.tech?.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="bg-green-500/10 text-green-300 border-green-500/30"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
