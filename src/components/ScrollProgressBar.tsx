import React from 'react';
import { motion, useScroll, useSpring } from 'motion/react';

export const ScrollProgressBar: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#C29A6B] via-[#F4E9DC] to-[#C29A6B] origin-left z-50 pointer-events-none shadow-[0_0_10px_rgba(194,154,107,0.65)]"
      aria-hidden="true"
    />
  );
};
