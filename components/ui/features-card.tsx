import Image, { StaticImageData } from "next/image";
import { Card } from "./card";

interface FeaturesCardProps {
    imageSrc: string | StaticImageData;
    title: string;
    description: string;
    className?: string;
}

const FeaturesCard = ({ imageSrc, title, description, className }: FeaturesCardProps) => {
    return (
        <>
            <Card
                className={`group w-auto h-full flex flex-col bg-[#1A1A1A] rounded-lg overflow-hidden
        border border-white/5 transition-all duration-300
        hover:-translate-y-1 hover:border-white/10 hover:shadow-[0_16px_40px_rgba(0,0,0,0.4)]
        ${className}`}
            >
                <Image
                    className="w-full h-90 transition-transform duration-500 ease-out "
                    src={imageSrc}
                    alt={title}
                />
                <div className="p-4 mt-auto gap-3 flex flex-col">
                    <h3 className="text-xl font-bold text-white">{title}</h3>
                    <p className="text-gray-400 relative lg:w-[60%] w-full">{description}</p>
                </div>
            </Card>
        </>
    );
}

export default FeaturesCard;