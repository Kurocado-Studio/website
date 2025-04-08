import React from 'react';

import { ColorContextChangerContainer } from '~/components/ColorContextChangerContainer';
import { Container } from '~/components/Container';
import { FadeIn, FadeInDirection, FadeInStagger } from '~/components/FadeIn';
import { ColorThemes } from '~/context/types';
import { HorizontalScrollText } from '~/domain/lib/HorizontalScrollText';

export function Intro(): React.ReactNode {
  return (
    <Container as='section' withMaxWidth={false}>
      <ColorContextChangerContainer colorTheme={ColorThemes.MAGENTA}>
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
      </ColorContextChangerContainer>
    </Container>
  );
}
