// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,      // 0.0.0.0 pe bind karega
    port: 5173,      // agar change karna ho to yahan specify karo
  },
});
