import React from 'react';

import { FadeIn, FadeInDirection, FadeInStagger } from '~/components/FadeIn';
import { ColorContext } from '~/context/ColorContext';
import { ColorThemes } from '~/context/types';
import { HorizontalScrollText } from '~/lib/HorizontalScrollText';

export function Intro(): React.ReactNode {
  const { setColorContext } = React.useContext(ColorContext);

  return (
    <FadeInStagger>
      <FadeIn
        className='mt-24 sm:mt-32 md:mt-56'
        direction={FadeInDirection.UP}
        onMouseEnter={() => setColorContext(ColorThemes.WHITE)}
      >
        <HorizontalScrollText baseVelocity={-2}>Kurocado</HorizontalScrollText>
      </FadeIn>
      <FadeIn direction={FadeInDirection.DOWN}>
        <HorizontalScrollText baseVelocity={2}>Studio</HorizontalScrollText>
      </FadeIn>
    </FadeInStagger>
  );
}
