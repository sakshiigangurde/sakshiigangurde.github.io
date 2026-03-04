import { motion } from "motion/react";
import { Brain, Target, Palette, Star } from "lucide-react";

export function Reflections4() {
  const learnings = [
    {
      icon: Brain,
      title: "Metaphor as UX",
      description: "The garden wasn't just decoration—it unlocked every design decision.",
      color: "from-purple-400 to-pink-400"
    },
    {
      icon: Target,
      title: "Emotion mapped alongside usability",
      description: "Parent anxiety was as important to measure as task completion.",
      color: "from-pink-400 to-orange-400"
    },
    {
      icon: Palette,
      title: "Celebrate first, inform second",
      description: "Reversing the information hierarchy was the biggest driver of sentiment shift.",
      color: "from-orange-400 to-yellow-400"
    },
    {
      icon: Star,
      title: "Data isn't just numbers",
      description: "Scores and scales serve a functional purpose, but visual growth is what parents actually care about.",
      color: "from-yellow-400 to-green-400"
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
          className="text-center mb-20"
        >
          <span className="text-sm uppercase tracking-[0.3em] text-purple-400/70 mb-6 block">Reflections & Learnings</span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
              What I Learned
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Key insights from transforming data into delight
          </p>
        </motion.div>

        {/* Learnings Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {learnings.map((learning, index) => (
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
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 mb-6`}>
                  <learning.icon className="w-7 h-7 text-white" />
                </div>

                {/* Title */}
                <h3 className={`text-xl font-bold mb-4 bg-gradient-to-r ${learning.color} bg-clip-text text-transparent`}>
                  {learning.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed">
                  {learning.description}
                </p>

                {/* Hover glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${learning.color} opacity-0 group-hover:opacity-5 blur-2xl transition-opacity rounded-2xl pointer-events-none`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Personal Growth Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-20"
        >
          <div className="inline-flex flex-col gap-6 px-10 py-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10">
            <p className="text-lg text-gray-400">
              This project helped me grow as a designer by:
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "App Flow",
                "Mentorship",
                "UI/UX",
                "Prototyping",
                "Leadership"
              ].map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.9 + (index * 0.1) }}
                  className="px-5 py-2.5 bg-gradient-to-br from-purple-400/10 to-pink-400/10 border border-purple-400/20 rounded-full"
                >
                  <span className="text-sm font-medium bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                    {skill}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}