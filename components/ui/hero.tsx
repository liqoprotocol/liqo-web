"use client";
import { motion, type Variants } from "framer-motion";
import { Button } from "./button";
import LiquidHeroBg from "./liquid-hero-bg";
import BG from "@/public/hero-bg.svg";


const headline = "Move money globally without the technical heavy lifting.";

const headlineContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.045, delayChildren: 0.25 },
  },
};

const word: Variants = {
  hidden: { opacity: 0, y: "0.5em", filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

const Hero = () => {
  return (
    <section className="relative min-h-screen">
      <LiquidHeroBg
        src={BG.src}
        className="hidden lg:block absolute inset-0 w-full h-full"
      />
      <LiquidHeroBg
        src="/hero-bg-mobile.svg"
        className="block lg:hidden absolute inset-0 w-full h-full"
      />
      <div
        className="lg:hidden absolute inset-0 pointer-events-none
                bg-[radial-gradient(ellipse_75%_50%_at_50%_48%,rgba(10,10,10,0.95)_0%,rgba(10,10,10,0.7)_55%,transparent_100%)]"
      />

      <div className="absolute top-0 left-0 w-full h-full px-4 flex items-center justify-center lg:px-20">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="w-full flex flex-col items-center justify-center text-center lg:w-3/5"
        >
          <motion.div
            variants={item}
            className="flex items-center justify-start gap-3 w-70 rounded-2xl bg-gray-600/20 py-2 px-4 mb-5 relative"
          >
            <span className="relative flex w-2 h-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-primary-dark opacity-75 animate-ping" />
              <span className="relative inline-flex w-2 h-2 rounded-full bg-primary-dark" />
            </span>
            <p className="text-xs font-medium text-white">
              New: Expanded global currency support
            </p>
          </motion.div>

          <motion.div className="w-full">
            <motion.p
              variants={headlineContainer}
              className="text-white text-2xl capitalize md:text-5xl md:px-10 lg:px-0 font-semibold"
              aria-label={headline}
            >
              {headline.split(" ").map((w, i) => (
                <motion.span
                  key={i}
                  variants={word}
                  aria-hidden="true"
                  className="inline-block will-change-transform"
                >
                  {w}
                  {i < headline.split(" ").length - 1 && "\u00A0"}
                </motion.span>
              ))}
            </motion.p>
            <motion.p
              variants={item}
              className="text-sm text-gray-400 md:text-xl md:px-10 lg:px-0 mt-4"
            >
              Expand your business globally without massive engineering effort
              to untangle local banking rules. We handle complexities behind
              the scenes for instant international settlements.
            </motion.p>

            <motion.div variants={item}>
              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 22 }}
                className="inline-block"
              >
                <Button className="bg-white mt-10 py-5 cursor-pointer px-4 text-black hover:bg-primary-dark/80 hover:text-white transition-colors duration-300">
                  Get Started
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;