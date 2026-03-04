import { motion } from 'motion/react';

const colors = [
    { name: 'Pistachio Sorbet', hex: '#B8E6D5' },
    { name: 'Aqua', hex: '#7DCCC1' },
    { name: 'Ocean Eyes', hex: '#7DAECC' },
    { name: 'Sky Blue', hex: '#9DD4E6' },
    { name: 'Powder Blue', hex: '#C4E3F3' },
    { name: 'Mauve', hex: '#C4BDCC' },
    { name: 'Buttercup', hex: '#FFD966' },
    { name: 'Fuzzy Peach', hex: '#FFC299' },
    { name: 'Soft Mandarin', hex: '#FFA366' },
    { name: 'Cotton Candy', hex: '#FFB3D9' },
    { name: 'Lilac Thistle', hex: '#D4C5E6' },
    { name: 'Chestnut', hex: '#C9A882' },
];

export function BrandWorld() {
    return (
        <section
            id="project1-brand"
            aria-label="Brand world"
            className="relative py-32 px-6 lg:px-16 overflow-hidden"
        >
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0e0e0e] via-sky-950/10 to-[#0e0e0e]" />

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Section label */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-16"
                >
                    <span className="text-sm uppercase tracking-[0.3em] text-sky-400/70">Brand Identity</span>
                </motion.div>

                {/* Title */}
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight max-w-4xl"
                >
                    <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                        A Place to Bloom
                    </span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-xl text-gray-400 mb-24 italic"
                >
                    "A harmonious blend of vivid & muted pastels"
                </motion.p>

                {/* Color Palette - Interactive Cards */}
                <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mb-24">
                    {colors.map((color, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="group relative h-40 rounded-2xl overflow-hidden cursor-pointer"
                        >
                            {/* Color fill */}
                            <div className="absolute inset-0" style={{ backgroundColor: color.hex }} />

                            {/* Overlay with info */}
                            <div className="absolute inset-0 flex flex-col justify-end p-4">
                                <p className="text-xs text-white/80 font-semibold mb-1">{color.name}</p>
                                <p className="text-sm font-bold text-white font-mono">{color.hex}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Typography Showcase */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-3xl p-12 md:p-16"
                >
                    <div className="space-y-12">
                        {/* Roca One */}
                        <div>
                            <p className="text-sm text-gray-500 mb-4 uppercase tracking-widest">Typography — Roca One</p>
                            <p
                                className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-teal-300 via-sky-300 to-pink-300 bg-clip-text text-transparent"
                                style={{ fontFamily: 'Roca One, sans-serif' }}
                            >
                                Aa Bb Cc
                            </p>
                        </div>
                        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                        <div>
                            <p className="text-lg text-gray-400 italic mb-4">"Bold, Playful and Distinctive"</p>
                            <div className="grid md:grid-cols-3 gap-8 text-gray-400">
                                <div>
                                    <p className="text-xs uppercase tracking-widest mb-2 text-gray-600">Headings</p>
                                    <p className="text-2xl font-bold text-white" style={{ fontFamily: 'Roca One, sans-serif' }}>
                                        Bold, Playful
                                    </p>
                                </div>
                                <div>
                                    <p className="text-xs uppercase tracking-widest mb-2 text-gray-600">Display</p>
                                    <p className="text-lg" style={{ fontFamily: 'Roca One, sans-serif' }}>
                                        Unique, Strong
                                    </p>
                                </div>
                                <div>
                                    <p className="text-xs uppercase tracking-widest mb-2 text-gray-600">Impact</p>
                                    <p className="text-sm font-medium" style={{ fontFamily: 'Roca One, sans-serif' }}>
                                        Eye-catching
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                        {/* Manrope */}
                        <div>
                            <p className="text-sm text-gray-500 mb-4 uppercase tracking-widest">Typography — Manrope</p>
                            <p className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-teal-300 via-sky-300 to-pink-300 bg-clip-text text-transparent">
                                Aa Bb Cc
                            </p>
                        </div>
                        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                        <div>
                            <p className="text-lg text-gray-400 italic mb-4">"Clean, Sophisticated and Contemporary"</p>
                            <div className="grid md:grid-cols-3 gap-8 text-gray-400">
                                <div>
                                    <p className="text-xs uppercase tracking-widest mb-2 text-gray-600">Headings</p>
                                    <p className="text-2xl font-bold text-white">Bold, Clear</p>
                                </div>
                                <div>
                                    <p className="text-xs uppercase tracking-widest mb-2 text-gray-600">Body</p>
                                    <p className="text-lg">Readable, Warm</p>
                                </div>
                                <div>
                                    <p className="text-xs uppercase tracking-widest mb-2 text-gray-600">UI Elements</p>
                                    <p className="text-sm font-medium">Clean, Modern</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
