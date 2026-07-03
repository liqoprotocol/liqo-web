import Image, { StaticImageData } from "next/image";


export interface HowItWorksCardProps {
    title: string;
    description: string;
    imageSrc: string|StaticImageData;
    direction?: "left" | "right";
}
const HowItWorksCard = ({ title, description, imageSrc, direction }: HowItWorksCardProps) => {
    return (
        <>
            <div className="w-full ">
                <div className={`w-full flex flex-col lg:flex-row items-center justify-between lg:gap-20 ${direction === "left" ? "lg:flex-row" : "lg:flex-row-reverse"}`} >
                    <div
                        className={`w-full lg:w-1/2} mb-10`}
                    >
                        <h3 className="text-xl font-bold text-white lg:text-4xl">{title}</h3>
                        <p className="text-gray-400 mt-2 lg:text-base">{description}</p>
                    </div>
                    <div
                        className={`w-full lg:w-1/2}`}
                    >
                        <Image src={imageSrc} alt={title} width={500} height={300} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default HowItWorksCard;