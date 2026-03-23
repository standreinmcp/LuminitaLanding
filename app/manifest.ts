import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Lumi Interior Design Advisory",
    short_name: "Lumi",
    description:
      "Private interior design advisory sessions with architect Luminita Campian. Get clarity before you renovate.",
    start_url: "/",
    display: "standalone",
    background_color: "#F5F2EE",
    theme_color: "#1C1109",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
