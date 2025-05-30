import type { MotionStyle } from 'framer-motion';
import { get } from 'lodash-es';
import React from 'react';

import { Container } from '~/components/Container';
import { ColorContext } from '~/context/ColorContext';

export function Footer(): React.ReactNode {
  const { colorContext } = React.useContext(ColorContext);

  const foreground = get(colorContext, ['defaultState', 'foreground']);

  return (
    <Container
      as='footer'
      className='md:8 flex flex-wrap items-end justify-between gap-x-6 gap-y-4 pt-12 lg:py-12'
      style={
        { borderTop: `1px solid ${foreground}` } as React.CSSProperties &
          MotionStyle
      }
    >
      <p className='text-sm font-bold'>Made with love & adobo on Github</p>
      <p className='text-sm font-bold'>
        © Kurocado Studio - {new Date().getFullYear()}
      </p>
    </Container>
  );
}
