import clsx from 'clsx';
import { motion } from 'framer-motion';
import React from 'react';

import type { HTMLIntrinsicElements, PropsWithoutRef } from '~/lib/types';

interface BorderProps<T extends HTMLIntrinsicElements> {
  as?: T;
  className?: string;
  position?: 'top' | 'left';
  invert?: boolean;
}

export function Border<T extends HTMLIntrinsicElements = 'div'>({
  as,
  className,
  position = 'top',
  invert = false,
  ...props
}: Omit<PropsWithoutRef<T>, keyof BorderProps<T>> &
  BorderProps<T>): React.ReactNode {
  // @ts-expect-error type-mismatch
  const Component = motion[as ?? 'div'];

  return (
    <Component
      className={clsx(
        className,
        'relative before:absolute after:absolute',
        invert
          ? 'before:bg-white after:bg-white/10'
          : 'before:bg-neutral-950 after:bg-neutral-950/10',
        position === 'top' &&
          'before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px',
        position === 'left' &&
          'before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px',
      )}
      {...props}
    />
  );
}
