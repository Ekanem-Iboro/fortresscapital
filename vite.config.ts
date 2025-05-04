import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/fort/", // This is crucial for subdirectory deployment
  plugins: [react(), tailwindcss()],
});
