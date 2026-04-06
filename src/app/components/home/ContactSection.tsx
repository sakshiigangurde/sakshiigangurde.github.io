import { motion } from 'motion/react';
import { Mail, Linkedin, ArrowRight } from 'lucide-react';

const BehanceIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" />
    </svg>
);

const socialLinks = [
    { id: 'social-linkedin', Icon: Linkedin, label: 'LinkedIn', href: '#' },
    { id: 'social-behance', Icon: BehanceIcon, label: 'Behance', href: '#' },
];

export function ContactSection() {
    return (
        <section
            id="contact"
            aria-label="Contact section"
            className="relative py-32 px-6 lg:px-16 overflow-hidden"
        >
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0e0e0e] via-violet-950/10 to-[#0e0e0e] pointer-events-none">
                <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.35, 0.15] }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-br from-teal-400/10 via-blue-400/10 to-violet-400/10 rounded-full blur-[150px]"
                />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto text-center">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mb-16"
                >
                    <span className="text-xs uppercase tracking-[0.3em] text-violet-400/70 mb-4 block font-semibold">
                        Get In Touch
                    </span>
                    <h2 className="text-5xl md:text-6xl lg:text-8xl font-bold text-white leading-tight mb-7">
                        Let's{' '}
                        <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                            Create
                        </span>
                        <br />
                        Something Great
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        I'm currently open to new opportunities and collaborations. Let's talk about your next project.
                    </p>
                </motion.div>

                {/* Email CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="mb-14"
                >
                    <motion.a
                        id="contact-email-cta"
                        href="mailto:your.email@example.com"
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.96 }}
                        className="group inline-flex items-center gap-4 px-10 py-5 bg-gradient-to-r from-[#60A5FA] to-[#818CF8] rounded-full text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                        <Mail className="w-5 h-5" />
                        <span>your.email@example.com</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                    </motion.a>
                </motion.div>

                {/* Social links */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.35 }}
                    className="flex items-center justify-center gap-3 flex-wrap mb-20"
                >
                    {socialLinks.map(({ id, Icon, label, href }) => (
                        <motion.a
                            key={id}
                            id={id}
                            href={href}
                            whileHover={{ scale: 1.08, y: -4 }}
                            whileTap={{ scale: 0.92 }}
                            className="group flex items-center gap-2.5 px-5 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white hover:bg-white/10 hover:border-white/20 transition-all backdrop-blur cursor-pointer"
                            aria-label={label}
                        >
                            <Icon className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                            <span className="text-sm font-medium">{label}</span>
                        </motion.a>
                    ))}
                </motion.div>

                {/* Decorative divider */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.1 }}
                    className="h-px bg-gradient-to-r from-transparent via-white/15 to-transparent origin-center"
                />

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="mt-10 text-xs text-gray-600 uppercase tracking-[0.2em]"
                >
                    Designed by Sakshi © {new Date().getFullYear()}
                </motion.p>
            </div>
        </section>
    );
}
