import Link from "next/link";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-fd-border bg-fd-background/50 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-xl font-bold bg-linear-to-r from-fd-primary to-fd-primary/60 bg-clip-text text-transparent">
                Prana Connect
              </span>
            </Link>
            <p className="text-sm leading-6 text-fd-muted-foreground max-w-xs">
              Empowering healthcare providers with seamless payment solutions
              and comprehensive developer resources.
            </p>
            <div className="flex gap-x-6">
              <Link
                href="https://github.com/Vite-Technologies"
                className="text-fd-muted-foreground hover:text-fd-primary transition-colors"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-fd-muted-foreground hover:text-fd-primary transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-fd-muted-foreground hover:text-fd-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-fd-foreground">
                  Resources
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <Link
                      href="/docs"
                      className="text-sm leading-6 text-fd-muted-foreground hover:text-fd-primary transition-colors"
                    >
                      Documentation
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/docs/api-reference"
                      className="text-sm leading-6 text-fd-muted-foreground hover:text-fd-primary transition-colors"
                    >
                      API Reference
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/docs/guides"
                      className="text-sm leading-6 text-fd-muted-foreground hover:text-fd-primary transition-colors"
                    >
                      Guides
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-fd-foreground">
                  Support
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <Link
                      href="#"
                      className="text-sm leading-6 text-fd-muted-foreground hover:text-fd-primary transition-colors"
                    >
                      Help Center
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-sm leading-6 text-fd-muted-foreground hover:text-fd-primary transition-colors"
                    >
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-sm leading-6 text-fd-muted-foreground hover:text-fd-primary transition-colors"
                    >
                      Status
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-fd-foreground">
                  Company
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <Link
                      href="#"
                      className="text-sm leading-6 text-fd-muted-foreground hover:text-fd-primary transition-colors"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-sm leading-6 text-fd-muted-foreground hover:text-fd-primary transition-colors"
                    >
                      Blog
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-fd-foreground">
                  Legal
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <Link
                      href="#"
                      className="text-sm leading-6 text-fd-muted-foreground hover:text-fd-primary transition-colors"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-sm leading-6 text-fd-muted-foreground hover:text-fd-primary transition-colors"
                    >
                      Terms of Service
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-fd-border pt-8 sm:mt-20 lg:mt-24 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs leading-5 text-fd-muted-foreground">
            &copy; {currentYear} Vite Technologies Solutions. All rights
            reserved.
          </p>
          <div className="flex items-center gap-2 text-xs text-fd-muted-foreground">
            <Mail className="h-3 w-3" />
            <span>support@vitetechsolutions.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
