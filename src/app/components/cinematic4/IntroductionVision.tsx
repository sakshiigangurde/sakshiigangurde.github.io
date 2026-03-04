import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function IntroductionVision() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center py-32 px-6 lg:px-16 overflow-hidden"
    >
      {/* Animated background elements */}
      <motion.div
        style={{ y }}
        className="absolute inset-0"
      >
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-green-400/10 to-teal-400/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] bg-gradient-to-br from-pink-400/10 to-yellow-400/10 rounded-full blur-[100px]" />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 max-w-6xl mx-auto"
      >
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-[0.3em] text-green-400/70">The Challenge</span>
        </motion.div>

        {/* Main Header */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="text-white">Multiple metrics,</span>
            <br />
            <span className="bg-gradient-to-r from-green-400 via-teal-400 to-sky-400 bg-clip-text text-transparent">
              One vision.
            </span>
          </h2>
        </motion.div>

        {/* Main content grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {/* Left Card: THE PROJECT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="group h-full"
          >
            <div className="bg-gradient-to-br from-white/10 to-white/[0.02] border border-green-400/20 rounded-3xl p-8 md:p-10 backdrop-blur-sm h-full hover:border-green-400/40 transition-colors">
              <div className="mb-8">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-400/10 border border-green-400/20">
                  <span className="text-xs font-bold tracking-[0.2em] text-green-400 uppercase">
                    THE PROJECT
                  </span>
                </div>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Child Development Tracking
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                With over 25+ metrics tracked across motor, cognitive, social, and emotional domains, parents got overwhelmed by the sheer amount of data points and numbers.
              </p>
            </div>
          </motion.div>

          {/* Right Card: THE GOAL */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="group h-full"
          >
            <div className="bg-gradient-to-br from-white/10 to-white/[0.02] border border-pink-400/20 rounded-3xl p-8 md:p-10 backdrop-blur-sm h-full hover:border-pink-400/40 transition-colors relative overflow-hidden">
              <div className="mb-8">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-pink-400/10 border border-pink-400/20">
                  <span className="text-xs font-bold tracking-[0.2em] text-pink-400 uppercase">
                    THE GOAL
                  </span>
                </div>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Make metrics visual and emotional.
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed mix-blend-plus-lighter relative z-10">
                Instead of complex dashboards, we want to create a system that celebrates child development milestones through metaphor and gamification.
              </p>

              {/* Decorative background glow inside card */}
              <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-gradient-to-br from-pink-400/20 to-orange-400/20 rounded-full blur-3xl" />
            </div>
          </motion.div>
        </div>

        {/* Bottom quote */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-center"
        >
          <div className="inline-block px-8 py-6 rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10">
            <p className="text-xl md:text-2xl text-gray-300 font-light italic max-w-3xl">
              "Child development should not feel like a report card."
            </p>
          </div>
        </motion.div>

        {/* Decorative separator */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex items-center justify-center gap-3 mt-16"
        >
          <div className="h-px w-24 bg-gradient-to-r from-transparent to-green-400/50" />
          <div className="w-2 h-2 rounded-full bg-green-400" />
          <div className="h-px w-24 bg-gradient-to-l from-transparent to-green-400/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
