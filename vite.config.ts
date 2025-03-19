import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: "src/app/main.tsx",
        serviceWorker: "src/workers/service-worker.ts",
      },
      output: {
        dir: "dist",
        entryFileNames: "[name].js",
      },
    },
  },

  dev: {},
  server: {},
});
