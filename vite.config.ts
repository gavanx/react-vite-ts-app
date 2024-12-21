import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export const vitePluginAddScriptVersion = {
  name: "vite-plugin-add-script-version",
  transformIndexHtml(html) {
    const customScript =
      '<script src="react-render-tracker.js" data-config="inpage:true"></script>';
    return html.replace("<body>", "<body>" + customScript);
  },
};
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});
