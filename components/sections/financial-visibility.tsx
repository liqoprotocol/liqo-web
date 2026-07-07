"use client";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import FinancialVisibiltyCard, { FinancialVisibiltyCardProps } from "../ui/financial-visibilty-card";
import { PulseIcon1, PulseIcon2, PulseIcon3 } from "../ui/pulses";
import OverViewImage from "@/public/overview-screenshot.png";

const ease = [0.21, 0.47, 0.32, 0.98] as const;

const rise: Variants = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease } },
};

const screenshotIn: Variants = {
    hidden: { opacity: 0, y: 40, scale: 0.97 },
    visible: {
        opacity: 1, y: 0, scale: 1,
        transition: { duration: 0.85, ease },
    },
};

const list: FinancialVisibiltyCardProps[] = [
    {
        title: "Real-time Monitoring",
        description: "Track live payment statuses, conversion rates, and settlement times with zero guesswork.",
        icon: <PulseIcon1 className="w-15 h-15" always />,
        always: true,
    },
    {
        title: "Revenue Analytics",
        description: "Understand your growth across different regions, countries, and currencies.",
        icon: <PulseIcon2 className="w-15 h-15" />,
        always: false,
    },
    {
        title: "Automated Reconciliations",
        description: "Export clean, organized financial reports that simplify your accounting.",
        icon: <PulseIcon3 className="w-15 h-15" />,
        always: false,
    },
];

const FinancialVisibilty = () => {
    return (
        <section id="financial-visibility" aria-label="Financial Visibility" className="w-full mt-80 px-5 md:px-10 xl:px-28">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
                className="w-full flex flex-col gap-5 mt-5"
            >
                <motion.h2 variants={rise} className="text-white text-2xl font-semibold text-center lg:text-5xl">
                    Complete Financial Visibility.
                </motion.h2>
                <motion.p variants={rise} className="text-[#D5D5D5] text-sm font-semibold text-center lg:text-base">
                    Monitor transactions, manage conversions, and track<br />your global revenue from a single, powerful interface.
                </motion.p>
            </motion.div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
                className="w-full mt-20 flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-px-5 px-5 -mx-5
                    [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
                    lg:mx-0 lg:px-0 lg:gap-6 lg:overflow-visible lg:snap-none lg:justify-between"
            >
                {list.map((item, index) => (
                    <motion.div
                        key={index}
                        variants={rise}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ delay: index * 0.1 }}
                        className="shrink-0 w-[78%] max-w-[320px] snap-start lg:shrink lg:w-[33.33%] lg:max-w-none"
                    >
                        <FinancialVisibiltyCard {...item} className="w-full max-w-none" />
                    </motion.div>
                ))}
            </motion.div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={screenshotIn}
                className="w-full mt-10 lg:mt-16"
            >
                <Image src={OverViewImage} alt="Liqo dashboard overview showing transactions, conversions, and revenue" className="w-full h-auto" />
            </motion.div>
        </section>
    );
};

export default FinancialVisibilty;