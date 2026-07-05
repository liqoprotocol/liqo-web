import Image, { StaticImageData } from "next/image";
import { Card } from "./card";

export interface UseCaseCardProps {
    imageSrc: string | StaticImageData;
    title: string;
    className?: string;
    customImageContainer?:React.ReactNode;
    customImageClassName?:string;
}

const UseCaseCard = ({ imageSrc, title, className, customImageContainer, customImageClassName }: UseCaseCardProps) => {
    return (
        <>
            <Card className={`w-auto relative h-118.75 bg-[#1A1A1A] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 ${className} lg:min-h-96  bg-linear-to-b from-[#141414]  to-primary-soft`}>

                <div className="p-4">
                    <h3 className="text-xl font-medium text-white">{title}</h3>
                </div>
                {customImageContainer ? (
                    <div className={customImageClassName}>
                        {customImageContainer}
                    </div>
                ) : (
                    <Image className={`w-full h-auto  ${customImageClassName || ''}`} src={imageSrc} alt={title} width={342.39} height={349.4} />
                )}
            </Card>
        </>
    );
}

export default UseCaseCard;