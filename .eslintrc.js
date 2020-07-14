module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    es2020: true
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'standard'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 11,
    sourceType: 'module'
  },
  plugins: [
    'react',
    '@typescript-eslint'
  ],
  rules: {
  }
}
