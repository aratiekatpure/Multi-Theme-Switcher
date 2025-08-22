import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Multi-Theme-Switcher/",
  plugins: [react()],
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
});
