import { useState, useEffect } from "react";
import { motion, useAnimate } from "framer-motion";
import { PiPlusBold } from "react-icons/pi";

export default function CategoryTabs({ onScaleChange, imageChanger }) {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [open, setOpen] = useState(false);

  const [scope, animate] = useAnimate();
  useEffect(() => {
    if (open) {
      animate(
        scope.current,
        {
          transform: "rotate(45deg)",
        },
        {
          duration: 0.2,
        }
      );
    } else {
      animate(
        scope.current,
        {
          transform: "rotate(0deg)",
        },
        {
          duration: 0.2,
        }
      );
    }
  }, [open]);

  return (
    <div className="absolute left-1/2 -translate-x-1/2 top-[500px] md:top-auto md:bottom-16 flex items-center gap-2 bg-neutral-900 rounded-full p-3 w-fit">
      {tabs.map((tab) => (
        <button
          key={tab.src}
          onClick={() => {
            setActiveTab(tab);
            imageChanger(tab.src);
          }}
          className="relative px-4 py-2 rounded-full bg-neutral-800  text-black font-semibold text-sm shadow-sm transition cursor-pointer"
        >
          {activeTab == tab && (
            <motion.div
              layoutId="activeTab"
              className="absolute z-10 inset-0 bg-white rounded-full "
              animate={{ opacity: open ? 0 : 1, transition: { duration: 0.3 } }}
            />
          )}
          <motion.span
            className={`relative z-10 `}
            initial={{ color: "#737373" }}
            animate={{ color: activeTab === tab && !open ? "#000" : "#737373" }}
            transition={{ duration: 0.2 }}
          >
            {tab.name}
          </motion.span>
        </button>
      ))}

      {/* Plus Button */}
      <button
        className="flex items-center outline-none justify-center w-8 h-8 rounded-full bg-neutral-800 hover:bg-neutral-700 transition cursor-pointer"
        onClick={() => {
          setOpen(!open);
          onScaleChange();
        }}
      >
        <PiPlusBold ref={scope} className="w-5 h-5 text-white" />
      </button>
    </div>
  );
}

// const tabs = ["MORELI", "ANIMAN", "GERNIUI"];
const tabs = [
  {
    name: "MORELI",
    src: "https://framerusercontent.com/images/QFnOpzykCdcCKqVFHe8fS1FMQ4.png",
  },
  {
    name: "AMANDA",
    src: "https://framerusercontent.com/images/GxcuKsKfOfxhzY0rIdyiOwWgdg.png",
  },
  {
    name: "GERNIUI",
    src: "https://framerusercontent.com/images/SVbDtkZjBicaeOLMg2HyVVo9Xg.png",
  },
];
