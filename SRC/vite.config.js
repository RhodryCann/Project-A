import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  //uses src folder to crawl structure and understand files html/js/css etc
  plugins: [react()],
  root: "SRC",
});
