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
        <Card
            className={`group w-auto h-full flex flex-col py-0 gap-0 bg-[#1A1A1A] rounded-lg overflow-hidden
                relative
                border border-white/5 transition-all duration-300
                hover:-translate-y-1 hover:border-white/10 hover:shadow-[0_16px_40px_rgba(0,0,0,0.4)]
                ${className}`}
        >
            <div className="relative overflow-hidden aspect-[2/1]">
                <Image
                    className="w-full h-full object-cover object-top"
                    src={imageSrc}
                    alt={title}
                />
                <div
                    className="absolute inset-x-0 bottom-0 h-20 lg:h-24 pointer-events-none
                        bg-linear-to-t from-[#1A1A1A] via-[#1A1A1A]/60 to-transparent"
                />
            </div>

            <div className="p-4 pb-8 gap-3 flex flex-col">
                <h3 className="text-xl font-bold text-white">{title}</h3>
                <p className="text-gray-400 relative w-full min-h-12 whitespace-pre-line">
                    {description}
                </p>
            </div>
        </Card>
    );
};
export default FeaturesCard;