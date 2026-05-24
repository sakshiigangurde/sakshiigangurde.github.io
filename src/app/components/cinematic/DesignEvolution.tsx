import { motion } from 'motion/react';
import { useState } from 'react';
import { publicUrl } from '@/lib/publicUrl';

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
                <div className="relative w-full">
                    <div className="grid grid-cols-1 grid-rows-1 place-items-center">
                        {/* Wireframe view */}
                        <motion.div
                            initial={false}
                            animate={{
                                opacity: activeView === 'before' ? 1 : 0,
                                filter: activeView === 'before' ? 'blur(0px)' : 'blur(4px)',
                                scale: activeView === 'before' ? 1 : 0.98
                            }}
                            transition={{ duration: 0.5, ease: 'easeInOut' }}
                            className={`col-start-1 row-start-1 w-full flex flex-col items-center ${activeView === 'before' ? 'pointer-events-auto z-10' : 'pointer-events-none z-0'}`}
                        >
                            <div className="w-full rounded-[2.5rem] overflow-hidden border border-gray-700/50 shadow-2xl bg-gradient-to-br from-gray-800/20 to-gray-900/20 flex justify-center items-center">
                                {/* Wireframe Image */}
                                <img
                                    src={publicUrl('/images/littlenest-booking/littlenest-booking-design-evolution-wireframes.png')}
                                    alt="Lo-Fi Wireframes"
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                        </motion.div>

                        {/* Final design view */}
                        <motion.div
                            initial={false}
                            animate={{
                                opacity: activeView === 'after' ? 1 : 0,
                                filter: activeView === 'after' ? 'blur(0px)' : 'blur(4px)',
                                scale: activeView === 'after' ? 1 : 0.98
                            }}
                            transition={{ duration: 0.5, ease: 'easeInOut' }}
                            className={`col-start-1 row-start-1 w-full flex flex-col items-center ${activeView === 'after' ? 'pointer-events-auto z-10' : 'pointer-events-none z-0'}`}
                        >
                            <div className="relative w-full">
                                {/* Glow */}
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-br from-teal-400/30 via-sky-400/30 to-pink-400/30 blur-3xl"
                                    animate={{
                                        opacity: activeView === 'after' ? [0, 0.6, 0.4] : 0,
                                        scale: activeView === 'after' ? [0.8, 1.2, 1.05] : 0.8
                                    }}
                                    transition={{ duration: 1.5, ease: 'easeOut' }}
                                />
                                <div className="relative w-full rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl bg-gradient-to-br from-teal-950/20 to-sky-950/20 flex justify-center items-center">
                                    {/* Final design Image */}
                                    <img
                                        src={publicUrl('/images/littlenest-booking/littlenest-booking-design-evolution-final.png')}
                                        alt="Final Design"
                                        className="w-full h-auto object-cover"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <div className="mt-8 relative h-8 flex justify-center items-center w-full">
                        <motion.p
                            initial={false}
                            animate={{
                                opacity: activeView === 'before' ? 1 : 0,
                                y: activeView === 'before' ? 0 : 5
                            }}
                            transition={{ duration: 0.4 }}
                            className="absolute text-center text-gray-500 text-sm uppercase tracking-widest font-semibold"
                        >
                            Initial Concept
                        </motion.p>
                        <motion.p
                            initial={false}
                            animate={{
                                opacity: activeView === 'after' ? 1 : 0,
                                y: activeView === 'after' ? 0 : 5
                            }}
                            transition={{ duration: 0.4 }}
                            className="absolute text-center text-teal-400 text-sm uppercase tracking-widest font-semibold block"
                        >
                            Final Experience
                        </motion.p>
                    </div>
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
