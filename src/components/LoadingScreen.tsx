import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((c) => {
        if (c >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 400);
          return 100;
        }
        return Math.min(c + Math.floor(Math.random() * 18) + 5, 100);
      });
    }, 60);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[10000] bg-black flex flex-col items-center justify-center px-4"
      exit={{ y: '-100%' }}
      transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className="text-center">
        <div className="text-cream font-grotesk font-black text-7xl md:text-9xl tracking-tighter mb-4">
          RT<span className="text-lime">.</span>
        </div>
        <div className="font-grotesk font-bold text-xs uppercase tracking-widest text-white/50 mb-8">
          RAKSHIT TIWARI — PORTFOLIO 2026
        </div>
        <div className="w-64 max-w-full mx-auto h-1.5 bg-white/20 mb-4 border border-black overflow-hidden">
          <motion.div
            className="h-full bg-lime"
            animate={{ width: `${Math.min(count, 100)}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>
        <div className="text-white/40 font-grotesk text-xs tracking-widest">
          SYSTEM INITIALIZING {Math.min(count, 100)}%
        </div>
      </div>
    </motion.div>
  );
};
