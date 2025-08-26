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
      await animate(scope.current, { opacity: 1, clipPath: "inset(0 0 0 0)" });
      //Step 2 Stagger animation
      await Promise.all([
        animate(
          ".liUp",
          { opacity: 0, y: "-150%" },
          { delay: stagger(0.1), type: "spring", damping: 11, duration: 0.8 }
        ),
        animate(
          ".liDown",
          { opacity: 1, y: "0%" },
          { delay: stagger(0.1), type: "spring", damping: 11, duration: 0.8 }
        ),
      ]);
      // Step 3 letters animation
      // await liDown.forEach((el, index) => {
      //   if (index == 0) {
      //     animate(el, { opacity: 1, y: "0%" });
      //   } else if (index == liDown.length - 1) {
      //     animate(el, { opacity: 1, y: "0%" });
      //   } else {
      //     animate(el, { opacity: 0, y: "150%" });
      //   }
      // });
      setCentered(true);
      // await animate(`.liDown-0`, { opacity: 0 }, { delay: 0.4 });
    }
    runLoadAnimation();
  }, []);

  return (
    <div className="w-screen h-screen font-[anton_sc] font-bold text-[220px]  overflow-hidden">
      <div
        ref={scope}
        style={{ clipPath: "inset(50% 0 50% 0)", opacity: 0 }}
        className="flex justify-center relative top-1/2 -translate-y-1/2 leading-none "
      >
        <ul className="absolute top-0 left-1/2 -translate-x-1/2">
          {logo[0].split("").map((letter, i) => (
            <motion.li
              className="inline-block liUp"
              style={{ opacity: 1, y: "0%" }}
              key={`${i}-up`}
            >
              {letter}
            </motion.li>
          ))}
        </ul>
        <ul className="">
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
                !centered && (
                  <motion.li
                    className="inline-block liDown"
                    style={{ opacity: 0, y: "150%" }}
                    exit={{ opacity: 0, transition: { duration: 0.27 } }}
                    key={`${i}-down`}
                    layout
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

const logo = ["SINNERS"];
// const container = {
//   hidden: { clipPath: "inset(50% 0 50% 0)", opacity: 0 },
//   visible: {
//     clipPath: "inset(0 0 0 0)",
//     opacity: 1,
//     transition: { duration: 0.3 },
//   },
// };
// const wordContainer = {};
// const item1 = {
//   exit: { opacity: 0, y: "-150%" },
//   visible: { opacity: 1, y: "0%" },
// };
// const item2 = {
//   hidden: { opacity: 0, y: "150%" },
//   visible: { opacity: 1, y: "0%" },
// };
