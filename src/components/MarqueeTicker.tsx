const words = ['STRATEGY', 'DESIGN', 'CONTENT', 'CODE', 'CONVERSION', 'GROWTH', 'BRAND', 'IMPACT'];

export const MarqueeTicker = ({ dark = false }: { dark?: boolean }) => {
  return (
    <div
      className={`overflow-hidden border-y-2 border-black py-3 ${
        dark ? 'bg-black' : 'bg-lime'
      }`}
    >
      <div className="marquee-track">
        {[...words, ...words].map((word, i) => (
          <span
            key={i}
            className={`font-grotesk font-black text-sm md:text-base tracking-widest uppercase mr-8 ${
              dark ? 'text-lime' : 'text-black'
            }`}
          >
            {word}
            <span className="mx-4 opacity-40">×</span>
          </span>
        ))}
      </div>
    </div>
  );
};
