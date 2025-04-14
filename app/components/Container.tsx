import clsx from 'clsx';
import { type MotionStyle, motion } from 'framer-motion';
import * as React from 'react';

import type { HTMLIntrinsicElements, PropsWithoutRef } from '~/domain/types';

interface ContainerProps<T extends HTMLIntrinsicElements = 'div'> {
  as?: T;
  ref?: T;
  style?: React.CSSProperties & MotionStyle;
  withMaxWidth?: boolean;
  className?: string;
  children: React.ReactNode;
}

export function Container<T extends HTMLIntrinsicElements = 'div'>({
  as,
  className,
  children,
  withMaxWidth = true,
  ...restOfProps
}: Omit<PropsWithoutRef<T>, keyof ContainerProps<T>> &
  ContainerProps<T>): React.ReactNode {
  // @ts-expect-error type-mismatch
  const Component = motion[as ?? 'div'];

  return (
    <Component
      className={clsx(
        'relative mx-auto w-full py-24 md:py-36',
        withMaxWidth && 'max-w-screen-2xl px-4 lg:px-12',
        className,
      )}
      {...restOfProps}
    >
      {children}
    </Component>
  );
}

export function ContainerPlain<T extends HTMLIntrinsicElements = 'div'>({
  as,
  className,
  children,
}: Omit<PropsWithoutRef<T>, keyof ContainerProps<T>> &
  ContainerProps<T>): React.ReactNode {
  // @ts-expect-error type-mismatch
  const Component = motion[as ?? 'div'];

  return (
    <Component
      className={clsx('relative mx-auto max-w-full px-4 lg:px-8', className)}
    >
      {children}
    </Component>
  );
}
