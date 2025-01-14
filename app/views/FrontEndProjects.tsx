import clsx from 'clsx';
import { get } from 'lodash-es';
import React from 'react';

import { Container } from '~/components/Container';
import {
  FrontEndProjectCard,
  PROJECT_CARD_HEIGHT,
} from '~/components/FrontEndProjectCard';
import { frontEndProjects } from '~/config/projects';
import { ColorContext } from '~/context/ColorContext';
import { useWindowSize } from '~/hooks/useWindowSize';

export type AnimationProps = Array<{
  opacity: [Array<number>, Array<number>];
  scale: [Array<number>, Array<number>];
}>;

export function FrontEndProjects(): React.ReactNode {
  const LAYOUT_PROJECT_CARD_HEIGHT = PROJECT_CARD_HEIGHT * 10;

  const {
    size: { innerHeight },
  } = useWindowSize();

  const { scrollY } = React.useContext(ColorContext);

  const cardTimeline = React.useMemo(
    () =>
      frontEndProjects.map((_, index) => {
        const start = LAYOUT_PROJECT_CARD_HEIGHT + index * innerHeight;
        const end = LAYOUT_PROJECT_CARD_HEIGHT + (index + 1) * innerHeight;

        return [start, end];
      }),
    [innerHeight, LAYOUT_PROJECT_CARD_HEIGHT],
  );

  const animations: AnimationProps = cardTimeline.map((data) => ({
    scale: [data, [1, 0.8]],
    opacity: [data, [1, 0]],
  }));

  const body = `I’ve led design strategies for startups and large enterprises, including spearheading a major product revamp at SpotOn when it transition from marketing to payment processing.`;

  const header = `As a Front-End Software Engineer`;

  return (
    <>
      <Container className='relative z-10 mt-4'>
        <span className='sr-only caret-amber-300'> - </span>
        <h2 className='block font-display text-4xl font-medium tracking-tight [text-wrap:balance] lg:text-7xl'>
          {header}
        </h2>
        <h3
          className={clsx(
            'mb-32 mt-12 block font-body text-base [text-wrap:balance] md:text-3xl',
          )}
        >
          {body}
        </h3>
      </Container>
      <Container className='bg-background relative'>
        {frontEndProjects.map(({ heading, alt, imgBackground }, index) => (
          <FrontEndProjectCard
            alt={alt}
            heading={heading}
            imgBackground={imgBackground}
            key={`${heading}_${index.toString()}`}
            opacity={get(animations, [index, 'opacity'])}
            scale={get(animations, [index, 'scale'])}
            scrollY={scrollY}
            shouldNotScale={index === frontEndProjects.length - 1}
          />
        ))}
      </Container>
    </>
  );
}
