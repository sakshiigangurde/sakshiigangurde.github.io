import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Clock, Users, TrendingUp } from 'lucide-react';

export function Context() {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start'],
    });

    const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

    return (
        <section
            ref={sectionRef}
            className="relative py-32 px-6 lg:px-16 overflow-hidden"
        >
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#121212] via-green-950/10 to-[#121212]" />

            <motion.div
                style={{ opacity }}
                className="relative z-10 max-w-6xl mx-auto"
            >
                {/* Section label */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-16"
                >
                    <span className="text-sm uppercase tracking-[0.3em] text-green-400/70">Setting the Stage</span>
                </motion.div>

                {/* Main statement */}
                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-12"
                >
                    <span className="block text-gray-400 mb-4">One year after launch,</span>
                    <span className="block bg-gradient-to-r from-green-300 via-teal-300 to-sky-300 bg-clip-text text-transparent">
                        parents began actively using the app.
                    </span>
                </motion.h2>

                {/* Context paragraph */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-2xl text-gray-400 leading-relaxed mb-24 max-w-4xl"
                >
                    As adoption grew, new user needs emerged. Parents expressed difficulty navigating bookings,
                    understanding availability, and filtering classes relevant to their children.
                </motion.p>

                {/* Stats cards */}
                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        {
                            icon: Users,
                            label: 'Active Adoption',
                            description: 'Parents booking daily',
                        },
                        {
                            icon: TrendingUp,
                            label: 'New Needs',
                            description: 'User feedback emerging',
                        },
                        {
                            icon: Clock,
                            label: 'Opportunity',
                            description: 'Time to iterate',
                        },
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                            className="group"
                        >
                            <div className="bg-gradient-to-br from-white/10 to-white/[0.02] border border-white/10 rounded-3xl p-8 hover:border-green-400/30 transition-all duration-500">
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-400/20 to-teal-400/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <item.icon className="w-7 h-7 text-green-400" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">{item.label}</h3>
                                <p className="text-gray-400 leading-relaxed">{item.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Decorative line */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="mt-24 h-px bg-gradient-to-r from-transparent via-green-400/50 to-transparent origin-center"
                />
            </motion.div>
        </section>
    );
}
