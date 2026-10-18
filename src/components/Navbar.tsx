import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-cream/95 border-b-2 border-black backdrop-blur-sm shadow-sm' : 'bg-transparent'
        }`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-3 group text-left"
            >
              <div className="font-grotesk font-black text-xl tracking-tighter border-2 border-black px-3 py-1 bg-black text-cream shadow-brutal-sm group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                RT<span className="text-lime">.</span>
              </div>
              <div className="hidden sm:block">
                <span className="font-grotesk font-extrabold text-xs tracking-wider uppercase block text-black">
                  Rakshit Tiwari
                </span>
                <span className="font-inter text-[10px] tracking-widest uppercase text-black/50 block">
                  Growth × Code × Design
                </span>
              </div>
            </button>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className="font-grotesk font-bold text-xs tracking-widest uppercase hover:text-orange transition-colors relative group py-1"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange transition-all group-hover:w-full" />
                </button>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="mailto:typicallyrakshit@gmail.com"
                className="font-grotesk font-bold text-xs uppercase tracking-wider text-black/60 hover:text-black hover:underline"
              >
                typicallyrakshit@gmail.com
              </a>
              <button
                onClick={() => handleNav('#contact')}
                className="brutal-btn text-xs py-2.5 px-5 shadow-brutal-sm"
              >
                Let's Talk
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden border-2 border-black p-2 bg-cream shadow-brutal-sm"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-cream flex flex-col pt-24 px-6 overflow-y-auto"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="flex flex-col gap-6 pt-4 pb-12">
              <div className="border-b-2 border-black pb-4 mb-2">
                <span className="font-grotesk font-black text-2xl uppercase tracking-tight block">
                  Rakshit Tiwari
                </span>
                <span className="font-inter text-xs text-black/60">
                  typicallyrakshit@gmail.com
                </span>
              </div>

              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className="font-grotesk font-black text-4xl text-left uppercase tracking-tighter border-b-2 border-black/20 pb-3 hover:text-orange"
                  initial={{ x: 60, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.06 }}
                >
                  {link.label}
                </motion.button>
              ))}

              <div className="pt-4 flex flex-col gap-3">
                <motion.button
                  onClick={() => handleNav('#contact')}
                  className="brutal-btn text-center text-sm py-4"
                  initial={{ x: 60, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.35 }}
                >
                  Let's Build Something
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
