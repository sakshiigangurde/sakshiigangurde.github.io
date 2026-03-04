import { motion } from 'motion/react';
import { Zap, Heart, Clock } from 'lucide-react';

const outcomes = [
    { Icon: Zap, metric: '30 sec', label: 'Average booking time', description: 'From browsing to confirmation', color: 'from-yellow-400/20 to-orange-400/20', iconColor: 'text-yellow-400' },
    { Icon: Heart, metric: 'Premium', label: 'User experience', description: 'Aligned with brand values', color: 'from-pink-400/20 to-rose-400/20', iconColor: 'text-pink-400' },
    { Icon: Clock, metric: '2 Weeks', label: 'Design Sprint', description: 'Concept to handoff', color: 'from-teal-400/20 to-green-400/20', iconColor: 'text-teal-400' },
];

export function Impact() {
    return (
        <section id="project1-impact" aria-label="Impact" className="py-28 px-6 lg:px-16">
            <div className="max-w-7xl mx-auto">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="mb-4 text-center">
                    <span className="text-xs uppercase tracking-[0.3em] text-green-400/70 mb-4 block font-semibold">The Results</span>
                </motion.div>
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl md:text-7xl lg:text-9xl font-bold mb-20 leading-tight text-center bg-gradient-to-r from-green-300 via-emerald-300 to-green-300 bg-clip-text text-transparent"
                >
                    Impact
                </motion.h2>
                <div className="grid md:grid-cols-3 gap-7 mb-20">
                    {outcomes.map((o, i) => (
                        <motion.div
                            key={o.label}
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: i * 0.12 }}
                            whileHover={{ scale: 1.05, y: -10 }}
                            className="group relative bg-gradient-to-br from-white/[0.07] to-white/[0.02] border border-white/10 rounded-3xl p-8 hover:border-green-500/30 transition-all duration-500 cursor-default"
                        >
                            <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${o.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                <o.Icon className={`w-6 h-6 ${o.iconColor}`} />
                            </div>
                            <div className="text-5xl font-bold mb-3 bg-gradient-to-r from-green-300 to-emerald-300 bg-clip-text text-transparent">{o.metric}</div>
                            <div className="text-lg text-white font-semibold mb-2">{o.label}</div>
                            <p className="text-gray-400 text-sm leading-relaxed">{o.description}</p>
                            <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-500 opacity-0 group-hover:opacity-[0.08] blur-2xl rounded-3xl transition-opacity pointer-events-none" />
                        </motion.div>
                    ))}
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-center max-w-3xl mx-auto"
                >
                    <p className="text-2xl text-gray-300 leading-relaxed italic mb-6">
                        "A seamless digital experience that truly reflects the premium nature of our club."
                    </p>
                    <div className="flex items-center justify-center gap-3">
                        <div className="h-px w-10 bg-gradient-to-r from-transparent to-green-400/50" />
                        <span className="text-xs text-green-400 uppercase tracking-widest">Stakeholder Feedback</span>
                        <div className="h-px w-10 bg-gradient-to-l from-transparent to-green-400/50" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
