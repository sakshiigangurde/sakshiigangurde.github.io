import { Users, FileText, Waypoints, Scale } from 'lucide-react';
import { motion } from 'motion/react';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as any } }
};

export function ProblemStatement() {
    return (
        <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={containerVariants}
            className="w-full max-w-[1600px] mx-auto px-4 md:px-8 xl:px-12 py-20 md:py-32"
        >
            <motion.div variants={itemVariants} className="mb-16">
                <div className="text-[11px] md:text-xs font-semibold tracking-[0.25em] text-[#6b7b9e] mb-6 uppercase flex items-center gap-3">
                    <span className="text-blue-500">02</span>
                    <span className="text-[#2e374f]">·</span>
                    <span>Problem Statement</span>
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 tracking-tight">
                    The <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">Key Challenges</span>
                </h2>
                <p className="text-zinc-400 text-base sm:text-lg md:text-xl leading-relaxed max-w-4xl font-light">
                    The existing process relied heavily on sales representatives, creating friction for both customers and internal teams. Our goal was to simplify this into an intuitive self-service experience.
                </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-5 md:gap-8">
                {/* Card 1 */}
                <motion.div variants={itemVariants} className="bg-gradient-to-tr from-[#162a45] to-[#16192b] border border-[#23293b] rounded-[24px] p-6 md:p-10 hover:border-[#38425e] transition-colors relative overflow-hidden group">
                    <div className="flex justify-between items-start mb-12 relative z-10">
                        <div className="w-14 h-14 rounded-2xl bg-[#1a385f] flex items-center justify-center border border-[#294c7a]">
                            <Users className="w-7 h-7 text-[#8ba6ff]" />
                        </div>
                        <span className="text-[10px] md:text-[11px] font-semibold tracking-widest text-[#4F6296] uppercase pt-2">Process</span>
                    </div>
                    <h3 className="text-white font-bold text-xl md:text-2xl mb-4 relative z-10">Manual, Rep-Dependent Process</h3>
                    <p className="text-zinc-400 leading-relaxed relative z-10 text-[15px] md:text-[17px]">
                        Every purchase required multiple interactions with a sales representative before a transaction could be completed — creating delays and dependency.
                    </p>
                </motion.div>

                {/* Card 2 */}
                <motion.div variants={itemVariants} className="bg-gradient-to-tr from-[#261745] to-[#16192b] border border-[#23293b] rounded-[24px] p-6 md:p-10 hover:border-[#38425e] transition-colors relative overflow-hidden group">
                    <div className="flex justify-between items-start mb-12 relative z-10">
                        <div className="w-14 h-14 rounded-2xl bg-[#31225e] flex items-center justify-center border border-[#443180]">
                            <FileText className="w-7 h-7 text-[#8ba6ff]" />
                        </div>
                        <span className="text-[10px] md:text-[11px] font-semibold tracking-widest text-[#4F6296] uppercase pt-2">Friction</span>
                    </div>
                    <h3 className="text-white font-bold text-xl md:text-2xl mb-4 relative z-10">Long Forms & High Drop-Off</h3>
                    <p className="text-zinc-400 leading-relaxed relative z-10 text-[15px] md:text-[17px]">
                        Lengthy forms with upfront information requests overwhelmed users — causing high abandonment rates before users could even reach the payment step.
                    </p>
                </motion.div>

                {/* Card 3 */}
                <motion.div variants={itemVariants} className="bg-gradient-to-tr from-[#36134a] to-[#16192b] border border-[#23293b] rounded-[24px] p-6 md:p-10 hover:border-[#38425e] transition-colors relative overflow-hidden group">
                    <div className="flex justify-between items-start mb-12 relative z-10">
                        <div className="w-14 h-14 rounded-2xl bg-[#451f5c] flex items-center justify-center border border-[#5e2d7a]">
                            <Waypoints className="w-7 h-7 text-[#8ba6ff]" />
                        </div>
                        <span className="text-[10px] md:text-[11px] font-semibold tracking-widest text-[#4F6296] uppercase pt-2">Complexity</span>
                    </div>
                    <h3 className="text-white font-bold text-xl md:text-2xl mb-4 relative z-10">Complex Verification Journey</h3>
                    <p className="text-zinc-400 leading-relaxed relative z-10 text-[15px] md:text-[17px]">
                        The purchase flow included business verification, document uploads, Aadhaar e-sign, and installation scheduling — each adding friction to the experience.
                    </p>
                </motion.div>

                {/* Card 4 */}
                <motion.div variants={itemVariants} className="bg-gradient-to-tr from-[#142e4a] to-[#16192b] border border-[#23293b] rounded-[24px] p-6 md:p-10 hover:border-[#38425e] transition-colors relative overflow-hidden group">
                    <div className="flex justify-between items-start mb-12 relative z-10">
                        <div className="w-14 h-14 rounded-2xl bg-[#18395e] flex items-center justify-center border border-[#265080]">
                            <Scale className="w-7 h-7 text-[#8ba6ff]" />
                        </div>
                        <span className="text-[10px] md:text-[11px] font-semibold tracking-widest text-[#4F6296] uppercase pt-2">Constraints</span>
                    </div>
                    <h3 className="text-white font-bold text-xl md:text-2xl mb-4 relative z-10">UX vs Business & Regulatory Needs</h3>
                    <p className="text-zinc-400 leading-relaxed relative z-10 text-[15px] md:text-[17px]">
                        Designing a seamless experience while meeting strict business rules, legal requirements, and regulatory compliance was the defining tension of the project.
                    </p>
                </motion.div>
            </div>
        </motion.div>
    );
}
