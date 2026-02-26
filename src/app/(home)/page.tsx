import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import { createMetadata, BASE_URL } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Prana Connect — The Fastest Path to CBE Payment Channels",
  description:
    "A unified gateway for CBE payment channels — managing enterprise-grade security and complex bank protocols so your team doesn't have to.",
  alternates: {
    canonical: BASE_URL,
  },
});

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
    </main>
  );
}
