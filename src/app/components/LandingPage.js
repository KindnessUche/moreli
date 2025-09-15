import Image from "next/image";
import { useState, useRef, useEffect, memo } from "react";
import {
  motion,
  AnimatePresence,
  useTransform,
  useScroll,
} from "framer-motion";
import CategoryTabs from "./categoryTabs";
import AnimatedLine from "./animatedLine";
import AnimatedImage from "./AnimatedImage";

export default function LandingPage({ loading }) {
  const MotionImage = motion.create(Image);
  const [clickScale, setClickScale] = useState(false);
  const targetRef = useRef(null);
  const inViewRef = useRef(null);
  const [imgIndex, setImgIndex] = useState(0);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end end"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1.5, 1]);

  const changeScale = () => {
    setClickScale((prev) => !prev);
  };
  const imageChanger = (ind) => {
    setImgIndex(ind);
  };

  useEffect(() => {
    tabs.forEach((url) => {
      const img = new window.Image();
      img.src = url;
    });
  }, []);

  return (
    <motion.div
      className={` ${loading ? "opacity-0" : "opacity-100"} bg-[#0a0a0a]`}
    >
      ,
      <motion.section
        className="px-1 md:px-2 lg:px-2.5 bg-amber-300"
        initial={{ clipPath: "inset(50% 0 50% 0)", transform: "scale(1.1)" }} // closed
        animate={{
          clipPath: loading ? "inset(50% 0 50% 0)" : "inset(0 0 0 0)", // open
          transform: loading ? "scale(1.17)" : "scale(1)", // open
        }}
        transition={{
          duration: 0.6,
          delay: -0.05,
          ease: "easeOut",
        }}
      >
        <div className=" relative h-screen py-4 perspective-normal">
          <motion.h1
            className="text-[clamp(8rem,41.4vw,40rem)] text-white overflow-clip font-[bebas_neue] font-bold tracking-wide leading-[clamp(1rem,35vw,38rem)]"
            animate={{
              transform: clickScale ? "translateZ(-40px)" : "translateZ(0px)",
            }}
            transition={{
              ease: [0.25, 0.46, 0.45, 0.94],
              duration: 0.8,
            }}
          >
            MORELI
          </motion.h1>

          <AnimatedImage src={tabs[imgIndex]} />

          <motion.p
            className="w-56 px-1.5 md:w-60 relative top-48 md:top-0 font-extrabold tracking-normal text-[28px]  font-[roboto_condensed] leading-8"
            animate={{
              transform: clickScale ? "translateZ(-40px)" : "translateZ(0px)",
            }}
            transition={{ ease: [0.25, 0.46, 0.45, 0.94], duration: 0.8 }}
          >
            Models you remember. Faces you can't unsee.
          </motion.p>
          <div className="w-screen flex justify-center">
            <AnimatePresence>
              {clickScale && (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0, filter: "blur(8px)" }}
                  transition={{
                    ease: [0.25, 0.46, 0.45, 0.94],
                    duration: 0.4,
                  }}
                  className="absolute top-36 sm:top-56 md:top-0 w-xs sm:w-sm md:w-2xl rounded-xl md:rounded-b-2xl p-2 md:p-4 px-2 md:px-8 font-[bebas_neue] 
                       bg-black/20 backdrop-blur-xl md:shadow-xl border border-white/20 origin-bottom"
                >
                  <div className="flex ">
                    <h2 className="mr-auto text-4xl md:text-5xl leading-12 md:leading-14">
                      MORELI
                    </h2>
                    <div className="hidden md:block font-sans text-right font-[700] text-[18px] leading-5 max-w-60">
                      <AnimatedLine
                        className="flex flex-wrap max-w-2xl"
                        text="Models you remember. Faces you can't unsee."
                      />
                    </div>
                  </div>
                  <div className="mt-6 md:mt-9 text-2xl md:text-4xl lg:text-[40px] leading-11 md:leading-13">
                    <div className=" py-2 md:py-4 border-b-1 border-b-white/25 text-left ">
                      <a className="flex gap-3 items-center w-full cursor-pointer">
                        <Image
                          src="https://framerusercontent.com/images/VzRTSZzi6go0t0o3x94rJO8IuY.png"
                          width="372"
                          height="376"
                          loading="lazy"
                          blurDataURL="https://framerusercontent.com/images/VzRTSZzi6go0t0o3x94rJO8IuY.png"
                          placeholder="blur"
                          alt="home page"
                          className="rounded-full h-16 w-16 md:h-24 inline-block md:w-24 "
                        />
                        <motion.p
                          className="block"
                          initial={{
                            x: "15px",
                            y: "35px",
                            opacity: 0,
                            scale: 0.8,
                          }}
                          whileInView={{
                            x: "0px",
                            y: "0px",
                            opacity: 1,
                            scale: 1,
                          }}
                          transition={{ duration: 0.6, delay: -0.1 }}
                        >
                          Home Page
                        </motion.p>
                      </a>
                    </div>
                    <div className="flex gap-3 items-center border-b-1 border-b-white/25 text-left py-2 md:py-4">
                      <a className="flex gap-3 items-center w-full cursor-pointer">
                        <Image
                          src="https://framerusercontent.com/images/hNatiCIKw4Wb0wNi48XM4dP58.png"
                          width="372"
                          height="376"
                          alt="home page"
                          loading="lazy"
                          blurDataURL="https://framerusercontent.com/images/hNatiCIKw4Wb0wNi48XM4dP58.png"
                          placeholder="blur"
                          className="rounded-full h-16 w-16 md:h-24 inline-block md:w-24 "
                        />
                        <motion.p
                          className="block"
                          initial={{
                            x: "15px",
                            y: "35px",
                            opacity: 0,
                            scale: 0.8,
                          }}
                          whileInView={{
                            x: "0px",
                            y: "0px",
                            opacity: 1,
                            scale: 1,
                          }}
                          transition={{ duration: 0.6, delay: 0 }}
                        >
                          MODELS
                        </motion.p>
                      </a>
                    </div>
                    <div className="flex gap-3 items-center md:border-b-1 border-b-white/25 text-left py-2 md:py-4">
                      <a className="flex gap-3 items-center w-full cursor-pointer">
                        <Image
                          src="https://framerusercontent.com/images/oZ7ORfx3RNm8NOavgO4vLcJIbFc.png"
                          width="372"
                          height="376"
                          alt="home page"
                          loading="lazy"
                          blurDataURL="https://framerusercontent.com/images/oZ7ORfx3RNm8NOavgO4vLcJIbFc.png"
                          placeholder="blur"
                          className="rounded-full h-16 w-16 md:h-24 inline-block md:w-24"
                        />
                        <motion.p
                          className="block"
                          initial={{
                            x: "15px",
                            y: "35px",
                            opacity: 0,
                            scale: 0.8,
                          }}
                          whileInView={{
                            x: "0px",
                            y: "0px",
                            opacity: 1,
                            scale: 1,
                          }}
                          transition={{ duration: 0.6, delay: 0.1 }}
                        >
                          CONTACT US
                        </motion.p>
                      </a>
                    </div>
                  </div>
                  <div className="hidden md:flex flex-col gap-3 font-sans mt-10 text-[16px] leading-[19px] font-[700]">
                    {links.map((link, i) => (
                      <motion.a
                        className="hover:underline cursor-pointer"
                        initial={{ opacity: 0 }}
                        animate={{
                          opacity: 1,
                          transition: {
                            duration: 0.7,
                            delay: i * 0.1 + 0.2,
                          },
                        }}
                        key={i}
                      >
                        {link}
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <CategoryTabs
            onScaleChange={changeScale}
            imageChanger={imageChanger}
          ></CategoryTabs>
        </div>
      </motion.section>
      <section className="relative z-10 p-4 pb-10 bg-[var(--background)] ">
        <div>
          <AnimatedLine
            className="text-3xl md:text-[43px] lg:text-[54px] leading-9 md:leading-12 lg:leading-16 font-bold tracking-tighter"
            text="What we put on camera has weight. Yet faces with lived experience
            are still overlooked. We exists to change that. We represent bold
            faces with white hair, albinism, and striking contrast. Not
            trends—truth."
          />
        </div>
        <div className="w-fit flex flex-col md:flex-row md:ml-auto gap-10 md:gap-20 my-12 lg:my-20 text-[15px] leading-6">
          <AnimatedLine
            className="max-w-xs"
            text="We’re here to redefine casting. Our models are chosen for who they are, not how well they fit in."
          />
          <AnimatedLine
            className="max-w-sm"
            text="Our white hair campaign casts models with presence. Real people. No retouching. No sameness."
          />
        </div>
      </section>
      <section
        ref={inViewRef}
        className=" bg-[#1d1d1d] px-2 md:pl-4 overflow-hidden font-sans font-bold "
      >
        <div className=" leading-[clamp(100px,26vw,500px)] text-[#242424] text-[clamp(100px,29vw,500px)] font-[bebas_neue] font-extrabold">
          {"OUR STORY".split("").map((letter, i) => {
            return (
              <motion.span
                key={i}
                className="relative"
                initial={{ opacity: 0, y: "-100%" }}
                whileInView={{ opacity: 1, y: "0%" }}
                transition={{
                  duration: 1,
                  delay: (i + 1) * 0.1,
                }}
              >
                {letter}
              </motion.span>
            );
          })}
        </div>
        <div className="max-w-[40rem] text-2xl leading-7 px-1 flex flex-col gap-7">
          <AnimatedLine
            text="It started after a casting director told us, “Too white isn’t
            marketable.” He meant a model with albinism. She was 6’1”, magnetic,
            and walked like a storm. We walked out."
          />
          <AnimatedLine text="That same night, we bought a domain, scribbled “MOBELI” on a napkin, and messaged every person we knew with white hair, bleached lashes, or a face that had ever been called “unusual.”" />
        </div>
        <div className="max-w-[40rem] ml-auto mt-14 mb-10 text-2xl leading-7 px-1 flex flex-col gap-7">
          <AnimatedLine text="Our first shoot? In an abandoned meat locker in Queens. No heater. One outlet. We painted the floor with bleach, styled models in black turtlenecks, and played Björk at full volume." />
          <AnimatedLine
            text="We’re not here for balance. MOBELI exists to overcorrect. To shove open the door. To make the room colder, sharper, louder—until
            there’s no going back."
          />
        </div>
      </section>
      <section className="relative ">
        <motion.div ref={targetRef} className="overflow-clip">
          <motion.div
            className="w-screen h-[80vh] sm:h-[100vh] md:h-[1200px] relative"
            style={{ scale }}
          >
            <Image
              src="https://framerusercontent.com/images/5HsaORxfrYPA77bBfEJYtmI5ZIY.png"
              // width="1024"
              // height="1536"
              sizes="100vw"
              fill
              loading="lazy"
              blurDataURL="https://framerusercontent.com/images/5HsaORxfrYPA77bBfEJYtmI5ZIY.png"
              placeholder="blur"
              alt="Models group photo"
              className="w-full h-full object-fill md:object-cover "
            />
          </motion.div>
        </motion.div>
      </section>
      <section className="p-5 pr-7 bg-black">
        <div className=" flex flex-col md:flex-row">
          <h3 className="mr-auto mb-8 md:mb-0 text-2xl leading-7 font-bold w-[242px]">
            We’re here to stain your visual memory.{" "}
          </h3>
          <p className="w-[360px] text-[15px] leading-6">
            White hair. Black clothes. Loud contrast. We’re not for everyone.
            We’re for those who never saw themselves until now.
          </p>
        </div>
      </section>
      <section className="bg-white p-5 pb-0 text-[#0A0A0A] font-sans text-2xl leading-7 font-bold">
        <div className="flex flex-col md:flex-row">
          <AnimatedLine
            className="mr-auto w-52 "
            text="Real features. Raw contrast. "
          />
          <div className="mr-auto w-52 "></div>
          <div className="flex gap-12 mt-8 md:mt-0">
            <AnimatedLine
              className=" w-36 md:text-right"
              text="HOME MODELS CONTACT"
            />
            <AnimatedLine
              className=" text-right md:text-left ml-auto md:ml-0 w-36"
              text="TWITTER FACEBOOK INSTAGRAM"
            />
          </div>
        </div>
        <div className="relative bottom-0 flex mt-20 justify-center items-center overflow-clip flex-1">
          <h1 className="text-[40vw] tracking-wide font-[bebas_neue] leadi leading-[0.85] font-extrabold">
            MORELI
          </h1>
        </div>
      </section>
    </motion.div>
  );
}

const links = ["INSTAGRAM", "FACEBOOK", "X (PREV.TWITTER)"];
const tabs = [
  "https://framerusercontent.com/images/QFnOpzykCdcCKqVFHe8fS1FMQ4.png",
  "https://framerusercontent.com/images/GxcuKsKfOfxhzY0rIdyiOwWgdg.png",
  "https://framerusercontent.com/images/SVbDtkZjBicaeOLMg2HyVVo9Xg.png",
];
