import Link from "next/link";
import { ArrowRight, BookOpen, Github } from "lucide-react";
import { gitConfig } from "@/lib/layout.shared";

export default function Hero() {
  return (
    <div className="relative overflow-hidden py-24 sm:py-32">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -z-10 h-[1000px] w-[1000px] -translate-x-1/2 mask-[radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-[-15%] dark:opacity-20 opacity-10">
        <div className="aspect-1097/845 w-274.25 bg-linear-to-tr from-[#ff4694] to-[#776fff] opacity-20" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-8 flex justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 ring-1 ring-fd-border hover:ring-fd-border/80 dark:bg-fd-secondary/30 bg-fd-secondary/50">
              Announcing our new documentation portal.{" "}
              <Link href="/docs" className="font-semibold text-fd-primary">
                <span className="absolute inset-0" aria-hidden="true" />
                Read more <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
          <h1 className="text-5xl font-bold tracking-tight sm:text-7xl bg-linear-to-b from-fd-foreground to-fd-foreground/60 bg-clip-text text-transparent">
            Prana Connect Documentation
          </h1>
          <p className="mt-6 text-lg leading-8 text-fd-muted-foreground">
            Everything you need to build, scale, and manage your applications
            with Vitetech solutions. Beautiful, fast, and developer-friendly
            documentation.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-x-6">
            <Link
              href="/docs"
              className="w-fit sm:w-auto rounded-md bg-fd-primary px-5 py-3 text-sm font-semibold text-fd-primary-foreground shadow-sm hover:bg-fd-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fd-primary flex items-center justify-center gap-2 transition-all hover:scale-105"
            >
              <BookOpen className="w-4 h-4" />
              Get Started
              <ArrowRight className="w-4 h-4 text-fd-primary-foreground/70" />
            </Link>
            <Link
              href={`https://github.com/${gitConfig.user}/${gitConfig.repo}`}
              target="_blank"
              className="w-fit sm:w-auto text-sm font-semibold leading-6 text-fd-foreground flex items-center justify-center gap-2 hover:text-fd-primary transition-colors py-3 sm:py-0"
            >
              <Github className="w-5 h-5" />
              GitHub Repository
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
