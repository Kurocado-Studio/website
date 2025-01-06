import clsx from 'clsx';
import React from 'react';

import { ColorContextChangerContainer } from '~/components/ColorContextChangerContainer';
import { Container } from '~/components/Container';
import {
  FrontEndDevelopmentExpertise,
  ProductDesignExpertise,
} from '~/components/Expertise';
import { ColorThemeContext } from '~/context/types';

export function About(): React.ReactNode {
  const sharedTypographyClassName =
    'mb-6 block text-base [text-wrap:balance] md:text-2xl';

  return (
    <ColorContextChangerContainer
      colorContext={ColorThemeContext.WHITE}
      className='py-112'
    >
      <Container as='section'>
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
          <div className='col-span-12 md:col-span-6'>
            <p className={clsx(sharedTypographyClassName, 'font-body')}>
              I’m Carlos Santiago, a Front-End Software Engineer and Product
              Designer with over 10 years of experience creating and improving
              digital products. My expertise lies in developing and designing
              scalable solutions across platforms, excelling in both Product
              Design and Front-End Engineering.
            </p>
          </div>
          <div className='col-span-12 md:col-span-6' />
          <div className='col-span-12 md:col-span-6'>
            <p className={clsx(sharedTypographyClassName, 'font-body')}>
              <b>As a Product Designer</b>, I’ve led design strategies for
              startups and large enterprises, including spearheading a major
              product revamp at SpotOn when it transition from marketing to
              payment processing.
            </p>
            <ProductDesignExpertise />
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
            <FrontEndDevelopmentExpertise />
          </div>
          <div className='col-span-12 md:col-span-6' />
          <div className='col-span-12 md:col-span-6'>
            <p className={clsx(sharedTypographyClassName, 'font-body')}>
              Currently, I’m advancing my skills with a PMI Project Management
              certification to add even greater value to cross-functional and
              complex projects.
            </p>
          </div>
        </div>
      </Container>
    </ColorContextChangerContainer>
  );
}
