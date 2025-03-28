import { useScroll, useTransform } from 'framer-motion';
import { get } from 'lodash-es';
import React from 'react';

import { ColorContextChangerContainer } from '~/components/ColorContextChangerContainer';
import { Container } from '~/components/Container';
import { FadeIn, FadeInDirection, FadeInStagger } from '~/components/FadeIn';
import { ColorContext } from '~/context/ColorContext';
import { ColorThemes } from '~/context/types';
import { useWindowSize } from '~/hooks/useWindowSize';
import { HorizontalScrollText } from '~/lib/HorizontalScrollText';

export function Intro(): React.ReactNode {
  const { setColorContext } = React.useContext(ColorContext);
  const { size } = useWindowSize();

  const innerHeight = get(size, ['innerHeight']);
  const innerWidth = get(size, ['innerWidth']);

  const mutableRefObject = React.useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: mutableRefObject,
    offset: ['start end', 'end center'],
  });

  const maximumScale = React.useMemo(() => {
    const windowYRatio = innerHeight / innerWidth;
    const xScale = 2;
    const yScale = xScale * windowYRatio;
    return Math.max(xScale, yScale);
  }, [innerWidth, innerHeight]);

  const scale = useTransform(
    scrollYProgress,
    [0.1, 0.9],
    [maximumScale * 8, 1],
  );

  return (
    <Container
      withMaxWidth={false}
      as='section'
      className='z-50 py-0 md:py-0'
      style={{ scale, opacity: scale }}
      onPointerEnter={() => setColorContext(ColorThemes.DEFAULT)}
    >
      <ColorContextChangerContainer className='overflow-hidden rounded-xl pt-[40vh] xl:pt-[44vh]'>
        <div ref={mutableRefObject}>
          <FadeInStagger>
            <FadeIn direction={FadeInDirection.UP}>
              <HorizontalScrollText baseVelocity={-0.8}>
                Kurocado
              </HorizontalScrollText>
            </FadeIn>
            <FadeIn direction={FadeInDirection.DOWN}>
              <HorizontalScrollText baseVelocity={2}>
                Studio
              </HorizontalScrollText>
            </FadeIn>
          </FadeInStagger>
        </div>
      </ColorContextChangerContainer>
    </Container>
  );
}
