import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/sanket-methe-dev/",
  plugins: [react()],
});