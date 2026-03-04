import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

export function UserFeedback() {
    const feedback = [
        {
            quote: 'I want to see classes in a calendar view—1-day and 3-day formats.',
            color: 'from-teal-400 to-sky-400',
        },
        {
            quote: 'It should be easier to filter classes by type (academic, movement, creative).',
            color: 'from-yellow-400 to-orange-400',
        },
        {
            quote: "I want the results to be personalized to my child's age group.",
            color: 'from-pink-400 to-purple-300',
        },
    ];

    return (
        <section className="relative py-32 px-6 lg:px-16 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#121212] via-sky-950/10 to-[#121212]" />

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Section label */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-16"
                >
                    <span className="text-sm uppercase tracking-[0.3em] text-sky-400/70">What Parents Said</span>
                </motion.div>

                {/* Title */}
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl md:text-6xl lg:text-7xl font-bold mb-24 leading-tight"
                >
                    <span className="bg-gradient-to-r from-sky-300 to-teal-300 bg-clip-text text-transparent">
                        Listening to Users
                    </span>
                </motion.h2>

                {/* Feedback cards */}
                <div className="space-y-8">
                    {feedback.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: '-100px' }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            className="group"
                        >
                            <div className="relative bg-gradient-to-br from-white/10 to-white/[0.02] border border-white/10 rounded-3xl p-10 md:p-12 hover:border-white/20 transition-all duration-500 hover:scale-[1.02]">
                                {/* Quote icon */}
                                <div className={`absolute -top-4 -left-4 w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg`}>
                                    <Quote className="w-8 h-8 text-white" />
                                </div>

                                {/* Quote text */}
                                <blockquote className="text-2xl md:text-3xl text-white font-light leading-relaxed pl-8 italic">
                                    "{item.quote}"
                                </blockquote>

                                {/* Glow effect */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 blur-2xl rounded-3xl transition-opacity`} />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Summary */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="mt-24 text-center"
                >
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        These recurring pain points revealed a clear opportunity:
                        <span className="text-white font-semibold"> make booking more intuitive, personalized, and efficient.</span>
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
