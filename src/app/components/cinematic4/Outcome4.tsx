import { motion } from "motion/react";
import { Heart, Target, Smile, Zap } from "lucide-react";

export function Outcome4() {
  const outcomes = [
    {
      icon: Heart,
      title: "Personalization without Overwhelm",
      description: "The interface feels like an emotional journey rather than a clinical dashboard.",
      color: "from-green-400 to-teal-400"
    },
    {
      icon: Smile,
      title: "Visualizing milestones",
      description: "Celebrating progress visually keeps parents consistently engaged and motivated.",
      color: "from-teal-400 to-sky-400"
    },
    {
      icon: Target,
      title: "Contextualized metrics",
      description: "Scores presented in context rather than raw numbers, reducing parent anxiety.",
      color: "from-sky-400 to-purple-400"
    },
    {
      icon: Zap,
      title: "Actionable next steps",
      description: "Clear, gentle prompts on what to focus on next without overwhelming parents.",
      color: "from-purple-400 to-pink-400"
    }
  ];

  return (
    <section className="relative py-32 px-6 lg:px-16 overflow-hidden bg-gradient-to-b from-[#121212] via-green-950/5 to-[#121212]">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-sm uppercase tracking-[0.3em] text-green-400/70 mb-6 block">Outcome & Impact</span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
            <span className="bg-gradient-to-r from-green-400 via-teal-400 to-sky-400 bg-clip-text text-transparent">
              The Final System
            </span>
          </h2>
        </motion.div>

        {/* Outcomes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {outcomes.map((outcome, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative bg-gradient-to-br from-white/10 to-white/[0.02] border border-white/10 rounded-2xl p-8 h-full hover:scale-[1.02] transition-all duration-300">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${outcome.color} bg-opacity-10 border border-white/10 mb-6`}>
                  <outcome.icon className="w-7 h-7 text-white" />
                </div>

                {/* Title */}
                <h3 className={`text-xl font-bold mb-3 bg-gradient-to-r ${outcome.color} bg-clip-text text-transparent`}>
                  {outcome.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed">
                  {outcome.description}
                </p>

                {/* Hover glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${outcome.color} opacity-0 group-hover:opacity-5 blur-2xl transition-opacity rounded-2xl pointer-events-none`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}