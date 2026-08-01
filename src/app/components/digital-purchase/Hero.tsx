import { motion } from 'motion/react';

export function Hero() {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative min-h-screen flex flex-col items-center justify-center px-4 md:px-8 xl:px-12 max-w-[1600px] mx-auto text-center pt-20"
        >
            {/* Background faint glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none"></div>

            <h1 className="text-[2.75rem] sm:text-5xl md:text-7xl lg:text-[7rem] font-bold tracking-tight mb-6 md:mb-8 max-w-5xl leading-[1.1] md:leading-[1.05] relative z-10">
                Simplifying the <br className="hidden sm:block" />
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">Digital Purchase</span><br />
                Journey
            </h1>
            
            <p className="text-zinc-400 max-w-3xl text-base sm:text-lg md:text-2xl leading-relaxed mb-10 md:mb-12 relative z-10 font-light">
                Transforming a representative-dependent buying process into a seamless self-service experience for businesses across India.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 relative z-10">
                <span className="px-4 md:px-5 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-medium bg-indigo-950/30 text-zinc-300 border border-indigo-500/20">Product Design (UI/UX)</span>
                <span className="px-4 md:px-5 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-medium bg-indigo-950/30 text-zinc-300 border border-indigo-500/20">End-to-End Journey</span>
                <span className="px-4 md:px-5 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-medium bg-indigo-950/30 text-zinc-300 border border-indigo-500/20">Enterprise UX</span>
                <span className="px-4 md:px-5 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-medium bg-indigo-950/30 text-zinc-300 border border-indigo-500/20">Self-Service Commerce</span>
            </div>
        </motion.div>
    );
}

