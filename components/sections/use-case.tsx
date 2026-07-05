import Chip from "../ui/chip";
import UseCaseCard, { UseCaseCardProps } from "../ui/use-case-card";
import UseCaseImage1 from "@/public/cooperate-treasury.png";
import UseCaseImage2 from "@/public/fiat-account.png";
import UseCaseImage3 from "@/public/hoodie-1.png";
import UseCaseImage4 from "@/public/hoodie-2.png";
import { Card } from "../ui/card";
import Image from "next/image";
const list: UseCaseCardProps[] = [
    {
        title: "Accept payments in local currencies and digital wallets, settling in your preferred currency.",
        imageSrc: UseCaseImage1,
    },
    {
        title: "Automatically convert incoming funds into your preferred settlement currency to optimise treasury operations.",
        imageSrc: UseCaseImage2,
        customImageClassName: "w-full h-auto relative -bottom-[6%]",
    },
];

const UseCaseSection = () => {
    return (
        <div className="w-full mt-40 px-5 md:px-10 xl:px-28">
            <div className="w-full flex items-center justify-center">
                <Chip text="Use case" />
            </div>

            <div className="w-full flex flex-col gap-5 mt-5">
                <p className="text-white text-2xl font-semibold text-center lg:text-5xl">
                    One Platform For Every<br />Financial Workflow
                </p>

                <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 xl:gap-8 mt-10">
                    {list.map((item, i) => (
<Card
    key={i}
    className="relative flex flex-col justify-between min-h-[26rem] xl:min-h-[30rem] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 bg-[#0B0B0B] bg-[radial-gradient(ellipse_72%_42%_at_50%_42%,rgba(34,121,182,0.32)_0%,rgba(1,81,139,0.18)_40%,rgba(1,81,139,0.06)_60%,transparent_78%),linear-gradient(to_bottom,#0B0B0B_0%,#0B0B0B_42%,rgba(1,81,139,0.1)_55%,rgba(1,81,139,0.3)_70%,rgba(116,240,198,0.18)_84%,rgba(56,246,132,0.22)_94%,rgba(9,253,66,0.24)_100%)]"
>
                            <div className="p-4">
                                <h3 className="text-lg xl:text-xl font-medium text-white">
                                    {item.title}
                                </h3>
                            </div>
                            <Image
                                className={item.customImageClassName ?? "w-full h-auto"}
                                src={item.imageSrc}
                                alt={`use-case-${i + 1}`}
                            />
                        </Card>
                    ))}

                    {/* Third card with the layered hoodie images */}
                    <Card className="relative flex flex-col justify-between min-h-[26rem] xl:min-h-[30rem] bg-[#0B0B0B] bg-[radial-gradient(ellipse_72%_42%_at_50%_42%,rgba(34,121,182,0.32)_0%,rgba(1,81,139,0.18)_40%,rgba(1,81,139,0.06)_60%,transparent_78%),linear-gradient(to_bottom,#0B0B0B_0%,#0B0B0B_42%,rgba(1,81,139,0.1)_55%,rgba(1,81,139,0.3)_70%,rgba(116,240,198,0.18)_84%,rgba(56,246,132,0.22)_94%,rgba(9,253,66,0.24)_100%)] md:col-span-2 xl:col-span-1">
                        <div className="p-4">
                            <h3 className="text-lg xl:text-xl font-medium text-white">
                                Power global sales and payouts. Enable storefronts while managing currency conversion and merchant payouts behind the scenes.
                            </h3>
                        </div>
                        <div className="w-full relative">
                            <Image
                                className="w-[80%] h-auto z-1 absolute bottom-0 left-[22%]"
                                src={UseCaseImage3}
                                alt="use-case-3"
                            />
                            <Image className="w-[80%] h-auto" src={UseCaseImage4} alt="use-case-4" />
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default UseCaseSection;