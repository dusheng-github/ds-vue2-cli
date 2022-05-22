module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },
  plugins: ['vue'],
  extends: [
    'eslint:recommended',
    'plugin:vue/essential',
    'prettier'
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    parser: '@babel/eslint-parser'
  },
  globals: {
    wx: true,
    QRCode: true,
    AMap: true,
    AMapUI: true,
    ClipboardJS: true
  },
  rules: {
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-const-assign': 'warn',
    'no-this-before-super': 'warn',
    'no-undef': 'error',
    'no-unreachable': 'warn',
    'no-unused-vars': 'warn',
    'constructor-super': 'warn',
    'valid-typeof': 'error',
    semi: ['error', 'never'],
    indent: ['error', 2, { SwitchCase: 1 }],
    quotes: ['error', 'single'],
    'comma-dangle': ['error', 'only-multiline'],
    'brace-style': 'error',
    'block-scoped-var': 'error',
    camelcase: 'off',
    'key-spacing': [
      'error',
      {
        afterColon: true
      }
    ],
    'object-curly-spacing': ['error', 'always'],
    'space-before-function-paren': ['error', 'never'],
    'switch-colon-spacing': ['error', { 'after': false, 'before': true }],
    'space-infix-ops': 'error',
    'wrap-iife': ['error', 'outside'],
    'vue/require-default-prop': 'off',
    'vue/require-valid-default-prop': 'off',
    'vue/no-v-html': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/multiline-html-element-content-newline': 'off'
  }
}