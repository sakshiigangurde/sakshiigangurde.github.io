import { motion } from 'motion/react';
import { ArrowRight, AlertCircle } from 'lucide-react';

export function ExistingFlow() {
    const steps = [
        'Tap on class',
        'Open details page',
        'Select child',
        'Confirm booking',
    ];

    const challenges = [
        'Linear list view not scalable',
        'Difficult to see daily/weekly availability',
        'No filtering by class type or age group',
        'Too many steps to complete a booking',
    ];

    return (
        <section className="relative py-32 px-6 lg:px-16 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#121212] via-red-950/10 to-[#121212]" />

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Section label */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-16"
                >
                    <span className="text-sm uppercase tracking-[0.3em] text-red-400/70">The Problem</span>
                </motion.div>

                {/* Title */}
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl md:text-6xl lg:text-7xl font-bold mb-24 leading-tight"
                >
                    <span className="text-gray-400">Existing Flow</span>
                    <br />
                    <span className="bg-gradient-to-r from-red-300 to-orange-300 bg-clip-text text-transparent">
                        Had Limitations
                    </span>
                </motion.h2>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Current flow */}
                    <div>
                        <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-2xl font-bold text-white mb-8"
                        >
                            Booking Process
                        </motion.h3>

                        <div className="space-y-4">
                            {steps.map((step, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="flex items-center gap-4"
                                >
                                    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-gray-700 to-gray-800 text-white font-bold flex-shrink-0">
                                        {index + 1}
                                    </div>
                                    <div className="flex-1 bg-gradient-to-r from-white/10 to-white/[0.02] border border-white/10 rounded-xl px-6 py-4">
                                        <p className="text-gray-300">{step}</p>
                                    </div>
                                    {index < steps.length - 1 && (
                                        <ArrowRight className="w-5 h-5 text-gray-600 flex-shrink-0" />
                                    )}
                                </motion.div>
                            ))}
                        </div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="mt-6 text-red-400 font-semibold text-lg"
                        >
                            4 steps to complete one booking
                        </motion.p>
                    </div>

                    {/* Challenges */}
                    <div>
                        <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-2xl font-bold text-white mb-8"
                        >
                            Key Challenges
                        </motion.h3>

                        <div className="space-y-4">
                            {challenges.map((challenge, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="group"
                                >
                                    <div className="flex items-start gap-4 bg-gradient-to-br from-red-950/30 to-orange-950/30 border border-red-500/20 rounded-2xl p-6 hover:border-red-500/40 transition-all">
                                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-500/20 to-orange-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                                            <AlertCircle className="w-5 h-5 text-red-400" />
                                        </div>
                                        <p className="text-gray-300 leading-relaxed">{challenge}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
