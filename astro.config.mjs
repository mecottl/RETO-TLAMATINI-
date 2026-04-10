// @ts-check
import { defineConfig } from "astro/config";
import { fileURLToPath } from "node:url";

// https://astro.build/config
export default defineConfig({
  // Sin barra final, servidores estáticos básicos (p. ej. python -m http.server) suelen dar 404
  // en rutas como /user/oferta/foo (la carpeta existe como foo/index.html).
  trailingSlash: "always",
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
