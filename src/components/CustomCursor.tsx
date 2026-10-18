import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    if ('ontouchstart' in window) {
      setIsTouch(true);
      return;
    }

    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });

    const addHover = () => {
      document.querySelectorAll('a, button, [data-cursor-hover]').forEach((el) => {
        el.addEventListener('mouseenter', () => setIsHovering(true));
        el.addEventListener('mouseleave', () => setIsHovering(false));
      });
    };

    window.addEventListener('mousemove', move);
    addHover();

    return () => window.removeEventListener('mousemove', move);
  }, []);

  if (isTouch) return null;

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference"
        animate={{ x: pos.x - 6, y: pos.y - 6 }}
        transition={{ type: 'spring', stiffness: 500, damping: 28, mass: 0.5 }}
      >
        <div
          className="w-3 h-3 bg-white rounded-full"
          style={{ transform: isHovering ? 'scale(0)' : 'scale(1)', transition: 'transform 0.2s' }}
        />
      </motion.div>
      {/* Follower ring */}
      <motion.div
        className="fixed top-0 left-0 z-[9998] pointer-events-none"
        animate={{ x: pos.x - (isHovering ? 24 : 16), y: pos.y - (isHovering ? 24 : 16) }}
        transition={{ type: 'spring', stiffness: 150, damping: 20, mass: 0.8 }}
      >
        <div
          style={{
            width: isHovering ? '48px' : '32px',
            height: isHovering ? '48px' : '32px',
            border: '2px solid #0A0A0A',
            borderRadius: isHovering ? '0' : '50%',
            background: isHovering ? 'rgba(200,241,53,0.3)' : 'transparent',
            transition: 'all 0.3s cubic-bezier(0.23, 1, 0.32, 1)',
          }}
        />
      </motion.div>
    </>
  );
};
