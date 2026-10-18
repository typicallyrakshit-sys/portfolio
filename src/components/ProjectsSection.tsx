import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects, type Project } from '../data/projects';
import { ExternalLink, ArrowUpRight } from 'lucide-react';

const categories = [
  { id: 'all', label: 'All Work' },
  { id: 'marketing', label: 'Marketing' },
  { id: 'brand', label: 'Brand & Creative' },
  { id: 'web', label: 'Web Dev' },
  { id: 'ecommerce', label: 'E-Commerce' },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const [hovered, setHovered] = useState(false);
  const isFeatured = project.featured;

  return (
    <motion.div
      className={`relative overflow-hidden group ${isFeatured ? 'lg:col-span-2' : ''}`}
      style={{
        border: '3px solid #0A0A0A',
        boxShadow: hovered ? `8px 8px 0px ${project.accentColor}` : '5px 5px 0px #0A0A0A',
        transition: 'box-shadow 0.2s, transform 0.2s',
        transform: hovered ? 'translate(-3px, -3px)' : 'translate(0,0)',
      }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Header */}
      <div
        className="p-6 md:p-8"
        style={{
          background: project.bgColor,
          color: project.bgColor === '#0A0A0A' ? '#F5F0E8' : '#0A0A0A',
        }}
      >
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="font-grotesk font-bold text-xs uppercase tracking-wider border px-2.5 py-1"
                style={{
                  border: `1.5px solid ${project.bgColor === '#0A0A0A' ? 'rgba(245,240,232,0.3)' : 'rgba(10,10,10,0.3)'}`,
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {project.statusBadge && (
            <span
              className="font-grotesk font-black text-xs uppercase tracking-wider px-3 py-1 border-2 border-black flex items-center gap-1.5"
              style={{
                background: project.id === 'petzi' ? '#C8F135' : '#FF5C00',
                color: project.id === 'petzi' ? '#0A0A0A' : '#FFFFFF',
              }}
            >
              <span className="w-2 h-2 rounded-full bg-current animate-pulse inline-block" />
              {project.statusBadge}
            </span>
          )}
        </div>

        <div className="flex items-start justify-between gap-4">
          <h3 className="font-grotesk font-black text-3xl md:text-4xl lg:text-5xl tracking-tighter">
            {project.title}
          </h3>
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 p-2 flex-shrink-0 mt-1 hover:scale-110 transition-transform"
              style={{
                border: `2px solid ${project.bgColor === '#0A0A0A' ? '#F5F0E8' : '#0A0A0A'}`,
                background: project.accentColor,
                color: '#0A0A0A',
              }}
              title="Open Live Site"
            >
              <ArrowUpRight size={20} />
            </a>
          ) : (
            <div
              className="border-2 p-2 flex-shrink-0 mt-1"
              style={{
                border: `2px solid ${project.bgColor === '#0A0A0A' ? '#F5F0E8' : '#0A0A0A'}`,
                background: project.accentColor,
                color: '#0A0A0A',
              }}
            >
              <ArrowUpRight size={20} />
            </div>
          )}
        </div>

        <div className="mt-3 font-grotesk font-semibold text-sm opacity-70 uppercase tracking-widest">
          {project.role}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 md:p-8 border-t-2 border-black bg-cream">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <div className="font-grotesk font-black text-xs uppercase tracking-widest mb-2 opacity-40">
              The Challenge
            </div>
            <p className="font-inter text-sm text-black/70 leading-relaxed">{project.problem}</p>
          </div>
          <div>
            <div className="font-grotesk font-black text-xs uppercase tracking-widest mb-2 opacity-40">
              Deliverables
            </div>
            <ul className="space-y-1.5">
              {project.deliverables.slice(0, 4).map((d) => (
                <li key={d} className="font-inter text-sm text-black/70 flex items-start gap-2">
                  <span className="text-orange font-black mt-0.5">→</span>
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {isFeatured && (
          <div className="mt-6 border-t-2 border-black/10 pt-6">
            <div className="font-grotesk font-black text-xs uppercase tracking-widest mb-2 opacity-40">
              My Approach
            </div>
            <p className="font-inter text-sm text-black/70 leading-relaxed">{project.approach}</p>
          </div>
        )}

        <div
          className="mt-6 p-4 border-2 border-black"
          style={{ background: project.accentColor }}
        >
          <div className="font-grotesk font-black text-xs uppercase tracking-widest mb-1">
            Result / Impact
          </div>
          <p className="font-inter text-sm font-medium">{project.result}</p>
        </div>

        {project.liveUrl && (
          <div className="mt-5 pt-3 border-t border-black/10 flex items-center justify-between">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-grotesk font-black text-xs uppercase tracking-wider bg-black text-cream px-4 py-2 border-2 border-black shadow-brutal-sm hover:-translate-y-0.5 transition-transform"
            >
              Visit Live Experience <ExternalLink size={14} />
            </a>
            <span className="font-grotesk text-xs opacity-50 uppercase tracking-widest">
              {project.liveUrl.replace('https://', '')}
            </span>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filtered =
    activeCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="work" className="bg-cream py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="section-label mb-4">Selected Work</div>
            <h2 className="font-grotesk font-black text-5xl md:text-6xl lg:text-7xl tracking-tighter">
              What I've{' '}
              <span className="text-stroke">Built.</span>
            </h2>
          </div>
          <p className="font-inter text-black/60 max-w-sm text-sm">
            Live platforms, high-stakes event portals, and active omnichannel brand management. Real systems with tangible outcomes.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`font-grotesk font-bold text-xs uppercase tracking-widest border-2 border-black px-4 py-2 transition-all ${
                activeCategory === cat.id
                  ? 'bg-black text-cream shadow-brutal-sm'
                  : 'bg-cream hover:bg-lime'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <motion.div layout className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
