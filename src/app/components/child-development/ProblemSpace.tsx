import { motion } from "motion/react";

export function ProblemSpace() {
  const challenges = [
    {
      title: "Too Many Metrics",
      description: "Risk of overwhelming dashboard",
      borderColor: "border-red-400/20"
    },
    {
      title: "Development as Numbers",
      description: "Feels clinical and impersonal",
      borderColor: "border-orange-400/20"
    },
    {
      title: "No Emotional Reinforcement",
      description: "Missing celebration of milestones",
      borderColor: "border-yellow-400/20"
    },
    {
      title: "Risk of Comparison",
      description: "Could create performance pressure",
      borderColor: "border-pink-400/20"
    }
  ];

  return (
    <section className="relative py-32 px-6 lg:px-16 overflow-hidden bg-gradient-to-b from-[#121212] via-red-950/5 to-[#121212]">
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-sm uppercase tracking-[0.3em] text-red-400/70 mb-6 block">The Challenge</span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
            <span className="text-gray-400">How might we present</span>
            <br />
            <span className="bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
              25+ metrics
            </span>
            <br />
            <span className="text-gray-400">in a way that feels</span>
            <br />
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-teal-400 bg-clip-text text-transparent">
              emotional and motivating?
            </span>
          </h2>
        </motion.div>

        {/* Challenge Cards Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {challenges.map((challenge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative h-48"
            >
              <div className={`relative bg-gradient-to-br from-white/10 to-white/[0.02] border ${challenge.borderColor} rounded-2xl p-8 hover:scale-[1.02] transition-all duration-300 h-full`}>
                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3">
                  {challenge.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {challenge.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Key Insight */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative"
        >
          <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-3xl p-10 md:p-12 backdrop-blur-sm">
            <div className="flex items-start gap-6">
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="text-5xl flex-shrink-0"
              >
                💡
              </motion.div>

              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400 bg-clip-text text-transparent">
                    Key Insight
                  </span>
                </h3>
                <p className="text-xl text-gray-300 leading-relaxed mb-6">
                  Parents don't need another dashboard showing participation rates and class counts.
                </p>
                <p className="text-xl text-gray-300 leading-relaxed">
                  They need to <span className="font-bold text-white">see their child growing</span>, feel <span className="font-bold text-white">proud of small wins</span>, and understand <span className="font-bold text-white">development without comparison</span>.
                </p>
              </div>
            </div>
          </div>

          {/* Decorative glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 via-orange-400/20 to-pink-400/20 blur-3xl opacity-50 -z-10" />
        </motion.div>

        {/* Bottom emphasis */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-center mt-16"
        >
          <div className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-red-500/10 via-orange-500/10 to-yellow-500/10 border border-orange-400/20">
            <p className="text-lg text-gray-300 font-semibold">
              The solution had to be <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">non-competitive</span>, <span className="bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">emotionally positive</span>, and <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">celebration-focused</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}