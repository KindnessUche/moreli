"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, stagger, useAnimate } from "framer-motion";

export default function Overlay() {
  const [centered, setCentered] = useState(false);
  const [scope, animate] = useAnimate();
  useEffect(() => {
    async function runLoadAnimation() {
      const liDown = scope.current.querySelectorAll(".liDown");
      //Step 1 which is the first reveal
      await animate(
        scope.current,
        { opacity: 1, clipPath: "inset(0 0 0 0)" },
        { duration: 0.2 }
      );
      //Step 2 Stagger animation
      await Promise.all([
        animate(
          ".liUp",
          { opacity: 0, y: "-150%" },
          {
            delay: stagger(0.13, { startDelay: 0.05 }),
            type: "spring",
            damping: 17,
            mass: 2,
            // bounce: 0.45,
            stiffness: 180,
            duration: 1.5,
          }
        ),
        animate(
          ".liDown",
          { opacity: 1, y: "0%" },
          {
            delay: stagger(0.13),
            type: "spring",
            damping: 17,
            mass: 1.5,
            // bounce: 0.45,
            stiffness: 180,
            duration: 2,
          }
        ),
      ]);
      // Step 3 letters animation
      setCentered(true);
      // Step 4 Closing Scene
      const closeTimeout = setTimeout(async () => {
        await animate(
          scope.current,
          { opacity: 1, clipPath: "inset(50% 0 50% 0)" },
          { duration: 0.27 }
        );
      }, 1100);
      return () => {
        clearTimeout(closeTimeout);
      };
    }
    runLoadAnimation();
  }, []);

  return (
    <div className="absolute w-screen h-screen font-[anton_sc] font-bold text-[100px] md:text-[180px] lg:text-[220px] overflow-hidden">
      <div
        ref={scope}
        style={{ clipPath: "inset(50% 0 50% 0)", opacity: 0 }}
        className="flex justify-center relative top-1/2 -translate-y-1/2 leading-none scale-[]"
      >
        {" "}
        <AnimatePresence>
          <motion.ul className="absolute top-0 flex justify-center items-center">
            {logo[0].split("").map((letter, i) => (
              <motion.li
                className="inline-block liUp"
                style={{ opacity: 1, y: "0%" }}
                key={`${i}-up`}
              >
                {letter}
              </motion.li>
            ))}
          </motion.ul>
        </AnimatePresence>
        <ul className="flex justify-center items-center">
          <AnimatePresence>
            {logo[0].split("").map((letter, i) =>
              i == 0 || i == logo[0].split("").length - 1 ? (
                <motion.li
                  className={`inline-block liDown liDown-${i}`}
                  style={{ opacity: 0, y: "150%" }}
                  key={`${i}-down`}
                  layout
                >
                  {letter}
                </motion.li>
              ) : (
                centered == false && (
                  <motion.li
                    className="inline-block liDown"
                    style={{ opacity: 0, y: "150%" }}
                    exit={{ opacity: 0, transition: { duration: 0.4 } }}
                    key={`${i}-down`}
                    // layout
                  >
                    {letter}
                  </motion.li>
                )
              )
            )}
          </AnimatePresence>
        </ul>
      </div>
    </div>
  );
}

const logo = ["MORELI"];
