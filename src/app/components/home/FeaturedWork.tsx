import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export interface Project {
    number: string;
    title: string;
    subtitle: string;
    description: string;
    tags: string[];
    gradient: string;
    accentColor: string;
    borderColor: string;
    hoverBorderColor: string;
    slug: string;
    image?: string;
    imageClassName?: string;
}

const PROJECTS: Project[] = [
    {
        number: '01',
        title: 'JioBusiness',
        subtitle: 'Dashboard Redesign',
        description:
            'Transformed an underutilized enterprise dashboard into a powerful business tool—helping users complete tasks efficiently with personalized, actionable insights.',
        tags: ['Enterprise UX', 'Dashboard Design', 'B2B', 'Data Visualization'],
        gradient: 'from-blue-400/20 to-indigo-400/20',
        accentColor: 'from-blue-400 to-indigo-400',
        borderColor: 'border-blue-500/20',
        hoverBorderColor: 'hover:border-blue-400/50',
        slug: 'jiobusiness',
        image: '/images/jiobusiness.png',
    },
    {
        number: '02',
        title: 'LittleNest',
        subtitle: 'End-to-End Booking Experience',
        description:
            'Designed a premium childcare booking platform from scratch—transforming a complex service into an intuitive, delightful experience for busy parents.',
        tags: ['UX Design', 'Visual Design', 'Branding', 'Mobile App'],
        gradient: 'from-teal-400/20 to-sky-400/20',
        accentColor: 'from-teal-400 to-sky-400',
        borderColor: 'border-teal-500/20',
        hoverBorderColor: 'hover:border-teal-400/50',
        slug: 'littlenest-booking',
        image: '/images/littlenest-booking.png',
    },
    {
        number: '03',
        title: 'LittleNest',
        subtitle: 'Booking Experience Evolution',
        description:
            'One year later—iterated on user feedback to refine the booking flow, making it faster, clearer, and more trustworthy for growing families.',
        tags: ['UX Research', 'Iteration', 'User Feedback', 'Mobile First'],
        gradient: 'from-green-400/20 to-teal-400/20',
        accentColor: 'from-green-400 to-teal-400',
        borderColor: 'border-green-500/20',
        hoverBorderColor: 'hover:border-green-400/50',
        slug: 'littlenest-evolution',
        image: '/images/littlenest-evolution.png',
    },
    {
        number: '04',
        title: 'LittleNest',
        subtitle: 'Child Development Intelligence System',
        description:
            'Turned 25+ development metrics into an emotional journey—celebrating growth with a blooming garden experience that makes parents feel proud instead of overwhelmed.',
        tags: ['Gamification', 'Emotional Design', 'Animation', 'System Design'],
        gradient: 'from-green-400/20 to-pink-400/20',
        accentColor: 'from-green-400 via-teal-400 to-pink-400',
        borderColor: 'border-green-500/20',
        hoverBorderColor: 'hover:border-green-400/50',
        slug: 'child-development',
        image: '/images/child-development.png',
    },
];

export function FeaturedWork() {
    return (
        <section
            id="work"
            aria-label="Featured work"
            className="relative py-32 px-6 lg:px-16 overflow-hidden"
        >
            {/* Subtle background */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0e0e0e] via-violet-950/5 to-[#0e0e0e] pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mb-20"
                >
                    <span className="text-xs uppercase tracking-[0.3em] text-teal-400/70 mb-4 block font-semibold">
                        Featured Work
                    </span>
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                        Selected{' '}
                        <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                            Case Studies
                        </span>
                    </h2>
                </motion.div>

                {/* Project cards */}
                <div className="space-y-8">
                    {PROJECTS.map((project, index) => (
                        <motion.div
                            key={project.number}
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-80px' }}
                            transition={{ duration: 0.7, delay: index * 0.12 }}
                            className="group"
                        >
                            <div
                                className={`relative bg-gradient-to-br from-white/[0.07] to-white/[0.02] border ${project.borderColor} ${project.hoverBorderColor} rounded-3xl overflow-hidden transition-all duration-500 hover:scale-[1.015]`}
                            >
                                <div className="flex flex-col lg:flex-row">
                                    {/* Content */}
                                    <div className="flex-1 p-9 lg:p-12">
                                        {/* Number badge */}
                                        <div
                                            className={`inline-flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br ${project.gradient} border border-white/10 mb-7`}
                                        >
                                            <span className="text-base font-bold text-white">{project.number}</span>
                                        </div>

                                        {/* Title & subtitle */}
                                        <h3 className="text-4xl md:text-5xl font-bold text-white mb-2.5">
                                            {project.title}
                                        </h3>
                                        <p
                                            className={`text-lg bg-gradient-to-r ${project.accentColor} bg-clip-text text-transparent font-semibold mb-6`}
                                        >
                                            {project.subtitle}
                                        </p>

                                        {/* Description */}
                                        <p className="text-base text-gray-400 leading-relaxed mb-8 max-w-2xl">
                                            {project.description}
                                        </p>

                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-2 mb-9">
                                            {project.tags.map(tag => (
                                                <span
                                                    key={tag}
                                                    className="px-3.5 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300 font-medium"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        {/* CTA */}
                                        <Link
                                            to={`/case-study/${project.slug}`}
                                            id={`project-cta-${project.number}`}
                                            className="inline-block"
                                        >
                                            <motion.div
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="group/btn inline-flex items-center gap-3 px-8 py-3.5 bg-gradient-to-r from-[#60A5FA] to-[#818CF8] rounded-full text-white font-semibold text-[15px] shadow-lg hover:shadow-xl transition-all duration-300"
                                            >
                                                <span>View Case Study</span>
                                                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                                            </motion.div>
                                        </Link>
                                    </div>

                                    {/* Visual preview */}
                                    <div className="lg:w-[450px] relative min-h-[320px] lg:min-h-auto flex items-center justify-center">
                                        <div className={`relative z-10 h-full w-full flex items-center justify-center ${project.image ? 'p-0' : 'p-8'}`}>
                                            <motion.div
                                                animate={{ y: [0, -8, 0] }}
                                                transition={{
                                                    duration: 4,
                                                    repeat: Infinity,
                                                    ease: 'easeInOut',
                                                    delay: index * 0.6,
                                                }}
                                                className={`relative flex items-center justify-center ${project.image
                                                    ? project.imageClassName || 'w-full max-w-[340px] lg:max-w-[400px]'
                                                    : 'w-full aspect-square max-w-[220px] bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-2xl border border-white/10 p-8 backdrop-blur-sm'
                                                    }`}
                                            >
                                                {project.image ? (
                                                    <img
                                                        src={project.image}
                                                        alt={`${project.title} preview`}
                                                        className="w-full h-auto object-contain drop-shadow-2xl"
                                                    />
                                                ) : (
                                                    <span
                                                        className={`text-7xl font-black bg-gradient-to-br ${project.accentColor} bg-clip-text text-transparent select-none`}
                                                    >
                                                        {project.number}
                                                    </span>
                                                )}
                                            </motion.div>
                                        </div>
                                    </div>
                                </div>

                                {/* Hover glow */}
                                <div
                                    className={`absolute inset-0 bg-gradient-to-br ${project.accentColor} opacity-0 group-hover:opacity-[0.04] blur-3xl transition-opacity duration-500 pointer-events-none`}
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
