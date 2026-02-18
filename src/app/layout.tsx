import { Outfit } from "next/font/google";
import { RootProvider } from "fumadocs-ui/provider/next";
import { createMetadata, baseUrl } from "@/lib/metadata";

import "./global.css";

export const metadata = createMetadata({
  title: {
    template: "Prana Connect | %s",
    default: "Prana Connect",
  },
  description:
    "Comprehensive API documentation, integration guides, and resources to help you seamlessly connect to Prana Connect's powerful healthcare payment system. Build, test, and deploy with ease.",
  keywords: [
    "Prana Connect",
    "Prana Connect Payment",
    "Prana Connect API",
    "Prana Connect Documentation",
    "Prana Connect Integration",
    "Prana Connect Resources",
    "Prana Connect SDK",
    "API",
    "Documentation",
    "Integration",
    "Resources",
    "SDK",
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
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
