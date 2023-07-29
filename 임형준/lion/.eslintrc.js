module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["standard-with-typescript", "plugin:react/recommended", "prettier"],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    project: "**/tsconfig.json",
    ecmaVersion: "latest",
    sourceType: "module",
    createDefaultProgram: true, // project 참조 오류 해결
  },
  plugins: ["react"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/display-name": "off",
    "@typescript-eslint/naming-convention": "off",
    "@typescript-eslint/restrict-template-expressions": "off",
  },
};
