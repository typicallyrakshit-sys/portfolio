import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ArrowDown, Circle, Sparkles, ExternalLink } from 'lucide-react';

const disciplines = ['GROWTH MARKETING', 'CREATIVE STRATEGY', 'FULL-STACK WEB DEV', 'CONVERSION UX', 'VIDEO & SOCIAL'];

export const Hero = () => {
  const [currentDisc, setCurrentDisc] = useState(0);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1440
  );
  const [windowHeight, setWindowHeight] = useState(
    typeof window !== 'undefined' ? window.innerHeight : 900
  );

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const cardX = useTransform(mouseX, [0, windowWidth], [-12, 12]);
  const cardY = useTransform(mouseY, [0, windowHeight], [-12, 12]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDisc((d) => (d + 1) % disciplines.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const handleScrollDown = () => {
    document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen bg-cream pt-24 pb-16 relative overflow-hidden flex flex-col justify-between">
      {/* Neo-brutalist architectural background grid */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(#0A0A0A 1.5px, transparent 1.5px), linear-gradient(90deg, #0A0A0A 1.5px, transparent 1.5px)',
          backgroundSize: '50px 50px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full my-auto">
        {/* Top identity & status bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex flex-wrap items-center gap-3">
            <div className="border-2 border-black bg-black text-cream px-3 py-1 font-grotesk font-black text-xs uppercase tracking-widest shadow-brutal-sm">
              Rakshit Tiwari
            </div>
            <div className="section-label bg-lime text-black flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-black animate-pulse" />
              Available for Q2/Q3 Projects
            </div>
          </div>
          <div className="font-grotesk text-xs uppercase tracking-wider text-black/60 hidden sm:block">
            Marketing × Creative Direction × Web Engineering
          </div>
        </div>

        {/* Main hero grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Bold Typography & CTAs */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
            >
              <h1 className="font-grotesk font-black text-5xl sm:text-6xl md:text-7xl lg:text-[76px] leading-[0.92] tracking-tighter text-black mb-8">
                I make brands{' '}
                <span className="relative inline-block">
                  <span className="relative z-10">impossible</span>
                  <motion.span
                    className="absolute -bottom-2 left-0 right-0 h-4 md:h-5 bg-lime -z-0"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    style={{ transformOrigin: 'left' }}
                  />
                </span>{' '}
                to ignore.
                <br />
                <span className="text-stroke opacity-35">Then I build the</span>
                <br />
                digital experience{' '}
                <span className="text-orange underline decoration-black decoration-4">behind them.</span>
              </h1>
            </motion.div>

            <motion.p
              className="font-inter text-lg sm:text-xl text-black/70 max-w-xl mb-8 leading-relaxed font-normal"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              I mix strategic marketing, visual art direction, and frontend development to help ambitious businesses convert attention into enduring revenue.
            </motion.p>

            {/* Discipline Badges */}
            <motion.div
              className="flex flex-wrap gap-2.5 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.5 }}
            >
              <span className="font-grotesk font-black text-xs uppercase tracking-wider border-2 border-black px-3.5 py-1.5 bg-lime text-black shadow-brutal-sm">
                Marketing Strategy
              </span>
              <span className="font-grotesk font-black text-xs uppercase tracking-wider border-2 border-black px-3.5 py-1.5 bg-orange text-white shadow-brutal-sm">
                Creative & Campaigns
              </span>
              <span className="font-grotesk font-black text-xs uppercase tracking-wider border-2 border-black px-3.5 py-1.5 bg-cobalt text-white shadow-brutal-sm">
                Full-Stack Web Dev
              </span>
              <span className="font-grotesk font-black text-xs uppercase tracking-wider border-2 border-black px-3.5 py-1.5 bg-white text-black shadow-brutal-sm">
                E-Commerce Ops
              </span>
            </motion.div>

            {/* CTAs */}
            <motion.div
              className="flex flex-wrap items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <button
                className="brutal-btn text-sm py-3.5 px-8 flex items-center gap-2 cursor-pointer"
                onClick={() => document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span>Explore Selected Work</span>
                <span className="text-lime">→</span>
              </button>
              <button
                className="brutal-btn-outline text-sm py-3.5 px-8 cursor-pointer"
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Let's Build Something
              </button>
            </motion.div>
          </div>

          {/* Right Column: Neo-Brutalist Interactive Canvas */}
          <div className="lg:col-span-5 relative">
            <motion.div
              className="relative mx-auto max-w-md"
              style={{ x: cardX, y: cardY }}
            >
              {/* Main Interactive Browser Mockup */}
              <div
                className="bg-white border-3 border-black overflow-hidden shadow-brutal-lg"
                style={{ border: '3.5px solid #0A0A0A' }}
              >
                {/* Browser bar */}
                <div className="bg-black flex items-center justify-between px-4 py-3 border-b-2 border-black">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-black/40" />
                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-black/40" />
                    <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-black/40" />
                  </div>
                  <div className="bg-white/10 rounded px-4 py-0.5 text-[11px] font-mono text-white/80 border border-white/20 truncate max-w-[200px]">
                    rakshit.portfolio / petzi / nydc
                  </div>
                  <Sparkles size={14} className="text-lime" />
                </div>

                {/* Browser inner canvas */}
                <div className="p-5 bg-[#FDFBF7]">
                  {/* Miniature brutalist brand hero */}
                  <div className="border-2 border-black bg-black text-white p-5 mb-4 shadow-brutal-sm relative">
                    <div className="text-[10px] font-grotesk tracking-widest uppercase text-lime mb-1">
                      HYBRID DISCIPLINE
                    </div>
                    <div className="font-grotesk font-black text-2xl tracking-tight leading-tight text-white mb-2">
                      GROWTH × CODE
                    </div>
                    <div className="flex items-center gap-2 text-[11px] text-white/70">
                      <span>✓ Brand Identity</span>
                      <span>•</span>
                      <span>✓ Web Engineering</span>
                    </div>
                  </div>

                  {/* Active client highlights */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="border-2 border-black p-3 bg-lime shadow-brutal-sm">
                      <div className="font-grotesk font-black text-xs uppercase tracking-wide">PETZI</div>
                      <div className="font-inter text-[11px] text-black/70 mt-1">E-Commerce & Social</div>
                    </div>
                    <div className="border-2 border-black p-3 bg-orange text-white shadow-brutal-sm">
                      <div className="font-grotesk font-black text-xs uppercase tracking-wide">NYDC.CO.IN</div>
                      <div className="font-inter text-[11px] text-white/80 mt-1">Live Web Platform</div>
                    </div>
                  </div>

                  {/* Quick conversion indicator */}
                  <div className="border-2 border-black p-3 bg-cream flex items-center justify-between">
                    <div>
                      <div className="font-grotesk font-bold text-[11px] uppercase tracking-wider text-black">
                        Direct Inquiries
                      </div>
                      <div className="font-inter text-[10px] text-black/60">
                        typicallyrakshit@gmail.com
                      </div>
                    </div>
                    <button
                      onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                      className="border-2 border-black bg-black text-lime font-grotesk font-bold text-[10px] uppercase px-3 py-1.5 shadow-brutal-sm"
                    >
                      Connect →
                    </button>
                  </div>
                </div>
              </div>

              {/* Floating Neo-Brutalist Sticker 1 */}
              <motion.div
                className="absolute -top-5 -left-8 bg-lime border-2 border-black px-3.5 py-1.5 shadow-brutal-sm -rotate-6 z-20"
                whileHover={{ scale: 1.1, rotate: 0 }}
              >
                <span className="font-grotesk font-black text-xs uppercase tracking-wider text-black flex items-center gap-1.5">
                  ✦ No Generic Templates
                </span>
              </motion.div>

              {/* Floating Cycling Discipline Badge */}
              <motion.div
                className="absolute -bottom-6 -right-4 bg-black border-2 border-black px-4 py-3 shadow-brutal-lime z-20"
                style={{ boxShadow: '5px 5px 0px #C8F135' }}
              >
                <div className="text-[10px] font-grotesk uppercase tracking-widest text-lime/50 mb-0.5">
                  Core Muscle
                </div>
                <motion.div
                  key={currentDisc}
                  className="font-grotesk font-black text-lime text-xs uppercase tracking-wider"
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -10, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {disciplines[currentDisc]}
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-14 pt-4 flex justify-center">
          <motion.button
            onClick={handleScrollDown}
            className="flex items-center gap-2 border-2 border-black px-4 py-2 bg-cream font-grotesk font-bold text-xs uppercase tracking-widest shadow-brutal-sm hover:bg-lime transition-colors cursor-pointer"
            animate={{ y: [0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 2.2 }}
          >
            <span>Explore Works & Methodology</span>
            <ArrowDown size={14} />
          </motion.button>
        </div>
      </div>
    </section>
  );
};
