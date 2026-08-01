import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';
import { publicUrl } from '@/lib/publicUrl';

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
                    <img
                        src={publicUrl('/images/heroes/littlenest-booking-hero-mockup.png')}
                        alt="LittleNest App Welcome Screen"
                        className="relative w-full h-auto z-10 drop-shadow-2xl"
                    />
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
