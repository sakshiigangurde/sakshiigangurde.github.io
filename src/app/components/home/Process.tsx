import { motion } from 'motion/react';

export default function Process() {
  const steps = [
    {
      num: "01",
      title: "Discover",
      desc: "I start by understanding the problem. I look into user needs, business goals, and what already exists in the market through research and discussions.",
      numColor: "text-[#113227]",
      lineColor: "bg-[#165a46]"
    },
    {
      num: "02",
      title: "Define",
      desc: "I organize all the insights and clearly define the problem. This helps set the direction and make better design decisions.",
      numColor: "text-[#1a3048]",
      lineColor: "bg-[#2a527c]"
    },
    {
      num: "03",
      title: "Ideate",
      desc: "I explore different ideas through sketches, wireframes, and quick prototypes.",
      numColor: "text-[#262348]",
      lineColor: "bg-[#3e387c]"
    },
    {
      num: "04",
      title: "Deliver",
      desc: "I design polished UI, create interactive prototypes, and work closely with developers to ensure smooth handoff and execution.",
      numColor: "text-[#362145]",
      lineColor: "bg-[#55336d]"
    }
  ];

  return (
    <section className="py-20 px-4 md:px-8 xl:px-12 max-w-[1600px] mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="mb-16 md:mb-20"
      >
        <p className="text-sm font-medium tracking-[0.4em] text-[#10b981] mb-3 uppercase">
          HOW I WORK
        </p>
        <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
          My <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0ce6f2] via-blue-500 to-[#a855f7]">Process</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
        {steps.map((step, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`relative flex flex-col ${index % 2 !== 0 ? 'md:mt-24 lg:mt-32' : ''}`}
          >
            <div className="relative mb-8 w-fit">
              <div className={`text-[120px] md:text-[140px] font-black leading-none tracking-tighter ${step.numColor}`}>
                {step.num}
              </div>
              <div className={`absolute bottom-3 left-0 w-16 h-1 ${step.lineColor}`}></div>
            </div>
            <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
            <p className="text-zinc-400 text-[15px] leading-relaxed">
              {step.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
