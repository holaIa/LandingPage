"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

interface AntigravityProps {
  children: ReactNode;
  parallaxSpeed?: number; // 0.1 to 0.3
  className?: string;
  delayIndex?: number; 
}

export const Antigravity = ({
  children,
  parallaxSpeed = 0.2, 
  className = "",
  delayIndex = 0,
}: AntigravityProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Base range for parallax effect
  const yParallax = useTransform(scrollYProgress, [0, 1], [150 * parallaxSpeed, -150 * parallaxSpeed]);

  // Deterministic pseudo-random generation to avoid hydration mismatch
  const pseudoRandom = (seed: number) => {
    const x = Math.sin(seed + 1) * 10000;
    return x - Math.floor(x);
  };
  
  const yRange = pseudoRandom(delayIndex * 1.1 + 1) * 10 + 15; // 15 to 25px
  const duration = pseudoRandom(delayIndex * 1.2 + 2) * 2 + 3; // 3 to 5s
  const delay = -pseudoRandom(delayIndex * 1.3 + 3) * 5; // -0 to -5s
  const rotateDeg = (pseudoRandom(delayIndex * 1.4 + 4) * 1 + 2) * (pseudoRandom(delayIndex * 1.5 + 5) > 0.5 ? 1 : -1); // +/- 2 to 3 deg

  return (
    <motion.div
      ref={ref}
      style={{ y: yParallax, willChange: "transform" }}
      className={className}
    >
      <motion.div
        animate={{ y: [0, -yRange, 0] }}
        transition={{
          duration: duration,
          ease: "easeInOut",
          repeat: Infinity,
          delay: delay,
        }}
        whileHover={{
          scale: 1.05,
          rotate: rotateDeg,
        }}
        style={{ willChange: "transform" }}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </motion.div>
  );
};
