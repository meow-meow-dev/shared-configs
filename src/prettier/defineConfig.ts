import type { Config } from "prettier";

export function defineConfig(): Config {
  return {
    plugins: ["prettier-plugin-tailwindcss", "prettier-plugin-sql"],
    semi: true,
    singleQuote: false,
    tabWidth: 2,
    trailingComma: "all",
  };
}
