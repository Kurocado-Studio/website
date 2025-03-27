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
    title: 'TypeScript Platform',
    url: 'https://kurocado-studio.github.io/platform/case-study.html',
    description: `This case study outlines the creation of a modular TypeScript development platform designed to streamline project initialization, enforce best practices, and boost productivity—allowing projects to go from "0 to Hello World" in under five minutes.`,
    categories: ['TypeScript', 'ESLint', 'Prettier', 'CI/CD'],
  },
];
