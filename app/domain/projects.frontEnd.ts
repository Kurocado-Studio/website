import type { FrontEndProject } from '~/domain/types';

export const designSystem = {
  title: 'Design System',
  url: 'https://github.com/Kurocado-Studio/design-system',
  description:
    'A token‑driven UI library whose look and feel can be tweaked in Figma and—via Token Studio—propagate to React & Vue components',
};

export const dailyUI = {
  title: 'Daily UI Challenge',
  url: 'https://github.com/Kurocado-Studio/daily-ui',
  description:
    'A curated collection of daily UI challenges implemented in React and Vue.',
};

export const productStarter = {
  title: 'Product Starter Kit',
  url: 'https://github.com/Kurocado-Studio/product-starter-kit',
  description:
    'A production-ready starter kit with a Figma-to-React and Vue design system flow, Tailwind, CI/CD, and instant Vercel deploy.',
};

export const frontEndProjects: Array<FrontEndProject> = [
  dailyUI,
  designSystem,
  productStarter,
];
