import type { Metadata } from "next/types";

export const BASE_URL = "https://cbeapi.vitetechsolutions.com";

export function createMetadata(override: Metadata): Metadata {
	return {
		...override,
		openGraph: {
			title: override.title ?? undefined,
			description: override.description ?? undefined,
			url: BASE_URL,
			images: [
				{
					url: "/og.png",
					width: 1200,
					height: 630,
				}
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
				}
			],
			...override.twitter,
		},
	};
}

export const baseUrl =
	process.env.NODE_ENV === "development"
		? new URL("http://localhost:3000")
		: new URL(BASE_URL);