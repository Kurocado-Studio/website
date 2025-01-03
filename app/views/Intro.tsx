import React from 'react';

import { ColorContextChangerContainer } from '~/components/ColorContextChangerContainer';
import { FadeIn, FadeInDirection, FadeInStagger } from '~/components/FadeIn';
import { StaggerSplitText } from '~/components/StaggerSplitText';
import { ColorThemeContext } from '~/context/types';
import { HorizontalScrollText } from '~/lib/HorizontalScrollText';

export function Intro(): React.ReactNode {
  return (
    <ColorContextChangerContainer
      colorContext={ColorThemeContext.WHITE}
      className='mt-24 sm:mt-32 md:mt-56'
    >
      <FadeInStagger>
        <FadeIn direction={FadeInDirection.UP}>
          <HorizontalScrollText baseVelocity={-2}>
            Kurocado
          </HorizontalScrollText>
        </FadeIn>
        <FadeIn direction={FadeInDirection.DOWN}>
          <HorizontalScrollText baseVelocity={2}>Studio</HorizontalScrollText>
        </FadeIn>
      </FadeInStagger>
      <StaggerSplitText text='Here some test' />
    </ColorContextChangerContainer>
  );
}
