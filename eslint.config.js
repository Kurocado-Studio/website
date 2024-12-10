/**
 * Made with ❤️ and adobo by Kurocado Studio
 * Copyright (c) 2024. All Rights Reserved.
 *
 * Learn more about Kurocado Studio: {@link https://www.kurocado.studio}
 *
 * Explore our open-source projects: {@link https://github.com/kurocado-studio}
 */
import {
  eslintBrowserConfig,
  eslintReactConfig,
} from '@kurocado-studio/styleguide';
import { defineConfig } from 'eslint-define-config';

export default defineConfig([
  ...eslintBrowserConfig,
  ...eslintReactConfig,
  {
    files: ['*.{ts, tsx}'],
    settings: {
      'import/resolver': {
        alias: {
          map: [['~', './app']],
        },
        typescript: {
          project: './tsconfig.json',
        },
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      },
    },
  },
  {
    files: ['vite.config.ts', 'postcss.config.mjs'],
    rules: {
      'import/default': 'off',
      'import/named': 'off',
      'import/namespace': 'off',
      'import/no-cycle': 'off',
      'import/no-default-export': 'off',
      'import/no-named-as-default': 'off',
      'import/no-named-as-default-member': 'off',
    },
  },
]);
