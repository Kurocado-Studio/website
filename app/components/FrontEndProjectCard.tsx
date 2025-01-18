import { motion, useTransform } from 'framer-motion';
import { get } from 'lodash-es';
import * as React from 'react';
import { twMerge } from 'tailwind-merge';

import { ColorContext } from '~/context/ColorContext';
import { CursorContext, CursorVariants } from '~/context/CursorContext';
import { GrayscaleImage } from '~/lib/GrayscaleImage';

export interface FrontEndProject {
  alt: string;
  category?: Array<string>;
  heading: string;
  imgBackground: string;
}

export interface FrontEndProjectMotionProps extends FrontEndProject {
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
        height: `${PROJECT_CARD_HEIGHT * 1.6}px`,
        scale: !get(props, ['shouldNotScale']) ? scale : undefined,
        opacity,
      })}
    >
      <a
        href='#'
        className={twMerge(
          'flex flex-col items-center overflow-hidden rounded-lg md:flex-row',
          `shadow transition-all duration-300 ease-in-out hover:bg-lime-400`,
        )}
        onPointerEnter={() => setCursorVariant(CursorVariants.HIDDEN)}
        onPointerLeave={() => setCursorVariant(CursorVariants.DEFAULT)}
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
        style={{
          border: `1px solid ${get(defaultState, ['foreground'])}`,
          background: get(colorContextState, ['background']),
          color: get(colorContextState, ['foreground']),
        }}
      >
        <div className='overflow-hidden rounded-md'>
          <GrayscaleImage
            className='rounded-xl object-cover p-8 transition-all md:h-96 md:w-auto'
            src={get(props, ['imgBackground'])}
            alt={get(props, ['alt'])}
          />
        </div>
        <div className='flex flex-col justify-between pl-8 leading-normal md:pl-0'>
          <h2 className='block font-display text-4xl font-medium tracking-tight [text-wrap:balance] lg:text-6xl'>
            {get(props, ['heading'], '--')}
          </h2>
          <p className='mb-12 mt-4 block font-body text-base [text-wrap:balance] md:mb-0 md:text-3xl'>
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </div>
      </a>
    </motion.article>
  );
}
