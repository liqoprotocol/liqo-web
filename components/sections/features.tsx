"use client";
import { motion, type Variants } from "framer-motion";
import { Button } from "../ui/button";
import Chip from "../ui/chip";
import FeaturesCard from "../ui/features-card";
import Feature1 from "@/public/feature-1.1.png";
import Feature2 from "@/public/feature-2.png";
import Feature3 from "@/public/feature-3.png";
import Feature4 from "@/public/feature-4.png";

const ease = [0.21, 0.47, 0.32, 0.98] as const;

const rise: Variants = {
    hidden: { opacity: 0, y: 28 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.65, ease },
    },
};

const headerContainer: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
};

const gridContainer: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
};

const cards = [
    { imageSrc: Feature1, title: "Total operational visibility", description: "Track your money with real-time transaction monitoring. Resolve network issues before they affect customers." },
    { imageSrc: Feature2, title: "Optimized for speed and cost", description: "Our algorithm finds the best path for transfers, protecting profit margins and ensuring users receive funds instantly." },
    { imageSrc: Feature3, title: "Built for rapid scale", description: "Move to production in days, not months. Test confidently in a simulated sandbox without using real funds." },
    { imageSrc: Feature4, title: "Always-on global settlements", description: "Achieve one integration that avoids regional downtime. Traffic shifts seamlessly, ensuring uninterrupted operations." },
];

const Features = () => {
    return (
        <div className="w-full mt-16 px-5 md:px-10 xl:px-28">
            <motion.div
                variants={headerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
            >
                <motion.div variants={rise}>
                    <Chip text="Features" />
                </motion.div>

                <div className="w-full flex flex-col gap-5 mt-5 lg:flex-row lg:gap-10 lg:items-start lg:justify-between">
                    <motion.div variants={rise} className="w-full flex flex-col gap-2 lg:w-[55%]">
                        <p className="text-white text-xl font-semibold md:text-3xl lg:text-4xl xl:text-5xl xl:pr-24">
                            Powerful Infrastructure for Global Scale
                        </p>
                    </motion.div>
                    <motion.div variants={rise} className="w-full flex flex-col gap-2 lg:w-[40%]">
                        <p className="text-gray-400 text-sm font-semibold">
                            Cross-border transactions can be fragmented and delayed. We offer a single, intelligent platform to keep your money moving smoothly.
                        </p>
                        <div>
                            <motion.div
                                whileHover={{ scale: 1.04 }}
                                whileTap={{ scale: 0.97 }}
                                transition={{ type: "spring", stiffness: 400, damping: 22 }}
                                className="inline-block"
                            >
                                <Button className="bg-white mt-4 w-34 py-5 cursor-pointer px-4 text-black hover:bg-primary-dark/80 hover:text-white transition-colors duration-300">
                                    Get Started
                                </Button>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>

            <motion.div
                variants={gridContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                className="w-full mt-14 xl:mt-20 grid grid-cols-1 md:grid-cols-2 gap-6"
            >
                {cards.map((card) => (
                    <motion.div variants={rise} key={card.title} className="h-full">
                        <FeaturesCard {...card} />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default Features;