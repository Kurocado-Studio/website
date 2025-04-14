/* eslint import/no-cycle: 0 */
import { FadeIn, FadeInDirection } from '@kurocado-studio/ui';
import { useTransform } from 'framer-motion';
import { get } from 'lodash-es';
import * as React from 'react';
import { twMerge } from 'tailwind-merge';

import { ColorContext } from '~/context/ColorContext';
import { CursorContext } from '~/context/CursorContext';
import { CursorVariants } from '~/domain/enums';
import type { CaseStudy } from '~/domain/types';

export interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  opacity: readonly [Array<number>, Array<number>];
  scale: readonly [Array<number>, Array<number>];
  shouldNotScale?: boolean;
}

export const PROJECT_CARD_HEIGHT = 500;

export function CaseStudyCard(props: CaseStudyCardProps): React.ReactNode {
  const { scrollY } = React.useContext(ColorContext);
  const scale = useTransform(scrollY, ...props.scale);
  const opacity = useTransform(scrollY, ...props.opacity);

  const { setCursorVariant } = React.useContext(CursorContext);

  const {
    colorContext: { hoverState, defaultState },
  } = React.useContext(ColorContext);

  const [isHovered, setIsHovered] = React.useState(false);
  const [isHydrated, setIsHydrated] = React.useState(false);

  React.useEffect(() => {
    setIsHydrated(true);
  }, []);

  const colorContextState = isHovered ? hoverState : defaultState;

  return (
    <FadeIn
      direction={FadeInDirection.DOWN}
      className='sticky top-0 m-auto max-w-screen-2xl py-20'
      {...(isHydrated && {
        style: {
          height: `${PROJECT_CARD_HEIGHT * 1.6}px`,
          scale,
          opacity,
        },
      })}
    >
      <a
        href={get(props, ['caseStudy', 'url'])}
        className={twMerge(
          'flex flex-col items-center overflow-hidden rounded-lg bg-dark-tile md:flex-row',
          `cursor-pointer shadow transition-all duration-300 ease-in-out hover:bg-lime-400`,
        )}
        target='_blank'
        rel='noopener noreferrer'
        onMouseOver={() => {
          setCursorVariant(CursorVariants.OPEN_IN_NEW_TAB);
          setIsHovered(true);
        }}
        onMouseOut={() => {
          setCursorVariant(CursorVariants.DEFAULT);
          setIsHovered(false);
        }}
        style={{
          border: `1px solid ${get(defaultState, ['foreground'])}`,
          background: get(colorContextState, ['background']),
          color: get(colorContextState, ['foreground']),
        }}
      >
        <div className='flex w-full flex-col justify-between bg-dark-tile px-8 py-12 leading-normal md:px-24'>
          <h2 className='mb-12 block font-display text-4xl font-medium tracking-tight [text-wrap:balance] md:mt-8 lg:mb-44 lg:text-7xl'>
            {get(props, ['caseStudy', 'title'], '--')}
          </h2>
          {props.caseStudy.descriptions.map((description) => (
            <p
              key={description}
              className='text-pretty mb-8 mt-4 block text-xl font-semibold [text-wrap:balance] lg:text-4xl'
            >
              {description}
            </p>
          ))}
        </div>
      </a>
    </FadeIn>
  );
}
