"use client";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import Chip from "../ui/chip";
import CodeSnippet from "@/public/code-snippet.png";
import { ArrowUpRight } from "lucide-react";

const ease = [0.21, 0.47, 0.32, 0.98] as const;

const rise: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease } },
};

const snippetIn: Variants = {
  hidden: { opacity: 0, y: 32, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease },
  },
};

const DeveloperExperience = () => {
  return (
    <section id="developer-experience" aria-label="Developer Experience" className="w-full mt-20 bg-[#0368F4] py-10 px-5 md:px-10 md:py-16 xl:px-28 xl:py-28 lg:mt-40 overflow-hidden">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1 } },
        }}
        className="w-full flex flex-col lg:flex-row items-center justify-center gap-0 lg:gap-14 xl:gap-28"
      >
        <div className="w-full lg:w-1/2">
          <motion.div variants={rise}>
            <Chip text="Developer Experience" className="bg-[#FFFFFF1A]" />
          </motion.div>

          <motion.h2
            variants={rise}
            className="text-white text-2xl font-semibold mt-3 text-left md:text-3xl lg:text-4xl xl:text-5xl"
          >
            A Seamless Space for <br className="hidden xl:block" />
            Your Engineering Team.
          </motion.h2>

          <motion.p
            variants={rise}
            className="text-sm font-medium text-[#F7F7F7] mt-4 md:text-base md:max-w-xl lg:max-w-none"
          >
            We simplified global finance into elegant API endpoints. Your team
            can test routing logic in our sandbox and push to production quickly
            without real funds.
          </motion.p>

          <motion.div variants={rise}>
            <a
              href="https://docs.liqo.network"
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-5 text-white underline cursor-pointer text-left text-sm inline-flex items-center gap-0.5"
            >
              Read Documentation
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </motion.div>
        </div>

        <motion.div
          variants={snippetIn}
          className="w-full lg:w-1/2 mt-10 lg:mt-0 max-w-xl lg:max-w-none mx-auto"
        >
          <Image
            src={CodeSnippet}
            alt="Liqo API code snippet for routing a cross-border payment"
            className="w-full h-auto"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default DeveloperExperience;
