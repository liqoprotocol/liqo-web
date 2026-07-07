import { ogImageContentType, ogImageSize, renderSocialImage } from "@/lib/seo/og-image";

export const size = ogImageSize;
export const contentType = ogImageContentType;
export const alt = "Liqo — Move money globally without the technical heavy lifting.";

export default function OpengraphImage() {
  return renderSocialImage();
}
