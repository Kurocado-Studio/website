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
    title: 'Typescript Styleguide',
    url: 'https://github.com/Kurocado-Studio/styleguide',
    description:
      'Aim to streamline development setup in 5 minutes or less, facilitate easier collaboration, enhance the overall quality of software products, and improving collaboration processes between teams.',
    categories: [],
  },
  {
    title: `Auth0 by Okta integration SDK`,
    url: 'https://github.com/Kurocado-Studio/iam',
    description:
      'The Auth0 by Okta integration SDK is a frontend library that simplifies authentication and authorization in React applications by leveraging Auth0’s authentication platform.',
    categories: [],
  },
  {
    title: `Url Shortener App`,
    url: 'https://github.com/Kurocado-Studio/url-shortener',
    description:
      'This is a simple URL shortener built with Remix, React, and TypeScript. It allows users to input a URL and receive a shortened version.',
    categories: [],
  },
  {
    title: `GitHub Actions`,
    url: 'https://github.com/Kurocado-Studio/dev-ops',
    description:
      'Centralizing GitHub Actions workflows in a single repository allows multiple repositories to consume shared workflows, ensuring uniformity, reducing duplication, and improving scalability.',
    categories: [],
  },
];
