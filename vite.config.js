// Base44 plugin disabled - using local PostgreSQL backend
// import base44 from "@base44/vite-plugin";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  logLevel: "error",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: "0.0.0.0",
    port: process.env.PORT || 5173,
    allowedHosts: ["temitopeserentainer.onrender.com", "temitopeseretainer.onrender.com"],
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
      }
    }
  },
  plugins: [
    // base44({
    //   legacySDKImports: process.env.BASE44_LEGACY_SDK_IMPORTS === "true",
    //   hmrNotifier: true,
    //   navigationNotifier: true,
    //   visualEditAgent: true,
    // }),
    react(),
  ],
});

