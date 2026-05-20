import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Blog",
  description:
    "Updates, release notes, and integration insights for Prana Connect hospital payments powered by Wegagen Bank.",
});

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="max-w-2xl">
          <h1 className="text-3xl font-semibold tracking-tight">Blog</h1>
          <p className="mt-3 text-sm leading-6 text-fd-muted-foreground">
            Coming soon. This section will contain integration notes, SDK
            updates, and best practices for hospital deployments.
          </p>
        </div>
      </div>
    </main>
  );
}

