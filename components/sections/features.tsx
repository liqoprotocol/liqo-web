import { Button } from "../ui/button";
import Chip from "../ui/chip";
import FeaturesCard from "../ui/features-card";
import Feature1 from "@/public/feature-1.1.png";
import Feature2 from "@/public/feature-2.png";
import Feature3 from "@/public/feature-3.png";
import Feature4 from "@/public/feature-4.png";
const Features = () => {
    return (
        <>
            <div
                className="w-full mt-16 px-5 md:px-16 lg:px-28"
            >
                <Chip text="Features" />

                <div
                    className="w-full flex flex-col gap-5 mt-5 lg:flex-row lg:gap-10 lg:items-start lg:justify-between"
                >
                    <div className="w-full flex flex-col gap-2 lg:w-[60%] ">
                        <p className="text-white text-xl font-semibold pr-20 md:pr-20 lg:text-5xl lg:pr-40">
                            Powerful Infrastructure for Global Scale
                        </p>

                    </div>
                    <div className="w-full flex flex-col gap-2 lg:w-[40%] ">
                        <p className="text-gray-400 text-sm font-semibold  ">
                            Cross-border transactions can be fragmented and delayed. We offer a single, intelligent platform to keep your money moving smoothly.
                        </p>
                        <Button className="bg-white mt-4 w-34 py-5 cursor-pointer px-4 text-black hover:bg-primary-dark/80 hover:text-white transition-all duration-300">
                            Get Started
                        </Button>
                    </div>
               
                </div>

                <div className="w-full mt-10 gap-6 inline-flex flex-col" >
                         <div className="w-full flex items-stretch justify-between flex-col md:flex-row gap-6 " >
                        <FeaturesCard imageSrc={Feature1} title="Total operational visibility" description="Track your money with real-time transaction monitoring. Resolve network issues before they affect customers." className="" />
                        <FeaturesCard imageSrc={Feature2} title="Optimized for speed and cost" description="Our algorithm finds the best path for transfers, protecting profit margins and ensuring users receive funds instantly." />
                     
                    </div>
                    <div className="w-full flex items-stretch justify-between flex-col md:flex-row gap-6" >
                        <FeaturesCard imageSrc={Feature3} title="Built for rapid scale" description="Move to production in days, not months. Test confidently in a simulated sandbox without using real funds." />
                        <FeaturesCard imageSrc={Feature4} title="Always-on global settlements" description="Achieve one integration that avoids regional downtime. Traffic shifts seamlessly, ensuring uninterrupted operations." />
                     
                    </div>
                </div>
            </div>
        </>
    );
}

export default Features;