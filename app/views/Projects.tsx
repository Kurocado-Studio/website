import { get } from 'lodash-es';
import React from 'react';

import { Container } from '~/components/Container';
import type { Project } from '~/components/ProjectCard';
import { PROJECT_CARD_HEIGHT, ProjectCard } from '~/components/ProjectCard';
import { ColorContext } from '~/context/ColorContext';
import { useWindowSize } from '~/hooks/useWindowSize';

export type AnimationProps = Array<{
  opacity: [Array<number>, Array<number>];
  scale: [Array<number>, Array<number>];
}>;

const projects: Array<Project> = [
  {
    alt: '/1',
    imgBackground:
      'https://cdn.dribbble.com/users/310070/screenshots/7120072/media/3c86333fe1f0a4ed927679347d6ed630.png?resize=800x600&vertical=center',
    heading: 'AnimationProps',
    category: [],
  },
  {
    alt: '/AnimationProps',
    imgBackground:
      'https://cdn.dribbble.com/users/310070/screenshots/7120072/media/3c86333fe1f0a4ed927679347d6ed630.png?resize=800x600&vertical=center',
    heading: 'AnimationProps Long Name AnimationProps',
    category: ['dffdfddf'],
  },
  {
    alt: '/3',
    imgBackground:
      'https://cdn.dribbble.com/users/310070/screenshots/7120072/media/3c86333fe1f0a4ed927679347d6ed630.png?resize=800x600&vertical=center',
    heading: '3',
    category: ['dffdfddf'],
  },
  {
    alt: '/4',
    imgBackground:
      'https://cdn.dribbble.com/users/310070/screenshots/7120072/media/3c86333fe1f0a4ed927679347d6ed630.png?resize=800x600&vertical=center',
    heading: '4',
    category: [],
  },
  {
    alt: '/5',
    imgBackground:
      'https://cdn.dribbble.com/users/310070/screenshots/7120072/media/3c86333fe1f0a4ed927679347d6ed630.png?resize=800x600&vertical=center',
    heading: '5',
    category: ['dffdfddf'],
  },
  {
    alt: '/6',
    imgBackground:
      'https://cdn.dribbble.com/users/310070/screenshots/7120072/media/3c86333fe1f0a4ed927679347d6ed630.png?resize=800x600&vertical=center',
    heading: '6',
    category: ['dffdfddf'],
  },
];

export function Projects(): React.ReactNode {
  const LAYOUT_PROJECT_CARD_HEIGHT = PROJECT_CARD_HEIGHT * 3;

  const {
    size: { innerHeight },
  } = useWindowSize();

  const { scrollY } = React.useContext(ColorContext);

  const cardTimeline = React.useMemo(
    () =>
      projects.map((_, index) => {
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
    <Container className='bg-background relative'>
      {projects.map(({ heading, alt, imgBackground }, index) => (
        <ProjectCard
          alt={alt}
          heading={heading}
          imgBackground={imgBackground}
          key={`${heading}_${index.toString()}`}
          opacity={get(animations, [index, 'opacity'])}
          scale={get(animations, [index, 'scale'])}
          scrollY={scrollY}
          shouldNotScale={index === projects.length - 1}
        />
      ))}
    </Container>
  );
}
