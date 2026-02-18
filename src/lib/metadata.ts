import type { Metadata } from "next/types";

export const BASE_URL = "https://cbeapi.vitetechsolutions.com";

export const DEFAULT_KEYWORDS = [
  "Healthcare payments",
  "API documentation",
  "Medical billing integration",
  "Prana Connect",
  "Payment gateway for healthcare",
  "Healthcare fintech",
  "Seamless healthcare payments",
  "Medical API",
  "Healthcare financial technology",
  "Automated healthcare payments",
  "Healthcare API integration",
  "Medical payments platform",
  "Fintech for doctors",
  "Healthcare billing automation",
  "Prana API",
];

export function createMetadata(override: Metadata): Metadata {
  return {
    ...override,
    keywords: override.keywords
      ? Array.isArray(override.keywords)
        ? [...DEFAULT_KEYWORDS, ...override.keywords]
        : `${DEFAULT_KEYWORDS.join(", ")}, ${override.keywords}`
      : DEFAULT_KEYWORDS,
    openGraph: {
      title: override.title ?? undefined,
      description: override.description ?? undefined,
      url: BASE_URL,
      images: [
        {
          url: "/og.png",
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
          url: "/og.png",
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
    : new URL(BASE_URL);