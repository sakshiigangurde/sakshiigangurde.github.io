import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export function DesignVision() {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start'],
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

    return (
        <section
            ref={sectionRef}
            id="project1-vision"
            aria-label="Design vision"
            className="relative min-h-screen flex items-center justify-center py-32 px-6 lg:px-16 overflow-hidden"
        >
            {/* Animated background */}
            <motion.div style={{ y }} className="absolute inset-0">
                <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-teal-400/10 to-sky-400/10 rounded-full blur-[100px]" />
            </motion.div>

            <motion.div style={{ opacity }} className="relative z-10 max-w-5xl mx-auto text-center">
                {/* Section label */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-16"
                >
                    <span className="text-sm uppercase tracking-[0.3em] text-teal-400/70">Our Vision</span>
                </motion.div>

                {/* Main vision statement */}
                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-12"
                >
                    <span className="block text-gray-400 mb-4">A</span>
                    <span className="block bg-gradient-to-r from-teal-300 via-sky-300 to-pink-300 bg-clip-text text-transparent">
                        calm, personalized,
                    </span>
                    <span className="block bg-gradient-to-r from-pink-300 via-yellow-300 to-teal-300 bg-clip-text text-transparent">
                        and premium
                    </span>
                    <span className="block text-gray-400 mt-4">experience for modern parents.</span>
                </motion.h2>

                {/* Decorative accent */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex items-center justify-center gap-3 mt-16"
                >
                    <div className="h-px w-24 bg-gradient-to-r from-transparent to-teal-400/50" />
                    <div className="w-2 h-2 rounded-full bg-teal-400" />
                    <div className="h-px w-24 bg-gradient-to-l from-transparent to-teal-400/50" />
                </motion.div>
            </motion.div>
        </section>
    );
}
