import { Button } from "../ui/button";
import BG from "../../public/bg-logo-3.png";
import BG2 from "@/public/bg-logo-4.png";

const ReadyToBuild = () => {
    return (
        <div
            style={{
                "--bg-desktop": `url(${BG.src})`,
                "--bg-mobile": `url(${BG2.src})`,
            } as React.CSSProperties}
   className="w-full bg-no-repeat bg-contain
           bg-[image:var(--bg-mobile)] bg-bottom
           md:bg-[image:var(--bg-desktop)] bg-right
           h-80 md:h-[30vh] lg:h-[60vh]"
        >
            <div className="w-full mt-18 md:mt-24 px-5 md:px-10 xl:px-28">
                <div className="w-full md:w-1/2">
                    <h3 className="text-3xl font-semibold text-white lg:text-4xl text-left">
                        Ready to build for<br />Global Scale?
                    </h3>
                    <p className="text-[#D5D5D5] mt-2 leading-6 lg:text-base">
                        Expand your business globally without massive engineering effort to untangle local banking rules. We handle complexities behind the scenes for instant international settlements.
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