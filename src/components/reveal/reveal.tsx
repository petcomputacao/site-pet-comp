import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface Props {
  children: React.ReactNode; 
  width?: "fit-content" | "100%";
  delay?: number;
  duration?: number;
  yOffset?: number;
}

export const Reveal = ({ 
  children, 
  width = "fit-content", 
  delay = 0.1,
  duration = 0.6,
  yOffset = 30
}: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true,
    // threshold: 0.1
  });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <motion.div
      ref={ref}
      style={{ width }}
      variants={{
        hidden: { 
          opacity: 0, 
          y: yOffset,
          scale: 0.98
        },
        visible: { 
          opacity: 1, 
          y: 0,
          scale: 1
        }
      }}
      initial="hidden"
      animate={controls}
      transition={{ 
        duration: duration,
        delay: delay,
        ease: [0.25, 0.46, 0.45, 0.94], // easing suave
        scale: {
          type: "spring",
          damping: 15,
          stiffness: 300
        }
      }}
    >
      {children}
    </motion.div>
  );
};
