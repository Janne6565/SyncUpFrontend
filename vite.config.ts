import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import stylin from "@stylin/vite-plugin";
import stylinTS from "@stylin/vite-plugin/ts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [stylin(), stylinTS(), react()],
});
