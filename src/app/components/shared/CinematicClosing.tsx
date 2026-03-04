import { motion } from 'motion/react';
import { ArrowRight, Mail, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const BehanceIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" />
    </svg>
);

interface CinematicClosingProps {
    nextProjectLink?: string;
}

export function CinematicClosing({ nextProjectLink }: CinematicClosingProps) {
    return (
        <section
            id="case-closing"
            aria-label="Case study closing"
            className="relative min-h-[80vh] flex items-center justify-center py-28 px-6 lg:px-16 overflow-hidden"
        >
            <div className="absolute inset-0 bg-gradient-to-b from-[#0e0e0e] via-pink-950/10 to-[#0e0e0e]">
                <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute top-1/4 left-1/4 w-[460px] h-[460px] bg-gradient-to-br from-teal-400/15 via-sky-400/15 to-pink-400/15 rounded-full blur-[120px]"
                />
                <motion.div
                    animate={{ scale: [1.2, 1, 1.2], opacity: [0.4, 0.2, 0.4] }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
                    className="absolute bottom-1/4 right-1/4 w-[460px] h-[460px] bg-gradient-to-br from-yellow-400/15 via-orange-400/10 to-pink-400/15 rounded-full blur-[120px]"
                />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="text-6xl md:text-8xl lg:text-9xl font-bold mb-10 leading-[0.9]"
                >
                    <span className="block bg-gradient-to-r from-teal-200 via-sky-200 to-pink-200 bg-clip-text text-transparent">
                        Thank You
                    </span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-2xl text-gray-400 mb-14 font-light"
                >
                    for exploring this case study
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-wrap items-center justify-center gap-4 mb-16"
                >
                    {nextProjectLink && (
                        <Link
                            to={nextProjectLink}
                            id="case-next-project"
                            className="inline-block"
                        >
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-teal-400 via-sky-400 to-pink-400 rounded-2xl text-white font-bold shadow-xl hover:shadow-2xl transition-all duration-300"
                            >
                                <span>View Next Project</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                            </motion.div>
                        </Link>
                    )}
                    <motion.button
                        id="case-get-in-touch"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-2xl text-white font-semibold hover:bg-white/10 hover:border-white/20 transition-all backdrop-blur"
                    >
                        <Mail className="w-5 h-5" />
                        <span>Get in Touch</span>
                    </motion.button>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex items-center justify-center gap-3 flex-wrap mb-16"
                >
                    {[
                        { id: 'closing-linkedin', Icon: Linkedin, label: 'LinkedIn' },
                        { id: 'closing-behance', Icon: BehanceIcon, label: 'Behance' },
                        { id: 'closing-email', Icon: Mail, label: 'Email' },
                    ].map(({ id, Icon, label }) => (
                        <motion.button
                            key={id}
                            id={id}
                            whileHover={{ scale: 1.1, y: -4 }}
                            whileTap={{ scale: 0.9 }}
                            className="group flex items-center gap-2.5 px-5 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white hover:bg-white/10 hover:border-white/20 transition-all backdrop-blur"
                        >
                            <Icon className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                            <span className="text-sm font-medium">{label}</span>
                        </motion.button>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 1 }}
                    className="h-px bg-gradient-to-r from-transparent via-teal-400/30 to-transparent origin-center"
                />
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    className="mt-10 text-xs text-gray-600 uppercase tracking-[0.2em]"
                >
                    Designed with care by Sakshi • {new Date().getFullYear()}
                </motion.p>
            </div>
        </section>
    );
}
