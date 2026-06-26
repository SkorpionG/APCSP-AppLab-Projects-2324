import js from "@eslint/js";
import html from "eslint-plugin-html";

export default [
  js.configs.recommended,
  {
    plugins: {
      html,
    },
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        document: "readonly",
        window: "readonly",
        localStorage: "readonly",
        console: "readonly",
        setTimeout: "readonly"
      },
    },
    rules: {
      "no-unused-vars": "warn",
      "no-console": "off",
    },
  },
];
