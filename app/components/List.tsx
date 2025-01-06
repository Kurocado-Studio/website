import clsx from 'clsx';
import React from 'react';

import { Border } from '~/components/Border';
import { FadeIn, FadeInStagger } from '~/components/FadeIn';

export type FramerCursorAttributes = Pick<
  Partial<React.DOMAttributes<HTMLElement>>,
  'onMouseEnter' | 'onMouseLeave'
>;

type ListItemProps = {
  children?: React.ReactNode;
  title?: string;
  className?: string;
  withHoverStyles?: boolean;
} & FramerCursorAttributes;

export function List({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}): React.ReactNode {
  return (
    <FadeInStagger>
      <ul className={clsx('text-base text-neutral-600', className)}>
        {children}
      </ul>
    </FadeInStagger>
  );
}

export function ListItem({
  children,
  className,
  title,
  onMouseEnter,
  onMouseLeave,
  withHoverStyles,
}: ListItemProps): React.ReactNode {
  return (
    <li
      className='group'
      onMouseLeave={onMouseLeave}
      onMouseEnter={onMouseEnter}
    >
      <FadeIn>
        <Border
          className={clsx(
            'pt-10 group-first:before:hidden group-first:after:hidden',
            withHoverStyles && 'my-2 rounded-sm px-2 hover:bg-slate-50',
            className,
          )}
        >
          {title ? (
            <strong className='font-semibold text-neutral-950'>{`${title} `}</strong>
          ) : null}
          {children}
        </Border>
      </FadeIn>
    </li>
  );
}
