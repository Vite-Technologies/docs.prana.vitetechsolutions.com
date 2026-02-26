"use client";

export default function HeroVisual() {
  return (
    <div className="hero-code-window">
      <div className="hero-code-titlebar">
        <div className="hero-code-dots">
          <span />
          <span />
          <span />
        </div>
        <span className="hero-code-filename">integration.ts</span>
      </div>
      <pre className="hero-code-body">
        <code>
          <span className="code-keyword">import</span>
          {" { PranaConnect } "}
          <span className="code-keyword">from</span>
          {' "'}
          <span className="code-string">@prana/connect</span>
          {'";\n\n'}
          <span className="code-keyword">const</span>
          {" client = "}
          <span className="code-keyword">new</span>{" "}
          <span className="code-fn">PranaConnect</span>
          {"({\n"}
          {"  apiKey: process.env."}
          <span className="code-var">PRANA_API_KEY</span>
          {",\n"}
          {"  environment: "}
          {'"'}
          <span className="code-string">production</span>
          {'"\n'} {"});\n\n"}
          <span className="code-comment">
            {
              "// That's it. Complex bank protocols and security are handled automatically."
            }
          </span>
          {"\n"}
          <span className="code-keyword">const</span>
          {" payment = "}
          <span className="code-keyword">await</span>
          {" client."}
          <span className="code-fn">initiate</span>
          {"({\n"}
          {"  channel: "}
          {'"'}
          <span className="code-string">mobile-banking</span>
          {'",\n'}
          {"  amount: "}
          <span className="code-num">1500.00</span>
          {",\n"}
          {"  currency: "}
          {'"'}
          <span className="code-string">ETB</span>
          {'",\n'}
          {"  reference: "}
          {'"'}
          <span className="code-string">INV-2024-001</span>
          {'"\n'}
          {"});\n\n"}
          <span className="code-comment">{"// payment.id → "}</span>
          <span className="code-comment code-dim">{"txn_8f3k2m9x1n"}</span>
        </code>
      </pre>
    </div>
  );
}
