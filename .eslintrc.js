module.exports = {
  root: true,
  env: {
      node: true
  },
  extends: [
      "plugin:vue/essential",
      "eslint:recommended",
      "@vue/typescript/recommended",
      "@vue/prettier",
      "@vue/prettier/@typescript-eslint",
  ],
  parserOptions: {
      ecmaVersion: 2020
  },
  rules: {
      "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
      "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
      "prettier/prettier": "error",
      "max-len": ["error", { "code": 120, "tabWidth": 4 }],
      '@typescript-eslint/no-explicit-any': 'off'
  },
  overrides: [
      {
          files: [
              "**/__tests__/*.{j,t}s?(x)",
              "**/tests/unit/**/*.spec.{j,t}s?(x)"
          ],
          env: {
              jest: true
          }
      }
  ]
};
