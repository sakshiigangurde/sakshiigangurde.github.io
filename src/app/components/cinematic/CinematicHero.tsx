import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';

export function CinematicHero() {
    return (
        <section
            id="project1-hero"
            aria-label="LittleNest project hero"
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0e0e0e]"
        >
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }} className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-300/12 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-sky-400/12 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
                <div className="absolute top-1/2 right-1/3 w-96 h-96 bg-pink-300/12 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
            </motion.div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 py-24 text-center">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl mb-8">
                    <div className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
                    <span className="text-sm text-gray-300 font-medium tracking-wide">Premium Mobile Experience</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[1.1]"
                >
                    <span className="block bg-gradient-to-r from-white via-sky-100 to-white bg-clip-text text-transparent">
                        Designing a Premium
                    </span>
                    <span className="block bg-gradient-to-r from-teal-300 via-sky-300 to-pink-300 bg-clip-text text-transparent">
                        Booking Experience
                    </span>
                </motion.h1>

                <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }}
                    className="text-2xl text-gray-400 mb-16 max-w-3xl mx-auto font-light">
                    For ultra-high-net-worth families at LittleNest Children's Club
                </motion.p>

                {/* Phone Mockup */}
                <motion.div
                    initial={{ opacity: 0, y: 60, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 1.2, delay: 1, type: 'spring', stiffness: 50 }}
                    className="relative mx-auto max-w-xs"
                >
                    <div className="absolute inset-0 bg-gradient-to-t from-sky-400/30 via-pink-300/15 to-yellow-300/15 blur-3xl scale-110" />
                    <div className="relative bg-gradient-to-br from-zinc-900 to-black rounded-[3rem] p-3 shadow-2xl shadow-sky-900/40 border border-white/10">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-b-3xl z-20" />
                        <div className="relative bg-gradient-to-br from-green-50 via-sky-50 to-pink-50 rounded-[2.5rem] overflow-hidden aspect-[9/19.5]">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center px-6">
                                    <div className="w-16 h-16 mx-auto mb-5 rounded-3xl bg-gradient-to-br from-teal-400 via-sky-400 to-pink-400 shadow-lg" />
                                    <div className="h-2.5 bg-gray-800/20 rounded-full w-28 mx-auto mb-2" />
                                    <div className="h-2.5 bg-gray-800/10 rounded-full w-20 mx-auto mb-7" />
                                    <div className="space-y-2.5">
                                        <div className="h-14 bg-white/80 backdrop-blur rounded-2xl shadow-sm" />
                                        <div className="h-14 bg-white/60 backdrop-blur rounded-2xl shadow-sm" />
                                        <div className="h-14 bg-white/40 backdrop-blur rounded-2xl shadow-sm" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 2 }} className="mt-16">
                    <motion.div animate={{ y: [0, 9, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }} className="inline-flex flex-col items-center gap-1.5">
                        <span className="text-[10px] text-gray-500 uppercase tracking-[0.25em]">Scroll to explore</span>
                        <ArrowDown className="w-4 h-4 text-sky-400/60" />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
