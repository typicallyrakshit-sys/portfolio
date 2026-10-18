import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, Code2, ArrowRight } from 'lucide-react';

const sides = {
  attention: {
    label: 'GET ATTENTION',
    icon: TrendingUp,
    color: '#C8F135',
    textColor: '#0A0A0A',
    items: [
      { title: 'Brand Identity', desc: 'Campaigns that make people stop scrolling' },
      { title: 'Social Media', desc: 'Content that builds communities, not just followers' },
      { title: 'Creative Direction', desc: 'A visual language that stays in memory' },
      { title: 'Marketing Strategy', desc: 'Reaching the right people at the right moment' },
      { title: 'Audience Engagement', desc: 'Turning viewers into invested participants' },
    ],
  },
  action: {
    label: 'TURN IT INTO ACTION',
    icon: Code2,
    color: '#0A0A0A',
    textColor: '#F5F0E8',
    items: [
      { title: 'Website Experiences', desc: 'Design that guides users to act' },
      { title: 'E-Commerce Journeys', desc: 'Stores optimised for browsing and buying' },
      { title: 'Interactive Interfaces', desc: 'Web experiences people remember' },
      { title: 'Conversion Design', desc: 'Every pixel working toward an outcome' },
      { title: 'Technical Build', desc: 'Clean, fast, responsive implementation' },
    ],
  },
} as const;

type SideKey = keyof typeof sides;

export const InteractiveSignature = () => {
  const [active, setActive] = useState<SideKey>('attention');

  return (
    <section className="bg-cream border-y-2 border-black py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-16">
          <div className="section-label">My Value Proposition</div>
          <div className="flex-1 h-px bg-black/20" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border-2 border-black">
          {(Object.keys(sides) as SideKey[]).map((sideKey) => {
            const s = sides[sideKey];
            const SideIcon = s.icon;
            const isActive = active === sideKey;

            return (
              <button
                key={sideKey}
                onClick={() => setActive(sideKey)}
                className={`relative p-8 md:p-12 text-left transition-all duration-300 border-b-2 lg:border-b-0 ${
                  sideKey === 'attention' ? 'lg:border-r-2' : ''
                } border-black ${isActive ? '' : 'opacity-40 hover:opacity-70'}`}
                style={{
                  background: isActive ? s.color : '#F5F0E8',
                  color: isActive ? s.textColor : '#0A0A0A',
                }}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeBg"
                    className="absolute inset-0"
                    style={{ background: s.color, zIndex: 0 }}
                    transition={{ duration: 0.4 }}
                  />
                )}
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <SideIcon size={24} />
                    <span className="font-grotesk font-black text-sm uppercase tracking-widest">
                      {s.label}
                    </span>
                  </div>
                  <AnimatePresence mode="wait">
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-4"
                      >
                        {s.items.map((item, i) => (
                          <motion.div
                            key={item.title}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.08 }}
                            className="flex items-start gap-3"
                          >
                            <ArrowRight size={14} className="mt-1 flex-shrink-0" />
                            <div>
                              <div className="font-grotesk font-bold text-sm">{item.title}</div>
                              <div className="font-inter text-xs opacity-70 mt-0.5">{item.desc}</div>
                            </div>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                  {!isActive && (
                    <div className="font-grotesk font-black text-4xl md:text-5xl tracking-tighter mt-4">
                      {s.label.split(' ').map((w, i) => (
                        <div key={i}>{w}</div>
                      ))}
                    </div>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Connector */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <div className="flex-1 h-px bg-black" />
          <div className="border-2 border-black bg-black text-cream font-grotesk font-black text-xs uppercase tracking-widest px-6 py-3">
            The Full Journey
          </div>
          <div className="flex-1 h-px bg-black" />
        </div>
        <p className="text-center font-inter text-sm text-black/50 mt-4 max-w-xl mx-auto">
          Most specialists handle one side. I handle both — and understand how they connect.
        </p>
      </div>
    </section>
  );
};
