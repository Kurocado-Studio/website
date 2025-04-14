import {
  ArrowTopRightOnSquareIcon,
  AtSymbolIcon,
} from '@heroicons/react/24/outline';
import { type Variant } from 'framer-motion';
import { get } from 'lodash-es';
import React from 'react';

import { FadeIn, FadeInDirection } from '~/components/FadeIn';

export type CustomCursor = Variant & { isRounded?: boolean } & Record<
    string,
    unknown
  >;

export function ContactUsVariant(): React.ReactNode {
  return (
    <FadeIn
      direction={FadeInDirection.DOWN}
      className='flex flex-col items-center justify-center'
    >
      <AtSymbolIcon className='inline-flex w-16 pb-1' />
      <p className='pl-1 text-base font-light [text-wrap:balance]'>
        Send e-mail
      </p>
    </FadeIn>
  );
}

export interface OpenInNewTabCursorVariantProps {
  title?: string;
}

export function OpenInNewTabCursorVariant(
  props: OpenInNewTabCursorVariantProps,
): React.ReactNode {
  return (
    <FadeIn
      direction={FadeInDirection.DOWN}
      className='flex flex-col items-center justify-center'
    >
      <ArrowTopRightOnSquareIcon className='inline-flex w-16 pb-1 text-8xl' />
      <p className='pl-1 text-base font-light [text-wrap:balance]'>
        {get(props, ['title'])}{' '}
      </p>
    </FadeIn>
  );
}
