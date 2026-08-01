import { motion } from 'motion/react';

export default function LifeOutside() {
  const images = [
    "/images/life-outside/photo1.png",
    "/images/life-outside/photo2.png",
    "/images/life-outside/photo3.png",
    "/images/life-outside/photo4.png",
    "/images/life-outside/photo5.png",
    "/images/life-outside/photo6.png",
    "/images/life-outside/photo7.png",
    "/images/life-outside/photo8.png",
    "/images/life-outside/photo9.png",
    "/images/life-outside/photo10.png",
  ];

  // Double the images for seamless infinite scroll
  const duplicatedImages = [...images, ...images];

  return (
    <section className="py-20 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="px-4 md:px-8 xl:px-12 max-w-[1600px] mx-auto mb-12"
      >
        <p className="text-sm font-medium tracking-[0.4em] text-[#0ce6f2] mb-2 uppercase">
          BEYOND THE SCREEN
        </p>
        <h2 className="text-4xl md:text-5xl font-bold">
          Life Outside <span className="text-gradient-purple">Pixels</span>
        </h2>
      </motion.div>

      <div className="relative w-full flex gap-6 overflow-hidden">
        {/* We use a container that is wide enough to hold all items and animate it */}
        <div className="flex gap-6 animate-scroll w-max px-8">
          {duplicatedImages.map((src, index) => (
            <div 
              key={index} 
              className={`relative flex-none w-[280px] md:w-[320px] rounded-2xl overflow-hidden aspect-[3/4] ${
                index % 2 === 0 ? 'mt-8' : 'mb-8'
              }`}
            >
              <img 
                src={src} 
                alt={`Life outside pixels ${index}`} 
                className="absolute inset-0 w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
