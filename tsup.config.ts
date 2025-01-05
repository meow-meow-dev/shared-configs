import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/prettier/prettier.config.js"],
  clean: true,
  format: "esm",
});
