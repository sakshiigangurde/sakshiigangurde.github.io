import { motion } from "motion/react";
import { Flower2, Trophy, BookOpen } from "lucide-react";

export function DesignProcess4() {
  const metaphors = [
    {
      icon: Flower2,
      title: "Core Metaphor",
      subtitle: "The Recommendation",
      description: "How it all works",
      summary: "Since parents intuitively see a plant growing as a symbol of care, the app tracks the child's developmental progress through the metaphor of a blooming garden.",
      color: "from-green-400 to-teal-400",
      bgGradient: "from-green-400/20 via-teal-400/20 to-sky-400/20"
    },
    {
      icon: Trophy,
      title: "Gamification & Rewards",
      subtitle: "Celebrate Through Details",
      description: "How we reward consistency",
      summary: "We have visual progress representation at multiple touch points across the experience. It serves as a subtle yet motivating nudge to keep parents returning to log data and complete actionable play tasks.",
      color: "from-yellow-400 to-orange-400",
      bgGradient: "from-yellow-400/20 via-orange-400/20 to-pink-400/20"
    },
    {
      icon: BookOpen,
      title: "The AI-enabled Growth Story",
      subtitle: "Turn Data Into Stories",
      description: "The Concept",
      summary: "With Apple Health and fitness tracking apps proving that people love visually digestible data—LittleNest creates a shareable 'Growth Story' for parents every month. It’s an AI-generated personalized story celebrating their child's unique milestones relative to their age group.",
      color: "from-sky-400 to-purple-400",
      bgGradient: "from-sky-400/20 via-purple-400/20 to-pink-400/20"
    }
  ];

  return (
    <section className="relative py-32 px-6 lg:px-16 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <span className="text-sm uppercase tracking-[0.3em] text-teal-400/70 mb-6 block">Design Process</span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            <span className="bg-gradient-to-r from-green-400 via-teal-400 to-purple-400 bg-clip-text text-transparent">
              From Concept to Reality
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Three core metaphors that transformed data into delight
          </p>
        </motion.div>

        {/* Three Metaphor Sections */}
        {metaphors.map((metaphor, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2 }}
            className={`relative ${index < metaphors.length - 1 ? 'mb-32' : ''}`}
          >
            {/* Header with Icon */}
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-8">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${metaphor.color} bg-opacity-20 border border-white/20`}>
                  <metaphor.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-wider text-gray-500 mb-1">{metaphor.title}</p>
                  <h3 className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${metaphor.color} bg-clip-text text-transparent`}>
                    {metaphor.subtitle}
                  </h3>
                </div>
              </div>
            </div>

            {/* Two Column Layout: Summary on Left, Mobile Mockup on Right */}
            <div className="relative grid lg:grid-cols-2 gap-16 items-center">
              {/* Left: Summary */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <p className="text-xl text-gray-300 leading-relaxed">
                  {metaphor.summary}
                </p>
              </motion.div>

              {/* Right: Mobile Mockup Placeholder */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex justify-center lg:justify-end"
              >
                <div className="relative w-full max-w-[280px]">
                  {/* Mobile Frame */}
                  <div className="aspect-[9/19] bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-[2.5rem] flex items-center justify-center border-[6px] border-gray-800/80 shadow-2xl backdrop-blur-sm">
                    <div className="text-center px-6">
                      <div className="text-4xl mb-3">📱</div>
                      <p className="text-base text-gray-400 font-medium">Mobile Screen</p>
                      <p className="text-xs text-gray-500 mt-1.5">{metaphor.subtitle}</p>
                    </div>
                  </div>
                  {/* Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${metaphor.color} opacity-30 blur-3xl -z-10`} />
                </div>
              </motion.div>
            </div>

            {/* Divider Line */}
            {index < metaphors.length - 1 && (
              <div className="mt-32 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            )}
          </motion.div>
        ))}

        {/* Bottom Quote */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-32 text-center"
        >
          <div className="inline-block px-10 py-8 rounded-3xl bg-gradient-to-br from-white/10 to-white/[0.02] border border-white/10">
            <p className="text-2xl md:text-3xl text-gray-300 font-light italic max-w-3xl">
              "Parents never see raw metrics—<br />
              <span className="font-bold bg-gradient-to-r from-green-400 via-teal-400 to-purple-400 bg-clip-text text-transparent not-italic">
                they see growth.
              </span>"
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}