import { get } from 'lodash-es';
import React from 'react';

import { Container } from '~/components/Container';
import { FadeIn, FadeInDirection } from '~/components/FadeIn';
import {
  FrontEndProjectCard,
  PROJECT_CARD_HEIGHT,
} from '~/components/FrontEndProjectCard';
import { frontEndProjects } from '~/config/projects';
import { ColorContext } from '~/context/ColorContext';
import { ColorThemes } from '~/context/types';
import { useWindowSize } from '~/hooks/useWindowSize';

export type AnimationProps = Array<{
  opacity: [Array<number>, Array<number>];
  scale: [Array<number>, Array<number>];
}>;

export function FrontEndProjects(): React.ReactNode {
  const LAYOUT_PROJECT_CARD_HEIGHT = PROJECT_CARD_HEIGHT * 10;

  const { setColorContext } = React.useContext(ColorContext);

  const {
    size: { innerHeight },
  } = useWindowSize();

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

  return (
    <Container
      as='section'
      className='relative z-10 w-full'
      onPointerEnter={() => setColorContext(ColorThemes.BLUE)}
    >
      <FadeIn
        as='h2'
        direction={FadeInDirection.UP}
        className='mb-12 block font-display text-4xl font-medium tracking-tight [text-wrap:balance] lg:text-7xl'
      >
        Case Studies
      </FadeIn>
      {frontEndProjects.map((frontEndProject, index) => (
        <FrontEndProjectCard
          frontEndProject={frontEndProject}
          key={`${get(frontEndProject, ['title'], 'unknown')}_${index.toString()}`}
          opacity={get(animations, [index, 'opacity'])}
          scale={get(animations, [index, 'scale'])}
          shouldNotScale={index === get(frontEndProjects, ['length'], 1) - 1}
        />
      ))}
    </Container>
  );
}
