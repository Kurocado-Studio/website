import type { CaseStudy } from '~/domain/types';

export const typeScriptPlatform = {
  title: 'Typescript Platform case study',
  url: 'https://kurocado-studio.github.io/platform/case-study.html',
  descriptions: [
    `This case study examines the conception & implementation of a modular TypeScript React development platform to support all projects by the studio.`,
    `This includes CI/CD pipelines, testing, automated dependency management and a customizable UI library from Figma to React and Vue components thru Token Studio.`,
  ],
};

export const caseStudies: Array<CaseStudy> = [typeScriptPlatform];
