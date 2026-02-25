import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import { createMetadata, BASE_URL } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Prana Connect - Healthcare Payment API Documentation",
  description:
    "Comprehensive API documentation, integration guides, and resources for Prana Connect's healthcare payment platform. Build, test, and deploy seamless healthcare payment integrations.",
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
