import { Outfit } from "next/font/google";
import { RootProvider } from "fumadocs-ui/provider/next";

import "./global.css";
import { baseUrl, createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: {
    template: "%s | Prana Connect",
    default: "Prana Connect",
  },
  description:
    "Comprehensive API documentation, integration guides, and resources to help you seamlessly connect to Prana Connect's powerful healthcare payment system. Build, test, and deploy with ease.",
  keywords: [
    "Prana Connect Documentation",
    "Healthcare Payment API",
    "Medical Billing API",
    "API integration guide",
  ],
  metadataBase: baseUrl,
});

const outfit = Outfit({
  subsets: ["latin"],
});

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={outfit.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider theme={{ defaultTheme: "dark" }}>{children}</RootProvider>
      </body>
    </html>
  );
}
