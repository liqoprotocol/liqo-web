import Image from "next/image";
import Chip from "../ui/chip";
import CodeSnippet from "@/public/code-snippet.png";
import { ArrowUpRight } from "lucide-react";
const DeveloperExperience = () => {
    return (
        <>
            <div className={"w-full mt-20 bg-[#0368F4] py-10 px-6 lg:px-28 lg:py-28 lg:mt-40"} >
                <div className="w-full flex flex-col lg:flex-row items-center justify-center lg:gap-28">
                    <div className={"w-full lg:w-1/2"} >
                        <Chip text="Developer Experience" className="bg-[#FFFFFF1A]" />

                        <p className="text-white text-2xl font-semibold mt-3 text-left lg:text-5xl ">A Seamless Space for <br className="hidden lg:block" />Your Engineering Team.</p>

                        <p className={"text-sm font-medium text-[#F7F7F7] mt-4"} >We simplified global finance into elegant API endpoints. Your team can test routing logic in our sandbox and push to production quickly without real funds.</p>

                        <a href="/docs" className=" mt-5 text-white underline cursor-pointer text-left text-sm inline-flex items-center ">Read Documentation <ArrowUpRight size={16} /> </a>
                    </div>

                    <div className={"w-full lg:w-1/2 mt-14 lg:mt-0"} >
                        <Image src={CodeSnippet} alt="Code Snippet" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default DeveloperExperience;