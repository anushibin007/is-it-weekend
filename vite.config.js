import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";

// https://vitejs.dev/config/
export default defineConfig({
	base: "https://anushibin007.github.io/is-it-weekend",
	plugins: [reactRefresh()],
});
