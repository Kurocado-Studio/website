import type { CaseStudy } from '~/domain/types';

export const typeScriptPlatform = {
  title: 'Product Starter Kit case study',
  url: 'https://kurocado-studio.github.io/platform/case-study.html',
  descriptions: [
    `This case study examines the conception & implementation of a modular TypeScript React development platform to support the Product Starter kit.`,
    `The Product Starter kit includes CI/CD pipelines, testing, automated dependency management and a customizable design system from Figma to React thru Token Studio.`,
  ],
};

export const caseStudies: Array<CaseStudy> = [typeScriptPlatform];
