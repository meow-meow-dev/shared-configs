import importPlugin from "eslint-plugin-import";

const rules = {
  "import/no-default-export": "error",
  "import/no-unresolved": ["error", { ignore: ["cloudflare:test"] }],
};

export const importConfigs = [
  {
    ...importPlugin.flatConfigs.recommended,
    ...importPlugin.flatConfigs.typescript,
    files: ["**/*.{js,cjs,mjs}"],
    rules,
    settings: {
      "import/resolver": {
        node: true,
      },
    },
  },
  {
    ...importPlugin.flatConfigs.recommended,
    ...importPlugin.flatConfigs.typescript,
    files: ["**/*.{ts,tsx}"],
    rules,
    settings: {
      "import/resolver": {
        node: true,
        typescript: true,
      },
    },
  },
  // enable default exports for tools configurations (eslint, vite, prettier...)
  {
    ...importPlugin.flatConfigs.recommended,
    ...importPlugin.flatConfigs.typescript,
    files: ["**/.*config*.{js,cjs,mjs,ts}", "**/*config*.{js,cjs,mjs,ts}"],
    rules: {
      "import/no-default-export": "off",
    },
  },
];
