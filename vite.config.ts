import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/", // This is crucial for subdirectory deployment
  plugins: [react(), tailwindcss()],
});
//
