import type { DribbbleShot, FrontEndProject } from '~/config/types';
import dali from '~/images/dribbble/dali.png';
import dashboardPreview from '~/images/dribbble/dashboard_preview.png';
import eyeSeeYou from '~/images/dribbble/eye_see_you.png';
import liquiFly from '~/images/dribbble/liqui-fly.png';
import octopus from '~/images/dribbble/octopus.png';
import spotonApp from '~/images/dribbble/spoton_app_sample.png';
import spotonDiscovery from '~/images/dribbble/spoton_discovery.png';
import spotonWebsite from '~/images/dribbble/spoton_website.png';
import vividSeatsCheckout from '~/images/dribbble/vivid_seats_checkout_concept.png';
import warriorSummitWebsite from '~/images/dribbble/warrior_summit_website.png';
import portfolioMockup from '~/images/projects/portfolio_mockup_v1.0.png';

export const uiProjectImages: Array<DribbbleShot> = [
  {
    title: 'Dali',
    thumbnail: dali,
  },
  {
    title: 'Dashboard Preview',
    thumbnail: dashboardPreview,
  },
  {
    title: 'Eye See You',
    thumbnail: eyeSeeYou,
  },
  {
    title: 'Liqui Fly',
    thumbnail: liquiFly,
  },
  {
    title: 'Octopus',
    thumbnail: octopus,
  },
  {
    title: 'Portfolio',
    thumbnail: portfolioMockup,
  },
  {
    title: 'SpotOn App',
    thumbnail: spotonApp,
  },
  {
    title: 'Discovery Map',
    thumbnail: spotonDiscovery,
  },
  {
    title: 'Spoton Website',
    thumbnail: spotonWebsite,
  },
  {
    title: 'Vivid Seats Checkout Concept',
    thumbnail: vividSeatsCheckout,
  },
  {
    title: 'Warrior Summit',
    thumbnail: warriorSummitWebsite,
  },
];

export const frontEndProjects: Array<FrontEndProject> = [
  {
    title: `Identity & Access Management`,
    url: 'https://github.com/Kurocado-Studio/iam',
    description:
      'A frontend library that integrates Auth0 (by Okta) to simplify authentication and authorization processes in React applications.',
    categories: ['IAM', 'Authentication', 'Authorization'],
  },
  {
    title: 'TypeScript Style Guide',
    url: 'https://github.com/Kurocado-Studio/styleguide',
    description:
      'Quickly standardize your TypeScript setup in minutes. Helps your team collaborate smoothly and keeps your code consistent and high-quality.',
    categories: ['TypeScript', 'ESLint', 'Prettier', 'CI/CD'],
  },
  {
    title: `DevOps`,
    url: 'https://github.com/Kurocado-Studio/dev-ops',
    description:
      'Centralize your GitHub Actions workflows in a single repository, allowing multiple projects to share workflows easily. This ensures consistency, reduces duplication, and improves scalability.',
    categories: ['DevOps', 'CI/CD', 'Automation', 'Infrastructure'],
  },
  {
    title: `Design System`,
    url: 'https://github.com/Kurocado-Studio/design-system',
    description:
      'A friendly, reusable UI kit built with React, featuring dynamic Tailwind themes, accessibility with React Aria, and animations with Framer Motion.',
    categories: ['Design System', 'React', 'Tailwind', 'Framer Motion'],
  },
];
