import { type MotionProps, motion } from 'framer-motion';
import { get } from 'lodash-es';
import React from 'react';
import { twMerge } from 'tailwind-merge';

import { ColorContext } from '~/context/ColorContext';
import { CursorContext } from '~/context/CursorContext';
import { CursorVariants } from '~/domain/enums';
import type { FrontEndProject } from '~/domain/types';

export type GitHubRepositoryProps = FrontEndProject &
  React.HTMLProps<HTMLDivElement>;

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
        props.className,
        'p-8 md:p-16',
        'flex w-full flex-col justify-between leading-normal',
        'h-[60vh]',
        'w-[calc(100vw/3)] min-w-[calc(100vw/1.3)] max-w-[calc(100vw/2)]',
        'md:w-[calc(100vw/2.5)] md:min-w-[calc(100vw/3)] md:max-w-[calc(100vw/4)]',
        'bg-[DarkSlateGray] text-[DarkOrange]',
        'hover:bg-[papayawhip] hover:text-[Magenta]',
        'flex flex-col content-between overflow-hidden rounded-lg',
        `cursor-pointer shadow transition-all duration-300 ease-in-out`,
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
      <h2 className='block font-display text-4xl font-medium tracking-tight [text-wrap:balance] lg:text-7xl'>
        {get(props, ['title'], '--')}
      </h2>
      <p className='text-pretty block font-body text-xl lg:text-4xl'>
        {get(props, ['description'], '--')}
      </p>
    </motion.a>
  );
}
