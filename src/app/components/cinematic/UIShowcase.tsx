import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Calendar, Clock, Users } from 'lucide-react';

const screens = [
    {
        title: 'Calendar View',
        description: 'Browse daily activities at a glance',
        icon: Calendar,
        gradient: 'from-teal-500 to-sky-500',
        features: ['Intuitive navigation', 'Real-time updates', 'One-tap actions'],
        screenBg: 'from-teal-50 to-sky-50',
    },
    {
        title: 'Class Details',
        description: 'Rich information with booking options',
        icon: Clock,
        gradient: 'from-pink-500 to-purple-500',
        features: ['Caregiver profiles', 'Availability at a glance', 'Instant booking'],
        screenBg: 'from-pink-50 to-purple-50',
    },
    {
        title: 'My Bookings',
        description: 'Manage all children\'s schedules',
        icon: Users,
        gradient: 'from-yellow-500 to-orange-500',
        features: ['Multi-child management', 'Booking history', 'Easy cancellation'],
        screenBg: 'from-yellow-50 to-orange-50',
    },
];

export function UIShowcase() {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start'],
    });

    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    return (
        <section
            ref={sectionRef}
            id="project1-ui"
            aria-label="Final interface showcase"
            className="relative py-32 px-6 lg:px-16 overflow-hidden"
        >
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0e0e0e] via-indigo-950/10 to-[#0e0e0e]" />

            <motion.div style={{ opacity }} className="relative z-10 max-w-7xl mx-auto">
                {/* Section label */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 text-center"
                >
                    <span className="text-sm uppercase tracking-[0.3em] text-indigo-400/70">The Experience</span>
                </motion.div>

                {/* Title */}
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl md:text-6xl lg:text-7xl font-bold mb-24 leading-tight text-center"
                >
                    <span className="bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">
                        Final Interface
                    </span>
                </motion.h2>

                {/* Screen Showcases */}
                <div className="space-y-32">
                    {screens.map((screen, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 80 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-100px' }}
                            transition={{ duration: 1, delay: index * 0.2 }}
                            className="relative"
                        >
                            <div className="grid lg:grid-cols-2 gap-12 items-center">
                                {/* Info side */}
                                <div className={index % 2 === 0 ? 'order-1' : 'order-2'}>
                                    <div
                                        className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${screen.gradient} mb-8 shadow-lg`}
                                    >
                                        <screen.icon className="w-8 h-8 text-white" />
                                    </div>

                                    <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">{screen.title}</h3>

                                    <p className="text-xl text-gray-400 leading-relaxed mb-8">{screen.description}</p>

                                    {/* Micro-features */}
                                    <div className="space-y-4">
                                        {screen.features.map((feature, fi) => (
                                            <div key={fi} className="flex items-center gap-3">
                                                <div
                                                    className={`w-2 h-2 rounded-full bg-gradient-to-r ${screen.gradient}`}
                                                />
                                                <span className="text-gray-300">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Screen mockup */}
                                <motion.div
                                    style={{ scale: index === 1 ? scale : 1 }}
                                    className={index % 2 === 0 ? 'order-2' : 'order-1'}
                                >
                                    <div className="relative max-w-sm mx-auto">
                                        {/* Glow */}
                                        <div
                                            className={`absolute inset-0 bg-gradient-to-br ${screen.gradient} opacity-20 blur-3xl scale-110`}
                                        />

                                        {/* Phone frame */}
                                        <div className="relative bg-gradient-to-br from-zinc-900 to-black rounded-[3rem] p-3 shadow-2xl border border-white/10">
                                            {/* Notch */}
                                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-b-3xl z-20" />

                                            {/* Screen content */}
                                            <div
                                                className={`relative bg-gradient-to-br ${screen.screenBg} rounded-[2.5rem] overflow-hidden aspect-[9/19.5]`}
                                            >
                                                <div className="absolute inset-0 p-6 flex flex-col pt-10">
                                                    {/* Header */}
                                                    <div className="flex items-center justify-between mb-6">
                                                        <div
                                                            className={`w-24 h-8 rounded-xl bg-gradient-to-r ${screen.gradient} opacity-80`}
                                                        />
                                                        <div className="w-10 h-10 rounded-full bg-white/80 backdrop-blur shadow" />
                                                    </div>

                                                    {/* Content area */}
                                                    <div className="flex-1 space-y-3">
                                                        {index === 0 && (
                                                            <>
                                                                <div
                                                                    className={`h-12 bg-gradient-to-r ${screen.gradient} opacity-20 rounded-2xl`}
                                                                />
                                                                <div className="grid grid-cols-7 gap-1.5">
                                                                    {[...Array(7)].map((_, i) => (
                                                                        <div
                                                                            key={i}
                                                                            className="aspect-square bg-white/60 backdrop-blur rounded-lg"
                                                                        />
                                                                    ))}
                                                                </div>
                                                                <div className="space-y-2 mt-4">
                                                                    <div className="h-16 bg-white/80 backdrop-blur rounded-2xl shadow-sm" />
                                                                    <div className="h-16 bg-white/80 backdrop-blur rounded-2xl shadow-sm" />
                                                                    <div className="h-16 bg-white/80 backdrop-blur rounded-2xl shadow-sm" />
                                                                </div>
                                                            </>
                                                        )}
                                                        {index === 1 && (
                                                            <>
                                                                <div
                                                                    className={`h-32 bg-gradient-to-br ${screen.gradient} opacity-25 rounded-2xl`}
                                                                />
                                                                <div className="space-y-3 mt-4">
                                                                    {[...Array(3)].map((_, i) => (
                                                                        <div key={i} className="flex items-center gap-3">
                                                                            <div className="w-8 h-8 bg-white/60 rounded-lg" />
                                                                            <div className="h-3 bg-gray-800/10 rounded-full flex-1" />
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                                <div
                                                                    className={`mt-6 h-14 bg-gradient-to-r ${screen.gradient} rounded-2xl shadow-lg opacity-80`}
                                                                />
                                                            </>
                                                        )}
                                                        {index === 2 && (
                                                            <>
                                                                <div className="flex gap-2 mb-4">
                                                                    <div
                                                                        className={`h-10 px-4 bg-gradient-to-r ${screen.gradient} rounded-xl flex-1 opacity-80`}
                                                                    />
                                                                    <div className="h-10 px-4 bg-white/40 backdrop-blur rounded-xl flex-1" />
                                                                </div>
                                                                <div className="space-y-3">
                                                                    {[...Array(3)].map((_, i) => (
                                                                        <div
                                                                            key={i}
                                                                            className="h-20 bg-white/80 backdrop-blur rounded-2xl shadow-sm"
                                                                        />
                                                                    ))}
                                                                </div>
                                                            </>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
