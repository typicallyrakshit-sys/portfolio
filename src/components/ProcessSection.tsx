import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const steps = [
  {
    number: '01',
    label: 'UNDERSTAND THE PROBLEM',
    desc: 'Before anything else, I dig into the business: who the audience is, what already works, and what the real challenge is underneath the surface request.',
    accent: '#C8F135',
  },
  {
    number: '02',
    label: 'BUILD THE STRATEGY',
    desc: 'Strategy first, execution second. I map out the approach — channels, messaging, format, technical decisions — so everything that follows has a clear purpose.',
    accent: '#FF5C00',
  },
  {
    number: '03',
    label: 'CREATE THE EXPERIENCE',
    desc: 'This is where design meets development. I build out the creative assets, campaign materials, or digital experiences — with craft and attention to every detail.',
    accent: '#1A1AFF',
  },
  {
    number: '04',
    label: 'TEST AND IMPROVE',
    desc: 'Launch is just the beginning. I monitor performance, gather feedback, and iterate to make the work better over time.',
    accent: '#C8F135',
  },
];

export const ProcessSection = () => {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section id="process" className="bg-cream py-24" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-16">
          <div className="section-label">How I Work</div>
          <div className="flex-1 h-px bg-black/20" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-2 border-black">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              className={`p-8 relative ${
                i < 3 ? 'border-b-2 lg:border-b-0 lg:border-r-2 border-black' : ''
              }`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.5 }}
            >
              <div className="font-grotesk font-black text-6xl leading-none mb-4 opacity-10">
                {step.number}
              </div>
              <div className="w-8 h-1 mb-6" style={{ background: step.accent }} />
              <div className="font-grotesk font-black text-base uppercase tracking-widest mb-4">
                {step.label}
              </div>
              <p className="font-inter text-sm text-black/60 leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
