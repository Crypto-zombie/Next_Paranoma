module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'next/core-web-vitals',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['sort-imports-es6-autofix', '@typescript-eslint'],
  root: true,
  rules: {
    '@next/next/no-img-element': ['off'],
    'no-restricted-imports': ['error', { patterns: ['../*'] }],
    'sort-imports-es6-autofix/sort-imports-es6': [
      'error',
      { memberSyntaxSortOrder: ['none', 'all', 'single', 'multiple'] },
    ],
    'arrow-body-style': ['error', 'as-needed'],
    'linebreak-style': 'off',
    'import/no-named-as-default': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
  ignorePatterns: ['tailwind.config.js'],
};
