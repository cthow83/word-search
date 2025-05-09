import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom",
    coverage: {
      include: ["src/**/*.{js,jsx,ts,tsx}"],
      exclude: [
        "src/main.jsx",
        "src/App.jsx",
        "src/**/*.test.*",
        "src/**/*.spec.*",
        "src/**/__tests__/**",
      ],
    },
  },
  esbuild: {
    jsx: "automatic",
    jsxImportSource: "react",
  },
});
