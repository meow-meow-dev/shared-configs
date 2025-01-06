import testingLibrary from "eslint-plugin-testing-library";

export const testingLibraryConfig = {
  files: ["**/client/**/*.test.{js,mjs,jsx,ts,tsx}"],
  ...testingLibrary.configs["flat/react"],
};
