import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { chunkSplitPlugin } from "vite-plugin-chunk-split";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    minify: false,
  },
  plugins: [
    react({
      babel: {},
    }),
    chunkSplitPlugin({
      // 指定拆包策略
      customSplitting: {
        "react-vendor": ["react", "react-dom"],
        library: ["element-plus"],
      },
    }),
  ],
});
