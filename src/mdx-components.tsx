import defaultMdxComponents from "fumadocs-ui/mdx";
import { ImageZoom } from "fumadocs-ui/components/image-zoom";
import * as TabsComponents from "fumadocs-ui/components/tabs";
import type { MDXComponents } from "mdx/types";
import { FeedbackBlock } from "./components/feedback/client";
import { onBlockFeedbackAction } from "./lib/github";

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    FeedbackBlock: (props) => (
      <FeedbackBlock {...props} onSendAction={onBlockFeedbackAction} />
    ),
    img: (props) => <ImageZoom {...(props as any)} />,
    ...TabsComponents,
    ...components,
  };
}
