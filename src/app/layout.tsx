import { Outfit } from "next/font/google";
import { RootProvider } from "fumadocs-ui/provider/next";
import { createMetadata, baseUrl } from "@/lib/metadata";

import "./global.css";

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
