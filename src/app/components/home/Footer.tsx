import { Linkedin, Mail, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function Footer() {
  return (
    <footer className="py-32 px-4 md:px-8 xl:px-12 w-full text-center relative overflow-hidden mt-12">
      {/* Full-section background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1a0b2e]/80 to-[#1a0b2e] pointer-events-none" />
      
      <div className="relative z-10 max-w-[1600px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs font-medium tracking-[0.4em] text-[#8b5cf6] mb-6 uppercase">
            GET IN TOUCH
          </p>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
            Let's <span className="text-gradient-cyan">Create</span><br />
            Something Great
          </h2>
          
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
            I'm currently open to new opportunities and collaborations.<br className="hidden sm:block" /> Let's talk about your next project.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <button className="bg-gradient-primary text-white font-medium px-8 py-4 rounded-xl flex items-center justify-center gap-3 mx-auto hover:scale-105 transition-transform duration-300 shadow-lg shadow-purple-500/25">
            <Mail className="w-5 h-5" />
            your.email@example.com 
            <ArrowRight className="w-5 h-5 ml-1" />
          </button>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-center justify-center gap-4 mt-12"
        >
          <a href="#" className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors border border-white/5 text-sm text-zinc-300 font-medium">
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </a>
          <a href="#" className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors border border-white/5 text-sm text-zinc-300 font-medium">
            <span className="font-bold font-serif text-base leading-none">Bē</span>
            Behance
          </a>
        </motion.div>
      </div>
      
      {/* Bottom glowing divider line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 max-w-[800px] h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent blur-[1px]" />
    </footer>
  );
}
