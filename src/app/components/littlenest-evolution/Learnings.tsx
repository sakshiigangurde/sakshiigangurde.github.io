import { motion } from 'motion/react';
import { Lightbulb, Users, BarChart } from 'lucide-react';

export function Learnings() {
    const insights = [
        {
            icon: Users,
            title: 'User Feedback Drives Iteration',
            description: "Listening to real parents using the app revealed pain points we couldn't have predicted during initial design.",
        },
        {
            icon: BarChart,
            title: 'Flexibility is Key',
            description: 'Some parents want to book instantly, others prefer details first. Dual CTAs gave everyone their preferred flow.',
        },
        {
            icon: Lightbulb,
            title: 'Balance Clarity vs. Density',
            description: 'Calendar layouts must show enough information without overwhelming—especially when many classes overlap.',
        },
    ];



    return (
        <section className="relative py-32 px-6 lg:px-16 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#121212] via-purple-950/10 to-[#121212]" />

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Section label */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-16"
                >
                    <span className="text-sm uppercase tracking-[0.3em] text-purple-400/70">Reflection</span>
                </motion.div>

                {/* Title */}
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl md:text-6xl lg:text-7xl font-bold mb-24 leading-tight"
                >
                    <span className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                        Key Learnings
                    </span>
                </motion.h2>

                {/* Insights */}
                <div className="space-y-8 mb-24">
                    {insights.map((insight, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.8, delay: index * 0.15 }}
                            className="group"
                        >
                            <div className="bg-gradient-to-br from-white/10 to-white/[0.02] border border-white/10 rounded-3xl p-10 hover:border-purple-400/30 transition-all duration-500 hover:scale-[1.02]">
                                <div className="flex items-start gap-6">
                                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-400/20 to-pink-400/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                        <insight.icon className="w-8 h-8 text-purple-400" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-bold text-white mb-3">{insight.title}</h3>
                                        <p className="text-gray-400 text-lg leading-relaxed">{insight.description}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>



                {/* Closing thought */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-16 text-center"
                >
                    <p className="text-2xl md:text-3xl text-gray-300 italic leading-relaxed max-w-4xl mx-auto">
                        "This iteration taught me that great products evolve through listening, testing, and continuous refinement based on real user needs."
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
