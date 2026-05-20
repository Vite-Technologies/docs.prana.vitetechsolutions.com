import { Shield, Zap, Code, Lock, RefreshCw, FileCheck } from "lucide-react";

const features = [
  {
    name: "One Integration, All Channels",
    description:
      "Connect hospital workflows to Wegagen Bank payment rails through a single REST API. No separate integrations per channel or product line.",
    icon: Code,
  },
  {
    name: "Managed Security",
    description:
      "We provide enterprise-grade security including automated TLS management and regulatory compliance, so your team can focus on building product.",
    icon: Shield,
  },
  {
    name: "Protocol Translation",
    description:
      "Send standard JSON requests. Prana Connect translates and validates bank-specific formats and returns consistent responses.",
    icon: RefreshCw,
  },
  {
    name: "Sub-Second Latency",
    description:
      "Optimized connection pooling and retries tuned for payment flows. Keep checkouts fast without sacrificing reliability.",
    icon: Zap,
  },
  {
    name: "Pre-Built Compliance",
    description:
      "Transaction logs, audit trails, and reconciliation-friendly references are built-in for hospital finance teams.",
    icon: FileCheck,
  },
  {
    name: "Sandbox Environment",
    description:
      "Test end-to-end hospital payment scenarios in a sandbox. Simulate success, failure, timeouts, and reversals before go-live.",
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
