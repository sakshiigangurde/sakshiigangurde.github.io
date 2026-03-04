import { motion } from 'motion/react';

interface Skill {
    name: string;
    level: number;
    color: string;
}

const skillCategories = [
    {
        category: 'Design',
        color: 'from-teal-400 to-cyan-400',
        skills: [
            { name: 'UX Research', level: 92, color: 'from-teal-400 to-cyan-400' },
            { name: 'Visual Design', level: 88, color: 'from-teal-400 to-cyan-400' },
            { name: 'Interaction Design', level: 85, color: 'from-teal-400 to-cyan-400' },
            { name: 'Design Systems', level: 80, color: 'from-teal-400 to-cyan-400' },
        ],
    },
    {
        category: 'Strategy',
        color: 'from-violet-400 to-pink-400',
        skills: [
            { name: 'Product Thinking', level: 87, color: 'from-violet-400 to-pink-400' },
            { name: 'User Interviews', level: 90, color: 'from-violet-400 to-pink-400' },
            { name: 'Accessibility', level: 78, color: 'from-violet-400 to-pink-400' },
            { name: 'Wireframing', level: 95, color: 'from-violet-400 to-pink-400' },
        ],
    },
];

function SkillBar({ skill, index }: { skill: Skill; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="group"
        >
            <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">{skill.name}</span>
                <span className="text-xs text-gray-500 font-mono">{skill.level}%</span>
            </div>
            <div className="h-1.5 bg-white/8 rounded-full overflow-hidden">
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 + index * 0.08, ease: 'easeOut' }}
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                />
            </div>
        </motion.div>
    );
}

export function SkillsExpertise() {
    return (
        <section id="skills" aria-label="Skills and expertise" className="relative py-28 px-6 lg:px-16">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mb-16"
                >
                    <span className="text-xs uppercase tracking-[0.3em] text-pink-400/70 mb-4 block font-semibold">Skills</span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                        Areas of{' '}
                        <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">Expertise</span>
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {skillCategories.map((cat, catIdx) => (
                        <motion.div
                            key={cat.category}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: catIdx * 0.15 }}
                            className="bg-white/[0.04] border border-white/8 rounded-2xl p-8 hover:border-white/15 transition-colors"
                        >
                            <h3 className={`text-lg font-bold bg-gradient-to-r ${cat.color} bg-clip-text text-transparent mb-7`}>
                                {cat.category}
                            </h3>
                            <div className="space-y-5">
                                {cat.skills.map((skill, i) => (
                                    <SkillBar key={skill.name} skill={skill} index={i} />
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
