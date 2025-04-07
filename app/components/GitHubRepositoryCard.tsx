import { type MotionProps, motion } from 'framer-motion';
import { get } from 'lodash-es';
import React from 'react';
import { twMerge } from 'tailwind-merge';

import { ColorContext } from '~/context/ColorContext';
import { CursorContext } from '~/context/CursorContext';
import { CursorVariants } from '~/domain/enums';
import type { FrontEndProject } from '~/domain/types';

export type GitHubRepositoryProps = FrontEndProject & {
  className?: string;
};

export function GitHubRepositoryCard(
  props: GitHubRepositoryProps,
): React.ReactNode {
  const { setCursorVariant } = React.useContext(CursorContext);

  const {
    colorContext: { defaultState },
  } = React.useContext(ColorContext);

  return (
    <motion.a
      {...(props as MotionProps)}
      href={get(props, ['url'])}
      className={twMerge(
        'relative p-8 lg:p-12',
        'flex w-full flex-col justify-between leading-normal',
        'h-[70vh] lg:max-h-[800px]',
        'w-[calc(85vw)] min-w-[calc(85vw)] max-w-[calc(95vw)]',
        'md:w-[calc(100vw/1.8)] md:min-w-[calc(100vw/3)] md:max-w-[calc(100vw/0.4)]',
        'xl:w-[calc(100vw/2.5)] xl:min-w-[calc(100vw/3)] xl:max-w-[calc(100vw/4)]',
        'bg-[DarkSlateGray] text-[NavajoWhite]',
        'lg:hover:bg-[papayawhip] lg:hover:text-[Magenta]',
        'flex flex-col content-between overflow-hidden rounded-lg',
        `cursor-pointer shadow transition-all duration-300 ease-in-out`,
        props.className,
      )}
      target='_blank'
      rel='noopener noreferrer'
      onMouseOver={() => {
        setCursorVariant(CursorVariants.GITHUB);
      }}
      onMouseOut={() => {
        setCursorVariant(CursorVariants.DEFAULT);
      }}
      style={{
        border: `1px solid ${get(defaultState, ['foreground'])}`,
      }}
    >
      <h2 className='block pt-4 font-display text-4xl font-medium tracking-tight [text-wrap:balance] lg:text-7xl'>
        {get(props, ['title'], '--')}
      </h2>
      <p className='text-pretty block pb-4 font-body text-xl md:font-semibold lg:text-4xl'>
        {get(props, ['description'], '--')}
      </p>
    </motion.a>
  );
}
