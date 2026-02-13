'use client';

import { motion } from 'framer-motion';

const companies = [
  { name: 'Ateneo de Manila University', subtitle: 'BS MIS, 2019-2020' },
  { name: 'Village88', subtitle: 'Coding Bootcamp' },
  { name: 'Accenture', subtitle: 'Software Engineer' },
];

export function TrustBar() {
  return (
    <section className="py-16 px-4 border-y border-gray-800/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-gray-400 text-sm uppercase tracking-wider">
            Trusted by Leading Organizations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {companies.map((company, index) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col items-center justify-center p-6 rounded-xl bg-gradient-to-br from-gray-800/30 to-gray-900/30 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 group"
            >
              <h3 className="text-xl font-bold text-white text-center mb-2 group-hover:text-gradient transition-all duration-300">
                {company.name}
              </h3>
              <p className="text-sm text-gray-400 text-center">
                {company.subtitle}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
