import React, { memo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

const AnimatedImage = memo(function AnimatedImage({ src }) {
  const MotionImage = motion.create(Image);
  return (
    <AnimatePresence mode="wait">
      <MotionImage
        className="absolute -top-2 w-2xl left-1/2 -translate-x-1/2 aspect-auto"
        src={src}
        style={{ transform: "translate(110px)" }}
        width="1024"
        height="1536"
        alt="models picture"
        sizes="calc(100vw * 0.9993)"
        priority={true}
        initial={{ transform: "translateZ(110px)" }}
        animate={{ transform: "translateZ(0px)" }}
        exit={{ opacity: 0 }}
        transition={{
          ease: [0.25, 0.46, 0.45, 0.94],
          duration: 1,
        }}
      />
    </AnimatePresence>
  );
});
// const AnimatedImage = memo(AnimatedImage(src),[src]);

export default AnimatedImage;
