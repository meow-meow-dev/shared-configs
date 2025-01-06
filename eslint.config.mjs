import { defineConfig } from "./dist/eslint/index.mjs";

export default defineConfig({
  packageName: "@meow-meow-dev/shared-configs",
  tsconfigRootDir: import.meta.dirname,
});
