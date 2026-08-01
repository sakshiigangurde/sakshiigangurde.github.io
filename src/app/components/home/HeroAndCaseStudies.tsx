import { useRef, useState, useEffect } from 'react';
import { ArrowDown, Sparkles } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import { useNavigate } from 'react-router-dom';

interface CaseStudyCardProps {
  isDesktop: boolean;
  path: string;
  image: string;
  title: string;
  subtitle: string;
  tags: string[];
  index: number;
  zIndexClass: string;
  navigate: (path: string) => void;
  x: any;
  y: any;
  rotate: any;
  scale: any;
  textOpacity: any;
  textY: any;
}

const CaseStudyCard = ({ isDesktop, path, image, title, subtitle, tags, index, zIndexClass, navigate, x, y, rotate, scale, textOpacity, textY }: CaseStudyCardProps) => {
  const content = (
    <>
      <div className="overflow-hidden rounded-[2rem] mb-6 bg-white aspect-[16/10] shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        <img src={image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
      </div>
      {isDesktop ? (
        <motion.div style={{ opacity: textOpacity, y: textY }}>
          <h3 className="text-2xl font-bold mb-2 group-hover:text-[#00d9b4] transition-colors">{title}</h3>
          <p className="text-zinc-300 font-medium mb-4">{subtitle}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((pill, i) => (
              <span key={i} className="px-3 py-1 text-xs rounded-full bg-zinc-800/40 border border-zinc-700/50 text-zinc-400 font-medium">{pill}</span>
            ))}
          </div>
        </motion.div>
      ) : (
        <div>
          <h3 className="text-2xl font-bold mb-2 group-hover:text-[#00d9b4] transition-colors">{title}</h3>
          <p className="text-zinc-300 font-medium mb-4">{subtitle}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((pill, i) => (
              <span key={i} className="px-3 py-1 text-xs rounded-full bg-zinc-800/40 border border-zinc-700/50 text-zinc-400 font-medium">{pill}</span>
            ))}
          </div>
        </div>
      )}
    </>
  );

  if (isDesktop) {
    return (
      <motion.div onClick={() => navigate(path)} style={{ x, y, rotate, scale }} className={`group cursor-pointer flex flex-col ${zIndexClass}`}>
        {content}
      </motion.div>
    );
  }

  return (
    <motion.div onClick={() => navigate(path)} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }} className={`group cursor-pointer flex flex-col ${zIndexClass}`}>
      {content}
    </motion.div>
  );
};

