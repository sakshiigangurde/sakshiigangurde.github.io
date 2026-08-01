import { motion } from "motion/react";
import { ArrowDown, Sparkles } from "lucide-react";

export function CinematicHero4() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#121212]">
      {/* Animated background gradients - Garden theme with brand colors */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0"
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-400/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-400/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-1/3 w-96 h-96 bg-pink-400/15 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-yellow-400/15 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '3s' }} />
      </motion.div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 py-20 text-center">
        {/* Animated Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl mb-8"
        >
          <Sparkles className="w-4 h-4 text-green-400" />
          <span className="text-sm text-gray-300 font-medium tracking-wide">Child Development Intelligence System</span>
        </motion.div>

        {/* Project Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-6"
        >
          <span className="text-sm uppercase tracking-[0.3em] text-teal-400/70">LittleNest</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[1.1]"
        >
          <span className="block bg-gradient-to-r from-green-400 via-teal-400 to-sky-400 bg-clip-text text-transparent mb-4">
            Turning Data
          </span>
          <span className="block bg-gradient-to-r from-pink-400 via-yellow-400 to-green-400 bg-clip-text text-transparent">
            Into Delight
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-2xl md:text-3xl text-gray-400 mb-16 max-w-4xl mx-auto font-light leading-relaxed"
        >
          A celebration-first experience that turns 25+ development metrics into an emotional journey of growth
        </motion.p>

        {/* Garden Visual Metaphor */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.9, type: "spring", stiffness: 50 }}
          className="relative mx-auto max-w-4xl"
        >
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-green-400/30 via-teal-400/20 to-yellow-400/20 blur-3xl scale-110" />
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="mt-16 flex flex-wrap justify-center gap-8 text-center"
        >
          <div>
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
              25+
            </div>
            <div className="text-sm text-gray-500 mt-1">Metrics Tracked</div>
          </div>
          <div className="w-px bg-gray-800" />
          <div>
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-teal-400 to-sky-400 bg-clip-text text-transparent">
              0
            </div>
            <div className="text-sm text-gray-500 mt-1">Dashboards</div>
          </div>
          <div className="w-px bg-gray-800" />
          <div>
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-400 to-yellow-400 bg-clip-text text-transparent">
              100%
            </div>
            <div className="text-sm text-gray-500 mt-1">Celebration</div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.2 }}
          className="mt-20"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="inline-flex flex-col items-center gap-2"
          >
            <span className="text-xs text-gray-500 uppercase tracking-widest">Scroll to explore</span>
            <ArrowDown className="w-5 h-5 text-green-400/70" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}