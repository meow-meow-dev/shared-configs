import { defineConfig } from "tsup";

export default defineConfig({
  clean: true,
  entry: ["src/eslint/index.ts", "src/prettier/index.ts"],
  experimentalDts: true,
  format: "esm",
  outDir: "dist",
  outExtension: () => ({ js: ".mjs" }),
  target: "node22",
});
