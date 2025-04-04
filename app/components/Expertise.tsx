import * as React from 'react';

import { Container } from '~/components/Container';
import { List, ListItem } from '~/components/List';
import { CursorContext } from '~/context/CursorContext';
import { CursorVariants } from '~/domain/enums';
import dashboardPreview from '~/domain/images/dribbble/dashboard_preview.png';
import eyeSeeYou from '~/domain/images/dribbble/eye_see_you.png';
import intellijIDE from '~/domain/images/dribbble/react-typescript_8x.png';
import spotonApp from '~/domain/images/dribbble/spoton_app_sample.png';
import vividSeatsCheckout from '~/domain/images/dribbble/vivid_seats_checkout_concept.png';
import warriorSummitWebsite from '~/domain/images/dribbble/warrior_summit_website.png';

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
          onPointerEnter={setEcommerceVariant}
          onPointerLeave={setDefaultVariant}
        />
        <ListItem
          withHoverStyles
          title='Web apps'
          className='cursor-none'
          onPointerEnter={setWebAppsVariant}
          onPointerLeave={setDefaultVariant}
        />
        <ListItem
          withHoverStyles
          title='Design systems'
          className='cursor-none'
          onPointerEnter={setDesignSystemVariant}
          onPointerLeave={setDefaultVariant}
        />
        <ListItem
          withHoverStyles
          title='Landing pages'
          onPointerEnter={setLandingPagesVariant}
          onPointerLeave={setDefaultVariant}
          className='cursor-none'
        />
        <ListItem
          withHoverStyles
          title='Enterprise applications'
          onPointerEnter={setEnterpriseApplicationsVariant}
          onPointerLeave={setDefaultVariant}
          className='cursor-none'
        />
        <ListItem
          withHoverStyles
          title='Illustrations'
          onPointerEnter={setIllustrationsVariant}
          onPointerLeave={setDefaultVariant}
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
          onPointerEnter={setReactVariant}
          onPointerLeave={setDefaultVariant}
        />
        <ListItem
          withHoverStyles
          title='Vue'
          className='cursor-none'
          onPointerEnter={setVueVariant}
          onPointerLeave={setDefaultVariant}
        />
        <ListItem
          withHoverStyles
          title='Typescript'
          className='cursor-none'
          onPointerEnter={setTypescriptVariant}
          onPointerLeave={setDefaultVariant}
        />
        <ListItem
          withHoverStyles
          title='Framer Motion'
          className='cursor-none'
          onPointerEnter={setFramerMotionVariant}
          onPointerLeave={setDefaultVariant}
        />
        <ListItem
          withHoverStyles
          title='NestJS'
          className='cursor-none'
          onPointerEnter={setNestJSVariant}
          onPointerLeave={setDefaultVariant}
        />
        <ListItem
          withHoverStyles
          title='Tailwind'
          className='cursor-none'
          onPointerEnter={setTailwindVariant}
          onPointerLeave={setDefaultVariant}
        />
      </List>
    </Container>
  );
}
