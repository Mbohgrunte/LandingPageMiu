import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import Icons from "unplugin-icons/vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    solidPlugin(),
    tailwindcss(),
    Icons({
      compiler: "jsx",
      jsx: "preact",
    }),
  ],
  server: {
    port: 3000,
  },
  build: {
    target: "esnext",
  },
});
