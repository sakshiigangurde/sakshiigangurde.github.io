import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

export function DesignEvolution() {
    const [activeView, setActiveView] = useState<'before' | 'after'>('before');

    return (
        <section
            id="project1-evolution"
            aria-label="Design evolution"
            className="relative py-32 px-6 lg:px-16 overflow-hidden"
        >
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0e0e0e] via-yellow-950/10 to-[#0e0e0e]" />

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Section label */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-16"
                >
                    <span className="text-sm uppercase tracking-[0.3em] text-yellow-400/70">Evolution</span>
                </motion.div>

                {/* Title */}
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl md:text-6xl lg:text-7xl font-bold mb-16 leading-tight"
                >
                    <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300 bg-clip-text text-transparent">
                        From Concept to Reality
                    </span>
                </motion.h2>

                {/* Toggle */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex justify-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 p-2 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-xl">
                        <button
                            onClick={() => setActiveView('before')}
                            className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${activeView === 'before'
                                    ? 'bg-gradient-to-r from-gray-600 to-gray-700 text-white shadow-lg'
                                    : 'text-gray-400 hover:text-white'
                                }`}
                        >
                            Lo-Fi Wireframes
                        </button>
                        <button
                            onClick={() => setActiveView('after')}
                            className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${activeView === 'after'
                                    ? 'bg-gradient-to-r from-teal-400 via-sky-400 to-pink-400 text-white shadow-lg'
                                    : 'text-gray-400 hover:text-white'
                                }`}
                        >
                            Final Design
                        </button>
                    </div>
                </motion.div>

                {/* Visual Comparison */}
                <div className="relative min-h-[600px]">
                    <AnimatePresence mode="wait">
                        {activeView === 'before' ? (
                            /* Wireframe view */
                            <motion.div
                                key="wireframe"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
                                transition={{ duration: 0.6, ease: 'easeInOut' }}
                                className="w-full"
                            >
                                <div className="rounded-3xl overflow-hidden border border-gray-700/50 shadow-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8">
                                    {/* Wireframe mockup */}
                                    <div className="grid grid-cols-3 gap-4">
                                        {[...Array(3)].map((_, i) => (
                                            <div key={i} className="aspect-[9/16] bg-gray-700/30 rounded-2xl overflow-hidden relative">
                                                <div className="absolute inset-4 space-y-3">
                                                    <div className="h-6 bg-gray-600/40 rounded" />
                                                    <div className="h-3 bg-gray-600/30 rounded w-3/4" />
                                                    <div className="h-3 bg-gray-600/20 rounded w-1/2" />
                                                    <div className="h-20 bg-gray-600/30 rounded-lg mt-2" />
                                                    <div className="h-16 bg-gray-600/25 rounded-lg" />
                                                    <div className="h-16 bg-gray-600/20 rounded-lg" />
                                                    <div className="h-10 bg-gray-600/40 rounded-xl mt-4" />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <p className="text-center text-gray-500 mt-6 text-sm uppercase tracking-widest">
                                    Initial Concept
                                </p>
                            </motion.div>
                        ) : (
                            /* Final design view */
                            <motion.div
                                key="final"
                                initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
                                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                                className="w-full"
                            >
                                <div className="relative">
                                    {/* Glow */}
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-br from-teal-400/30 via-sky-400/30 to-pink-400/30 blur-3xl"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: [0, 0.6, 0.4], scale: [0.8, 1.2, 1.05] }}
                                        transition={{ duration: 1.5, ease: 'easeOut' }}
                                    />
                                    <motion.div
                                        className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-gradient-to-br from-teal-950/30 to-sky-950/30 p-8"
                                        initial={{ y: 20 }}
                                        animate={{ y: 0 }}
                                        transition={{ duration: 0.8, delay: 0.2 }}
                                    >
                                        {/* Final design mockup */}
                                        <div className="grid grid-cols-3 gap-4">
                                            {[
                                                { gradient: 'from-teal-400/20 to-sky-400/20', accent: 'from-teal-400 to-sky-400' },
                                                { gradient: 'from-pink-400/20 to-purple-400/20', accent: 'from-pink-400 to-purple-400' },
                                                { gradient: 'from-yellow-400/20 to-orange-400/20', accent: 'from-yellow-400 to-orange-400' },
                                            ].map((screen, i) => (
                                                <div
                                                    key={i}
                                                    className={`aspect-[9/16] bg-gradient-to-br ${screen.gradient} rounded-2xl overflow-hidden relative border border-white/10`}
                                                >
                                                    <div className="absolute inset-4 space-y-3">
                                                        <div className={`h-8 bg-gradient-to-r ${screen.accent} rounded-xl opacity-80`} />
                                                        <div className="h-3 bg-white/20 rounded w-3/4" />
                                                        <div className="h-3 bg-white/10 rounded w-1/2" />
                                                        <div className="h-20 bg-white/15 rounded-2xl mt-2 shadow-sm" />
                                                        <div className="h-16 bg-white/12 rounded-2xl shadow-sm" />
                                                        <div className="h-16 bg-white/10 rounded-2xl shadow-sm" />
                                                        <div className={`h-12 bg-gradient-to-r ${screen.accent} rounded-2xl mt-4 shadow-lg opacity-90`} />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                </div>
                                <motion.p
                                    className="text-center text-teal-400 mt-6 text-sm uppercase tracking-widest font-semibold"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.9, duration: 0.5 }}
                                >
                                    Final Experience
                                </motion.p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Key improvements */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="mt-24 grid md:grid-cols-3 gap-6"
                >
                    {[
                        { label: 'Visual Hierarchy', value: 'Enhanced clarity' },
                        { label: 'Color System', value: 'Warm & inviting' },
                        { label: 'Interactions', value: 'Smooth & intuitive' },
                    ].map((item, index) => (
                        <div key={index} className="text-center">
                            <p className="text-sm text-gray-500 uppercase tracking-widest mb-2">{item.label}</p>
                            <p className="text-xl text-white font-semibold">{item.value}</p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
