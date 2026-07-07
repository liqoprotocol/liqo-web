"use client";
import { motion, type Variants } from "framer-motion";
import Chip from "../ui/chip";
import HowItWorksCard, { HowItWorksCardProps } from "../ui/how-it-works-card";
import HowItWorksImage from "@/public/how-it-works-1.png";
import HowItWorksImage2 from "@/public/how-it-works-2.png";
import HowItWorksImage3 from "@/public/how-it-works-3.png";
const ease = [0.21, 0.47, 0.32, 0.98] as const;

const rise: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease } },
};
const list: HowItWorksCardProps[] = [
  {
    title: "Connect once.",
    description:
      "Integrate our unified API into your platform. You instantly gain access to a global network of banking rails and liquidity pools without the headache of negotiating individual vendor contracts.",
    imageSrc: HowItWorksImage,
    direction: "left",
  },
  {
    title: "We find the optimal path.",
    description:
      "When you transfer, our algorithm checks network conditions, limits, and fees, routing your funds through the fastest, most cost-effective channel.",
    imageSrc: HowItWorksImage2,
    direction: "right",
  },
  {
    title: "Settle instantly with full visibility.",
    description: "Funds arrive seamlessly. Your finance team tracks the lifecycle from a unified dashboard, ensuring reconciliation and operational control.",
    imageSrc: HowItWorksImage3,
    direction: "left",
  },
];
const HowItWorks = () => {
  return (
    <div className="w-full mt-40 px-5 md:px-16 lg:px-28">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
      >
        <motion.div variants={rise} className="w-full flex items-center justify-center">
          <Chip text="How It Works" />
        </motion.div>
        <motion.p
          variants={rise}
          className="text-white text-2xl font-semibold text-center lg:text-5xl mt-5"
        >
          The Anatomy of a<br />Frictionless Transfer
        </motion.p>
      </motion.div>

      <div className="w-full flex flex-col lg:w-[80%] mx-auto mt-12 lg:mt-20 gap-20">
        {list.map((item, index) => (
          <HowItWorksCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};
export default HowItWorks;
