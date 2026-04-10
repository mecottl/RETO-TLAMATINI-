// @ts-check
import { defineConfig } from "astro/config";
import { fileURLToPath } from "node:url";

// https://astro.build/config
export default defineConfig({
  vite: {
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
        "@components": fileURLToPath(
          new URL("./src/components", import.meta.url),
        ),
        "@layouts": fileURLToPath(new URL("./src/layouts", import.meta.url)),
        "@assets": fileURLToPath(new URL("./src/assets/*", import.meta.url))
      },
    },
  },
});
