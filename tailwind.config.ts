/**
 * Made with ❤️ and adobo by Kurocado Studio
 * Copyright (c) 2024. All Rights Reserved.
 *
 * Learn more about Kurocado Studio: {@link https://www.kurocado.studio}
 *
 * Explore our open-source projects: {@link https://github.com/kurocado-studio}
 */

/* eslint import/no-default-export: 0 */
import { get } from 'lodash-es';
import { type Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./app/**/*.{js,jsx,mjs,mdx,ts,tsx}', './app/**/*.css'],
  theme: {
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.5rem' }],
      base: ['1rem', { lineHeight: '1.75rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '2rem' }],
      '2xl': ['1.5rem', { lineHeight: '2.25rem' }],
      '3xl': ['1.75rem', { lineHeight: '2.25rem' }],
      '4xl': ['2rem', { lineHeight: '2.5rem' }],
      '5xl': ['2.5rem', { lineHeight: '3rem' }],
      '6xl': ['3rem', { lineHeight: '3.5rem' }],
      '7xl': ['4rem', { lineHeight: '4.5rem' }],
      '8xl': ['8rem', { lineHeight: '4.5rem' }],
    },
    extend: {
      colors: {
        brand: {
          50: 'rgb(240, 253, 244)',
          100: 'rgb(220, 252, 231)',
          200: 'rgb(187, 247, 208)',
          300: 'rgb(134, 239, 172)',
          400: 'rgb(74, 222, 128)',
          500: 'rgb(34, 197, 94)',
          600: 'rgb(22, 163, 74)',
          700: 'rgb(21, 128, 61)',
          800: 'rgb(22, 101, 52)',
          900: 'rgb(20, 83, 45)',
        },
        neutral: {
          0: 'rgb(255, 255, 255)',
          50: 'rgb(250, 250, 250)',
          100: 'rgb(245, 245, 245)',
          200: 'rgb(229, 229, 229)',
          300: 'rgb(212, 212, 212)',
          400: 'rgb(163, 163, 163)',
          500: 'rgb(115, 115, 115)',
          600: 'rgb(82, 82, 82)',
          700: 'rgb(64, 64, 64)',
          800: 'rgb(38, 38, 38)',
          900: 'rgb(23, 23, 23)',
          950: 'rgb(10, 10, 10)',
        },
        'brand-primary': 'rgb(22, 163, 74)',
        'default-background': 'rgb(255, 255, 255)',
        'default-font': 'rgb(23, 23, 23)',
        'neutral-border': 'rgb(229, 229, 229)',
        'subtext-color': 'rgb(115, 115, 115)',
        white: 'rgb(255, 255, 255)',
      },
      fontSize: {
        caption: [
          '12px',
          {
            lineHeight: '16px',
            fontWeight: '400',
          },
        ],
        'caption-bold': [
          '12px',
          {
            lineHeight: '16px',
            fontWeight: '700',
          },
        ],
        body: [
          '14px',
          {
            lineHeight: '20px',
            fontWeight: '400',
          },
        ],
        'body-bold': [
          '14px',
          {
            lineHeight: '20px',
            fontWeight: '700',
          },
        ],
        'heading-3': [
          '16px',
          {
            lineHeight: '20px',
            fontWeight: '700',
          },
        ],
        'heading-2': [
          '20px',
          {
            lineHeight: '24px',
            fontWeight: '700',
          },
        ],
        'heading-1': [
          '30px',
          {
            lineHeight: '36px',
            fontWeight: '700',
          },
        ],
        'monospace-body': [
          '14px',
          {
            lineHeight: '20px',
            fontWeight: '400',
          },
        ],
      },
      fontFamily: {
        caption: 'Mona Sans',
        sans: ['Mona Sans', ...get(defaultTheme, ['fontFamily', 'sans'], [])],
        body: 'Mona Sans',
        'body-bold': 'Mona Sans',
        'heading-3': 'Mona Sans',
        'heading-2': 'Mona Sans',
        'heading-1': 'Mona Sans',
        'monospace-body': 'monospace',
        display: [
          ['Mona Sans', ...get(defaultTheme, ['fontFamily', 'sans'], [])],
          { fontVariationSettings: '"wdth" 125' },
        ],
      },
      boxShadow: {
        sm: '0px 1px 2px 0px rgba(0, 0, 0, 0.05)',
        default: '0px 1px 2px 0px rgba(0, 0, 0, 0.05)',
        md: '0px 4px 16px -2px rgba(0, 0, 0, 0.08), 0px 2px 4px -1px rgba(0, 0, 0, 0.08)',
        lg: '0px 12px 32px -4px rgba(0, 0, 0, 0.08), 0px 4px 8px -2px rgba(0, 0, 0, 0.08)',
        overlay:
          '0px 12px 32px -4px rgba(0, 0, 0, 0.08), 0px 4px 8px -2px rgba(0, 0, 0, 0.08)',
      },
      borderRadius: {
        sm: '8px',
        md: '16px',
        DEFAULT: '16px',
        lg: '24px',
        full: '9999px',
        '4xl': '2.5rem',
      },
      container: {
        padding: {
          DEFAULT: '16px',
          sm: 'calc((100vw + 16px - 640px) / 2)',
          md: 'calc((100vw + 16px - 768px) / 2)',
          lg: 'calc((100vw + 16px - 1024px) / 2)',
          xl: 'calc((100vw + 16px - 1280px) / 2)',
          '2xl': 'calc((100vw + 16px - 1536px) / 2)',
        },
      },
      spacing: {
        112: '28rem',
        144: '36rem',
        192: '48rem',
        256: '64rem',
        320: '80rem',
      },
      screens: {
        mobile: {
          max: '767px',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
