import { motion } from 'motion/react';
import { Mail, ArrowRight, Linkedin } from 'lucide-react';

const BehanceIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" />
    </svg>
);

export function AboutContact() {
    return (
        <section id="about-contact" aria-label="Contact from about page" className="relative py-28 px-6 lg:px-16 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-[#0e0e0e] via-violet-950/8 to-[#0e0e0e] pointer-events-none">
                <motion.div
                    animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.3, 0.15] }}
                    transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-violet-400/10 via-pink-400/10 to-blue-400/10 rounded-full blur-[140px]"
                />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mb-12"
                >
                    <span className="text-xs uppercase tracking-[0.3em] text-violet-400/70 mb-4 block font-semibold">Let's Connect</span>
                    <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                        Ready to Work{' '}
                        <span className="bg-gradient-to-r from-violet-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">Together?</span>
                    </h2>
                    <p className="text-lg text-gray-400 max-w-xl mx-auto leading-relaxed">
                        Whether it's a new product, a redesign, or just a conversation—I'd love to hear from you.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="mb-10"
                >
                    <motion.a
                        id="about-email-cta"
                        href="mailto:sakshi.g2805@gmail.com"
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.96 }}
                        className="group inline-flex items-center gap-3 px-9 py-4 bg-gradient-to-r from-violet-500 via-pink-500 to-blue-500 rounded-2xl text-white font-bold shadow-2xl shadow-violet-500/30 hover:shadow-violet-500/50 transition-all duration-300"
                    >
                        <Mail className="w-5 h-5" />
                        <span>Get In Touch</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                    </motion.a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.35 }}
                    className="flex items-center justify-center gap-3 flex-wrap"
                >
                    {[
                        { id: 'about-social-linkedin', Icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/sakshi-gangurde-12222918b' },
                        { id: 'about-social-behance', Icon: BehanceIcon, label: 'Behance', href: 'https://www.behance.net/sakshigangurde' },
                    ].map(({ id, Icon, label, href }) => (
                        <motion.a
                            key={id}
                            id={id}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.08, y: -4 }}
                            whileTap={{ scale: 0.92 }}
                            className="group flex items-center gap-2.5 px-5 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white hover:bg-white/10 hover:border-white/20 transition-all"
                            aria-label={label}
                        >
                            <Icon className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                            <span className="text-sm font-medium">{label}</span>
                        </motion.a>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