export default function HeroAndCaseStudies() {
  const containerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  
  const [isDesktop, setIsDesktop] = useState(
    typeof window !== 'undefined' ? window.innerWidth >= 1280 : true
  );

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1280);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Track global scroll
  const { scrollY } = useScroll();

  // Scroll ranges for the transition from stack to grid
  // Split into Top and Bottom ranges so the bottom cards take longer to slot in,
  // ensuring they don't finish transitioning while still off-screen!
  const rangeTop = [0, 1000];
  const rangeBottom = [0, 1000];

  // Card 1: JioBusiness (Top-Left) -> Top/Front in stack
  const card1X = useTransform(scrollY, rangeTop, [`100%`, "0%"]);
  const card1Y = useTransform(scrollY, rangeTop, [`-120vh`, "0vh"]);
  const card1R = useTransform(scrollY, rangeTop, [5, 0]);

  // Card 2: Digital Purchase (Top-Right) -> 2nd in stack
  const card2X = useTransform(scrollY, rangeTop, [`2%`, "0%"]);
  const card2Y = useTransform(scrollY, rangeTop, [`-116vh`, "0vh"]);
  const card2R = useTransform(scrollY, rangeTop, [-3, 0]);

  // Card 3: LittleNest Booking (Bottom-Left) -> 3rd in stack
  const card3X = useTransform(scrollY, rangeBottom, [`98%`, "0%"]);
  const card3Y = useTransform(scrollY, rangeBottom, [`-190vh`, "0vh"]);
  const card3R = useTransform(scrollY, rangeBottom, [4, 0]);

  // Card 4: LittleNest Growth (Bottom-Right) -> Bottom in stack
  const card4X = useTransform(scrollY, rangeBottom, [`4%`, "0%"]);
  const card4Y = useTransform(scrollY, rangeBottom, [`-194vh`, "0vh"]);
  const card4R = useTransform(scrollY, rangeBottom, [-7, 0]);

  // Reduced initial scale (0.7) so they start smaller in the Hero stack
  const cardScaleTop = useTransform(scrollY, rangeTop, [0.7, 1]);
  const cardScaleBottom = useTransform(scrollY, rangeBottom, [0.7, 1]);

  // Fade text in as the cards settle into their final spots
  const textOpacityTop = useTransform(scrollY, [700, 1000], [0, 1]);
  const textOpacityBottom = useTransform(scrollY, [700, 1000], [0, 1]);
  
  const textYTop = useTransform(scrollY, [700, 1000], [20, 0]);
  const textYBottom = useTransform(scrollY, [700, 1000], [20, 0]);
  
  const headingOpacity = useTransform(scrollY, [300, 600], [0, 1]);
  const headingY = useTransform(scrollY, [300, 600], [40, 0]);

  return (
    <div ref={containerRef} className="relative w-full overflow-x-hidden">
      {/* --- HERO SECTION --- */}
      <section className="relative flex flex-col xl:flex-row items-center justify-between gap-8 xl:gap-12 pt-24 pb-24 xl:py-20 px-4 md:px-8 xl:px-12 max-w-[1600px] mx-auto xl:min-h-screen z-10">
        {/* Background Gradients */}
        <div className="absolute inset-0 pointer-events-none -z-20 flex justify-center items-center">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/3 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-500/5 rounded-full blur-[150px]" />
        </div>

        <div className="flex-1 space-y-8 relative z-10">
          <div className="absolute -left-20 top-20 w-[600px] h-[600px] bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 blur-[100px] rounded-full -z-10 pointer-events-none" />
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-800 bg-zinc-900/50 text-zinc-300 text-sm mb-6 shadow-lg backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-[#0ce6f2]" />
              Hi, I'm Sakshi
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold leading-[1.1] tracking-tight">
              Designing <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Products</span><br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0ce6f2] to-blue-500">That Matter</span>
            </h1>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-zinc-400 max-w-xl leading-relaxed font-light"
          >
            Product Designer with 5+ years of experience designing enterprise platforms, consumer apps, and premium digital experiences at Reliance Jio.
          </motion.p>
          
          <motion.button 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="bg-gradient-to-r from-[#0ce6f2] to-[#a855f7] text-white font-bold px-8 py-4 rounded-full flex items-center gap-2 hover:opacity-90 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-purple-500/20 mt-4"
          >
            View My Work
            <ArrowDown className="w-5 h-5" />
          </motion.button>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="grid grid-cols-2 lg:flex lg:items-center mt-12 gap-y-8 gap-x-4 md:gap-8 lg:gap-10"
          >
            <div>
              <h3 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0ce6f2] to-[#3b82f6]">4</h3>
              <p className="text-xs text-zinc-500 mt-2 uppercase tracking-[0.2em] font-medium">Featured Projects</p>
            </div>
            <div className="pl-4 md:pl-8 lg:pl-10 border-l border-white/10">
              <h3 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6]">5+</h3>
              <p className="text-xs text-zinc-500 mt-2 uppercase tracking-[0.2em] font-medium">Years Experience</p>
            </div>
            <div className="col-span-2 lg:col-span-1 pt-6 lg:pt-0 border-t lg:border-t-0 lg:border-l border-white/10 lg:pl-10">
              <h3 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#8b5cf6] to-[#d946ef]">40+</h3>
              <p className="text-xs text-zinc-500 mt-2 uppercase tracking-[0.2em] font-medium whitespace-nowrap">Features Delivered</p>
            </div>
          </motion.div>
        </div>
        
        {/* Placeholder for the images in the Hero section (just to take up space on the right) */}
        <div className="hidden xl:flex flex-1 relative w-full aspect-[4/3] md:aspect-auto md:h-[600px] items-center justify-center mt-12 xl:mt-0 z-10 pointer-events-none">
           {/* The actual images are rendered in the grid below and translated UP to this spot! */}
        </div>
      </section>

      {/* --- CASE STUDIES SECTION --- */}
      <section className="py-24 px-4 md:px-8 xl:px-12 max-w-[1600px] mx-auto min-h-screen relative z-20">
        {isDesktop ? (
          <motion.div style={{ opacity: headingOpacity, y: headingY }} className="mb-16">
            <p className="text-sm font-medium tracking-[0.4em] text-[#00d9b4] mb-4 uppercase">FEATURED WORK</p>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
              Selected <span className="bg-gradient-to-r from-[#00d9b4] via-[#3b82f6] to-[#a855f7] text-transparent bg-clip-text">Case Studies</span>
            </h2>
          </motion.div>
        ) : (
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7, ease: "easeOut" }} className="mb-16">
            <p className="text-sm font-medium tracking-[0.4em] text-[#00d9b4] mb-4 uppercase">FEATURED WORK</p>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
              Selected <span className="bg-gradient-to-r from-[#00d9b4] via-[#3b82f6] to-[#a855f7] text-transparent bg-clip-text">Case Studies</span>
            </h2>
          </motion.div>
        )}

        {/* The Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
          <CaseStudyCard 
            isDesktop={isDesktop} navigate={navigate}
            title="JioBusiness" subtitle="Enterprise Dashboard Redesign" tags={["Enterprise UX", "Dashboard Design", "B2B", "Data Visualization"]}
            image="/images/heroes/jiobusiness-hero.png" path="/case-study/jiobusiness"
            index={1} zIndexClass="z-40"
            x={card1X} y={card1Y} rotate={card1R} scale={cardScaleTop} textOpacity={textOpacityTop} textY={textYTop}
          />
          <CaseStudyCard 
            isDesktop={isDesktop} navigate={navigate}
            title="Digital Purchase Journey" subtitle="From Assisted Sales to Self-Service" tags={["Enterprise UX", "Dashboard Design", "B2B", "Data Visualization"]}
            image="/images/heroes/digital-purchase-hero.png" path="/case-study/digital-purchase"
            index={2} zIndexClass="z-30"
            x={card2X} y={card2Y} rotate={card2R} scale={cardScaleTop} textOpacity={textOpacityTop} textY={textYTop}
          />
          <CaseStudyCard 
            isDesktop={isDesktop} navigate={navigate}
            title="LittleNest" subtitle="End-to-End Booking Experience" tags={["Enterprise UX", "Dashboard Design", "B2B", "Data Visualization"]}
            image="/images/heroes/littlenest-booking-hero-new.png" path="/case-study/littlenest-booking"
            index={3} zIndexClass="z-20"
            x={card3X} y={card3Y} rotate={card3R} scale={cardScaleBottom} textOpacity={textOpacityBottom} textY={textYBottom}
          />
          <CaseStudyCard 
            isDesktop={isDesktop} navigate={navigate}
            title="LittleNest" subtitle="Child Growth Experience" tags={["Enterprise UX", "Dashboard Design", "B2B", "Data Visualization"]}
            image="/images/heroes/littlenest-growth-hero.png" path="/case-study/child-development"
            index={4} zIndexClass="z-10"
            x={card4X} y={card4Y} rotate={card4R} scale={cardScaleBottom} textOpacity={textOpacityBottom} textY={textYBottom}
          />
        </div>
      </section>
    </div>
  );
}
