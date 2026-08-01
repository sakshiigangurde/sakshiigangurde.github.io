import { motion } from 'motion/react';

export default function About() {
  return (
    <section className="py-20 px-4 md:px-8 xl:px-12 max-w-[1600px] mx-auto relative">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <p className="text-sm font-medium tracking-[0.4em] text-[#10b981] mb-3 uppercase">
          ABOUT ME
        </p>
        <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
          Making Complex Things<br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0ce6f2] via-blue-500 to-[#a855f7]">Feel Simple</span>
        </h2>
      </motion.div>

      <div className="flex flex-col md:flex-row gap-12 lg:gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="w-full md:w-[45%] relative"
        >
          {/* Re-enabled and strengthened the glow, removed -z-10 which was causing it to be hidden */}
          <div className="absolute -inset-4 md:-inset-6 bg-gradient-to-tr from-[#0ce6f2] to-[#a855f7] opacity-25 blur-[60px] rounded-full" />
          
          <div className="rounded-[2.5rem] overflow-hidden bg-zinc-900 relative z-10 border border-zinc-800/50">
            <img 
              src="/images/about/sakshi-profile.jpg" 
              alt="Sakshi" 
              className="w-full h-auto object-cover"
            />
            {/* Overlay gradient to ensure text readability on light images */}
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 text-white z-20">
              <h3 className="font-semibold text-lg tracking-wide">Product Designer</h3>
              <p className="text-sm text-zinc-300">5+ years · Enterprise & Consumer</p>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="w-full md:w-[55%]"
        >
          <div className="w-full space-y-6">
            <p className="text-lg text-zinc-100 leading-relaxed">
              My journey started in <span className="font-semibold text-white">software testing</span>, where I learned to identify usability issues and understand product quality from a user's perspective.
            </p>
            <p className="text-lg text-zinc-400 leading-relaxed">
              That curiosity eventually led me into <span className="font-semibold text-white">Product Design</span>, where I now design digital experiences used by thousands of customers across enterprise and consumer products.
            </p>
            
            <div className="pt-8 border-t border-zinc-800/50 mt-8">
              <p className="text-xs font-medium text-zinc-600 mb-6 uppercase tracking-[0.4em]">WHAT I DO</p>
              <div className="flex flex-wrap gap-3">
                {['Product Design', 'Visual Design', 'UX Design', 'Design System', 'Prototyping', 'Figma'].map((skill, i) => (
                  <span 
                    key={i} 
                    className="px-5 py-2.5 rounded-full bg-zinc-900/40 border border-zinc-800/80 text-zinc-300 text-sm hover:border-[#0ce6f2]/50 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
