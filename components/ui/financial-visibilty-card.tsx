"use client";
import { useEffect, useRef, useState } from "react";
import { Card } from "./card";
import React from "react";

export interface FinancialVisibiltyCardProps {
    icon: React.ReactNode;
    title: string;
    description?: string;
    className?: string;
    always?: boolean;
}

const FinancialVisibiltyCard = ({ icon, title, className, description, always }: FinancialVisibiltyCardProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        // only activate on touch devices — desktop keeps hover behavior
        if (window.matchMedia("(hover: hover)").matches || !ref.current) return;

        const observer = new IntersectionObserver(
            ([entry]) => setInView(entry.intersectionRatio >= 0.9),
            { threshold: 0.9 }
        );
        observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <Card
            ref={ref}
            className={`group ${inView ? "in-view" : ""} shrink-0 w-[78%] max-w-[320px] snap-start lg:shrink lg:w-[33.33%] lg:max-w-none flex flex-col justify-center items-center relative min-h-72.5 cursor-pointer ${
                always ? "bg-[#1B1B1B] border-0" : "bg-[#0D0D0D] border border-[#FFFFFF1A]"
            } hover:bg-[#1B1B1B] rounded-sm overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-600 ${className} pt-10`}
        >
            {icon}
            <div className="p-4 text-center mt-10">
                <h3 className="text-xl font-medium text-white">{title}</h3>
                {description && (
                    <p className="text-[#E5E5E5] text-sm font-semibold mt-2">{description}</p>
                )}
            </div>
        </Card>
    );
};

export default FinancialVisibiltyCard;