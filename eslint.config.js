import config from 'eslint-config-xo';
import { defineConfig, globalIgnores } from 'eslint/config';
import eslintConfigPrettier from 'eslint-config-prettier/flat';

export default defineConfig([
  config,
  globalIgnores(['.husky/', '.vscode/', 'node_modules/', 'package-lock.json']),
  eslintConfigPrettier,
]);
