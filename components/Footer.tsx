'use client';

import { Mail, Linkedin, Github } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-800/50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-white mb-2">
              Mikhail Joseph Agudo
            </h3>
            <p className="text-gray-400 text-sm">
              AI Automation Engineer | Oracle SaaS Specialist
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="mailto:mikhail.agudo@gmail.com"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/mikhail-agudo/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/MikhailAgudo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800/50 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Mikhail Joseph Agudo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
