import React from 'react';

import { HorizontalScrollText } from '~/lib/HorizontalScrollText';

export function Intro(): React.ReactNode {
  return (
    <>
      <hr id='home-section-anchor-tag' />
      <div className='mt-24 sm:mt-32 md:mt-56'>
        <HorizontalScrollText baseVelocity={-2}>Kurocado</HorizontalScrollText>
        <HorizontalScrollText baseVelocity={2}>Studio</HorizontalScrollText>
      </div>
    </>
  );
}
