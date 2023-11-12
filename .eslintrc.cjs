module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'vite.config.ts'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['react-refresh', '@typescript-eslint', 'prettier'],
  rules: {
    'no-debugger': 'warn',
    'no-console': 'warn',
    'class-methods-use-this': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react/self-closing-comp': [
      'error',
      {
        component: true,
        html: true,
      },
    ],
    // 'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/array-type': [
      'error',
      {
        default: 'array',
      },
    ],
    '@typescript-eslint/explicit-member-accessibility': [
      'error',
      {
        accessibility: 'explicit',
        overrides: {
          accessors: 'explicit',
          constructors: 'off',
          methods: 'explicit',
          properties: 'explicit',
          parameterProperties: 'explicit',
        },
      },
    ],
    '@typescript-eslint/explicit-function-return-type': 'error',
    '@typescript-eslint/ban-ts-comment': 'error',
    '@typescript-eslint/no-unnecessary-type-assertion': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
  },
};
