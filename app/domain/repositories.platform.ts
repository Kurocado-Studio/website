import type { PlatformProject } from '~/domain/types';

export const designSystem = {
  title: 'Design System',
  url: 'https://github.com/Kurocado-Studio/design-system',
  description:
    'A library of reusable UI components and guidelines to ensure visual consistency across all projects.',
};

export const styleguide = {
  title: 'Engineering Styleguide',
  url: 'https://github.com/Kurocado-Studio/styleguide',
  description:
    'A centralized resource defining linting rules, formatting standards, and commit conventions.',
};

export const githubActions = {
  title: 'GitHub Actions',
  url: 'https://github.com/Kurocado-Studio/dev-ops',
  description:
    'Unified GitHub Actions to automate workflows such as CI/CD, and routine maintenance tasks.',
};

export const iam = {
  title: 'Identity and Access Management',
  url: 'https://github.com/Kurocado-Studio/iam',
  description:
    'Centralized authentication managed through Auth0 by Okta, ensuring secure access management.',
};

export const devExperience = {
  title: 'Developer Experience (DX)',
  url: 'https://github.com/Kurocado-Studio/dev-experience',
  description:
    'Enhanced developer productivity through utilities like axios wrappers & reusable React hooks.',
};

export const qa = {
  title: 'Quality Assurance (QA)',
  url: 'https://github.com/Kurocado-Studio/qa',
  description:
    'Enhanced developer productivity through utilities like axios wrappers & reusable React hooks.',
};

export const platformRepositories: Array<PlatformProject> = [
  designSystem,
  devExperience,
  githubActions,
  iam,
  qa,
  styleguide,
];
