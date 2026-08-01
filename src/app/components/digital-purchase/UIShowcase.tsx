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

export function UIShowcase() {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={containerVariants}
            className="w-full py-20 md:py-32 lg:py-40"
        >
            <motion.div variants={itemVariants} className="w-full max-w-[1600px] mx-auto px-4 md:px-8 xl:px-12 text-center mb-20">
                <div className="text-[11px] md:text-xs font-semibold tracking-[0.25em] text-[#6b7b9e] mb-6 uppercase flex items-center justify-center gap-3">
                    <span className="text-blue-500">05</span>
                    <span className="text-[#2e374f]">·</span>
                    <span>UI Design</span>
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text inline-block tracking-tight">
                    Screens & Interactions
                </h2>
            </motion.div>

            <motion.div variants={itemVariants} className="w-full relative">
                <img
                    src="/images/digital-purchase/digital-purchase-ui-screens.png"
                    alt="UI Screens"
                    className="w-full h-auto object-cover"
                />
            </motion.div>
        </motion.div>
    );
}
