import hooks from "eslint-plugin-react-hooks";

export const reactHooksConfig = {
  files: ["**/client/**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}"],
  plugins: {
    "react-hooks": hooks,
  },
  rules: {
    "react/react-in-jsx-scope": "off",
    ...hooks.configs.recommended.rules,
  },
};
