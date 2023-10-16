import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import vercel from "@astrojs/vercel/serverless";
import partytown from "@astrojs/partytown";
import prefetch from "@astrojs/prefetch";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import rehypeExternalLinks from "rehype-external-links";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://myke-blog.vercel.app",
  integrations: [
    svelte(),
    partytown(),
    prefetch(),
    mdx(),
    sitemap(),
    tailwind(),
  ],
  output: "server",
  adapter: vercel(),
  markdown: {
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          content: { type: "text", value: " 🔗" },
        },
      ],
    ],
  },
});
