import clsx from 'clsx';
import { motion } from 'framer-motion';
import * as React from 'react';

import type { HTMLIntrinsicElements, PropsWithoutRef } from '~/lib/types';

interface ContainerProps<T extends HTMLIntrinsicElements = 'div'> {
  as?: T;
  className?: string;
  children: React.ReactNode;
}

export function Container<T extends HTMLIntrinsicElements = 'div'>({
  as,
  className,
  children,
}: Omit<PropsWithoutRef<T>, keyof ContainerProps<T>> &
  ContainerProps<T>): React.ReactNode {
  // @ts-expect-error type-mismatch
  const Component = motion[as ?? 'div'];

  return (
    <Component
      className={clsx('relative mx-auto max-w-full px-8 lg:px-12', className)}
    >
      <div className='relative mx-auto max-w-2xl lg:max-w-none'>{children}</div>
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
