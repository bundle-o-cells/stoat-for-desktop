import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    // ...existing config...
    define: {
      __SERVER_URL__: JSON.stringify(env.VITE_SERVER_URL ?? "https://beta.revolt.chat"),
    },
  };
});