import { motion } from 'framer-motion';
import { skills, tools } from '../data/skills';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const toolCategoryColors: Record<string, string> = {
  design: '#C8F135',
  video: '#FF5C00',
  dev: '#1A1AFF',
  ecommerce: '#C8F135',
  marketing: '#FF5C00',
  ops: '#ffffff',
};

export const SkillsSection = () => {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section id="skills" className="bg-black py-24" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-16">
          <div className="section-label bg-lime">Capabilities</div>
          <div className="flex-1 h-px bg-white/10" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-2 border-white/20 mb-16">
          {Object.entries(skills).map(([key, skill], idx) => (
            <div
              key={key}
              className={`p-8 ${
                idx < 2 ? 'border-b-2 md:border-b-0 md:border-r-2 border-white/20' : ''
              }`}
            >
              <div
                className="inline-block font-grotesk font-black text-xs uppercase tracking-widest px-3 py-1 mb-6 border-2"
                style={{
                  color: skill.color,
                  borderColor: skill.color,
                  background: `${skill.color}15`,
                }}
              >
                {skill.label}
              </div>
              <div className="space-y-3">
                {skill.items.map((item, i) => (
                  <motion.div
                    key={item}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: idx * 0.1 + i * 0.06 }}
                  >
                    <span
                      className="w-2 h-2 flex-shrink-0"
                      style={{ background: skill.color }}
                    />
                    <span className="font-inter text-sm text-white/70">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tools */}
        <div>
          <div className="font-grotesk font-black text-xs uppercase tracking-widest text-white/30 mb-6">
            Tools & Technologies
          </div>
          <div className="flex flex-wrap gap-3">
            {tools.map((tool, i) => (
              <motion.span
                key={tool.name}
                className="font-grotesk font-bold text-xs uppercase tracking-wider border-2 px-3 py-2"
                style={{
                  borderColor: toolCategoryColors[tool.category] || '#ffffff30',
                  color: toolCategoryColors[tool.category] || '#ffffff',
                  background: `${toolCategoryColors[tool.category] || '#ffffff'}10`,
                }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.4 + i * 0.04 }}
              >
                {tool.name}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Connecting statement */}
        <div className="mt-16 border-2 border-white/20 p-8">
          <p className="font-grotesk font-black text-xl md:text-2xl text-white/80 leading-relaxed max-w-3xl">
            These three disciplines don't compete — they compound.{' '}
            <span className="text-lime">Marketing</span> brings the audience,{' '}
            <span className="text-orange">creative</span> earns their attention, and{' '}
            <span className="text-cobalt">development</span> converts it into outcomes.
          </p>
        </div>
      </div>
    </section>
  );
};
