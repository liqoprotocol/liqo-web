import { Button } from "../ui/button";
import LiquidHeroBg from "../ui/liquid-hero-bg";

const ReadyToBuild = () => {
  return (
    <div className="relative w-full overflow-hidden bg-[#0A0A0A] min-h-80 lg:min-h-[60vh] mt-20 lg:mt-30">
      {/* desktop / tablet — right-half decoration, per design */}
      <LiquidHeroBg
        src="/ready-to-build-image.svg"
        className="hidden md:block absolute top-0 right-0 h-full w-[55%]"
      />
      {/* mobile — bottom decoration */}
      <LiquidHeroBg
        src="/ready-to-build-mobile.svg"
        className="block md:hidden absolute bottom-0 right-0 h-full w-[45%]"
      />
      <div
        className="lg:hidden absolute inset-0 pointer-events-none
    bg-[radial-gradient(ellipse_75%_50%_at_50%_48%,rgba(10,10,10,0.95)_0%,rgba(10,10,10,0.7)_55%,transparent_100%)]"
      />

      <div className="relative w-full py-18 md:py-24 px-5 md:px-10 xl:px-28">
        <div className="w-full md:w-[45%]">
          <h3 className="text-3xl font-semibold text-white lg:text-4xl text-left">
            Ready to build for
            <br />
            Global Scale?
          </h3>
          <p className="text-[#D5D5D5] mt-2 leading-6 lg:text-base">
            Expand your business globally without massive engineering effort to
            untangle local banking rules. We handle complexities behind the
            scenes for instant international settlements.
          </p>
          <Button className="bg-white mt-8.5 py-5 cursor-pointer px-4 text-black hover:bg-primary-dark/80 hover:text-white transition-all duration-300">
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ReadyToBuild;
