import type { Config } from "prettier";

export function defineConfig(): Config {
  return {
    semi: true,
    singleQuote: false,
    tabWidth: 2,
    trailingComma: "all",
  };
}
