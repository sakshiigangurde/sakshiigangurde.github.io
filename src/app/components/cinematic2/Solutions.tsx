import { motion } from 'motion/react';
import { Calendar, User, Zap, LayoutGrid } from 'lucide-react';

export function Solutions() {
    const solutions = [
        {
            icon: Calendar,
            title: 'Calendar Views',
            description: '1-day and 3-day layouts for better planning',
            color: 'from-teal-400 to-sky-400',
            features: ['Day view', '3-day view', 'Clear time slots'],
        },
        {
            icon: LayoutGrid,
            title: 'Categories',
            description: 'Grouped classes into Academic, Movement, Creative',
            color: 'from-yellow-400 to-orange-400',
            features: ['Academic', 'Movement', 'Creative'],
        },
        {
            icon: User,
            title: 'Personalization',
            description: "Auto-filter results by child's age group",
            color: 'from-pink-400 to-purple-300',
            features: ['Age-based', 'Smart filters', 'Relevant results'],
        },
        {
            icon: Zap,
            title: 'Dual CTAs',
            description: 'Quick Book or view Details for flexibility',
            color: 'from-green-400 to-teal-400',
            features: ['Quick book', 'View details', 'User choice'],
        },
    ];

    return (
        <section className="relative py-32 px-6 lg:px-16 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#121212] via-teal-950/10 to-[#121212]" />

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Section label */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-16"
                >
                    <span className="text-sm uppercase tracking-[0.3em] text-teal-400/70">The Solution</span>
                </motion.div>

                {/* Title */}
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl md:text-6xl lg:text-7xl font-bold mb-12 leading-tight"
                >
                    <span className="bg-gradient-to-r from-teal-300 via-sky-300 to-green-300 bg-clip-text text-transparent">
                        Evolve Without
                    </span>
                    <br />
                    <span className="text-gray-400">Overwhelming Users</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-xl text-gray-400 mb-24 max-w-3xl"
                >
                    I explored solutions that would enhance the experience while maintaining simplicity and ease of use.
                </motion.p>

                {/* Solutions grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {solutions.map((solution, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-100px' }}
                            transition={{ duration: 0.8, delay: index * 0.15 }}
                            className="group"
                        >
                            <div className="relative bg-gradient-to-br from-white/10 to-white/[0.02] border border-white/10 rounded-3xl p-10 h-full hover:border-white/20 transition-all duration-500 hover:scale-105">
                                {/* Icon */}
                                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${solution.color} flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform`}>
                                    <solution.icon className="w-10 h-10 text-white" />
                                </div>

                                {/* Title */}
                                <h3 className="text-3xl font-bold text-white mb-4">
                                    {solution.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                                    {solution.description}
                                </p>

                                {/* Features */}
                                <div className="flex flex-wrap gap-2">
                                    {solution.features.map((feature, idx) => (
                                        <div
                                            key={idx}
                                            className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300"
                                        >
                                            {feature}
                                        </div>
                                    ))}
                                </div>

                                {/* Glow effect */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${solution.color} opacity-0 group-hover:opacity-10 blur-2xl rounded-3xl transition-opacity`} />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom highlight */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="mt-24 bg-gradient-to-br from-teal-950/30 to-sky-950/30 border border-teal-500/20 rounded-3xl p-12 text-center"
                >
                    <h3 className="text-3xl font-bold text-white mb-4">Unified Experience</h3>
                    <p className="text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
                        Same calendar view used for upcoming and past bookings, giving parents one consistent experience across the entire app.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
