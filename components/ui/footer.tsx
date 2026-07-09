import Image from "next/image";
import Link from "next/link";

import Logo from "@/public/logo-with-text.svg";
import LinkedInIcon from "@/public/linkedin-icon.png";
import XIcon from "@/public/x-icon.png";

const Footer = () => {
  return (
    <footer className="w-full bg-[#131313] text-white mt-6">
      <div className="mx-auto max-w-7xl px-6 py-10 md:px-8 md:py-12 lg:px-4 lg:py-16">
        {/* ================= Desktop ================= */}
        <div className="hidden lg:flex justify-between">
          {/* Left */}
          <div className="flex flex-col justify-between">
            <div>
              <Image
                src={Logo}
                alt="Liqo"
                className="w-20 xl:w-30"
              />

              <div className="mt-16 flex items-center gap-5">
                <Link href="#">
                  <Image
                    src={LinkedInIcon}
                    alt="LinkedIn"
                    className="h-5 w-5"
                  />
                </Link>

                <Link href="#">
                  <Image
                    src={XIcon}
                    alt="X"
                    className="h-5 w-5"
                  />
                </Link>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="flex gap-24">
            <div>
              <h3 className="mb-5 text-sm font-semibold">
                Product
              </h3>

              <ul className="space-y-4 text-sm text-white/70">
                <li><Link href="#features">Features</Link></li>
                <li><Link href="#how-it-works">How It Works</Link></li>
                <li><Link href="#use-case">Use Case</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="mb-5 text-sm font-semibold">
                Company
              </h3>

              <ul className="space-y-4 text-sm text-white/70">
                <li><Link href="#">About Us</Link></li>
                <li><Link href="#">Careers</Link></li>
                <li><Link href="#">Support</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="mb-5 text-sm font-semibold">
                Developers
              </h3>

              <ul className="space-y-4 text-sm text-white/70">
                <li><Link href="#">API Documentation</Link></li>
                <li><Link href="#">API Reference</Link></li>
                <li><Link href="#">Sandbox Environment</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Desktop Bottom */}
        <div className="mt-20 hidden lg:flex items-center justify-between">
          <div className="flex gap-8 text-sm text-white/70">
            <Link href="#">Terms of Service</Link>
            <Link href="#">Privacy Policy</Link>
          </div>

          <p className="text-sm text-white/60">
            © 2026 Liqo. All rights reserved.
          </p>
        </div>

        {/* ================= Mobile & Tablet ================= */}
        <div className="lg:hidden">
          {/* Top */}
          <div className="flex items-start justify-between">
            <Image
              src={Logo}
              alt="Liqo"
              className="w-20 md:w-30"
            />

            <div className="flex gap-5">
              <Link href="#">
                <Image
                  src={LinkedInIcon}
                  alt="LinkedIn"
                  className="h-5 w-5 md:h-6 md:w-6"
                />
              </Link>

              <Link href="#">
                <Image
                  src={XIcon}
                  alt="X"
                  className="h-5 w-5 md:h-6 md:w-6"
                />
              </Link>
            </div>
          </div>

          {/* Links */}
          <div className="mt-14 grid grid-cols-2 gap-x-8 md:gap-x-10 gap-y-10 md:gap-y-12">
            <div>
              <h3 className="mb-4 text-lg md:text-xl font-semibold">
                Product
              </h3>

              <ul className="space-y-4 text-base md:text-lg text-white/70">
                <li><Link href="#features">Features</Link></li>
                <li><Link href="#how-it-works">How It Works</Link></li>
                <li><Link href="#use-case">Use Case</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-lg md:text-xl font-semibold">
                Company
              </h3>

              <ul className="space-y-4 text-base md:text-lg text-white/70">
                <li><Link href="#">About Us</Link></li>
                <li><Link href="#">Careers</Link></li>
                <li><Link href="#">Support</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-lg md:text-xl font-semibold">
                Developers
              </h3>

              <ul className="space-y-4 text-base md:text-lg text-white/70">
                <li><Link href="#">API Documentation</Link></li>
                <li><Link href="#">API Reference</Link></li>
                <li><Link href="#">Sandbox Environment</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-lg md:text-xl font-semibold">
                Legal
              </h3>

              <ul className="space-y-4 text-base md:text-lg text-white/70">
                <li><Link href="#">Terms of Service</Link></li>
                <li><Link href="#">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <p className="mt-16 text-base md:text-lg text-white/60">
            © 2026 Liqo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;