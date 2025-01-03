import {
  ArrowTopRightOnSquareIcon,
  AtSymbolIcon,
} from '@heroicons/react/24/outline';
import { type Variant, motion } from 'framer-motion';
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
            Contact Us
          </p>
        </FadeIn>
      </div>
    </div>
  );
}

export function GithubVariant(): React.ReactNode {
  return (
    <div className='grid grid-cols-3 grid-rows-3 gap-1 p-2'>
      <div className='col-span-2 row-span-2'>
        <FadeIn>
          <motion.svg
            variants={{
              hidden: { opacity: 0, y: 0 },
              visible: { opacity: 1, y: 0 },
            }}
            className='size-14 inline-flex p-0 text-black transition-all'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            stroke-width='2'
            stroke-linecap='round'
            stroke-linejoin='round'
          >
            <motion.path d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22' />
          </motion.svg>
        </FadeIn>
      </div>
      <div className='col-span-3 row-start-3 mt-1'>
        <FadeIn direction={FadeInDirection.DOWN}>
          <p className='pl-1 text-base font-light [text-wrap:balance]'>
            Github{' '}
            <ArrowTopRightOnSquareIcon className='size-5 inline-flex pb-1' />
          </p>
        </FadeIn>
      </div>
    </div>
  );
}

export function DribbbleVariant(): React.ReactNode {
  return (
    <div className='grid grid-cols-3 grid-rows-3 gap-1 p-2'>
      <div className='col-span-2 row-span-2'>
        <FadeIn>
          <motion.svg
            variants={{
              hidden: { opacity: 0, y: 0 },
              visible: { opacity: 1, y: 0 },
            }}
            className='size-14 p-0 text-black transition-all'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            stroke-width='2'
            stroke-linecap='round'
            stroke-linejoin='round'
          >
            <motion.circle cx='12' cy='12' r='10' animate='in' exit='out' />
            <motion.path
              animate='in'
              exit='out'
              d='M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32'
            />
          </motion.svg>
        </FadeIn>
      </div>
      <div className='col-span-3 row-start-3 mt-1'>
        <FadeIn direction={FadeInDirection.DOWN}>
          <p className='pl-1 text-base font-light [text-wrap:balance]'>
            Dribbble{' '}
            <ArrowTopRightOnSquareIcon className='size-5 inline-flex pb-1' />
          </p>
        </FadeIn>
      </div>
    </div>
  );
}
