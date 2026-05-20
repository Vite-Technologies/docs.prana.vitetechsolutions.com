import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Resources",
  description:
    "Reference material for Prana Connect integrations: checklists, templates, and operational guidance.",
});

export default function ResourcesPage() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="max-w-2xl">
          <h1 className="text-3xl font-semibold tracking-tight">Resources</h1>
          <p className="mt-3 text-sm leading-6 text-fd-muted-foreground">
            Coming soon. We&apos;ll publish downloadable templates (invoice
            reference schemes, reconciliation exports) and go-live resources for
            hospital teams.
          </p>
        </div>
      </div>
    </main>
  );
}

