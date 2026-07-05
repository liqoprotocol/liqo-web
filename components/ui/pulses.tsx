// components/ui/pulses.tsx
import React from "react";

const STEP = 12.4141;
const SIZE = 10.3448;

type Cell = [col: number, row: number];

interface PixelPulseProps {
    bright: Cell[];   // pulses first
    dim: Cell[];      // pulses on a delay
    brightOpacity: number;
    dimOpacity: number;
    className?: string;
    always?: boolean;
}

const PixelPulse = ({ bright, dim, brightOpacity, dimOpacity, className = "", always }: PixelPulseProps) => (
    <svg
        width="60" height="60" viewBox="0 0 60 60" fill="none"
        xmlns="http://www.w3.org/2000/svg"
className={`pulse-icon shrink-0 transition-colors duration-300 group-hover:text-[#09FD42] ${
    always ? "pulse-always text-[#09FD42]" : "text-white"
} ${className}`}
    >
        {bright.map(([c, r]) => (
            <rect key={`b-${c}-${r}`} className="px-b" x={c * STEP} y={r * STEP}
                width={SIZE} height={SIZE} fill="currentColor"
                style={{ opacity: brightOpacity, ["--base" as string]: brightOpacity }} />
        ))}
        {dim.map(([c, r]) => (
            <rect key={`d-${c}-${r}`} className="px-d" x={c * STEP} y={r * STEP}
                width={SIZE} height={SIZE} fill="currentColor"
                style={{ opacity: dimOpacity, ["--base" as string]: dimOpacity }} />
        ))}
    </svg>
);

export const PulseIcon1 = ({ className, always }: { className?: string, always?: boolean }) => (
    <PixelPulse
        bright={[[2, 1], [1, 2], [2, 2], [3, 2], [2, 3]]}
        dim={[[2, 0], [1, 1], [3, 1], [0, 2], [4, 2], [1, 3], [3, 3], [2, 4]]}
        brightOpacity={0.9} dimOpacity={0.3} className={className}
        always={always}
    />
);
export const PulseIcon2 =  ({ className, always }: { className?: string, always?: boolean }) => (
    <PixelPulse
        bright={[[1, 1], [3, 1], [2, 2], [1, 3], [3, 3]]}
        dim={[[2, 0], [0, 2], [4, 2], [2, 4]]}
        brightOpacity={0.7} dimOpacity={0.3} className={className} always={always}
    />
);

export const PulseIcon3 =  ({ className, always }: { className?: string, always?: boolean }) => (
    <PixelPulse
        bright={[[2, 1], [1, 2], [3, 2], [2, 3]]}
        dim={[[2, 0], [3, 1], [0, 2], [4, 2], [1, 3], [2, 4]]}
        brightOpacity={0.7} dimOpacity={0.3} className={className}
        always={always}
    />
);