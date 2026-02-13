'use client';

import { motion } from 'framer-motion';
import { Home, Briefcase, Code, Mail } from 'lucide-react';
import { useState, useEffect } from 'react';

const navItems = [
  { name: 'Hero', href: '#hero', icon: Home },
  { name: 'Experience', href: '#experience', icon: Briefcase },
  { name: 'Skills', href: '#skills', icon: Code },
  { name: 'Contact', href: '#contact', icon: Mail },
];

export function FloatingNav() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    navItems.forEach(({ href }) => {
      const element = document.querySelector(href);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="fixed top-8 left-1/2 -translate-x-1/2 z-50"
    >
      <div className="flex items-center gap-1 bg-[#0f172a]/80 backdrop-blur-xl border border-blue-500/20 rounded-full px-4 py-3 shadow-lg shadow-blue-500/10">
        {navItems.map(({ name, href, icon: Icon }) => (
          <a
            key={name}
            href={href}
            className={`relative px-4 py-2 rounded-full transition-all duration-300 flex items-center gap-2 ${
              activeSection === href.slice(1)
                ? 'text-white'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            {activeSection === href.slice(1) && (
              <motion.div
                layoutId="activeSection"
                className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              />
            )}
            <Icon className="w-4 h-4 relative z-10" />
            <span className="text-sm font-medium relative z-10 hidden sm:inline">
              {name}
            </span>
          </a>
        ))}
      </div>
    </motion.nav>
  );
}
