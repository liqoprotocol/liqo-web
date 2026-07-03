import Image from "next/image";
import BG from "../../public/bg-logo.png";
import BG2 from "../../public/bg-logo-2.png";
import { Button } from "./button";

const Hero = () => {
  return (
    <section className="relative min-h-screen">
      <Image
        src={BG}
        alt=""
        fill
        priority
        className="hidden lg:block object-cover object-center top-30"
      />
      <Image
        src={BG2}
        alt=""
        fill
        priority
        className="block lg:hidden object-cover object-center"
      />

      <div className="absolute top-0 left-0 w-full h-full px-4 flex items-center justify-center  lg:px-20">
        <div className="w-full  flex flex-col items-center justify-center text-center lg:w-3/5">
          <div
            className={
              "flex items-center justify-start gap-3 w-70 rounded-2xl bg-gray-600/20 py-2 px-4 mb-5  relative "
            }
          >
            <div className="bg-primary-dark w-2 h-2 rounded-full" />
            <p className="text-xs font-medium text-white">
              New: Expanded global currency support
            </p>
          </div>

          <div className="w-full">
            <p className="text-white text-2xl capitalize md:text-5xl md:px-10 lg:px-0 font-semiBold ">
              Move money globally without the technical heavy lifting.
            </p>
            <p className=" text-sm text-gray-400 md:text-xl md:px-10 lg:px-0 mt-4">
              Expand your business globally without massive engineering effort
              to untangle local banking rules. We handle complexities behind the
              scenes for instant international settlements.
            </p>

            <Button className="bg-white mt-10 py-5 cursor-pointer px-4 text-black hover:bg-primary-dark/80 hover:text-white transition-all duration-300">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
