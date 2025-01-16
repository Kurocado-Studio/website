import React from 'react';

import { Container } from '~/components/Container';
import { FadeIn, FadeInDirection, FadeInStagger } from '~/components/FadeIn';
import { ColorContext } from '~/context/ColorContext';
import { ColorThemes } from '~/context/types';
import { HorizontalScrollText } from '~/lib/HorizontalScrollText';

export function Intro(): React.ReactNode {
  const { setColorContext } = React.useContext(ColorContext);

  return (
    <Container
      as='section'
      withMaxWidth={false}
      onPointerEnter={() => setColorContext(ColorThemes.WHITE)}
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
    </Container>
  );
}
