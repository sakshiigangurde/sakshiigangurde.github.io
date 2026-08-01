import { motion } from 'motion/react';
import { ArrowRight, Calendar, User, CheckCircle } from 'lucide-react';

const flowSteps = [
    {
        icon: Calendar,
        title: 'Browse',
        description: 'Explore daily activities',
        color: 'from-teal-400 to-sky-400',
    },
    {
        icon: User,
        title: 'Select Child',
        description: 'Choose which child to book for',
        color: 'from-yellow-400 to-orange-400',
    },
    {
        icon: CheckCircle,
        title: 'Confirm',
        description: 'Instant booking confirmation',
        color: 'from-pink-400 to-purple-300',
    },
];

export function UserFlow() {
    return (
        <section
            id="project1-flow"
            aria-label="User flow"
            className="relative py-32 px-6 lg:px-16 overflow-hidden"
        >
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0e0e0e] via-teal-950/10 to-[#0e0e0e]" />

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Section label */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-16"
                >
                    <span className="text-sm uppercase tracking-[0.3em] text-teal-400/70">User Journey</span>
                </motion.div>

                {/* Title */}
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl md:text-6xl lg:text-7xl font-bold mb-24 leading-tight"
                >
                    <span className="text-gray-400">Simple,</span>
                    <br />
                    <span className="bg-gradient-to-r from-teal-300 to-sky-300 bg-clip-text text-transparent">
                        Intuitive Flow
                    </span>
                </motion.h2>

                {/* Flow Steps */}
                <div className="relative">
                    {/* Connection line */}
                    <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-teal-400/20 via-yellow-400/20 to-pink-400/20 -translate-y-1/2" />

                    <div className="grid lg:grid-cols-3 gap-8">
                        {flowSteps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 60 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-100px' }}
                                transition={{ duration: 0.8, delay: index * 0.2 }}
                                className="relative group"
                            >
                                {/* Card */}
                                <div className="relative bg-gradient-to-br from-white/10 to-white/[0.02] border border-white/10 rounded-3xl p-10 hover:border-white/20 transition-all duration-500 hover:scale-105">
                                    {/* Step number */}
                                    <div className="absolute -top-4 -left-4 w-12 h-12 rounded-2xl bg-gradient-to-br from-white/20 to-white/10 border border-white/20 flex items-center justify-center backdrop-blur-xl">
                                        <span className="text-xl font-bold text-white">{index + 1}</span>
                                    </div>

                                    {/* Icon */}
                                    <div
                                        className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shadow-lg`}
                                    >
                                        <step.icon className="w-10 h-10 text-white" />
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-3xl font-bold text-white mb-3">{step.title}</h3>
                                    <p className="text-gray-400 text-lg leading-relaxed">{step.description}</p>

                                    {/* Glow effect */}
                                    <div
                                        className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-10 blur-2xl rounded-3xl transition-opacity`}
                                    />
                                </div>

                                {/* Arrow between steps */}
                                {index < flowSteps.length - 1 && (
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.8, delay: index * 0.2 + 0.4 }}
                                        className="hidden lg:flex absolute top-1/2 -right-4 -translate-y-1/2 z-10 w-8 h-8 items-center justify-center"
                                    >
                                        <ArrowRight className="w-6 h-6 text-white/30" />
                                    </motion.div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Bottom description */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="text-center text-xl text-gray-400 mt-24 max-w-3xl mx-auto"
                >
                    From browsing to booking in under 30 seconds—designed for busy parents who value their time.
                </motion.p>
            </div>
        </section>
    );
}
