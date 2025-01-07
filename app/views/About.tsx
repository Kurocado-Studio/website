import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import React from 'react';

import { ColorContextChangerContainer } from '~/components/ColorContextChangerContainer';
import { Container } from '~/components/Container';
import { ColorThemes } from '~/context/types';

export function About(): React.ReactNode {
  const sharedTypographyClassName =
    'mb-6 font-body block text-base [text-wrap:balance] md:text-2xl';

  return (
    <ColorContextChangerContainer
      colorTheme={ColorThemes.WHITE}
      as='section'
      className='py-112'
    >
      <Container>
        <div className='grid grid-cols-12 gap-4'>
          <div className='col-span-12 md:col-span-6'>
            <h1
              className={clsx(
                'block font-display text-4xl font-medium tracking-tight [text-wrap:balance] lg:text-7xl',
                'font-display',
              )}
            >
              About
            </h1>
          </div>
          <p
            className={clsx(
              sharedTypographyClassName,
              'font-body',
              'col-span-12 md:col-span-6',
            )}
          >
            I’m Carlos Santiago, a Front-End Software Engineer and Product
            Designer with over 10 years of experience creating and improving
            digital products. Currently, I’m advancing my skills with a{' '}
            <a
              className='font-semibold text-blue-600 underline visited:text-purple-600 hover:text-blue-800'
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
          <div className='col-span-12 md:col-span-6' />
          <div className='col-span-12 md:col-span-6'>
            <p className={clsx(sharedTypographyClassName, 'font-body')}>
              <b>As a Product Designer</b>, I’ve led design strategies for
              startups and large enterprises, including spearheading a major
              product revamp at SpotOn when it transition from marketing to
              payment processing.
            </p>
          </div>
          <div className='col-span-12 md:col-span-6' />
          <div className='col-span-12 md:col-span-6'>
            <p className={clsx(sharedTypographyClassName, 'font-body')}>
              <b>As a Front-End Software Engineer</b>, I specialize in React,
              Vue, TypeScript, and NestJS. At Dais Technologies, I developed
              solutions leveraging AWS OCR, and at Project 44, I unified
              enterprise UIs and integrated with Kong API Gateway to standardize
              RBAC.
            </p>
          </div>
        </div>
      </Container>
    </ColorContextChangerContainer>
  );
}
