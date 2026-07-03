"use client";
import Image from "next/image";
import LogoWithText from "../../public/logo-with-text.svg";
import { Menu } from "lucide-react";
import LiquidGlassFilter from "./liquid-glass-filter";
import { useRef } from "react";
import { Button } from "./button";
const Navbar = () => {
  const ref = useRef<HTMLDivElement>(null);

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
    <>
      <LiquidGlassFilter />
      <MobileNavbar />

      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        className="
    liquid-glass
    h-17
    mx-auto
    w-9/12
    px-5
    z-100
    hidden
    lg:flex
    items-center
    justify-between
    fixed
    top-3
    left-0
    right-0
  "
      >
        <div className="liquid-glass-specular" />
        <div className="flex gap-10  flex-row items-center justify-between  h-full">
          <Image
            src={LogoWithText}
            alt="Logo"
            className="w-30 h-auto relative z-10"
          />
          <ul className="flex flex-row items-center justify-between gap-10 text-gray-200 text-sm font-medium">
            <li className="cursor-pointer hover:text-primary-dark">
              Developers
            </li>
            <li className="cursor-pointer hover:text-primary-dark">
              Resources
            </li>
            <li className="cursor-pointer hover:text-primary-dark">Pricing</li>
          </ul>
        </div>

        <div className="flex flex-row items-center justify-between gap-5">
          <Button className="bg-[#4D4D4D] py-5 cursor-pointer px-4 text-white hover:bg-[#333] hover:text-white transition-all duration-300">
            Sign In
          </Button>
          <Button className="bg-white py-5 cursor-pointer px-4 text-black hover:bg-primary-dark/80 hover:text-white transition-all duration-300">
            Create account
          </Button>
        </div>
      </div>
    </>
  );
};

export default Navbar;

const MobileNavbar = () => {
  return (
    <div
      className="w-full h-16
            px-5 relative md:px-14
            lg:hidden"
    >
      <nav
        className="w-full h-full
                relative
            flex flex-row items-center justify-between
            "
      >
        <Image src={LogoWithText} alt="Logo" className="h-full w-24" />
        {/* 
        <div className="bg-white/20 backdrop-blur-xl border w-10 h-10 flex items-center justify-center border-white/5 rounded-xl">
          <Menu color="#fff" />
        </div> */}

        <div
          className="
        w-10 h-10
        rounded-xl
        flex items-center justify-center
        bg-[oklch(1_0_0/.2)]
        border border-[oklch(1_0_0/.05)]
        backdrop-blur-xl
        shadow-lg
        lg:hidden
        "
        >
          <Menu color="#fff" size={24} />
        </div>
      </nav>
    </div>
  );
};
