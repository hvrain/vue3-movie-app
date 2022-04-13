module.exports = {
  env: {
    browser: true,
    commonjs: true,
    node: true,
  },
  extends: [
    //vue
    "plugin:vue/vue3-strongly-recommended",
    //js
    "eslint:recommended"
  ],
  parserOptions: {
    ecmaVersion: 12,
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
    sourceType: 'module',
  },
  rules: {
    "vue/html-closing-bracket-newline": ["error", {
      "singleline": "never",
      "multiline": "never"
    }],
    "vue/html-self-closing": ["error", {
      "html": {
        "void": "always",
        "normal": "never",
        "component": "always"
      }
    }],
    "vue/multi-word-component-names": ["error", {
      "ignores": [
        "Home", "About"
      ]
    }]
  }
};
