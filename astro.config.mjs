// @ts-check
import { defineConfig } from "astro/config";

import embeds from "astro-embed/integration";

import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

import icon from "astro-icon";

import tailwindcss from "@tailwindcss/vite";

import og from "astro-og";

// https://astro.build/config
export default defineConfig({
  site: "https://beautyofmathematics.com",

  redirects: {
    "/love-and-mathematics-music-playlist": "/math-love-songs",
    "/infinity-netflix-documentary":
      "/a-trip-to-infinity-netflix-documentary-streaming-now",
    "/math--science-tattoo-inspiration-tom-crawford":
      "/math-science-tattoo-inspiration-tom-crawford",
    "/pride-cross-stitch-patterns-velebrating-the-beauty-of-math":
      "/pride-cross-stitch-patterns-celebrating-the-beauty-of-math",
    "/25-science-gifts/": "/category/memories/",
    "/carnival-of--mathematics/": "/carnival-of-mathematics-221",
  },

  integrations: [embeds(), mdx(), sitemap(), icon(), og()],

  vite: {
    plugins: [tailwindcss()],
  },
});