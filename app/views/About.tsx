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
      onPointerEnter={() => setColorContext(ColorThemes.RED)}
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
        </section>
        <article className='col-span-12 md:col-span-6'>
          <p className={sharedTypographyClassName}>
            I specialize in front-end development, building high-performing user
            interfaces that balance aesthetic appeal with robust, scalable code.
            My background includes extensive work with modern frameworks,
            responsive design, and continuous integration workflows—all aimed at
            delivering seamless, engaging experiences for end-users.
          </p>
          <p className={sharedTypographyClassName}>
            In addition to my core focus on front-end, I’ve cultivated
            complementary product and project management skills that help me see
            projects holistically. From aligning technical teams to
            communicating with stakeholders, I ensure every phase of development
            stays on track. This combined perspective empowers me to create
            solutions that are not only visually appealing but also aligned with
            broader business goals.
          </p>
          <p className={sharedTypographyClassName}>
            My goal is to collaborate with forward-thinking teams and deliver
            impactful, user-centered solutions that genuinely make a difference.
            I look forward to translating ideas into streamlined, accessible
            interfaces that everyone can enjoy.
          </p>
          <PointOfContacts className='mt-24' />
        </article>
      </div>
    </Container>
  );
}
