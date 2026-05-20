import Link from "next/link";
import { ArrowRight, Download, Terminal } from "lucide-react";
import HeroVisual from "./HeroVisual";

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-container">
        {/* Primer */}
        <p className="hero-primer">
          Prana Connect for Wegagen Bank — a unified payment layer for hospital
          systems, handling secure banking connectivity so your team ships
          faster.
        </p>

        <div className="hero-grid">
          {/* Text */}
          <div className="hero-text">
            <h1 className="hero-headline">
              Integrate hospital payments powered by Wegagen Bank
            </h1>
            <p className="hero-headline-sub">
              Build your hospital workflow. We&apos;ll handle the bank rails.
            </p>
            <p className="hero-subhead">
              Prana Connect provides a single API to collect payments and
              reconcile transactions for integrated hospital systems — powered
              by Wegagen Bank.
            </p>
            <p className="hero-body">
              A production-ready gateway for secure connectivity, protocol
              translation, and audit trails — one standard interface, no banking
              infrastructure to maintain.
            </p>

            <div className="hero-actions">
              <Link href="/docs" className="hero-btn-primary" id="cta-start">
                Start Your Integration
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/docs" className="hero-btn-secondary" id="cta-guide">
                <Download className="w-4 h-4" />
                Read the API Guide
              </Link>
            </div>
          </div>

          {/* Code visual */}
          <div className="hero-art">
            <HeroVisual />
          </div>
        </div>

        {/* Bottom CTAs */}
        <div className="hero-bottom-ctas">
          <div className="hero-bottom-cta">
            <Terminal className="w-4 h-4" />
            <span>
              Want to see the code?{" "}
              <Link href="/docs" className="hero-link" id="cta-sandbox">
                Explore the API Sandbox
              </Link>{" "}
              — use sample requests for common hospital workflows.
            </span>
          </div>
          <div className="hero-bottom-cta">
            <Download className="w-4 h-4" />
            <Link href="/docs" className="hero-link" id="cta-checklist">
              Download the Go‑Live Checklist
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
