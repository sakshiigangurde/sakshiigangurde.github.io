import { motion } from 'motion/react';
import { Calendar, Filter, Zap, CheckCircle } from 'lucide-react';

export function Outcome2() {
    const outcomes = [
        {
            icon: Calendar,
            title: 'Calendar Views',
            description: '1-day and 3-day formats for better planning',
        },
        {
            icon: Filter,
            title: 'Smart Filtering',
            description: 'Categories for better class discovery',
        },
        {
            icon: Zap,
            title: 'Quick Actions',
            description: 'Book with a single tap from calendar',
        },
        {
            icon: CheckCircle,
            title: 'Unified Experience',
            description: 'Consistent view for upcoming & past bookings',
        },
    ];

    return (
        <section className="relative py-32 px-6 lg:px-16 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#121212] via-green-950/10 to-[#121212]">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                    className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-gradient-to-br from-green-400/10 to-teal-400/10 rounded-full blur-[120px]"
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Section label */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 text-center"
                >
                    <span className="text-sm uppercase tracking-[0.3em] text-green-400/70">What Changed</span>
                </motion.div>

                {/* Title */}
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl md:text-7xl lg:text-9xl font-bold mb-24 leading-tight text-center"
                >
                    <span className="bg-gradient-to-r from-green-300 via-teal-300 to-sky-300 bg-clip-text text-transparent">
                        Outcome
                    </span>
                </motion.h2>

                {/* Outcomes grid */}
                <div className="grid md:grid-cols-2 gap-8 mb-24">
                    {outcomes.map((outcome, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            whileHover={{ scale: 1.05, y: -10 }}
                            className="group"
                        >
                            <div className="bg-gradient-to-br from-white/10 to-white/[0.02] border border-white/10 rounded-3xl p-10 h-full hover:border-green-400/30 transition-all duration-500">
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-400/20 to-teal-400/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <outcome.icon className="w-8 h-8 text-green-400" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-3">{outcome.title}</h3>
                                <p className="text-gray-400 text-lg leading-relaxed">{outcome.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Key metrics */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="bg-gradient-to-br from-green-950/30 to-teal-950/30 border border-green-500/20 rounded-3xl p-12 md:p-16"
                >
                    <div className="grid md:grid-cols-3 gap-12 text-center">
                        <div>
                            <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-300 to-teal-300 bg-clip-text text-transparent mb-4">
                                2 steps
                            </div>
                            <p className="text-xl text-gray-400">Down from 4 steps</p>
                        </div>
                        <div>
                            <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-teal-300 to-sky-300 bg-clip-text text-transparent mb-4">
                                3 views
                            </div>
                            <p className="text-xl text-gray-400">Calendar formats</p>
                        </div>
                        <div>
                            <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-sky-300 to-green-300 bg-clip-text text-transparent mb-4">
                                100%
                            </div>
                            <p className="text-xl text-gray-400">Personalized results</p>
                        </div>
                    </div>
                </motion.div>

                {/* Parents can now */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-16"
                >
                    <h3 className="text-3xl font-bold text-white mb-8 text-center">Parents Can Now</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            'See 1-day or 3-day class views at a glance',
                            'Filter by categories for better discovery',
                            'Quickly book classes with a single tap',
                            'View upcoming and past bookings consistently',
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                                className="flex items-start gap-4 bg-white/5 rounded-2xl p-6"
                            >
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-teal-400 flex items-center justify-center flex-shrink-0">
                                    <CheckCircle className="w-5 h-5 text-white" />
                                </div>
                                <p className="text-gray-300 leading-relaxed">{item}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
