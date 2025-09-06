"use client";

import { useEffect } from "react";
import { motion, useAnimate, useInView } from "framer-motion";
import SplitType from "split-type";

export default function AnimatedLine({
  text,
  className = "",
  duration = 0.4,
  delayStep = 0.1,
}) {
  const [scopeRef, animate] = useAnimate();
  const isInView = useInView(scopeRef, {
    once: true,
    margin: "-20% 0px -20% 0px",
  });

  useEffect(() => {
    if (!scopeRef.current) return;

    const split = new SplitType(scopeRef.current, { types: "lines" });
    split.lines.forEach((line) => {
      line.style.overflow = "hidden";
      line.style.display = "block";
    });
    if (isInView) {
      // Animate each line
      animate(
        split.lines,
        { y: ["100%", "0%"], opacity: [0, 1] },
        {
          duration: duration,
          delay: (i) => i * delayStep, // stagger by line index
          ease: "easeOut",
        }
      );
    }
    return () => split.revert();
  }, [isInView, animate]);

  return (
    <motion.h2
      ref={scopeRef}
      className={`split overflow-hidden ${
        isInView ? "opacity-100" : "opacity-0"
      } ${className}`}
    >
      {text}
    </motion.h2>
  );
}
