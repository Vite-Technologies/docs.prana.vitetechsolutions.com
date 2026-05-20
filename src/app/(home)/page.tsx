import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import { createMetadata, BASE_URL } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Prana Connect - Wegagen Bank — Hospital Payments API Docs",
  description:
    "Documentation for integrating hospital systems with Prana Connect, powered by Wegagen Bank. APIs, guides, sandbox flows, and go-live checklist.",
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
