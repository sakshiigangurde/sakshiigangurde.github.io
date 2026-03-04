import { motion } from 'motion/react';

const tools = [
    { name: 'Figma', emoji: '🎨', category: 'Design' },
    { name: 'Notion', emoji: '📝', category: 'Planning' },
    { name: 'FigJam', emoji: '🗂️', category: 'Collaboration' },
    { name: 'Maze', emoji: '🧪', category: 'Research' },
    { name: 'Jira', emoji: '📋', category: 'Project Mgmt' },
    { name: 'Miro', emoji: '🖼️', category: 'Ideation' },
    { name: 'Lottie', emoji: '✨', category: 'Animation' },
    { name: 'ProtoPie', emoji: '🔧', category: 'Prototyping' },
];

const processSteps = [
    { number: '01', title: 'Discover', description: 'Deep-dive into user needs, business goals, and the competitive landscape through research and stakeholder interviews.' },
    { number: '02', title: 'Define', description: 'Synthesize findings into problem statements, personas, and design principles that guide every decision.' },
    { number: '03', title: 'Ideate', description: 'Explore solutions through sketching, wireframing, and rapid prototyping. Quantity over quality at this stage.' },
    { number: '04', title: 'Deliver', description: 'Craft pixel-perfect UI, build interactive prototypes, and hand off to engineering with detailed documentation.' },
];

export function ToolsProcess() {
    return (
        <section id="tools" aria-label="Tools and process" className="relative py-28 px-6 lg:px-16">
            <div className="max-w-7xl mx-auto">
                {/* Tools */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mb-20"
                >
                    <span className="text-xs uppercase tracking-[0.3em] text-blue-400/70 mb-4 block font-semibold">Toolkit</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-10">
                        Tools I{' '}
                        <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Use</span>
                    </h2>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        {tools.map((tool, i) => (
                            <motion.div
                                key={tool.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.07 }}
                                whileHover={{ y: -6, scale: 1.04 }}
                                className="group bg-white/[0.04] border border-white/8 rounded-2xl p-5 text-center hover:border-blue-400/30 hover:bg-white/8 transition-all duration-300 cursor-default"
                            >
                                <span className="text-3xl mb-3 block group-hover:scale-110 transition-transform duration-200">{tool.emoji}</span>
                                <p className="text-sm font-semibold text-white">{tool.name}</p>
                                <p className="text-xs text-gray-500 mt-1">{tool.category}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Process */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mb-12"
                >
                    <span className="text-xs uppercase tracking-[0.3em] text-teal-400/70 mb-4 block font-semibold">Process</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-10">
                        How I{' '}
                        <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">Work</span>
                    </h2>
                </motion.div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {processSteps.map((step, i) => (
                        <motion.div
                            key={step.number}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.12 }}
                            whileHover={{ y: -8 }}
                            className="group relative bg-white/[0.04] border border-white/8 rounded-2xl p-7 hover:border-teal-400/30 transition-all duration-300 cursor-default"
                        >
                            <div className="text-5xl font-black bg-gradient-to-r from-teal-400/20 to-cyan-400/20 bg-clip-text text-transparent mb-4 group-hover:from-teal-400/40 group-hover:to-cyan-400/40 transition-all">
                                {step.number}
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                            <p className="text-sm text-gray-400 leading-relaxed">{step.description}</p>
                            <div className="absolute inset-0 bg-gradient-to-br from-teal-400/0 to-cyan-400/0 group-hover:from-teal-400/5 group-hover:to-cyan-400/5 rounded-2xl transition-all duration-500 pointer-events-none" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
