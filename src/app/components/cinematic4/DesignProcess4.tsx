import { motion } from "motion/react";
import { Flower2, Trophy, BookOpen } from "lucide-react";
import { publicUrl } from "@/lib/publicUrl";

export function DesignProcess4() {
  const metaphors = [
    {
      icon: Flower2,
      title: "Core Metaphor",
      subtitle: "The Recommendation",
      description: "How it all works",
      summary: "Since parents intuitively see a plant growing as a symbol of care, the app tracks the child's developmental progress through the metaphor of a blooming garden.",
      color: "from-green-400 to-teal-400",
      bgGradient: "from-green-400/20 via-teal-400/20 to-sky-400/20",
      videoUrl: publicUrl("/videos/littlenest-child-evolution/screen1.mp4")
    },
    {
      icon: Trophy,
      title: "Gamification & Rewards",
      subtitle: "Celebrate Through Details",
      description: "How we reward consistency",
      summary: "Each milestone in a child’s journey is celebrated through meaningful achievements. As children progress, they earn badges that recognize their efforts, growth, and participation. These badges are not just rewards — they are joyful moments that parents can proudly share, turning every achievement into a celebration of progress.",
      color: "from-yellow-400 to-orange-400",
      bgGradient: "from-yellow-400/20 via-orange-400/20 to-pink-400/20",
      videoUrl: publicUrl("/videos/littlenest-child-evolution/Screen2.mp4")
    },
    {
      icon: BookOpen,
      title: "The AI-enabled Growth Story",
      subtitle: "Turn Data Into Stories",
      description: "The Concept",
      summary: "With Apple Health and fitness tracking apps proving that people love visually digestible data—LittleNest creates a shareable 'Growth Story' for parents every term. It’s a personalized story celebrating their child's unique milestones relative to their age group.",
      color: "from-sky-400 to-purple-400",
      bgGradient: "from-sky-400/20 via-purple-400/20 to-pink-400/20",
      videoUrl: publicUrl("/videos/littlenest-child-evolution/screen3.mp4")
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
                  <div className="relative aspect-[9/19] bg-black rounded-[2.5rem] border-[8px] border-gray-800 shadow-2xl overflow-hidden group">
                    {/* Notch/Dynamic Island for realistic look */}
                    <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-4 bg-black rounded-full z-30 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-gray-900/80 absolute right-4" />
                    </div>

                    {/* Video Content */}
                    <video
                      src={metaphor.videoUrl}
                      className="absolute inset-0 w-full h-full object-cover z-10"
                      autoPlay
                      loop
                      muted
                      playsInline
                    />

                    {/* Subtle Overlay Shadow to blend video inside the bezel */}
                    <div className="absolute inset-0 border border-black/10 rounded-[2rem] pointer-events-none z-20" />
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