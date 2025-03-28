import clsx from 'clsx';
import React from 'react';

import { ColorContextChangerContainer } from '~/components/ColorContextChangerContainer';
import { Container } from '~/components/Container';
import { PointOfContacts } from '~/components/PointOfContacts';
import { ColorContext } from '~/context/ColorContext';
import { ColorThemes } from '~/context/types';

export function About(): React.ReactNode {
  const sharedTypographyClassName =
    'mb-12 font-body block text-xl [text-wrap:balance] md:text-2xl';

  const { setColorContext } = React.useContext(ColorContext);

  return (
    <ColorContextChangerContainer className='m-2 rounded-xl'>
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
              I specialize in front-end development & my background includes UX
              Design, React & Vue. I’ve picked some project management skills
              that help me aligning myself better within stakeholders. This
              combined perspective empowers me to create solutions that are not
              only visually appealing but also aligned with broader business
              goals.
            </p>
            <p className={sharedTypographyClassName}>
              My goal is to collaborate with forward-thinking teams and deliver
              user-centered solutions, so lets connect!
            </p>
            <PointOfContacts className='mt-24' />
          </article>
        </div>
      </Container>
    </ColorContextChangerContainer>
  );
}
