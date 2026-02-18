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
  metadataBase: baseUrl,
});

const outfit = Outfit({
  subsets: ["latin"],
});

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={outfit.className} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </head>
      <body className="flex flex-col min-h-screen">
        <RootProvider theme={{ defaultTheme: "dark" }}>{children}</RootProvider>
      </body>
    </html>
  );
}
