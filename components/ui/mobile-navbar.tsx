"use client";
import Image from "next/image";
import LogoWithText from "../../public/logo-with-text.svg";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";

import { Button } from "./button";

const links = ["Developers", "Resources", "Pricing"];


const menuVariants: Variants = {
    hidden: { opacity: 0, y: -12, scale: 0.98 },
    visible: {
        opacity: 1, y: 0, scale: 1,
        transition: { duration: 0.25, ease: "easeOut", staggerChildren: 0.06, delayChildren: 0.05 },
    },
    exit: { opacity: 0, y: -8, scale: 0.98, transition: { duration: 0.18, ease: "easeIn" } },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: -8 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
    exit: { opacity: 0 },
};

const MobileNavbar = () => {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const panelRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 12);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);


    useEffect(() => {
        if (!open) return;
        const onScroll = () => {
            panelRef.current?.style.setProperty("--my", `${(window.scrollY % 300) / 3}%`);
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, [open]);

    return (
        <div className={`w-full px-5 md:px-14 fixed top-0 left-0 z-100 lg:hidden
                        transition-colors duration-300
                        ${scrolled || open
                ? "bg-[#0D0D0D]/85 backdrop-blur-xl border-b border-white/10 shadow-lg"
                : "bg-transparent border-b border-transparent"}`}>
            <nav className="w-full h-16 relative flex flex-row items-center justify-between">
                <Image src={LogoWithText} alt="Logo" className="h-full w-24" priority />

                <button
                    onClick={() => setOpen((v) => !v)}
                    aria-label={open ? "Close menu" : "Open menu"}
                    aria-expanded={open}
                    className="w-10 h-10 rounded-xl flex items-center justify-center
                               bg-[oklch(1_0_0/.2)] border border-[oklch(1_0_0/.05)]
                               backdrop-blur-xl shadow-lg"
                >
                    <AnimatePresence mode="wait" initial={false}>
                        <motion.span
                            key={open ? "x" : "menu"}
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                            transition={{ duration: 0.15 }}
                            className="flex"
                        >
                            {open ? <X color="#fff" size={24} /> : <Menu color="#fff" size={24} />}
                        </motion.span>
                    </AnimatePresence>
                </button>
            </nav>

            <AnimatePresence>
                {open && (
                    <motion.div
                        ref={panelRef}
                        variants={menuVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        style={{ transformOrigin: "top right" }}
                        className="absolute left-5 right-5 md:left-14 md:right-14 top-[4.5rem]
               rounded-2xl p-5 overflow-hidden
               bg-[#0D0D0D]/90 backdrop-blur-2xl
               border border-white/10
               shadow-[inset_0_1px_0_rgba(255,255,255,0.15),0_16px_48px_rgba(0,0,0,0.5)]"
                    >
                        <div className="liquid-glass-specular" />
                        <ul className="flex flex-col gap-1">
                            {links.map((link) => (
                                <motion.li
                                    key={link}
                                    variants={itemVariants}
                                    onClick={() => setOpen(false)}
                                    className="text-gray-200 text-base font-medium py-3 px-2
                                               rounded-lg cursor-pointer active:bg-white/5"
                                >
                                    {link}
                                </motion.li>
                            ))}
                        </ul>

                        <motion.div variants={itemVariants} className="flex flex-col gap-3 mt-5 pt-5 border-t border-white/10">
                            <Button className="bg-[#4D4D4D] w-full py-5 text-white active:bg-[#333]">
                                Sign In
                            </Button>
                            <Button className="bg-white w-full py-5 text-black active:bg-primary-dark/80 active:text-white">
                                Create account
                            </Button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default MobileNavbar