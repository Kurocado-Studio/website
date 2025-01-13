import React from 'react';

import { FadeIn, FadeInDirection, FadeInStagger } from '~/components/FadeIn';
import { HorizontalScrollText } from '~/lib/HorizontalScrollText';

export function Intro(): React.ReactNode {
  return (
    <FadeInStagger>
      <FadeIn direction={FadeInDirection.UP}>
        <HorizontalScrollText baseVelocity={-2}>Kurocado</HorizontalScrollText>
      </FadeIn>
      <FadeIn direction={FadeInDirection.DOWN}>
        <HorizontalScrollText baseVelocity={2}>Studio</HorizontalScrollText>
      </FadeIn>
    </FadeInStagger>
  );
}
