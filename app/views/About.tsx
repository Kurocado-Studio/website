import clsx from 'clsx';
import React from 'react';

import { Container } from '~/components/Container';
import { PointOfContacts } from '~/components/PointOfContacts';
import { ColorContext } from '~/context/ColorContext';
import { ColorThemes } from '~/context/types';

export function About(): React.ReactNode {
  const sharedTypographyClassName =
    'mb-12 font-body block text-base [text-wrap:balance] md:text-2xl';

  const { setColorContext } = React.useContext(ColorContext);

  return (
    <Container
      as='section'
      onPointerEnter={() => setColorContext(ColorThemes.WHITE)}
    >
      <div className='grid grid-cols-12 gap-4'>
        <section className='col-span-12 md:col-span-6'>
          <h1
            className={clsx(
              'block font-display text-4xl font-medium tracking-tight [text-wrap:balance] lg:text-7xl',
              'font-display',
            )}
          >
            About Carlos Santiago
          </h1>
          <PointOfContacts className='my-16' />
        </section>
        <article className='col-span-12 md:col-span-6'>
          <p className={sharedTypographyClassName}>
            I’m a Front-End Engineer with over 5 years of experience building
            scalable, high-performance web applications. My expertise lies in
            React, Vue, TypeScript, and modern front-end architectures, where I
            focus on creating seamless, engaging, and efficient user experiences
            for enterprise and SaaS platforms.
          </p>
          <p className={sharedTypographyClassName}>
            I’m passionate about pushing the boundaries of front-end development
            while continuously exploring new technologies and methodologies.
            Currently, I’m enhancing my leadership and project execution skills
            by pursuing a Certified Associate in Project Management (CAPM)®,
            helping me better align technical execution with business strategy.
          </p>
        </article>
      </div>
    </Container>
  );
}
