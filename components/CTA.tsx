'use client';

import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, ArrowRight } from 'lucide-react';

export function CTA() {
  return (
    <section
      id="contact"
      className="py-32 px-4 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl" />

          <div className="relative bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 sm:p-12">
            <div className="text-center mb-8">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
              >
                <span className="text-gradient">
                  Let's Automate Your Workflow
                </span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-gray-300 text-lg max-w-2xl mx-auto"
              >
                Ready to optimize your enterprise systems or build AI-powered
                solutions? Let's discuss how we can work together.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
            >
              <a
                href="mailto:mikhail.agudo@gmail.com"
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50 flex items-center gap-2 w-full sm:w-auto justify-center"
              >
                <Mail className="w-5 h-5" />
                <span className="relative z-10">Send Email</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center justify-center gap-6"
            >
              <a
                href="https://www.linkedin.com/in/mikhail-agudo/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors duration-300 group"
              >
                <div className="p-2 rounded-full border border-gray-700 group-hover:border-blue-500 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </div>
                <span className="text-sm">LinkedIn</span>
              </a>

              <a
                href="https://github.com/MikhailAgudo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors duration-300 group"
              >
                <div className="p-2 rounded-full border border-gray-700 group-hover:border-purple-500 transition-colors">
                  <Github className="w-5 h-5" />
                </div>
                <span className="text-sm">GitHub</span>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
