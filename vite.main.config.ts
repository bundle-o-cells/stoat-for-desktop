import { defineConfig } from "vite";

// https://vitejs.dev/config
export default defineConfig({
  define: {
    __SERVER_URL__: JSON.stringify(
      process.env.VITE_SERVER_URL ?? "https://hardcast.ing",
    ),
  },
  build: {
    rollupOptions: {
      external: ["node-pipewire"],
    },
  },
});
