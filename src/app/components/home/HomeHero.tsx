import { motion, AnimatePresence } from 'motion/react';
import { ArrowDown, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';

const roles = [
    { text: 'Product Designer', color: 'from-teal-400 via-cyan-400 to-blue-400' },
    { text: 'Problem Solver', color: 'from-blue-400 via-violet-400 to-pink-400' },
    { text: 'Design Strategist', color: 'from-pink-400 via-rose-400 to-teal-400' },
];

interface Stat {
    value: string;
    label: string;
    gradient: string;
}

const stats: Stat[] = [
    { value: '3', label: 'Featured Projects', gradient: 'from-teal-400 to-cyan-400' },
    { value: '2+', label: 'Years Experience', gradient: 'from-blue-400 to-indigo-400' },
    { value: '∞', label: 'Ideas to Explore', gradient: 'from-violet-400 to-pink-400' },
];

interface HomeHeroProps {
    onViewWork: () => void;
}

export function HomeHero({ onViewWork }: HomeHeroProps) {
    const [roleIndex, setRoleIndex] = useState(0);

    useEffect(() => {
        const id = setInterval(() => {
            setRoleIndex(prev => (prev + 1) % roles.length);
        }, 3000);
        return () => clearInterval(id);
    }, []);

    return (
        <section
            id="hero"
            aria-label="Hero section"
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0e0e0e]"
        >
            {/* Animated gradient orbs */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
                className="absolute inset-0 pointer-events-none"
            >
                <div className="absolute top-1/4 left-1/4 w-[560px] h-[560px] bg-teal-400/10 rounded-full blur-[140px] animate-pulse" />
                <div
                    className="absolute bottom-1/4 right-1/4 w-[560px] h-[560px] bg-blue-400/10 rounded-full blur-[140px] animate-pulse"
                    style={{ animationDelay: '1.2s' }}
                />
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-violet-400/5 rounded-full blur-[160px] animate-pulse"
                    style={{ animationDelay: '2.4s' }}
                />
            </motion.div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 py-24 text-center">
                {/* Greeting badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl mb-9"
                >
                    <Sparkles className="w-4 h-4 text-teal-400" />
                    <span className="text-sm text-gray-300 font-medium tracking-wide">Hi, I'm Sakshi</span>
                </motion.div>

                {/* Animated role headline */}
                <div className="mb-7 overflow-visible">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, delay: 0.4 }}
                        className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-[1.2] lg:leading-[1.1] relative overflow-visible pb-4"
                    >
                        <span className="relative inline-block w-full overflow-visible pb-2">
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={roleIndex}
                                    initial={{ opacity: 0, y: 24 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -24 }}
                                    transition={{ duration: 0.5, ease: 'easeOut' }}
                                    className={`bg-gradient-to-r ${roles[roleIndex].color} bg-clip-text text-transparent block pb-4`}
                                >
                                    {roles[roleIndex].text}
                                </motion.span>
                            </AnimatePresence>
                        </span>
                    </motion.h1>
                </div>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-xl md:text-2xl text-gray-400 mb-14 max-w-3xl mx-auto font-light leading-relaxed"
                >
                    I craft intuitive digital products that solve real problems and delight users—from consumer apps to enterprise platforms.
                </motion.p>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="flex flex-wrap items-center justify-center gap-4 mb-22"
                >
                    <motion.button
                        id="hero-cta-work"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={onViewWork}
                        className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500 rounded-2xl text-[#0e0e0e] font-bold text-[15px] shadow-2xl shadow-teal-500/30 hover:shadow-teal-500/50 transition-all duration-300"
                    >
                        <span>View My Work</span>
                        <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-200" />
                    </motion.button>
                </motion.div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 mt-6"
                >
                    {stats.map((stat, i) => (
                        <div key={stat.label} className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
                            <div className="text-center">
                                <p className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-1 md:mb-2`}>
                                    {stat.value}
                                </p>
                                <p className="text-[11px] md:text-xs text-gray-500 uppercase tracking-widest">{stat.label}</p>
                            </div>
                            {i < stats.length - 1 && (
                                <>
                                    <div className="hidden md:block h-10 w-px bg-gradient-to-b from-transparent via-white/15 to-transparent" />
                                    <div className="block md:hidden w-24 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
                                </>
                            )}
                        </div>
                    ))}
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.6 }}
                    className="mt-24"
                >
                    <motion.div
                        animate={{ y: [0, 9, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                        className="inline-flex flex-col items-center gap-2 cursor-pointer"
                        onClick={onViewWork}
                    >
                        <span className="text-[10px] text-gray-500 uppercase tracking-[0.25em]">Scroll to explore</span>
                        <ArrowDown className="w-4 h-4 text-teal-400/60" />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
