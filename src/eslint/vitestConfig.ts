import vitest from "@vitest/eslint-plugin";

export const vitestConfig = {
  files: ["src/**/*.test.{ts,tsx}"],
  languageOptions: {
    globals: {
      ...vitest.environments.env.globals,
    },
  },
  plugins: {
    vitest,
  },
  rules: {
    ...vitest.configs.recommended.rules,
    "vitest/expect-expect": [
      "error",
      {
        assertFunctionNames: [
          "expect",
          "expectBadRequest",
          "expectNotFound",
          "expectTextStatus",
          "expectUnauthorized",
        ],
      },
    ],
    "vitest/max-nested-describe": ["error", { max: 3 }],
  },
  settings: {
    vitest: {
      typecheck: true,
    },
  },
};
