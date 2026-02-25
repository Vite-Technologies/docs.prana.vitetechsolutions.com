import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import { createMetadata, BASE_URL } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Prana Connect — The Fastest Path to CBE Payment Channels",
  description:
    "A single API that connects your business to CBE payment channels. Prana Connect handles the bank's security, SOAP protocols, VPN connectivity, and INSA requirements — so your team can focus on your product.",
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
