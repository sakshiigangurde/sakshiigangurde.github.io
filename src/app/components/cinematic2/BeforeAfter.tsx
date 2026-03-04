import { motion } from 'motion/react';


export function BeforeAfter() {
    return (
        <section className="relative py-32 px-6 lg:px-16 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#121212] via-purple-950/10 to-[#121212]" />

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Section label */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 text-center"
                >
                    <span className="text-sm uppercase tracking-[0.3em] text-purple-400/70">Transformation</span>
                </motion.div>

                {/* Title */}
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl md:text-6xl lg:text-7xl font-bold mb-24 leading-tight text-center"
                >
                    <span className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                        Reduced Steps, Increased Clarity
                    </span>
                </motion.h2>

                {/* Phone mockups showing before/after */}
                <motion.div
                    initial={{ opacity: 0, y: 60, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, type: 'spring', stiffness: 50 }}
                    className="relative mx-auto max-w-6xl mb-24"
                >
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Before Column */}
                        <div className="flex flex-col">
                            {/* Before Phone */}
                            <div className="relative mb-12">
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-500/20 via-gray-400/10 to-transparent blur-2xl scale-110" />
                                <div className="relative bg-gradient-to-br from-zinc-900 to-black rounded-[3rem] p-3 shadow-2xl border border-white/10">
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-b-3xl z-20" />
                                    <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-[2.5rem] overflow-hidden aspect-[9/19.5]">
                                        <div className="absolute inset-0 p-6 flex flex-col gap-3">
                                            <div className="h-12 bg-gray-300 rounded-2xl" />
                                            <div className="space-y-2 flex-1">
                                                {[...Array(6)].map((_, i) => (
                                                    <div key={i} className="h-16 bg-white/60 rounded-xl" />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-center text-gray-500 mt-4 text-sm uppercase tracking-widest">Before</p>
                            </div>

                            {/* Before Section */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="h-full"
                            >
                                <div className="bg-gradient-to-br from-red-950/30 to-orange-950/30 border border-red-500/20 rounded-3xl p-8 h-full">
                                    <div className="space-y-6">
                                        <div className="text-center">
                                            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-red-500/20 text-red-400 text-4xl font-bold mb-4">
                                                4
                                            </div>
                                            <p className="text-2xl font-bold text-white mb-2">Steps to Book</p>
                                            <p className="text-gray-400">Tap → Details → Child → Confirm</p>
                                        </div>

                                        <div className="h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent" />

                                        <div className="space-y-3">
                                            <div className="flex items-center gap-3">
                                                <div className="w-2 h-2 rounded-full bg-red-500" />
                                                <p className="text-gray-400">Linear list view</p>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <div className="w-2 h-2 rounded-full bg-red-500" />
                                                <p className="text-gray-400">No filtering options</p>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <div className="w-2 h-2 rounded-full bg-red-500" />
                                                <p className="text-gray-400">Not scalable</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* After Column */}
                        <div className="flex flex-col">
                            {/* After Phone */}
                            <div className="relative mb-12">
                                <div className="absolute inset-0 bg-gradient-to-t from-teal-400/30 via-sky-400/20 to-green-300/20 blur-2xl scale-110" />
                                <div className="relative bg-gradient-to-br from-zinc-900 to-black rounded-[3rem] p-3 shadow-2xl border border-white/10">
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-b-3xl z-20" />
                                    <div className="relative bg-gradient-to-br from-green-50 via-sky-50 to-pink-50 rounded-[2.5rem] overflow-hidden aspect-[9/19.5]">
                                        <div className="absolute inset-0 p-6 flex flex-col gap-3">
                                            <div className="h-12 bg-gradient-to-r from-green-100 to-teal-100 rounded-2xl" />
                                            <div className="grid grid-cols-7 gap-1">
                                                {[...Array(7)].map((_, i) => (
                                                    <div key={i} className="aspect-square bg-white/60 rounded-lg" />
                                                ))}
                                            </div>
                                            <div className="space-y-2 flex-1">
                                                {[...Array(4)].map((_, i) => (
                                                    <div key={i} className="h-20 bg-white/80 rounded-xl shadow-sm" />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-center text-teal-400 mt-4 text-sm uppercase tracking-widest font-semibold">After</p>
                            </div>

                            {/* After Section */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="h-full"
                            >
                                <div className="relative h-full">
                                    <div className="absolute inset-0 bg-gradient-to-br from-teal-400/20 to-sky-400/20 blur-2xl scale-110" />
                                    <div className="relative bg-gradient-to-br from-teal-950/30 to-sky-950/30 border border-teal-500/30 rounded-3xl p-8 h-full">
                                        <div className="space-y-6">
                                            <div className="text-center">
                                                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-teal-400/20 text-teal-400 text-4xl font-bold mb-4">
                                                    2
                                                </div>
                                                <p className="text-2xl font-bold text-white mb-2">Steps to Book</p>
                                                <p className="text-gray-400">Browse → Quick Book</p>
                                            </div>

                                            <div className="h-px bg-gradient-to-r from-transparent via-teal-400/30 to-transparent" />

                                            <div className="space-y-3">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-2 h-2 rounded-full bg-teal-400" />
                                                    <p className="text-gray-300">Calendar view (1-day & 3-day)</p>
                                                </div>
                                                <div className="flex items-center gap-3">
                                                    <div className="w-2 h-2 rounded-full bg-teal-400" />
                                                    <p className="text-gray-300">Category filtering</p>
                                                </div>
                                                <div className="flex items-center gap-3">
                                                    <div className="w-2 h-2 rounded-full bg-teal-400" />
                                                    <p className="text-gray-300">Age-based personalization</p>
                                                </div>
                                                <div className="flex items-center gap-3">
                                                    <div className="w-2 h-2 rounded-full bg-teal-400" />
                                                    <p className="text-gray-300">Dual CTAs (Quick/Details)</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>

                {/* Impact statement */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-center"
                >
                    <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-teal-300 to-sky-300 bg-clip-text text-transparent">
                        50% reduction in booking steps
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
