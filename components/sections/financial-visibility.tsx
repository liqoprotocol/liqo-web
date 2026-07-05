import Image from "next/image";
import FinancialVisibiltyCard, { FinancialVisibiltyCardProps } from "../ui/financial-visibilty-card";
import { PulseIcon1, PulseIcon2, PulseIcon3 } from "../ui/pulses";
import OverViewImage from "@/public/overview-screenshot.png"
const list: FinancialVisibiltyCardProps[] = [
    {
        title: "Real-time Monitoring",
        description: "Track live payment statuses, conversion rates, and settlement times with zero guesswork.",
        icon: <PulseIcon1 className="w-15 h-15" always />,
        always: true
    },
    {
        title: "Revenue Analytics",
        description: "Understand your growth across different regions, countries, and currencies.",
        icon: <PulseIcon2 className="w-15 h-15" />,
        always: false
    },
    {
        title: "Automated Reconciliations",
        description: "Export clean, organized financial reports that simplify your accounting.",
        icon: <PulseIcon3 className="w-15 h-15" />,
        always: false
    }
]
const FinancialVisibilty = () => {

    return (
        <>
            <div className="w-full mt-80 px-5 md:px-10 xl:px-28">


                <div className="w-full flex flex-col gap-5 mt-5">
                    <p className="text-white text-2xl font-semibold text-center lg:text-5xl">
                        Complete Financial Visibility.
                    </p>
                    <p className="text-[#D5D5D5] text-sm font-semibold text-center lg:text-base">
                        Monitor transactions, manage conversions, and track<br />your global revenue from a single, powerful interface.
                    </p>
                </div>
                <div
                    className="w-full mt-20 flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-px-5 px-5 -mx-5
               [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
               lg:mx-0 lg:px-0 lg:gap-6 lg:overflow-visible lg:snap-none lg:justify-between"
                >
                    {list.map((item, index) => (
                        <FinancialVisibiltyCard key={index} {...item} />
                    ))}
                </div>

                <div className="w-full mt-10 lg:mt-16 " >
                    <Image src={OverViewImage} alt="overview-screenshot" />
                </div>
            </div>

        </>
    );
}

export default FinancialVisibilty;