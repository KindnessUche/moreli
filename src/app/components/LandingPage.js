import Image from "next/image";
import { motion } from "framer-motion";

export default function LandingPage({ loading }) {
  return (
    <motion.div
      className={`px-1 md:px-2 lg:px-2.5  ${
        loading ? "opacity-0" : "opacity-100"
      }`}
      initial={{ clipPath: "inset(50% 0 50% 0)", transform: "scale(1.1)" }} // closed
      animate={{
        clipPath: loading ? "inset(50% 0 50% 0)" : "inset(0 0 0 0)", // open
        transform: loading ? "scale(1.1)" : "scale(1)", // open
      }}
      transition={{
        duration: 0.5,
        delay: -0.05,
        ease: "easeInOut",
      }}
    >
      <section className="">
        <div className="relative h-screen py-4 ">
          <h1 className="text-[clamp(8rem,41.4vw,40rem)] overflow-clip font-[bebas_neue] font-bold tracking-wide leading-[clamp(1rem,35vw,38rem)]">
            MORELI
          </h1>
          <Image
            className="absolute -top-2 w-2xl left-1/2 -translate-x-1/2 aspect-auto"
            src="https://framerusercontent.com/images/QFnOpzykCdcCKqVFHe8fS1FMQ4.png"
            width="1024"
            height="1536"
            priority
            // style={{
            //   clipPath: "inset(0 0 22% 0)",
            // }}
          ></Image>
          <p>Models you remember. Faces you can't unsee.</p>
        </div>
      </section>
    </motion.div>
  );
}
