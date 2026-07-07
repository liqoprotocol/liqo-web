"use client";
import Image, { StaticImageData } from "next/image";
import { motion, type Variants } from "framer-motion";

export interface HowItWorksCardProps {
    title: string;
    description: string;
    imageSrc: string | StaticImageData;
    direction?: "left" | "right";
}

const ease = [0.21, 0.47, 0.32, 0.98] as const;

const textRise: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease } },
};

const imageSlide = (direction: "left" | "right"): Variants => ({
    hidden: { opacity: 0, x: direction === "left" ? 48 : -48 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease } },
});

const HowItWorksCard = ({ title, description, imageSrc, direction = "left" }: HowItWorksCardProps) => {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
            className={`w-full flex flex-col lg:flex-row items-center justify-between lg:gap-20 ${
                direction === "left" ? "lg:flex-row" : "lg:flex-row-reverse"
            }`}
        >
            <motion.div variants={imageSlide(direction)} className="w-full lg:w-1/2 lg:order-none order-first mb-10 lg:mb-0">
                <Image src={imageSrc} alt={title} width={500} height={300} className="w-full h-auto" />
            </motion.div>

            <motion.div variants={textRise} className="w-full lg:w-1/2">
                <h3 className="text-xl font-bold text-white lg:text-4xl">{title}</h3>
                <p className="text-gray-400 mt-2 lg:text-base">{description}</p>
            </motion.div>
        </motion.div>
    );
};

export default HowItWorksCard;