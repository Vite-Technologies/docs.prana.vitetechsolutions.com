import type { Metadata } from "next/types";

export function createMetadata(override: Metadata): Metadata {
	return {
		...override,
		openGraph: {
			title: override.title ?? undefined,
			description: override.description ?? undefined,
			url: "https://cbeapi.vitetechsolutions.com",
			images: "https://cbeapi.vitetechsolutions.com/og.png",
			siteName: "Prana Connect",
			...override.openGraph,
		},
		twitter: {
			card: "summary_large_image",
			creator: "@alulamoke",
			title: override.title ?? undefined,
			description: override.description ?? undefined,
			images: "https://cbeapi.vitetechsolutions.com/og.png",
			...override.twitter,
		},
	};
}

export const baseUrl =
	process.env.NODE_ENV === "development"
		? new URL("http://localhost:3000")
		: new URL("https://cbeapi.vitetechsolutions.com");