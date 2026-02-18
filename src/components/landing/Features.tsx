import { Zap, Shield, Globe, Cpu, Layout, Code } from "lucide-react";

const features = [
  {
    name: "Lightning Fast",
    description:
      "Optimized for performance with Next.js and Tailwind CSS. Instant page loads and smooth transitions.",
    icon: Zap,
  },
  {
    name: "Secure by Design",
    description:
      "Built with security in mind, following best practices for modern web development.",
    icon: Shield,
  },
  {
    name: "Global Scale",
    description:
      "Deploy globally with confidence. Prana scales seamlessly with your user base.",
    icon: Globe,
  },
  {
    name: "Developer First",
    description:
      "Comprehensive API references and integration guides designed for developers.",
    icon: Cpu,
  },
  {
    name: "Responsive UI",
    description:
      "Crafted with a focus on usability across all devices, from mobile to desktop.",
    icon: Layout,
  },
  {
    name: "Extensible",
    description:
      "Modular architecture allowing you to customize and extend features as needed.",
    icon: Code,
  },
];

export default function Features() {
  return (
    <div className="py-24 sm:py-32 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-fd-primary uppercase tracking-wide">
            Key Features
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-fd-foreground sm:text-4xl">
            Everything you need to succeed
          </p>
          <p className="mt-6 text-lg leading-8 text-fd-muted-foreground">
            Prana provides a comprehensive suite of tools and documentation to
            help you build modern, scalable applications.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col group">
                <dt className="text-base font-semibold leading-7 text-fd-foreground flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-fd-primary/10 group-hover:bg-fd-primary/20 transition-colors">
                    <feature.icon
                      className="h-6 w-6 text-fd-primary"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-fd-muted-foreground">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
