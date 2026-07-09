"use client";
import Image from "next/image";
import Link from "next/link";
import LogoWithText from "../../public/logo-with-text.svg";
import LiquidGlassFilter from "./liquid-glass-filter";
import { useRef } from "react";
import { Button } from "./button";
import MobileNavbar from "./mobile-navbar";
import { useScrolled } from "@/hooks/use-scrolled";
const Navbar = () => {
  const ref = useRef<HTMLDivElement>(null);
  const scrolled = useScrolled();
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    el.style.setProperty("--mx", `${x}%`);
    el.style.setProperty("--my", `${y}%`);
  };
  return (
    <header>
      <LiquidGlassFilter />
      <MobileNavbar />

      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        className={`liquid-glass h-17 mx-auto w-9/12 px-5 z-100 hidden lg:flex
                            items-center justify-between fixed left-0 right-0
                            transition-all duration-300
                            ${scrolled
            ? "top-3 bg-[#0A0A0A]/70 shadow-xl"
            : "top-10 bg-transparent"
          }`}
      >
        <div className="liquid-glass-specular fixed" />
        <nav aria-label="Primary" className="flex gap-10  flex-row items-center justify-between  h-full">
          <Link href={"/"} >
            <Image
              src={LogoWithText}
              alt="Liqo"
              priority
              className="w-25 h-auto relative z-10"
            /></Link>
          <ul className="flex flex-row items-center justify-between gap-10 text-gray-200 text-sm font-medium">
            <li className="cursor-pointer hover:text-primary-dark">
              <a href="#developer-experience">Developers</a>
            </li>
            <li className="cursor-pointer hover:text-primary-dark">
              Resources
            </li>
            <li className="cursor-pointer hover:text-primary-dark">Pricing</li>
          </ul>
        </nav>

        <div className="flex flex-row items-center justify-between gap-5">
          <Button className="bg-[#4D4D4D] py-5 cursor-pointer px-4 text-white hover:bg-[#333] hover:text-white transition-all duration-300">
            Sign In
          </Button>
          <Button
            render={<Link href="/waitlist" />}
            nativeButton={false}
            className="bg-white py-5 cursor-pointer px-4 text-black hover:bg-primary-dark/80 hover:text-white transition-all duration-300"
          >
            Join Waitlist
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
