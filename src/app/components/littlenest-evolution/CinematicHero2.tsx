import { motion } from 'motion/react';
import { ArrowDown, RefreshCw } from 'lucide-react';

export function CinematicHero2() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#121212]">
            {/* Animated background gradients */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
                className="absolute inset-0"
            >
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-300/15 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-400/15 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
                <div className="absolute top-1/2 right-1/3 w-96 h-96 bg-sky-400/15 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
            </motion.div>

            {/* Content Container */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 py-20 text-center">
                {/* Animated Tag */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl mb-8"
                >
                    <RefreshCw className="w-4 h-4 text-green-400" />
                    <span className="text-sm text-gray-300 font-medium tracking-wide">Product Evolution</span>
                </motion.div>

                {/* Main Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[1.1]"
                >
                    <span className="block bg-gradient-to-r from-white via-green-100 to-white bg-clip-text text-transparent">
                        Evolving the
                    </span>
                    <span className="block bg-gradient-to-r from-green-300 via-teal-300 to-sky-300 bg-clip-text text-transparent">
                        Booking Experience
                    </span>
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="text-2xl md:text-3xl text-gray-400 mb-16 max-w-3xl mx-auto font-light"
                >
                    How user feedback shaped the next iteration
                </motion.p>

                {/* Timeline indicator */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="mb-16"
                >
                    <div className="inline-flex items-center gap-6 px-8 py-4 bg-gradient-to-r from-white/5 to-white/[0.02] border border-white/10 rounded-2xl backdrop-blur-xl">
                        <div className="text-center">
                            <p className="text-sm text-gray-500 mb-1">Launch</p>
                            <p className="text-2xl font-bold bg-gradient-to-r from-green-300 to-teal-300 bg-clip-text text-transparent">Year 1</p>
                        </div>
                        <div className="h-12 w-px bg-gradient-to-b from-transparent via-green-400/50 to-transparent" />
                        <div className="text-center">
                            <p className="text-sm text-gray-500 mb-1">Evolution</p>
                            <p className="text-2xl font-bold bg-gradient-to-r from-teal-300 to-sky-300 bg-clip-text text-transparent">Year 2</p>
                        </div>
                    </div>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="mt-20"
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                        className="inline-flex flex-col items-center gap-2"
                    >
                        <span className="text-xs text-gray-500 uppercase tracking-widest">Scroll to explore</span>
                        <ArrowDown className="w-5 h-5 text-teal-400/70" />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
