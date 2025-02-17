import react from "eslint-plugin-react";
import globalDefault from "globals";

const { browser, serviceworker } = globalDefault;

const rules = {
  "react/button-has-type": ["error"],
  "react/default-props-match-prop-types": ["error"],
  "react/destructuring-assignment": ["error"],
  "react/forward-ref-uses-ref": ["error"],
  "react/function-component-definition": [
    "error",
    {
      namedComponents: "function-declaration",
      unnamedComponents: "arrow-function",
    },
  ],
  "react/hook-use-state": ["error"],
  "react/jsx-boolean-value": ["error", "never"],
  "react/jsx-child-element-spacing": ["error"],
  "react/jsx-curly-brace-presence": [
    "error",
    { children: "never", props: "never" },
  ],
  "react/jsx-fragments": ["error", "syntax"],
  "react/jsx-handler-names": [
    "error",
    { checkInlineFunction: true, checkLocalVariables: true },
  ],
  "react/jsx-no-comment-textnodes": ["error"],
  "react/jsx-no-constructed-context-values": ["error"],
  "react/jsx-no-leaked-render": ["error"],
  "react/jsx-no-useless-fragment": ["error"],
  "react/jsx-pascal-case": ["error"],
  "react/jsx-props-no-spread-multi": ["error"],
  "react/jsx-wrap-multilines": ["error", { declaration: "parens" }],
  "react/no-access-state-in-setstate": ["error"],
  "react/no-array-index-key": ["error"],
  "react/no-multi-comp": ["error"],
  "react/no-object-type-as-default-prop": ["error"],
  "react/no-unstable-nested-components": ["error"],
  "react/self-closing-comp": ["error"],
  "react/style-prop-object": ["error"],
  "react/void-dom-elements-no-children": ["error"],
};

const settings = {
  react: {
    version: "detect",
  },
};

const globals = {
  ...serviceworker,
  ...browser,
};

const reactConfigFlat = react.configs.flat;

const languageOptions = {
  ...reactConfigFlat.recommended.languageOptions,
  ...reactConfigFlat["jsx-runtime"].languageOptions,
  globals,
  parserOptions: {
    projectService: true,
    sourceType: "module",
    ...reactConfigFlat.recommended.languageOptions.parserOptions,
    ...reactConfigFlat["jsx-runtime"].languageOptions.parserOptions,
  },
};

export const reactConfig = {
  files: ["**/client/**/*.{js,mjs,jsx,ts,tsx}"],
  ...reactConfigFlat.recommended,
  ...reactConfigFlat["jsx-runtime"],
  languageOptions,
  rules,
  settings,
};
