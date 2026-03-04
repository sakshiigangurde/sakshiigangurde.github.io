import { motion } from "motion/react";
import { ArrowDown, LayoutDashboard } from "lucide-react";

export function CinematicHero3() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#121212]">
      {/* Animated background gradients - using Jio blue/professional colors */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0"
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/15 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/15 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-1/3 w-96 h-96 bg-cyan-500/15 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
      </motion.div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 py-20 text-center">
        {/* Animated Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl mb-8"
        >
          <LayoutDashboard className="w-4 h-4 text-blue-400" />
          <span className="text-sm text-gray-300 font-medium tracking-wide">Enterprise Dashboard Redesign</span>
        </motion.div>

        {/* Logo/Brand */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-4 mb-4">
          </div>
          <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            JioBusiness
          </h3>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[1.1]"
        >
          <span className="block bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
            Redesigning the
          </span>
          <span className="block bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
            Selfcare Dashboard
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-2xl md:text-3xl text-gray-400 mb-16 max-w-3xl mx-auto font-light"
        >
          Transforming an underutilized entry point into a powerful business tool
        </motion.p>

        {/* Dashboard mockup preview */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, delay: 1, type: "spring", stiffness: 50 }}
          className="relative mx-auto max-w-5xl"
        >
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-blue-500/30 via-indigo-500/20 to-cyan-500/20 blur-3xl scale-110" />
          
          {/* Dashboard frame */}
          <div className="relative bg-gradient-to-br from-zinc-900 to-black rounded-3xl p-6 shadow-2xl shadow-blue-900/50 border border-white/10">
            {/* Browser chrome */}
            <div className="flex items-center gap-2 mb-4 pb-4 border-b border-white/10">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
              <div className="flex-1 mx-8 h-8 bg-white/5 rounded-lg flex items-center px-4">
                <div className="w-3 h-3 rounded-full bg-blue-400 mr-3" />
                <div className="h-2 bg-gray-600 rounded w-48" />
              </div>
            </div>
            
            {/* Dashboard content preview */}
            <div className="relative bg-gradient-to-br from-gray-900 to-gray-950 rounded-2xl overflow-hidden aspect-video">
              <div className="absolute inset-0 p-8 grid grid-cols-3 gap-6">
                {/* Widget 1 - Bills */}
                <div className="col-span-2 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-2xl p-6 border border-blue-500/30">
                  <div className="h-4 bg-blue-400/40 rounded w-32 mb-4" />
                  <div className="h-8 bg-blue-400/60 rounded w-48 mb-3" />
                  <div className="h-3 bg-blue-400/30 rounded w-24" />
                </div>
                
                {/* Widget 2 - Services */}
                <div className="bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-2xl p-6 border border-indigo-500/30">
                  <div className="h-4 bg-indigo-400/40 rounded w-24 mb-4" />
                  <div className="space-y-2">
                    <div className="h-3 bg-indigo-400/50 rounded" />
                    <div className="h-3 bg-indigo-400/40 rounded" />
                    <div className="h-3 bg-indigo-400/30 rounded" />
                  </div>
                </div>
                
                {/* Widget 3 - Orders */}
                <div className="col-span-3 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl p-6 border border-cyan-500/30">
                  <div className="h-4 bg-cyan-400/40 rounded w-40 mb-4" />
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-12 bg-cyan-400/30 rounded" />
                    <div className="h-12 bg-cyan-400/25 rounded" />
                    <div className="h-12 bg-cyan-400/20 rounded" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mt-16 flex items-center justify-center gap-12"
        >
          <div className="text-center">
            <p className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent mb-2">
              B2B
            </p>
            <p className="text-sm text-gray-500 uppercase tracking-widest">Enterprise Platform</p>
          </div>
          <div className="h-12 w-px bg-gradient-to-b from-transparent via-blue-500/50 to-transparent" />
          <div className="text-center">
            <p className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent mb-2">
              Dashboard
            </p>
            <p className="text-sm text-gray-500 uppercase tracking-widest">Critical Entry Point</p>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="mt-20"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="inline-flex flex-col items-center gap-2"
          >
            <span className="text-xs text-gray-500 uppercase tracking-widest">Scroll to explore</span>
            <ArrowDown className="w-5 h-5 text-blue-400/70" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}