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

export function OfflineToOnline() {
    return (
        <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={containerVariants}
            className="w-full max-w-[1600px] mx-auto px-4 md:px-8 xl:px-12 py-20 md:py-32 relative"
        >
            {/* Subtle center glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="grid md:grid-cols-12 gap-8 md:gap-16 relative z-10">
                <motion.div variants={itemVariants} className="md:col-span-5">
                    <div className="text-[11px] md:text-xs font-semibold tracking-[0.25em] text-[#6b7b9e] mb-6 uppercase flex items-center gap-3">
                        <span className="text-blue-500">01</span>
                        <span className="text-[#2e374f]">·</span>
                        <span>Introduction</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.15] tracking-tight">
                        From Offline <br /> to Online
                    </h2>
                </motion.div>
                <div className="md:col-span-7 space-y-6 text-base sm:text-lg md:text-xl">
                    <motion.p variants={itemVariants} className="text-zinc-300 leading-relaxed font-light">
                        JioBusiness offers a range of connectivity and digital solutions for businesses across India. Earlier, customers had to contact a Jio sales representative to purchase a service, making the process dependent on manual assistance.
                    </motion.p>
                    <motion.p variants={itemVariants} className="text-zinc-500 leading-relaxed font-light">
                        The objective of this project was to bring the entire purchase journey online, enabling businesses to discover, compare, and purchase services independently through the JioBusiness website.
                    </motion.p>
                </div>
            </div>
        </motion.div>
    );
}
