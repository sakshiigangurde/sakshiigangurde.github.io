import { Navigation, PenTool, Layers, Users, RefreshCcw, FileCheck } from 'lucide-react';
import { motion } from 'motion/react';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as any } }
};

export function MyRole() {
    return (
        <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={containerVariants}
            className="w-full max-w-[1600px] mx-auto px-4 md:px-8 xl:px-12 py-20 md:py-32 lg:py-48 relative"
        >
            {/* Subtle background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#1a1c36]/40 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="relative z-10">
                <motion.div variants={itemVariants}>
                    <div className="text-[11px] md:text-xs font-semibold tracking-[0.25em] text-[#6b7b9e] mb-6 uppercase flex items-center gap-3">
                        <span className="text-blue-500">03</span>
                        <span className="text-[#2e374f]">·</span>
                        <span>My Role</span>
                    </div>
                    
                    <h2 className="text-4xl md:text-5xl lg:text-[4.5rem] font-bold mb-4 md:mb-6 tracking-tight">
                        Product Designer
                    </h2>
                    
                    <p className="text-[#7d87a1] text-base sm:text-lg md:text-xl mb-10 md:mb-12">
                        UI/UX — Full ownership across the purchase journey
                    </p>
                </motion.div>

                <div className="flex flex-wrap gap-4 max-w-4xl">
                    {/* Badges */}
                    <motion.div variants={itemVariants} className="flex items-center gap-3 px-5 py-3 rounded-full bg-[#101423] border border-[#1e2a4a] text-zinc-200 text-[15px] hover:bg-[#161c30] transition-colors">
                        <Navigation className="w-4 h-4 text-blue-400" />
                        <span>End-to-End Journey Design</span>
                    </motion.div>
                    <motion.div variants={itemVariants} className="flex items-center gap-3 px-5 py-3 rounded-full bg-[#141224] border border-[#29224a] text-zinc-200 text-[15px] hover:bg-[#1c1830] transition-colors">
                        <PenTool className="w-4 h-4 text-purple-400" />
                        <span>Flows, Wireframes & High-Fidelity UI</span>
                    </motion.div>
                    <motion.div variants={itemVariants} className="flex items-center gap-3 px-5 py-3 rounded-full bg-[#141224] border border-[#29224a] text-zinc-200 text-[15px] hover:bg-[#1c1830] transition-colors">
                        <Layers className="w-4 h-4 text-purple-400" />
                        <span>Simplifying Complex Forms</span>
                    </motion.div>
                    <motion.div variants={itemVariants} className="flex items-center gap-3 px-5 py-3 rounded-full bg-[#11131c] border border-[#212636] text-zinc-200 text-[15px] hover:bg-[#181b26] transition-colors">
                        <Users className="w-4 h-4 text-zinc-400" />
                        <span>Multi-Team Collaboration</span>
                    </motion.div>
                    <motion.div variants={itemVariants} className="flex items-center gap-3 px-5 py-3 rounded-full bg-[#101423] border border-[#1e2a4a] text-zinc-200 text-[15px] hover:bg-[#161c30] transition-colors">
                        <RefreshCcw className="w-4 h-4 text-blue-400" />
                        <span>Stakeholder-Driven Iteration</span>
                    </motion.div>
                    <motion.div variants={itemVariants} className="flex items-center gap-3 px-5 py-3 rounded-full bg-[#141224] border border-[#29224a] text-zinc-200 text-[15px] hover:bg-[#1c1830] transition-colors">
                        <FileCheck className="w-4 h-4 text-purple-400" />
                        <span>Handoff & Implementation Support</span>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
}
