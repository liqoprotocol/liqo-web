"use client";

import { useState } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import Chip from "@/components/ui/chip";
import WaitlistCard from "./WaitlistCard";
import WaitlistForm from "./WaitlistForm";
import WaitlistSuccess from "./WaitlistSuccess";

const ease = [0.21, 0.47, 0.32, 0.98] as const;

const rise: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease } },
};

const WaitlistSection = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section
      id="waitlist"
      aria-label="Join the Waitlist"
      className="w-full pt-32 pb-24 px-5 md:px-10 md:pt-40 md:pb-32 xl:px-28"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
        className="w-full flex flex-col items-center gap-5"
      >
        <motion.div variants={rise}>
          <Chip text="Waitlist" />
        </motion.div>
        <motion.h1
          variants={rise}
          className="text-white text-2xl font-semibold text-center lg:text-5xl"
        >
          Join the Liqo Waitlist
        </motion.h1>
        <motion.p
          variants={rise}
          className="max-w-xl text-center text-sm text-gray-400 lg:text-base"
        >
          Be among the first developers and businesses to experience the future of global
          liquidity infrastructure.
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.65, ease, delay: 0.1 }}
        className="mx-auto mt-12 w-full max-w-2xl lg:mt-16"
      >
        <WaitlistCard>
          <AnimatePresence mode="wait" initial={false}>
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35, ease }}
              >
                <WaitlistSuccess onReset={() => setSubmitted(false)} />
              </motion.div>
            ) : (
              <motion.div
                key="form"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35, ease }}
              >
                <WaitlistForm onSuccess={() => setSubmitted(true)} />
              </motion.div>
            )}
          </AnimatePresence>
        </WaitlistCard>
      </motion.div>
    </section>
  );
};

export default WaitlistSection;
