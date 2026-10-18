import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const AboutSection = () => {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section id="about" className="bg-cream border-y-2 border-black py-24" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Identity */}
          <div className="lg:col-span-4">
            <div className="section-label mb-8">About Me</div>
            {/* Name card */}
            <motion.div
              className="bg-black text-cream p-8 mb-6 relative overflow-hidden"
              style={{
                border: '3px solid #0A0A0A',
                boxShadow: '8px 8px 0px #C8F135',
                rotate: -2,
              }}
              initial={{ opacity: 0, rotate: -4 }}
              animate={isInView ? { opacity: 1, rotate: -2 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div className="font-grotesk font-black text-4xl tracking-tighter mb-1">
                Rakshit
              </div>
              <div className="font-grotesk font-black text-4xl tracking-tighter text-lime mb-3">
                Tiwari
              </div>
              <div className="font-inter text-xs text-white/50 uppercase tracking-widest border-t border-white/20 pt-3">
                Marketing × Creative Strategy × Web Dev
              </div>
              <div className="mt-3 font-mono text-[11px] text-lime/80 tracking-wide">
                typicallyrakshit@gmail.com
              </div>
            </motion.div>

            {/* Status */}
            <div
              className="border-2 border-black p-4 bg-lime mb-4"
              style={{ boxShadow: '3px 3px 0px #0A0A0A' }}
            >
              <div className="font-grotesk font-black text-xs uppercase tracking-widest mb-1 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-black animate-ping" />
                Current Status
              </div>
              <div className="font-inter text-sm font-semibold">
                Available for high-impact projects & advisory
              </div>
            </div>

            {/* Quick stats / bullets */}
            <div className="border-2 border-black p-4 bg-white shadow-brutal-sm">
              <div className="font-grotesk font-black text-xs uppercase tracking-widest text-black/50 mb-3">
                Key Focus
              </div>
              <div className="space-y-2 font-inter text-xs text-black/80">
                <div className="flex items-center gap-2">
                  <span className="text-orange font-bold">✦</span>
                  <span>E-Commerce store growth & UX conversion</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-lime font-bold">✦</span>
                  <span>Interactive web applications & portals</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-cobalt font-bold">✦</span>
                  <span>Organic social engines & viral short-form</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Story */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="font-grotesk font-black text-4xl md:text-5xl lg:text-6xl tracking-tighter mb-8 leading-none">
                I don't pick a lane.
                <br />
                <span className="text-stroke">I connect the whole road.</span>
              </h2>

              <div className="space-y-4 font-inter text-black/80 text-base leading-relaxed">
                <p>
                  Most developers don't understand how customer acquisition really works. Most marketers couldn't inspect a DOM node or write clean production React if their client depended on it.
                </p>
                <p>
                  I sit right in the center. I work at the intersection of digital marketing, creative direction, and technical development. Whether managing end-to-end online store growth for <strong>PETZI</strong>, developing high-profile platforms like <strong>NYDC</strong> and <strong>BGSMUN</strong>, or launching grassroots community ecosystems like <strong>Freshers Community</strong>, my focus is always the entire customer lifecycle.
                </p>
                <p>
                  When you partner with me, you don't get isolated recommendations or fragmented handoffs. You get an agile operator who can craft the marketing angle, design the visual communication, engineer the responsive web frontend, and optimize every interaction to turn casual attention into concrete business outcomes.
                </p>
              </div>

              {/* What I love */}
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  {
                    label: 'Startups & Founders',
                    desc: 'Zero-to-one product positioning, bold web launches, and aggressive go-to-market strategies.',
                  },
                  {
                    label: 'Brands & E-Commerce',
                    desc: 'Storefront management, customer journey optimisation, and creative retention marketing.',
                  },
                  {
                    label: 'Organisations & Communities',
                    desc: 'Scalable event hubs, delegate platforms, and vibrant digital community networks.',
                  },
                ].map((item, i) => (
                  <motion.div
                    key={item.label}
                    className="border-2 border-black p-5 bg-white shadow-brutal-sm hover:-translate-y-1 transition-transform"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.1 }}
                  >
                    <div className="font-grotesk font-black text-sm uppercase tracking-wide mb-2 text-black">
                      {item.label}
                    </div>
                    <div className="font-inter text-xs text-black/60 leading-relaxed">
                      {item.desc}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
