import { ImageResponse } from "next/og";
import { siteConfig } from "./config";

export const ogImageSize = {
  width: siteConfig.ogImage.width,
  height: siteConfig.ogImage.height,
};
export const ogImageContentType = "image/png";

export function renderSocialImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: siteConfig.themeColor,
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            width: 72,
            height: 72,
            borderRadius: "9999px",
            background: siteConfig.brandColor,
            marginBottom: 40,
          }}
        />
        <div
          style={{
            display: "flex",
            fontSize: 64,
            fontWeight: 700,
            color: "#FFFFFF",
            letterSpacing: "-0.02em",
          }}
        >
          {siteConfig.name}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 24,
            fontSize: 32,
            color: "#D5D5D5",
            maxWidth: 900,
          }}
        >
          {siteConfig.tagline}
        </div>
      </div>
    ),
    { ...ogImageSize }
  );
}
