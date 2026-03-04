import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

const problems = [
    {
        statement: 'Booking classes',
        emphasis: "shouldn't feel complex",
        delay: 0,
    },
    {
        statement: 'Managing multiple children',
        emphasis: "shouldn't be stressful",
        delay: 0.2,
    },
    {
        statement: 'Premium experiences',
        emphasis: 'deserve premium tools',
        delay: 0.4,
    },
];

export function VisualProblem() {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start'],
    });

    const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.8]);

    return (
        <section
            ref={sectionRef}
            id="project1-problem"
            aria-label="Visual problem"
            className="relative min-h-screen flex items-center justify-center py-32 px-6 lg:px-16 overflow-hidden"
        >
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0e0e0e] via-orange-950/10 to-[#0e0e0e]" />

            <motion.div style={{ opacity, scale }} className="relative z-10 max-w-6xl mx-auto">
                {/* Section label */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-16"
                >
                    <span className="text-sm uppercase tracking-[0.3em] text-orange-400/70">The Challenge</span>
                </motion.div>

                {/* Problem statements */}
                <div className="space-y-12">
                    {problems.map((problem, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-100px' }}
                            transition={{ duration: 0.8, delay: problem.delay }}
                        >
                            <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
                                <span className="text-gray-500 block mb-2">{problem.statement}</span>
                                <span className="bg-gradient-to-r from-orange-300 via-yellow-300 to-pink-300 bg-clip-text text-transparent block">
                                    {problem.emphasis}.
                                </span>
                            </h2>
                        </motion.div>
                    ))}
                </div>

                {/* Decorative line */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="mt-20 h-px bg-gradient-to-r from-transparent via-orange-400/50 to-transparent origin-left"
                />
            </motion.div>
        </section>
    );
}
