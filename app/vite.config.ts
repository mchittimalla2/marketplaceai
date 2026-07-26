import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const codeServerBase = "/proxy/5173/";

export default defineConfig(({ command }) => ({
  plugins: [
    react(),
    {
      name: "code-server-proxy",
      apply: "serve",
      configureServer(server) {
        const restoreProxyBase = (url: string | undefined) => {
          if (!url || url.startsWith(codeServerBase)) {
            return url;
          }

          return `${codeServerBase.slice(0, -1)}${url}`;
        };

        server.middlewares.use((request, _response, next) => {
          request.url = restoreProxyBase(request.url);
          next();
        });

        server.httpServer?.prependListener("upgrade", (request) => {
          request.url = restoreProxyBase(request.url);
        });
      },
    },
  ],

  // Vite emits the proxy prefix in development; the plugin above restores the
  // prefix that code-server strips before forwarding HTTP and HMR requests.
  base: command === "serve" ? codeServerBase : "/",

  server: {
    host: "0.0.0.0",
    port: 5173,
    strictPort: true,
    allowedHosts: ["code.marketplaceai.io"],
    hmr: {
      protocol: "wss",
      host: "code.marketplaceai.io",
      clientPort: 443,
    },
  },
}));
