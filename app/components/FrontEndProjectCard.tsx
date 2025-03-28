import { motion, useTransform } from 'framer-motion';
import { get } from 'lodash-es';
import * as React from 'react';
import { twMerge } from 'tailwind-merge';

import type { FrontEndProject } from '~/config/types';
import { ColorContext } from '~/context/ColorContext';
import { CursorContext, CursorVariants } from '~/context/CursorContext';

export interface FrontEndProjectMotionProps {
  frontEndProject: FrontEndProject;
  opacity: [Array<number>, Array<number>];
  scale: [Array<number>, Array<number>];
  shouldNotScale?: boolean;
}

export const PROJECT_CARD_HEIGHT = 500;

export function FrontEndProjectCard(
  props: FrontEndProjectMotionProps,
): React.ReactNode {
  const { scrollY } = React.useContext(ColorContext);
  const scale = useTransform(scrollY, ...get(props, ['scale']));
  const opacity = useTransform(scrollY, ...get(props, ['opacity']));

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
    <motion.article
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
        href={get(props, ['frontEndProject', 'url'])}
        className={twMerge(
          'flex flex-col items-center overflow-hidden rounded-lg md:flex-row',
          `cursor-pointer shadow transition-all duration-300 ease-in-out hover:bg-lime-400`,
        )}
        target='_blank'
        rel='noopener noreferrer'
        onPointerEnter={() => setCursorVariant(CursorVariants.OPEN_IN_NEW_TAB)}
        onPointerLeave={() => setCursorVariant(CursorVariants.DEFAULT)}
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
        style={{
          background: get(colorContextState, ['background']),
          color: get(colorContextState, ['foreground']),
        }}
      >
        <div className='flex w-full flex-col justify-between bg-dark-tile px-8 py-12 leading-normal md:px-24'>
          <h2 className='block font-display text-4xl font-medium tracking-tight [text-wrap:balance] md:mt-8 lg:text-7xl'>
            {get(props, ['frontEndProject', 'title'], '--')}
          </h2>
          <p className='text-pretty mb-8 mt-12 block font-body text-xl lg:mt-36 lg:text-4xl'>
            {get(props, ['frontEndProject', 'description'], '--')}
          </p>
        </div>
      </a>
    </motion.article>
  );
}
