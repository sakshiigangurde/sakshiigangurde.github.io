import { motion } from 'motion/react';
import type { ComponentType } from 'react';
import {
    FigmaIcon,
    FramerIcon,
    PhotoshopIcon,
    IllustratorIcon,
    AnimateIcon,
    AdobeXDIcon,
    PencilPaperIcon,
} from './toolIcons';

const tools: { name: string; category: string; icon: ComponentType<{ className?: string }> }[] = [
    { name: 'Figma', category: 'UI Design', icon: FigmaIcon },
    { name: 'Adobe Photoshop', category: 'Image Editing', icon: PhotoshopIcon },
    { name: 'Adobe Animate', category: 'Motion', icon: AnimateIcon },
    { name: 'Adobe Illustrator', category: 'Vector Design', icon: IllustratorIcon },
    { name: 'Adobe XD', category: 'Prototyping', icon: AdobeXDIcon },
    { name: 'Framer', category: 'Prototyping', icon: FramerIcon },
    { name: 'Pencil and Paper', category: 'Ideation', icon: PencilPaperIcon },
];

const processSteps = [
    {
        number: '01',
        title: 'Discover',
        description: 'I start by understanding the problem. I look into user needs, business goals, and what already exists in the market through research and discussions.'
    },
    {
        number: '02',
        title: 'Define',
        description: 'I organize all the insights and clearly define the problem. This helps set the direction and make better design decisions.'
    },
    {
        number: '03',
        title: 'Ideate',
        description: 'I explore different ideas through sketches, wireframes, and quick prototypes. At this stage, I focus on exploring more options before finalizing one.'
    },
    {
        number: '04',
        title: 'Deliver',
        description: 'I design clean and detailed UI, create interactive prototypes, and work closely with developers to ensure smooth handoff and execution.'
    },
];

export function ToolsProcess() {
    return (
        <>
            {/* ── Tools I Use ─────────────────────────────── */}
            <section id="tools" aria-label="Tools I use" className="relative py-28 px-6 lg:px-16">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="mb-12 text-center"
                    >
                        <span className="text-[11px] uppercase tracking-[0.25em] text-[#8E8A9F] mb-3 block font-semibold">
                            Tools I Use
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                            Favorite <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">Tools</span>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
                        {tools.map((tool, i) => {
                            const Icon = tool.icon;
                            return (
                                <motion.div
                                    key={tool.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.07 }}
                                    whileHover={{ y: -6, scale: 1.02 }}
                                    className="group bg-white/[0.02] border border-white/[0.06] rounded-2xl p-6 text-center hover:border-purple-500/30 hover:bg-white/[0.05] transition-all duration-300 cursor-default flex flex-col items-center justify-center min-h-[170px]"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-4 text-purple-400 group-hover:scale-110 group-hover:bg-purple-500/20 group-hover:text-purple-300 transition-all duration-300">
                                        <Icon className="w-5 h-5" />
                                    </div>
                                    <p className="text-sm font-semibold text-white">{tool.name}</p>
                                    <p className="text-[11px] text-gray-500 mt-1 font-medium">{tool.category}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ── How I Work ──────────────────────────────── */}
            <section id="process" aria-label="How I work" className="relative py-28 px-6 lg:px-16">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="mb-16 text-center"
                    >
                        <span className="text-[11px] uppercase tracking-[0.25em] text-purple-400/80 mb-3 block font-semibold">
                            HOW I WORK
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                            My <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-pink-500 bg-clip-text text-transparent">Process</span>
                        </h2>
                    </motion.div>

                    <div className="relative">
                        {/* Horizontal connecting line behind cards */}
                        <div className="absolute top-[50px] left-[8%] right-[8%] h-[1px] bg-purple-500/10 hidden lg:block z-0" />

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
                            {processSteps.map((step, i) => (
                                <motion.div
                                    key={step.number}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: i * 0.12 }}
                                    whileHover={{ y: -8, transition: { duration: 0.3 } }}
                                    className="group relative bg-[#13111a]/80 border border-white/[0.05] rounded-3xl p-8 hover:border-purple-500/20 transition-all duration-500 cursor-default shadow-lg shadow-black/30"
                                >
                                    <div className="w-11 h-11 rounded-xl bg-purple-950/40 border border-purple-500/20 flex items-center justify-center mb-6 text-purple-400 font-semibold text-xs group-hover:bg-purple-900/40 group-hover:border-purple-400/30 transition-all duration-300">
                                        {step.number}
                                    </div>
                                    <h3 className="text-[22px] font-bold text-white mb-3 tracking-tight">{step.title}</h3>
                                    <div className="text-[13px] md:text-sm text-gray-400 leading-relaxed font-normal space-y-2.5">
                                        {step.description.split('\n\n').map((para, index) => (
                                            <p key={index}>{para}</p>
                                        ))}
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/[0.02] group-hover:to-pink-500/[0.02] rounded-3xl transition-all duration-500 pointer-events-none" />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
