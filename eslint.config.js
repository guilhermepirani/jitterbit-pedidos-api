import config from 'eslint-config-xo';
import { defineConfig, globalIgnores } from 'eslint/config';
import eslintConfigPrettier from 'eslint-config-prettier/flat';

export default defineConfig([
  config,
  globalIgnores([
    '.husky/',
    '.vscode/',
    'node_modules/',
    'package-lock.json',
    'src/storage/migrations/*',
    '__tests__/',
  ]),
  eslintConfigPrettier,

  {
    files: ['**/__tests__/**/*.js', '**/*.test.js'],
    env: {
      jest: true,
      node: true,
    },
    rules: {},
  },
]);
