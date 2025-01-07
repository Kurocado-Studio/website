import * as React from 'react';

import { Container } from '~/components/Container';
import { List, ListItem } from '~/components/List';
import { CursorContext, CursorVariants } from '~/context/CursorContext';
import dashboardPreview from '~/images/dribbble/dashboard_preview.png';
import eyeSeeYou from '~/images/dribbble/eye_see_you.png';
import intellijIDE from '~/images/dribbble/react-typescript_8x.png';
import spotonApp from '~/images/dribbble/spoton_app_sample.png';
import vividSeatsCheckout from '~/images/dribbble/vivid_seats_checkout_concept.png';
import warriorSummitWebsite from '~/images/dribbble/warrior_summit_website.png';

export function ProductDesignExpertise(): React.ReactNode {
  const { setCursorVariant } = React.useContext(CursorContext);

  const setDefaultVariant = (): void => {
    setCursorVariant(CursorVariants.HIDDEN);
  };

  const setLandingPagesVariant = (): void => {
    setCursorVariant({
      alt: 'Warrior Summit',
      src: warriorSummitWebsite,
    });
  };

  const setWebAppsVariant = (): void => {
    setCursorVariant({
      alt: 'Web Apps',
      src: dashboardPreview,
    });
  };

  const setIllustrationsVariant = (): void => {
    setCursorVariant({
      alt: 'Eye See You',
      src: eyeSeeYou,
    });
  };

  const setEnterpriseApplicationsVariant = (): void => {
    setCursorVariant({
      alt: 'Enterprise Apps',
      src: spotonApp,
    });
  };

  const setDesignSystemVariant = (): void => {
    setCursorVariant({
      alt: 'Design Systems',
      src: intellijIDE,
    });
  };

  const setEcommerceVariant = (): void => {
    setCursorVariant({
      alt: 'E-Commerce',
      src: vividSeatsCheckout,
    });
  };

  return (
    <Container className='my-12 lg:px-0'>
      <List className='mb-24'>
        <ListItem
          withHoverStyles
          title='e-commerce'
          className='cursor-none'
          onMouseEnter={setEcommerceVariant}
          onMouseLeave={setDefaultVariant}
        />
        <ListItem
          withHoverStyles
          title='Web apps'
          className='cursor-none'
          onMouseEnter={setWebAppsVariant}
          onMouseLeave={setDefaultVariant}
        />
        <ListItem
          withHoverStyles
          title='Design systems'
          className='cursor-none'
          onMouseEnter={setDesignSystemVariant}
          onMouseLeave={setDefaultVariant}
        />
        <ListItem
          withHoverStyles
          title='Landing pages'
          onMouseEnter={setLandingPagesVariant}
          onMouseLeave={setDefaultVariant}
          className='cursor-none'
        />
        <ListItem
          withHoverStyles
          title='Enterprise applications'
          onMouseEnter={setEnterpriseApplicationsVariant}
          onMouseLeave={setDefaultVariant}
          className='cursor-none'
        />
        <ListItem
          withHoverStyles
          title='Illustrations'
          onMouseEnter={setIllustrationsVariant}
          onMouseLeave={setDefaultVariant}
          className='cursor-none'
        />
      </List>
    </Container>
  );
}

export function FrontEndDevelopmentExpertise(): React.ReactNode {
  const { setCursorVariant } = React.useContext(CursorContext);

  const setDefaultVariant = (): void => {
    setCursorVariant(CursorVariants.HIDDEN);
  };

  const setNestJSVariant = (): void => {
    setCursorVariant(CursorVariants.NEST_JS);
  };

  const setReactVariant = (): void => {
    setCursorVariant(CursorVariants.REACT);
  };

  const setFramerMotionVariant = (): void => {
    setCursorVariant(CursorVariants.FRAMER_MOTION);
  };

  const setTypescriptVariant = (): void => {
    setCursorVariant(CursorVariants.TYPESCRIPT);
  };

  const setVueVariant = (): void => {
    setCursorVariant(CursorVariants.VUE);
  };

  const setTailwindVariant = (): void => {
    setCursorVariant(CursorVariants.TAILWIND);
  };

  return (
    <Container className='my-12 lg:px-0'>
      <List className='mb-24'>
        <ListItem
          withHoverStyles
          title='React'
          className='cursor-none'
          onMouseEnter={setReactVariant}
          onMouseLeave={setDefaultVariant}
        />
        <ListItem
          withHoverStyles
          title='Vue'
          className='cursor-none'
          onMouseEnter={setVueVariant}
          onMouseLeave={setDefaultVariant}
        />
        <ListItem
          withHoverStyles
          title='Typescript'
          className='cursor-none'
          onMouseEnter={setTypescriptVariant}
          onMouseLeave={setDefaultVariant}
        />
        <ListItem
          withHoverStyles
          title='Framer Motion'
          className='cursor-none'
          onMouseEnter={setFramerMotionVariant}
          onMouseLeave={setDefaultVariant}
        />
        <ListItem
          withHoverStyles
          title='NestJS'
          className='cursor-none'
          onMouseEnter={setNestJSVariant}
          onMouseLeave={setDefaultVariant}
        />
        <ListItem
          withHoverStyles
          title='Tailwind'
          className='cursor-none'
          onMouseEnter={setTailwindVariant}
          onMouseLeave={setDefaultVariant}
        />
      </List>
    </Container>
  );
}
