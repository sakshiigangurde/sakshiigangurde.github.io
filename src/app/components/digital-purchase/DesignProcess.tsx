import { Map, Scissors, Eye, MessageSquare } from 'lucide-react';
import { motion } from 'motion/react';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as any } }
};

export function DesignProcess() {
    return (
        <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={containerVariants}
            className="w-full max-w-[1600px] mx-auto px-4 md:px-8 xl:px-12 py-20 md:py-32 lg:py-40"
        >
            <motion.div variants={itemVariants} className="mb-16">
                <div className="text-[11px] md:text-xs font-semibold tracking-[0.25em] text-[#6b7b9e] mb-6 uppercase flex items-center gap-3">
                    <span className="text-blue-500">04</span>
                    <span className="text-[#2e374f]">·</span>
                    <span>Design Process</span>
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 tracking-tight">
                    Making <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">Complexity Simple</span>
                </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                {/* Card 1 */}
                <motion.div variants={itemVariants} className="bg-gradient-to-tr from-[#162a45] to-[#16192b] border border-[#23293b] rounded-[24px] p-6 md:p-10 hover:border-[#38425e] transition-colors relative overflow-hidden group">
                    <div className="absolute -top-4 right-6 text-[6rem] md:text-[12rem] font-black text-blue-500/[0.04] select-none pointer-events-none group-hover:text-blue-500/[0.07] transition-colors leading-none tracking-tighter z-0">01</div>
                    
                    <div className="w-14 h-14 rounded-2xl bg-[#1a385f] flex items-center justify-center border border-[#294c7a] mb-8 relative z-10">
                        <Map className="w-7 h-7 text-[#8ba6ff]" />
                    </div>
                    
                    <div className="relative z-10">
                        <p className="text-[10px] md:text-[11px] font-semibold tracking-widest text-[#4F6296] uppercase mb-2">Phase 01</p>
                        <h3 className="text-white font-bold text-xl md:text-2xl mb-1">Understanding the Existing Journey</h3>
                        <p className="text-[#60a5fa] text-[13px] font-medium tracking-wide mb-5">Process Mapping</p>
                        <p className="text-zinc-400 leading-relaxed text-[15px] md:text-[17px]">
                            Mapped the offline buying process end-to-end, identified friction in verification stages, and benchmarked competitor self-service flows.
                        </p>
                    </div>
                </motion.div>

                {/* Card 2 */}
                <motion.div variants={itemVariants} className="bg-gradient-to-tr from-[#261745] to-[#16192b] border border-[#23293b] rounded-[24px] p-6 md:p-10 hover:border-[#38425e] transition-colors relative overflow-hidden group">
                    <div className="absolute -top-4 right-6 text-[6rem] md:text-[12rem] font-black text-purple-500/[0.04] select-none pointer-events-none group-hover:text-purple-500/[0.07] transition-colors leading-none tracking-tighter z-0">02</div>
                    
                    <div className="w-14 h-14 rounded-2xl bg-[#31225e] flex items-center justify-center border border-[#443180] mb-8 relative z-10">
                        <Scissors className="w-7 h-7 text-[#8ba6ff]" />
                    </div>
                    
                    <div className="relative z-10">
                        <p className="text-[10px] md:text-[11px] font-semibold tracking-widest text-[#4F6296] uppercase mb-2">Phase 02</p>
                        <h3 className="text-white font-bold text-xl md:text-2xl mb-1">Simplifying the Flow</h3>
                        <p className="text-[#818cf8] text-[13px] font-medium tracking-wide mb-5">Progressive Disclosure</p>
                        <p className="text-zinc-400 leading-relaxed text-[15px] md:text-[17px]">
                            Restructured the journey so users provide only essential information at each stage — breaking a daunting process into manageable steps.
                        </p>
                    </div>
                </motion.div>

                {/* Card 3 */}
                <motion.div variants={itemVariants} className="bg-gradient-to-tr from-[#36134a] to-[#16192b] border border-[#23293b] rounded-[24px] p-6 md:p-10 hover:border-[#38425e] transition-colors relative overflow-hidden group">
                    <div className="absolute -top-4 right-6 text-[6rem] md:text-[12rem] font-black text-fuchsia-500/[0.04] select-none pointer-events-none group-hover:text-fuchsia-500/[0.07] transition-colors leading-none tracking-tighter z-0">03</div>
                    
                    <div className="w-14 h-14 rounded-2xl bg-[#451f5c] flex items-center justify-center border border-[#5e2d7a] mb-8 relative z-10">
                        <Eye className="w-7 h-7 text-[#8ba6ff]" />
                    </div>
                    
                    <div className="relative z-10">
                        <p className="text-[10px] md:text-[11px] font-semibold tracking-widest text-[#4F6296] uppercase mb-2">Phase 03</p>
                        <h3 className="text-white font-bold text-xl md:text-2xl mb-1">Designing for Clarity</h3>
                        <p className="text-[#c084fc] text-[13px] font-medium tracking-wide mb-5">High-Value Transaction UX</p>
                        <p className="text-zinc-400 leading-relaxed text-[15px] md:text-[17px]">
                            Every screen needed to build confidence — clear navigation, simple forms, plan comparison layouts, and progress indicators at every stage.
                        </p>
                    </div>
                </motion.div>

                {/* Card 4 */}
                <motion.div variants={itemVariants} className="bg-gradient-to-tr from-[#142e4a] to-[#16192b] border border-[#23293b] rounded-[24px] p-6 md:p-10 hover:border-[#38425e] transition-colors relative overflow-hidden group">
                    <div className="absolute -top-4 right-6 text-[6rem] md:text-[12rem] font-black text-blue-500/[0.04] select-none pointer-events-none group-hover:text-blue-500/[0.07] transition-colors leading-none tracking-tighter z-0">04</div>
                    
                    <div className="w-14 h-14 rounded-2xl bg-[#18395e] flex items-center justify-center border border-[#265080] mb-8 relative z-10">
                        <MessageSquare className="w-7 h-7 text-[#8ba6ff]" />
                    </div>
                    
                    <div className="relative z-10">
                        <p className="text-[10px] md:text-[11px] font-semibold tracking-widest text-[#4F6296] uppercase mb-2">Phase 04</p>
                        <h3 className="text-white font-bold text-xl md:text-2xl mb-1">Collaboration & Iteration</h3>
                        <p className="text-[#60a5fa] text-[13px] font-medium tracking-wide mb-5">Multi-Stakeholder Alignment</p>
                        <p className="text-zinc-400 leading-relaxed text-[15px] md:text-[17px]">
                            Balanced business, legal, and compliance requirements with user experience through regular design reviews — significantly reducing late-stage rework.
                        </p>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
}
