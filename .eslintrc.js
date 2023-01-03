module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: ["eslint:recommended", "next/core-web-vitals", "plugin:@typescript-eslint/recommended", "plugin:prettier/recommended", "plugin:react/recommended", "plugin:react-hooks/recommended", "plugin:storybook/recommended"],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: ["react", "@typescript-eslint"],
  settings: {
    react: {
      version: "detect"
    }
  },
  rules: {
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "react/react-in-jsx-scope": "off"
  }
};