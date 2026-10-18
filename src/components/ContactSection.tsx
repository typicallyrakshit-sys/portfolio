import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, ArrowUpRight, Check } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24Z" />
  </svg>
);

const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z" />
  </svg>
);

const services = [
  'Website / Landing Page',
  'Digital Marketing',
  'Social Media & Content',
  'Creative Campaigns',
  'E-Commerce & Store Ops',
  'Marketing + Development',
];

const socialLinks = [
  {
    label: 'Email Direct',
    icon: Mail,
    href: 'mailto:typicallyrakshit@gmail.com',
    value: 'typicallyrakshit@gmail.com',
  },
  {
    label: 'LinkedIn',
    icon: LinkedinIcon,
    href: 'https://www.linkedin.com/in/rakshit-tiwari-ab468935b/',
    value: 'linkedin.com/in/rakshit-tiwari-ab468935b',
  },
  {
    label: 'GitHub',
    icon: GithubIcon,
    href: 'https://github.com/typicallyrakshit-sys/',
    value: 'github.com/typicallyrakshit-sys',
  },
];

interface FormData {
  name: string;
  email: string;
  company: string;
  brief: string;
  budget: string;
  services: string[];
}

export const ContactSection = () => {
  const { ref, isInView } = useScrollAnimation();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    brief: '',
    budget: '',
    services: [],
  });
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const toggleService = (service: string) => {
    setFormData((f) => ({
      ...f,
      services: f.services.includes(service)
        ? f.services.filter((s) => s !== service)
        : [...f.services, service],
    }));
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('typicallyrakshit@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    const subject = encodeURIComponent(
      `Project Inquiry: ${formData.company || formData.name || 'New Project'}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\nBudget: ${formData.budget}\nServices: ${formData.services.join(', ')}\n\nProject Brief:\n${formData.brief}`
    );

    window.open(`mailto:typicallyrakshit@gmail.com?subject=${subject}&body=${body}`, '_blank');
    setSubmitting(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-black py-24 border-t-2 border-white/20" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <div className="section-label mb-6 bg-lime text-black">Get In Touch</div>
          <h2 className="font-grotesk font-black text-5xl md:text-6xl lg:text-7xl tracking-tighter text-cream leading-none">
            Let's make your
            <br />
            next move{' '}
            <span className="text-lime">count.</span>
          </h2>
          <p className="font-inter text-white/60 mt-6 max-w-lg text-base">
            Have a project in mind, an e-commerce brand to scale, or need high-performance web development? Let's discuss scope, strategy, and execution.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Form */}
          <div className="lg:col-span-7">
            {submitted ? (
              <motion.div
                className="border-2 border-lime p-12 text-center bg-white/5"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <div className="font-grotesk font-black text-lime text-5xl mb-4">✓</div>
                <div className="font-grotesk font-black text-cream text-2xl mb-2">
                  Inquiry Prepared!
                </div>
                <p className="font-inter text-white/70 text-sm max-w-md mx-auto mb-6">
                  Your mail client has been opened with your project brief. You can also directly reach me anytime at <strong className="text-lime">typicallyrakshit@gmail.com</strong>.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="brutal-btn text-xs py-2 px-6"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-grotesk font-bold text-xs uppercase tracking-widest text-white/60 mb-2 block">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData((f) => ({ ...f, name: e.target.value }))}
                      className="w-full bg-white/5 border-2 border-white/20 text-cream font-inter px-4 py-3 focus:border-lime outline-none transition-colors"
                      placeholder="e.g. Alex Sharma"
                    />
                  </div>
                  <div>
                    <label className="font-grotesk font-bold text-xs uppercase tracking-widest text-white/60 mb-2 block">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData((f) => ({ ...f, email: e.target.value }))}
                      className="w-full bg-white/5 border-2 border-white/20 text-cream font-inter px-4 py-3 focus:border-lime outline-none transition-colors"
                      placeholder="alex@brand.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-grotesk font-bold text-xs uppercase tracking-widest text-white/60 mb-2 block">
                      Company / Brand Name
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData((f) => ({ ...f, company: e.target.value }))}
                      className="w-full bg-white/5 border-2 border-white/20 text-cream font-inter px-4 py-3 focus:border-lime outline-none transition-colors"
                      placeholder="e.g. Petzi / Startup"
                    />
                  </div>
                  <div>
                    <label className="font-grotesk font-bold text-xs uppercase tracking-widest text-white/60 mb-2 block">
                      Estimated Budget Range
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData((f) => ({ ...f, budget: e.target.value }))}
                      className="w-full bg-black border-2 border-white/20 text-cream font-inter px-4 py-3 focus:border-lime outline-none transition-colors"
                    >
                      <option value="">Select an investment tier</option>
                      <option>Under ₹25,000</option>
                      <option>₹25,000 – ₹75,000</option>
                      <option>₹75,000 – ₹1,50,000</option>
                      <option>₹1,50,000+</option>
                      <option>Retainer / Ongoing Collaboration</option>
                    </select>
                  </div>
                </div>

                {/* Service selection */}
                <div>
                  <label className="font-grotesk font-bold text-xs uppercase tracking-widest text-white/60 mb-3 block">
                    What capabilities do you need? (Select all that apply)
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {services.map((service) => (
                      <button
                        key={service}
                        type="button"
                        onClick={() => toggleService(service)}
                        className={`font-grotesk font-bold text-xs uppercase tracking-wider border-2 px-3 py-2 transition-all ${
                          formData.services.includes(service)
                            ? 'bg-lime border-lime text-black shadow-brutal-sm'
                            : 'border-white/20 text-white/60 hover:border-white/50 bg-white/5'
                        }`}
                      >
                        {formData.services.includes(service) ? '✓ ' : '+ '}
                        {service}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="font-grotesk font-bold text-xs uppercase tracking-widest text-white/60 mb-2 block">
                    Project Brief & Objectives
                  </label>
                  <textarea
                    value={formData.brief}
                    onChange={(e) => setFormData((f) => ({ ...f, brief: e.target.value }))}
                    className="w-full bg-white/5 border-2 border-white/20 text-cream font-inter px-4 py-3 focus:border-lime outline-none transition-colors resize-none"
                    rows={4}
                    placeholder="Briefly describe what you're building, target timeline, and specific outcomes you want to achieve..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="brutal-btn flex items-center gap-3 w-full justify-center text-sm py-4 shadow-brutal-lime cursor-pointer"
                >
                  {submitting ? 'Connecting...' : "Send Project Inquiry"}
                  <Send size={16} />
                </button>
              </form>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-5">
            <div className="space-y-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between border-2 border-white/20 p-5 hover:border-lime hover:bg-white/5 transition-all group bg-white/[0.02]"
                  >
                    <div className="flex items-center gap-4">
                      <Icon
                        className="text-white/40 group-hover:text-lime transition-colors"
                      />
                      <div>
                        <div className="font-grotesk font-bold text-xs uppercase tracking-widest text-white/40 mb-0.5">
                          {link.label}
                        </div>
                        <div className="font-inter text-cream text-sm font-medium">
                          {link.value}
                        </div>
                      </div>
                    </div>
                    <ArrowUpRight
                      size={18}
                      className="text-white/20 group-hover:text-lime transition-colors"
                    />
                  </a>
                );
              })}

              {/* Direct email click-to-copy */}
              <div className="border-2 border-white/20 p-5 bg-white/[0.02] flex items-center justify-between">
                <div>
                  <div className="font-grotesk font-bold text-xs uppercase tracking-widest text-white/40 mb-0.5">
                    Fast Contact
                  </div>
                  <div className="font-mono text-sm text-lime">typicallyrakshit@gmail.com</div>
                </div>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="font-grotesk font-bold text-xs uppercase px-3 py-1.5 border border-white/30 text-white hover:bg-white/10 transition-colors flex items-center gap-1.5"
                >
                  {copied ? <Check size={14} className="text-lime" /> : null}
                  {copied ? 'Copied' : 'Copy'}
                </button>
              </div>

              {/* What to expect */}
              <div className="border-2 border-white/10 p-6 mt-6 bg-white/[0.01]">
                <div className="font-grotesk font-black text-xs uppercase tracking-widest text-lime mb-4 flex items-center gap-2">
                  <span>✦</span> What to expect
                </div>
                <div className="space-y-3">
                  {[
                    'Direct communication with Rakshit — no account manager filters',
                    '24-hour turnaround on initial project evaluations',
                    'Strategic breakdown before discussing line-item execution',
                    'Cross-disciplinary execution covering marketing, branding, & dev',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <span className="text-lime font-black mt-0.5">→</span>
                      <span className="font-inter text-sm text-white/70">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
