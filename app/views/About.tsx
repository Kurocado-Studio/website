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
          I&#39;m a frontend engineer focused on building scalable,
          design-driven web platforms with TypeScript, React, and Vue. My work
          bridges the gap between product design and production-ready code—with
          a strong emphasis on developer experience, automation, and visual
          consistency.
        </p>
        <p className={sharedTypographyClassName}>
          Below are some of my open-source projects and a detailed case study
          that explores the thinking behind one of them.
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
