'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Zap, Code } from 'lucide-react';

const services = [
    {
        id: 1,
        title: 'Workflow Automation',
        className: 'md:col-span-2',
        gradient: 'from-blue-600/20 to-cyan-600/20',
    },
    {
        id: 2,
        title: 'Web Development',
        className: 'md:col-span-1',
        gradient: 'from-purple-600/20 to-pink-600/20',
    },
];

export function Services() {
    return (
        <section id="services" className="py-32 px-4 bg-[#020617]">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                        <span className="text-gradient">Services & Solutions</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Leveraging AI and modern web technology to transform how businesses operate and reach their customers.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[350px]">
                    {services.map((service, index) => {
                        return (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={service.className}
                            >
                                <Card className={`h-full p-8 bg-[#0f172a]/50 border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 group overflow-hidden relative flex flex-col items-center justify-center text-center`}>
                                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-50`} />
                                    <h3 className="text-2xl sm:text-3xl font-bold text-white relative z-10">
                                        {service.title}
                                    </h3>

                                    {/* Subtle background decoration */}
                                    <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl group-hover:bg-blue-500/10 transition-colors duration-500" />
                                    <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl group-hover:bg-purple-500/10 transition-colors duration-500" />
                                </Card>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
