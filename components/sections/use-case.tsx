"use client";
import { motion, type Variants } from "framer-motion";
import Chip from "../ui/chip";
import { UseCaseCardProps } from "../ui/use-case-card";
import UseCaseImage1 from "@/public/cooperate-treasury.png";
import UseCaseImage2 from "@/public/fiat-account.png";
import UseCaseImage3 from "@/public/hoodie-1.png";
import UseCaseImage4 from "@/public/hoodie-2.png";
import { Card } from "../ui/card";
import Image from "next/image";

const ease = [0.21, 0.47, 0.32, 0.98] as const;

const rise: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease } },
};

const frontHoodie: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease, delay: 0.35 },
  },
};

const CARD_GRADIENT =
  "relative h-full flex flex-col justify-between min-h-[26rem] xl:min-h-[30rem] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 bg-[#0B0B0B] bg-[radial-gradient(ellipse_72%_42%_at_50%_42%,rgba(34,121,182,0.32)_0%,rgba(1,81,139,0.18)_40%,rgba(1,81,139,0.06)_60%,transparent_78%),linear-gradient(to_bottom,#0B0B0B_0%,#0B0B0B_42%,rgba(1,81,139,0.1)_55%,rgba(1,81,139,0.3)_70%,rgba(116,240,198,0.18)_84%,rgba(56,246,132,0.22)_94%,rgba(9,253,66,0.24)_100%)]";

const list: (UseCaseCardProps & { alt: string })[] = [
  {
    title:
      "Accept payments in local currencies and digital wallets, settling in your preferred currency.",
    imageSrc: UseCaseImage1,
    alt: "Corporate treasury dashboard showing multi-currency balances",
  },
  {
    title:
      "Automatically convert incoming funds into your preferred settlement currency to optimise treasury operations.",
    imageSrc: UseCaseImage2,
    customImageClassName: "w-full h-auto relative -bottom-[6%]",
    alt: "Fiat account balance and currency conversion interface",
  },
];

const UseCaseSection = () => {
  return (
    <section id="use-case" aria-label="Use Case" className="w-full mt-40 px-5 md:px-10 xl:px-28">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1 } },
        }}
      >
        <motion.div
          variants={rise}
          className="w-full flex items-center justify-center"
        >
          <Chip text="Use case" />
        </motion.div>
        <motion.h2
          variants={rise}
          className="text-white text-2xl font-semibold text-center lg:text-5xl mt-5"
        >
          One Platform For Every
          <br />
          Financial Workflow
        </motion.h2>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.14 } },
        }}
        className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 xl:gap-8 mt-10"
      >
        {list.map((item, i) => (
          <motion.div variants={rise} key={i} className="h-full">
            <Card className={CARD_GRADIENT}>
              <div className="p-4">
                <h3 className="text-lg xl:text-xl font-medium text-white">
                  {item.title}
                </h3>
              </div>
              <Image
                className={item.customImageClassName ?? "w-full h-auto"}
                src={item.imageSrc}
                alt={item.alt}
              />
            </Card>
          </motion.div>
        ))}

        {/* Third card — layered hoodies stagger into their stack */}
        <motion.div
          variants={rise}
          className="h-full md:col-span-2 xl:col-span-1"
        >
          <Card className={CARD_GRADIENT}>
            <div className="p-4">
              <h3 className="text-lg xl:text-xl font-medium text-white">
                Power global sales and payouts. Enable storefronts while
                managing currency conversion and merchant payouts behind the
                scenes.
              </h3>
            </div>
            <div className="w-full relative">
              <motion.div
                variants={frontHoodie}
                className="w-[80%] z-1 absolute bottom-0 left-[22%]"
              >
                <Image
                  className="w-full h-auto"
                  src={UseCaseImage3}
                  alt="Liqo branded hoodie, front view"
                />
              </motion.div>
              <Image
                className="w-[80%] h-auto"
                src={UseCaseImage4}
                alt="Liqo branded hoodie, back view"
              />
            </div>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default UseCaseSection;
