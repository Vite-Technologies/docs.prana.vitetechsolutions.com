import { Logo } from "@/components/logo";
import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

// fill this with your actual GitHub info, for example:
export const gitConfig = {
  user: "Vite-Technologies",
  repo: "docs.prana.vitetechsolutions.com",
  branch: "main",
};

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: <Logo />,
    },
    links: [
      { type: "main", text: "Documentation", url: "/docs", active: "nested-url" },
      { type: "main", text: "Blog", url: "/blog", active: "nested-url" },
      { type: "main", text: "Resources", url: "/resources", active: "nested-url" },
    ],
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
  };
}
