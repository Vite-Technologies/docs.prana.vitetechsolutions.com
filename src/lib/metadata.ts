import type { Metadata } from "next/types";

export function createMetadata(override: Metadata): Metadata {
  return {
    ...override,
    openGraph: {
      title: override.title ?? undefined,
      description: override.description ?? undefined,
      url: "https://cbeapi.vitetechsolutions.com",
      images: [
        {
          url: "/logo.jpg",
          width: 1200,
          height: 630,
        },
      ],
      siteName: "Prana Connect",
      ...override.openGraph,
    },
    twitter: {
      card: "summary_large_image",
      creator: "@alulamoke",
      title: override.title ?? undefined,
      description: override.description ?? undefined,
      images: [
        {
          url: "/logo.jpg",
          width: 1200,
          height: 630,
        },
      ],
      ...override.twitter,
    },
  };
}

export const baseUrl =
  process.env.NODE_ENV === "development"
    ? new URL("http://localhost:3000")
    : new URL("https://cbeapi.vitetechsolutions.com");
