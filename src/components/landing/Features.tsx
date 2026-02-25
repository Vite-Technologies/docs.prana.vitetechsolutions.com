import { Shield, Zap, Code, Lock, RefreshCw, FileCheck } from "lucide-react";

const features = [
  {
    name: "One Integration, All Channels",
    description:
      "Connect to mobile banking, USSD, internet banking, and more through a single REST API. No need to build separate integrations for each CBE channel.",
    icon: Code,
  },
  {
    name: "Managed Security",
    description:
      "We handle TLS certificates, VPN tunnels, and INSA compliance requirements. Your team never touches bank-grade security infrastructure.",
    icon: Shield,
  },
  {
    name: "Protocol Translation",
    description:
      "Send standard JSON requests. Prana Connect translates them to the SOAP/XML formats the bank requires and returns clean responses.",
    icon: RefreshCw,
  },
  {
    name: "Sub-Second Latency",
    description:
      "Optimized connection pooling and caching. Payment initiation calls resolve in under 200ms on average.",
    icon: Zap,
  },
  {
    name: "Pre-Built Compliance",
    description:
      "Transaction logging, audit trails, and regulatory reporting are handled automatically. Pass audits without writing extra code.",
    icon: FileCheck,
  },
  {
    name: "Sandbox Environment",
    description:
      "Test against real CBE channel behavior with our sandbox. Simulate success, failure, and edge cases before going live.",
    icon: Lock,
  },
];

export default function Features() {
  return (
    <section className="features-section">
      <div className="features-container">
        <div className="features-header">
          <p className="features-label">What you get</p>
          <h2 className="features-title">
            Skip the bank infrastructure. Ship your product.
          </h2>
          <p className="features-desc">
            Prana Connect removes weeks of integration work. Here&apos;s what we
            handle so you don&apos;t have to.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature) => (
            <div key={feature.name} className="feature-card">
              <div className="feature-icon">
                <feature.icon className="w-5 h-5" aria-hidden="true" />
              </div>
              <h3 className="feature-name">{feature.name}</h3>
              <p className="feature-desc">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
