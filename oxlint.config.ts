import { defineConfig } from 'oxlint'

export default defineConfig({
  categories: {
    correctness: 'warn',
    suspicious: 'warn',
    perf: 'warn',
  },
  options: {
    typeAware: true,
    typeCheck: true,
    maxWarnings: 10,
  },
  rules: {
    'typescript/consistent-return': 'off',
    'typescript/no-unsafe-type-assertion': 'off',
    'typescript/no-floating-promises': 'off',
    'unicorn/consistent-function-scoping': 'off',
  },
  plugins: ['eslint', 'oxc', 'vue', 'unicorn', 'typescript'],
  ignorePatterns: ['.weme', 'dist', 'node_modules', '*.tsbuildinfo', 'bun.lock'],
})
