export const Footer = () => {
  return (
    <footer className="bg-black border-t-2 border-white/20 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="font-grotesk font-black text-cream text-2xl tracking-tighter">
              RT<span className="text-lime">.</span>
            </div>
            <div className="border-l border-white/20 pl-4">
              <span className="font-grotesk font-bold text-xs uppercase tracking-wider text-cream block">
                Rakshit Tiwari
              </span>
              <span className="font-inter text-xs text-white/40 block">
                Marketing Strategy × Creative Direction × Web Engineering
              </span>
            </div>
          </div>

          <div className="flex items-center gap-6 text-xs font-grotesk uppercase tracking-wider text-white/50">
            <a
              href="https://github.com/typicallyrakshit-sys/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-lime transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/rakshit-tiwari-ab468935b/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-lime transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:typicallyrakshit@gmail.com"
              className="hover:text-lime transition-colors"
            >
              Email
            </a>
          </div>

          <div className="flex items-center gap-6">
            <div className="font-inter text-white/30 text-xs">
              © {new Date().getFullYear()} · Neo-brutalist Creative Studio
            </div>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="font-grotesk font-bold text-xs uppercase tracking-widest text-lime hover:underline flex items-center gap-1"
            >
              Back to Top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
