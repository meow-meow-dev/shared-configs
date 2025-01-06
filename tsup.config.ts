import { defineConfig } from "tsup";

export default defineConfig({
  clean: true,
  dts: true,
  entry: ["src/eslint/index.ts", "src/prettier/index.ts"],
  format: "esm",
  outDir: "dist",
  outExtension: () => ({ js: ".mjs" }),
  target: "node22",
});
