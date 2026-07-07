import { ImageResponse } from "next/og";
import fs from "node:fs";
import path from "node:path";
import { siteConfig } from "./config";

const SVG_ATTR_NAME_MAP: Record<string, string> = {
  "fill-rule": "fillRule",
  "clip-rule": "clipRule",
  "stroke-width": "strokeWidth",
  "stroke-linecap": "strokeLinecap",
  "stroke-linejoin": "strokeLinejoin",
};

function parseLogoMark() {
  const svgSrc = fs.readFileSync(
    path.join(process.cwd(), "public/logo.svg"),
    "utf-8"
  );
  const viewBox = svgSrc.match(/viewBox="([^"]+)"/)?.[1] ?? "0 0 30 30";

  const paths = [...svgSrc.matchAll(/<path\b([^>]*?)\/>/g)].map(([, attrString]) => {
    const props: Record<string, string> = {};
    for (const [, rawName, value] of attrString.matchAll(/([\w-]+)="([^"]*)"/g)) {
      props[SVG_ATTR_NAME_MAP[rawName] ?? rawName] = value;
    }
    return props;
  });

  return { viewBox, paths };
}

// Parsed once at module load — the logo mark is static, so there's no
// reason to re-read and re-parse the SVG on every icon request.
const logoMark = parseLogoMark();

/** Renders the Liqo pinwheel mark at ~70% size, centered on a rounded
 * dark background, at the given square canvas size. Used for the
 * Android/PWA manifest icons (icon-192.png, icon-512.png). */
export function renderBrandIcon(size: number) {
  const markSize = Math.round(size * 0.7);
  const radius = Math.round(size * 0.22);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: siteConfig.themeColor,
          borderRadius: radius,
        }}
      >
        <svg width={markSize} height={markSize} viewBox={logoMark.viewBox} fill="none">
          {logoMark.paths.map((attrs, i) => (
            <path key={i} {...attrs} />
          ))}
        </svg>
      </div>
    ),
    { width: size, height: size }
  );
}
