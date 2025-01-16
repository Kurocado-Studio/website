import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
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
            Nice to meet you, my name is Carlos Santiago
          </h1>
          <PointOfContacts className='my-16' />
        </section>
        <article className='col-span-12 md:col-span-6'>
          <p className={sharedTypographyClassName}>
            I’m Carlos Santiago, a Front-End Software Engineer and Product
            Designer with over 10 years of experience creating and improving
            digital products. My expertise lies in developing and designing
            scalable solutions across platforms, excelling in both Product
            Design and Front-End Engineering.
          </p>
          <p className={sharedTypographyClassName}>
            My work at companies like Project44 and Dais Technology has allowed
            me to collaborate with diverse stakeholders, ensuring alignment
            between technical requirements and business objectives.
          </p>
          <p className={sharedTypographyClassName}>
            Currently, I’m advancing my skills with a{' '}
            <a
              className='font-semibold text-blue-600 visited:text-purple-600 hover:text-blue-800'
              href='https://www.pmi.org/certifications/certified-associate-capm'
              target='_blank'
              rel='noopener noreferrer'
            >
              Certified Associate in Project Management (CAPM)®{' '}
              <ArrowTopRightOnSquareIcon className='mb-2 ml-1 inline-flex w-8' />
            </a>{' '}
            certification to add even greater value to cross-functional and
            complex projects.
          </p>
        </article>
      </div>
    </Container>
  );
}
