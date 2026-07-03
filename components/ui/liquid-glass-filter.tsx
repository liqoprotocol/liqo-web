// components/ui/liquid-glass-filter.tsx
const LiquidGlassFilter = () => {
  return (
<svg style={{ position: "absolute", width: 0, height: 0 }} aria-hidden="true">
      <defs>
        <filter id="liquid-glass-refract" x="-15%" y="-15%" width="130%" height="130%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.01 0.025"
            numOctaves="2"
            seed="7"
            result="noise"
          />
          {/* almost no blur on the noise — keeps refraction crisp, not smeared */}
          <feGaussianBlur in="noise" stdDeviation="0.6" result="sharpNoise" />

          <feDisplacementMap
            in="SourceGraphic"
            in2="sharpNoise"
            scale="35"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </defs>
    </svg>
  );
}

export default LiquidGlassFilter;