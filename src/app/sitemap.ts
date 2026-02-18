import type { MetadataRoute } from "next";
import { source } from "@/lib/source";

const BASE_URL = "https://cbeapi.vitetechsolutions.com";

export const revalidate = false;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

  const basePages: MetadataRoute.Sitemap = [
{
      url:BASE_URL,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
  ]

  const docPages: MetadataRoute.Sitemap = source.getPages().map((page) => ({
		url: `${BASE_URL}${page.url}`,
		lastModified: page.data.lastModified
			? new Date(page.data.lastModified)
			: new Date(),
		changeFrequency: "weekly",
		priority: 0.7,
	}));

  return [
    ...basePages,
    ...docPages,
  ];
}
