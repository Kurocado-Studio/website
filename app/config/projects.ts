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
    title: `Platform Monorepo`,
    url: 'https://github.com/Kurocado-Studio/platform',
    description:
      'A robust, TypeScript-centric platform designed to rapidly scaffold project setups like IAM and QA, enforce best practices, and boost productivity across React and Node/NestJS applications.',
    categories: ['TypeScript', 'Monorepo', 'React', 'NestJS'],
  },
  {
    title: 'TypeScript Style Guide',
    url: 'https://github.com/Kurocado-Studio/styleguide',
    description:
      'A centralized, reusable configuration setup that allows development teams to standardize project environments in under 5 minutes, improving collaboration and software quality.',
    categories: ['TypeScript', 'ESLint', 'Prettier', 'CI/CD'],
  },
  {
    title: `Design System`,
    url: 'https://github.com/Kurocado-Studio/design-system',
    description:
      'A scalable design system featuring reusable React components, dynamic theming via Tailwind, accessibility with React Aria, and engaging animations powered by Framer Motion to unify and enhance user interfaces.',
    categories: ['Design System', 'React', 'Tailwind', 'Framer Motion'],
  },
];
