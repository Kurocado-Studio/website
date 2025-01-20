import {
  ArrowTopRightOnSquareIcon,
  AtSymbolIcon,
} from '@heroicons/react/24/outline';
import { type Variant } from 'framer-motion';
import { get } from 'lodash-es';
import React from 'react';

import { FadeIn, FadeInDirection } from '~/components/FadeIn';

export type CustomCursor = Variant & { isRounded?: boolean };

export function ContactUsVariant(): React.ReactNode {
  return (
    <div className='grid grid-cols-3 grid-rows-3 gap-1 p-2'>
      <div className='col-span-2 row-span-2'>
        <FadeIn>
          <AtSymbolIcon className='text-8xl' />
        </FadeIn>
      </div>
      <div className='col-span-3 row-start-3'>
        <FadeIn direction={FadeInDirection.DOWN}>
          <p className='pl-1 text-base font-light [text-wrap:balance]'>
            Send me an email
          </p>
        </FadeIn>
      </div>
    </div>
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
      <ArrowTopRightOnSquareIcon className='inline-flex pb-1 text-8xl' />
      <p className='pl-1 text-base font-light [text-wrap:balance]'>
        {get(props, ['title'])}{' '}
      </p>
    </FadeIn>
  );
}
