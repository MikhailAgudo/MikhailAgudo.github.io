'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Mail, Briefcase, ExternalLink, User } from 'lucide-react';

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 pt-32 pb-20"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
          {/* Left Column: Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left space-y-8"
          >
            <div className="space-y-4">

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.1]"
              >
                <span className="block text-gradient">
                  AI-Powered Automation
                </span>
                <span className="block text-white">for Tomorrow&apos;s Businesses</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-4"
              >
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium tracking-wide uppercase"
                >
                  Mikhail Joseph Agudo
                </motion.div>
                <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
                  With 4+ years optimizing enterprise systems, I now help businesses automate repetitive labor and decision-making to streamline operations, and build websites to showcase their products and services.
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap items-center gap-4"
            >
              <a
                href="#contact"
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50 flex items-center gap-2"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Mail size={18} />
                  Get In Touch
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>

              <a
                href="#experience"
                className="px-8 py-4 border border-white/10 bg-white/5 rounded-full text-white font-semibold hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
              >
                <Briefcase size={18} />
                See My Experience
              </a>

              <a
                href="#portfolio"
                className="px-8 py-4 border border-blue-500/30 rounded-full text-blue-400 font-semibold hover:bg-blue-500/10 transition-all duration-300 flex items-center gap-2 group"
              >
                <ExternalLink size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                View Portfolio
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column: Profile Photo Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex justify-center items-center relative"
          >
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 0 0 rgba(59, 130, 246, 0)",
                  "0 0 0 20px rgba(59, 130, 246, 0.05)",
                  "0 0 0 0 rgba(59, 130, 246, 0)"
                ]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-2xl flex items-center justify-center group shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-transparent to-purple-500/10 opacity-50 group-hover:opacity-100 transition-opacity duration-700" />

              {/* Animated corner accents */}
              <div className="absolute -top-1 -right-1 w-12 h-12 border-t-2 border-r-2 border-blue-500/30 rounded-tr-3xl" />
              <div className="absolute -bottom-1 -left-1 w-12 h-12 border-b-2 border-l-2 border-purple-500/30 rounded-bl-3xl" />

              <div className="relative z-10 flex flex-col items-center gap-4">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform duration-500">
                  <User size={40} className="text-blue-400 group-hover:text-white transition-colors duration-500" />
                </div>
                <div className="text-center space-y-1">
                  <span className="block text-xs font-bold uppercase tracking-[0.3em] text-gray-500 group-hover:text-blue-400 transition-colors duration-500">
                    Profile Photo
                  </span>
                  <span className="block text-[10px] text-gray-600">
                    Placeholder
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Background decorative elements */}
            <div className="absolute -z-10 w-full h-full bg-blue-500/5 blur-3xl rounded-full" />
          </motion.div>
        </div>

      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500">Scroll</span>
          <ArrowDown className="w-4 h-4 text-gray-500" />
        </motion.div>
      </motion.div>
    </section>
  );
}
