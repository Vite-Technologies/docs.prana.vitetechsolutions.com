import Link from "next/link";
import { ArrowRight, Download, Terminal } from "lucide-react";
import HeroVisual from "./HeroVisual";

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-container">
        {/* Primer */}
        <p className="hero-primer">
          A single API that connects your business to CBE payment channels —
          handling security, SOAP protocols, VPN, and INSA requirements for you.
        </p>

        <div className="hero-grid">
          {/* Text */}
          <div className="hero-text">
            <h1 className="hero-headline">
              The fastest path to CBE payment channels
            </h1>
            <p className="hero-headline-sub">
              Build your product. We&apos;ll handle the CBE integration.
            </p>
            <p className="hero-subhead">
              Prana Connect provides a unified gateway for all CBE payment
              channels. We handle the underlying security and connectivity so
              your team stops managing complex bank infrastructure and starts
              shipping product.
            </p>
            <p className="hero-body">
              A pre-configured environment for protocol translation, secure
              connectivity, and compliance — one standard interface, no bank
              infrastructure to maintain.
            </p>

            <div className="hero-actions">
              <Link href="/docs" className="hero-btn-primary" id="cta-start">
                Start Your Integration
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/docs" className="hero-btn-secondary" id="cta-guide">
                <Download className="w-4 h-4" />
                Get The API Guide
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
              — test endpoints live, no registration required.
            </span>
          </div>
          <div className="hero-bottom-cta">
            <Download className="w-4 h-4" />
            <Link href="/docs" className="hero-link" id="cta-checklist">
              Download the CBE Integration Checklist
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
