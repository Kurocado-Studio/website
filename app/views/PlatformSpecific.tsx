import React from 'react';

import { FadeIn, FadeInDirection } from '~/components/FadeIn';
import { HorizontalScroller } from '~/components/HorizontalScroller';
import { GrayscaleImage } from '~/domain/lib/GrayscaleImage';

export function PlatformSpecific(): React.ReactNode {
  return (
    <HorizontalScroller>
      <FadeIn direction={FadeInDirection.UP}>
        <GrayscaleImage
          className='aspect-auto h-36 w-auto rounded md:h-auto md:w-96 md:rounded-l'
          src='https://avatars.githubusercontent.com/u/148841069?s=200&v=4'
        />
      </FadeIn>
      <FadeIn direction={FadeInDirection.UP}>
        <GrayscaleImage
          className='aspect-auto h-36 w-auto rounded md:h-auto md:w-96 md:rounded-l'
          src='https://avatars.githubusercontent.com/u/148841069?s=200&v=4'
        />
      </FadeIn>
      <FadeIn direction={FadeInDirection.UP}>
        <GrayscaleImage
          className='aspect-auto h-36 w-auto rounded md:h-auto md:w-96 md:rounded-l'
          src='https://avatars.githubusercontent.com/u/148841069?s=200&v=4'
        />
      </FadeIn>
      <FadeIn direction={FadeInDirection.UP}>
        <GrayscaleImage
          className='aspect-auto h-36 w-auto rounded md:h-auto md:w-96 md:rounded-l'
          src='https://avatars.githubusercontent.com/u/148841069?s=200&v=4'
        />
      </FadeIn>
      <FadeIn direction={FadeInDirection.UP}>
        <GrayscaleImage
          className='aspect-auto h-36 w-auto rounded md:h-auto md:w-96 md:rounded-l'
          src='https://avatars.githubusercontent.com/u/148841069?s=200&v=4'
        />
      </FadeIn>
      <FadeIn direction={FadeInDirection.UP}>
        <GrayscaleImage
          className='aspect-auto h-36 w-auto rounded md:h-auto md:w-96 md:rounded-l'
          src='https://avatars.githubusercontent.com/u/148841069?s=200&v=4'
        />
      </FadeIn>
    </HorizontalScroller>
  );
}
