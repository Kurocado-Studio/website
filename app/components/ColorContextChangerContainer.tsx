import { motion } from 'framer-motion';
import { get } from 'lodash-es';
import * as React from 'react';

import { ColorContext } from '~/context/ColorContext';
import type { ClassName, HTMLIntrinsicElements } from '~/lib/types';

export interface ColorChangeContainerProps {
  children: React.ReactNode;
  className?: ClassName;
  as?: HTMLIntrinsicElements;
}

export function ColorContextChangerContainer({
  className,
  as,
  children,
}: ColorChangeContainerProps): React.ReactNode {
  const ref = React.useRef(null);

  const { colorContext } = React.useContext(ColorContext);

  const CurrentTag: HTMLIntrinsicElements = as || 'div';
  // @ts-expect-error Element mismatch between motion
  const ColorContextChanger = motion[CurrentTag];

  return (
    <ColorContextChanger
      style={{
        backgroundColor: get(colorContext, ['defaultState', 'background']),
        color: get(colorContext, ['defaultState', 'foreground']),
        transition: 'background-color 0.9s, color 1.2s',
      }}
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={className}
    >
      {children}
    </ColorContextChanger>
  );
}
