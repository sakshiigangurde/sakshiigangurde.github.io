import { motion } from 'motion/react';

export function HowIGotHere() {
    return (
        <section id="how-i-got-here" aria-label="How I got here" className="relative py-28 px-6 lg:px-16 bg-[#0e0e0e] overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 pointer-events-none opacity-40">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-violet-500/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 right-10 w-[300px] h-[300px] bg-pink-500/5 rounded-full blur-[100px]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Header Section - Centered to match other section titles */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mb-16 text-center"
                >
                    <span className="text-xs uppercase tracking-[0.3em] text-violet-400/70 mb-4 block font-semibold">
                        My Journey
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                        How I Got{' '}
                        <span className="bg-gradient-to-r from-violet-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                            Here
                        </span>
                    </h2>
                </motion.div>

                {/* Paragraphs and Quote Block - Aligned to match the width and padding of the timeline cards above */}
                <div className="space-y-8 text-gray-300/90 text-lg md:text-xl leading-relaxed font-light text-center">
                    {/* Paragraph 1 */}
                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.6 }}
                    >
                        My journey into design didn’t start with design, it started with engineering. While studying engineering, I was always drawn to the creative side of problem-solving, how things work, but more importantly, how they feel to use. Over time, this curiosity pulled me toward design, where I could combine logic with creativity to build more human-centered experiences.
                    </motion.p>

                    {/* Paragraph 2 */}
                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Over the past few years, I’ve worked on a range of products, from enterprise platforms and admin portals that help businesses make better decisions, to consumer applications designed for parents and children. These experiences have helped me understand how to design for both complex systems and everyday users, balancing functionality with simplicity.
                    </motion.p>
                </div>
            </div>
        </section>
    );
}
