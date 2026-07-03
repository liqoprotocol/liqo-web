import Image, { StaticImageData } from "next/image";
import { Card } from "./card";

interface FeaturesCardProps {
  imageSrc: string | StaticImageData;
  title: string;
  description: string;
  className?: string;
}

const FeaturesCard = ({ imageSrc, title, description,className }: FeaturesCardProps) => {
    return (
        <>
            <Card className={`w-auto h-full bg-[#1A1A1A] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 ${className} lg:min-h-96 lg:h-auto`}>
                <Image className="w-full h-[80%]" src={imageSrc} alt={title} />
                <div className="p-4">
                    <h3 className="text-xl font-bold text-white">{title}</h3>
                    <p className="text-gray-400">{description}</p>
                </div>
            </Card>
        </>
    );
}

export default FeaturesCard;