import { motion } from "motion/react";
import { Paintbrush, Code, Play } from "lucide-react";

export function MyRole() {
  const responsibilities = [
    {
      icon: Paintbrush,
      title: "UI/UX Design",
      items: [
        "Designed end-to-end user flows and translated wireframes into high-fidelity screens."
      ]
    },
    {
      icon: Play,
      title: "Motion Guidelines",
      items: [
        "Created logic and states for progress animations based on user interaction."
      ]
    },
    {
      icon: Code,
      title: "Prototyping",
      items: [
        "Built interactive prototypes to quickly validate microinteractions and growth loops."
      ]
    }
  ];

  return (
    <section className="relative py-32 px-6 lg:px-16 overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-sm uppercase tracking-[0.3em] text-teal-400/70 mb-6 block">My Role</span>
          <h2 className="text-5xl md:text-6xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-teal-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              UI/UX Designer
            </span>
          </h2>
        </motion.div>

        {/* Responsibilities Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {responsibilities.map((resp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="group"
            >
              <div className="bg-gradient-to-br from-white/10 to-white/[0.02] border border-white/10 rounded-2xl p-8 h-full hover:scale-[1.02] transition-all duration-300">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-teal-400/20 to-blue-400/20 border border-teal-400/30 mb-6">
                  <resp.icon className="w-7 h-7 text-teal-400" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-6">
                  {resp.title}
                </h3>

                {/* Items */}
                <ul className="space-y-3">
                  {resp.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-2 flex-shrink-0" />
                      <span className="text-gray-400 text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal-400/5 to-blue-400/5 opacity-0 group-hover:opacity-100 blur-xl transition-opacity rounded-2xl pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Key Achievement Highlight / Timeline Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16 flex justify-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-orange-500/10 border border-purple-400/20 backdrop-blur-sm">
            <span className="text-sm font-semibold tracking-[0.2em] text-white uppercase flex gap-2">
              <span className="text-purple-400">TIMELINE:</span>
              <span className="text-gray-300">12 weeks · 3 sprints</span>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
