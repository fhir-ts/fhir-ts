import { cwd } from 'node:process';
import eslint from '@eslint/js';
import { defineConfig } from 'eslint/config';
import prettierEslint from 'eslint-config-prettier/flat';
import * as importEslint from 'eslint-plugin-import';
import packageJsonEslint from 'eslint-plugin-package-json';
import tsdocEslint from 'eslint-plugin-tsdoc';
import tsEslint from 'typescript-eslint';

const config = defineConfig([
  // Package.json
  packageJsonEslint.configs.recommended,
  // JS Files (Rarely used)
  {
    files: ['**/*.js', '**/*.jsx'],
    ignores: ['eslint.config.js'],
    plugins: {
      ...importEslint.flatConfigs.recommended.plugins,
    },
    rules: {
      ...eslint.configs.recommended.rules,
      ...importEslint.flatConfigs.recommended.rules,
      ...importEslint.flatConfigs.errors.rules,
      'import/no-unresolved': ['error', { ignore: 'bun:test' }],
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object'],
        },
      ],
    },
  },
  // TS Files
  // Note: strictTypeChecked exports an array with the following items:
  // 0: The typescript-eslint base config (used for language options and plugins)
  // 1: A typescript-eslint version of the eslint base config (used for rules)
  // 2: The typescript-eslint strict typechecked config (used for rules)
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      ...tsEslint.configs.strictTypeChecked[0].languageOptions,
      parserOptions: {
        ...tsEslint.configs.strictTypeChecked[0].languageOptions.parserOptions,
        projectService: true,
        project: './tsconfig.json',
        tsconfigRootDir: cwd(),
      },
    },
    plugins: {
      ...tsEslint.configs.strictTypeChecked[0].plugins,
      ...importEslint.flatConfigs.recommended.plugins,
      tsdoc: tsdocEslint,
    },
    rules: {
      ...eslint.configs.recommended.rules,
      ...tsEslint.configs.strictTypeChecked[1].rules,
      ...tsEslint.configs.strictTypeChecked[2].rules,
      ...importEslint.flatConfigs.recommended.rules,
      ...importEslint.flatConfigs.errors.rules,
      ...importEslint.flatConfigs.typescript.rules,
      'tsdoc/syntax': 'error',
      'import/no-unresolved': ['error', { ignore: ['bun:test'] }],
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object'],
        },
      ],
    },
    settings: {
      ...importEslint.flatConfigs.typescript.settings,
    },
  },
  // All Files
  prettierEslint,
]);

export default config;
