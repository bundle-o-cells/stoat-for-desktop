import { defineConfig } from "vite";

export default defineConfig({
  define: {
    __SERVER_URL__: JSON.stringify(
      process.env.VITE_SERVER_URL ?? "https://beta.revolt.chat"
    ),
  },
});