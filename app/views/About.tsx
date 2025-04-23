import clsx from 'clsx';
import React from 'react';

import { Container } from '~/components/Container';
import {
  FrontEndDevelopmentExpertise,
  ProductDesignExpertise,
} from '~/components/Expertise';
import { PointOfContacts } from '~/components/PointOfContacts';
import { ColorContext } from '~/context/ColorContext';
import { ColorThemes } from '~/context/types';

export function About(): React.ReactNode {
  const sharedTypographyClassName =
    'mb-12 font-semibold block text-xl [text-wrap:balance] md:text-2xl';

  const { setColorContext } = React.useContext(ColorContext);

  return (
    <Container
      as='section'
      className='grid grid-cols-12 gap-4'
      onPointerEnter={() => setColorContext(ColorThemes.RED)}
    >
      <section className='col-span-12 md:col-span-6'>
        <h1
          className={clsx(
            'block font-display text-4xl font-medium tracking-tight [text-wrap:balance] lg:text-7xl',
            'font-display',
          )}
        >
          About Carlos Santiago
        </h1>
      </section>
      <article className='col-span-12 md:col-span-6'>
        <p className={sharedTypographyClassName}>
          I specialize in front-end development & my background includes UX
          Design, React and Vue. I’ve picked some project management skills that
          help me align myself better within stakeholders. This combined
          perspective empowers me to create solutions that are not only visually
          appealing but also aligned with broader business goals.
        </p>
        <p className={sharedTypographyClassName}>
          My goal is to collaborate with forward-thinking teams and deliver
          user-centered solutions, so lets connect!
        </p>
        <PointOfContacts className='mb-36 mt-24' />
        <h2
          className={clsx(
            'block font-display text-3xl font-medium tracking-tight [text-wrap:balance] lg:text-5xl',
            'font-display',
          )}
        >
          Tech Stack
        </h2>
        <FrontEndDevelopmentExpertise />
        <h2
          className={clsx(
            'block font-display text-3xl font-medium tracking-tight [text-wrap:balance] lg:text-5xl',
            'font-display',
          )}
        >
          Domains I’ve Worked In
        </h2>
        <ProductDesignExpertise />
      </article>
    </Container>
  );
}
