import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import { rules } from "@eslint/js/src/configs/eslint-all";


export default [
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      "no-unused-vars": "error",
    },
  }, {
    ignores: [".node_modules/*", ".dist"]
  },
];