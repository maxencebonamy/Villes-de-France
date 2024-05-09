import { defineConfig } from "vitest/config"
import react from "@vitejs/plugin-react"
import { resolve } from "path"

export default defineConfig({
	plugins: [react()],
	test: {
		setupFiles: ["dotenv/config"],
		environment: "happy-dom",
		include: ["./src/**/*.test.ts"]
	},
	resolve: {
		alias: [{ find: "@", replacement: resolve(__dirname, "./src") }]
	}
})