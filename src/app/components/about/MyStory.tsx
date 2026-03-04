import { motion } from 'motion/react';

const milestones = [
    {
        year: '2022',
        title: 'Started my design journey',
        description: 'Discovered my passion for UX design and dove deep into design thinking, user research, and prototyping.',
    },
    {
        year: '2023',
        title: 'LittleNest — First major project',
        description: 'Designed a premium childcare booking platform from scratch, learning to balance business goals with user needs.',
    },
    {
        year: '2024',
        title: 'JioBusiness — Enterprise UX',
        description: 'Tackled complex B2B challenges, redesigning a critical dashboard to drive measurable business outcomes.',
    },
    {
        year: '2024+',
        title: 'Evolving & growing',
        description: 'Continuing to push boundaries with emotional design systems, gamification, and cross-platform experiences.',
    },
];

export function MyStory() {
    return (
        <section id="my-story" aria-label="My story" className="relative py-28 px-6 lg:px-16">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mb-16"
                >
                    <span className="text-xs uppercase tracking-[0.3em] text-violet-400/70 mb-4 block font-semibold">My Journey</span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                        The{' '}
                        <span className="bg-gradient-to-r from-violet-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">Story</span>
                        {' '}So Far
                    </h2>
                </motion.div>

                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-violet-400/40 via-pink-400/20 to-transparent hidden md:block" />

                    <div className="space-y-12">
                        {milestones.map((m, i) => (
                            <motion.div
                                key={m.year}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: '-50px' }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                className="md:pl-16 relative"
                            >
                                {/* Timeline dot */}
                                <div className="absolute left-4 top-1.5 w-4 h-4 rounded-full bg-gradient-to-br from-violet-400 to-pink-400 border-2 border-[#0e0e0e] hidden md:block shadow-lg shadow-violet-500/30" />

                                <div className="bg-white/[0.04] border border-white/8 rounded-2xl p-7 hover:border-white/15 transition-colors">
                                    <span className="text-xs font-semibold text-violet-400 uppercase tracking-widest mb-2 block">{m.year}</span>
                                    <h3 className="text-xl font-bold text-white mb-2">{m.title}</h3>
                                    <p className="text-gray-400 leading-relaxed">{m.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
