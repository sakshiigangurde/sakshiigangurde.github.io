import { Layers, Scale, Users, Lightbulb } from 'lucide-react';
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

export function Reflections() {
    return (
        <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={containerVariants}
            className="w-full max-w-[1600px] mx-auto px-4 md:px-8 xl:px-12 py-20 md:py-32 lg:py-40"
        >
            <motion.div variants={itemVariants} className="text-center mb-16 flex flex-col items-center">
                <div className="text-[11px] md:text-xs font-semibold tracking-[0.25em] text-[#6b7b9e] mb-6 uppercase flex items-center justify-center gap-3">
                    <span className="text-blue-500">06</span>
                    <span className="text-[#2e374f]">·</span>
                    <span>Reflections & Learnings</span>
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 tracking-tight bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
                    What I Took Away
                </h2>
                <p className="text-zinc-400 max-w-3xl text-base sm:text-lg md:text-xl leading-relaxed">
                    This project strengthened my understanding of designing complex enterprise workflows under real business and regulatory constraints.
                </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8 w-full text-left">
                {/* Card 1 */}
                <motion.div variants={itemVariants} className="bg-gradient-to-tr from-[#162a45] to-[#16192b] border border-[#23293b] rounded-[24px] p-6 md:p-10 hover:border-[#38425e] transition-colors group">
                    <div className="w-14 h-14 rounded-2xl bg-[#1a385f] flex items-center justify-center border border-[#294c7a] mb-8">
                        <Layers className="w-7 h-7 text-[#8ba6ff]" />
                    </div>
                    <h3 className="text-white font-bold text-xl md:text-2xl mb-4">Break Large Workflows Into Steps</h3>
                    <p className="text-zinc-400 leading-relaxed text-[15px] md:text-[17px]">
                        Breaking large workflows into smaller, user-friendly steps significantly improves completion rates — reducing cognitive load at every stage of the journey.
                    </p>
                </motion.div>

                {/* Card 2 */}
                <motion.div variants={itemVariants} className="bg-gradient-to-tr from-[#261745] to-[#16192b] border border-[#23293b] rounded-[24px] p-6 md:p-10 hover:border-[#38425e] transition-colors group">
                    <div className="w-14 h-14 rounded-2xl bg-[#31225e] flex items-center justify-center border border-[#443180] mb-8">
                        <Scale className="w-7 h-7 text-[#8ba6ff]" />
                    </div>
                    <h3 className="text-white font-bold text-xl md:text-2xl mb-4">Balancing User & Business Needs</h3>
                    <p className="text-zinc-400 leading-relaxed text-[15px] md:text-[17px]">
                        Enterprise products require carefully balancing user needs with business rules, legal constraints, and operational requirements — without compromising either.
                    </p>
                </motion.div>

                {/* Card 3 */}
                <motion.div variants={itemVariants} className="bg-gradient-to-tr from-[#36134a] to-[#16192b] border border-[#23293b] rounded-[24px] p-6 md:p-10 hover:border-[#38425e] transition-colors group">
                    <div className="w-14 h-14 rounded-2xl bg-[#451f5c] flex items-center justify-center border border-[#5e2d7a] mb-8">
                        <Users className="w-7 h-7 text-[#8ba6ff]" />
                    </div>
                    <h3 className="text-white font-bold text-xl md:text-2xl mb-4">Early Stakeholder Alignment</h3>
                    <p className="text-zinc-400 leading-relaxed text-[15px] md:text-[17px]">
                        Involving stakeholders early in the design process saves significant time and redesign effort — turning late-stage blockers into early inputs.
                    </p>
                </motion.div>

                {/* Card 4 */}
                <motion.div variants={itemVariants} className="bg-gradient-to-tr from-[#142e4a] to-[#16192b] border border-[#23293b] rounded-[24px] p-6 md:p-10 hover:border-[#38425e] transition-colors group">
                    <div className="w-14 h-14 rounded-2xl bg-[#18395e] flex items-center justify-center border border-[#265080] mb-8">
                        <Lightbulb className="w-7 h-7 text-[#8ba6ff]" />
                    </div>
                    <h3 className="text-white font-bold text-xl md:text-2xl mb-4">Complexity Can Feel Simple</h3>
                    <p className="text-zinc-400 leading-relaxed text-[15px] md:text-[17px]">
                        Good UX isn't about reducing steps — it's about making complex processes feel simple. Progressive disclosure and clear wayfinding do more than any shortcut.
                    </p>
                </motion.div>
            </div>
        </motion.div>
    );
}
