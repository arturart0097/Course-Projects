import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: "src",
  // resolve: {
  //   alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  // },
});
