import { motion } from 'motion/react';
import { ArrowDown, Sparkles } from 'lucide-react';

export function AboutHero() {
    return (
        <section
            id="about-hero"
            aria-label="About hero"
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0e0e0e]"
        >
            {/* Background orbs */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
                className="absolute inset-0 pointer-events-none"
            >
                <div className="absolute top-1/4 left-1/4 w-[560px] h-[560px] bg-violet-400/10 rounded-full blur-[150px] animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-[560px] h-[560px] bg-pink-400/10 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '1.2s' }} />
                <div className="absolute top-1/2 right-1/3 w-[640px] h-[640px] bg-blue-400/8 rounded-full blur-[160px] animate-pulse" style={{ animationDelay: '2.4s' }} />
            </motion.div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 py-24">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Text */}
                    <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.2 }}>
                        <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl mb-9">
                            <Sparkles className="w-4 h-4 text-violet-400" />
                            <span className="text-sm text-gray-300 font-medium tracking-wide">About Me</span>
                        </div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
                            <span className="block text-white mb-2">Designer,</span>
                            <span className="block bg-gradient-to-r from-violet-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-2">Problem Solver,</span>
                            <span className="block text-white">Storyteller</span>
                        </h1>

                        <p className="text-xl text-gray-400 leading-relaxed">
                            I’m a UI/UX and product designer with 5+ years of experience crafting simple, impactful, and user-focused digital experiences
                        </p>
                    </motion.div>

                    {/* Visual — Profile Photo */}
                    <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.4 }} className="relative flex justify-center">
                        {/* Glow behind photo */}
                        <div className="absolute inset-0 bg-gradient-to-br from-violet-400/25 via-pink-400/20 to-blue-400/20 blur-3xl scale-110 pointer-events-none rounded-full" />

                        {/* Gradient border ring */}
                        <div className="relative p-[3px] rounded-[2.5rem] bg-gradient-to-br from-violet-500 via-pink-500 to-blue-500 shadow-2xl shadow-violet-500/20">
                            <div className="rounded-[2.4rem] overflow-hidden w-full max-w-[420px] aspect-square bg-[#0e0e0e]">
                                <img
                                    src="/images/sakshi-profile.jpg"
                                    alt="Sakshi — UI/UX Designer"
                                    className="w-full h-full object-cover object-top"
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.2 }}
                    className="mt-20 text-center"
                >
                    <motion.div
                        animate={{ y: [0, 9, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                        className="inline-flex flex-col items-center gap-2"
                    >
                        <span className="text-[10px] text-gray-500 uppercase tracking-[0.25em]">Scroll to learn more</span>
                        <ArrowDown className="w-4 h-4 text-violet-400/60" />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
