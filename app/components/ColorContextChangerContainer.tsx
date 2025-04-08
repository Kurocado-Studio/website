import { motion } from 'framer-motion';
import * as React from 'react';
import { useCallback } from 'react';

import { ColorContext } from '~/context/ColorContext';
import type { ColorThemes } from '~/context/types';
import type { ClassName, HTMLIntrinsicElements } from '~/domain/types';

export interface ColorChangeContainerProps {
  children: React.ReactNode;
  className?: ClassName;
  colorTheme: ColorThemes;
  as?: HTMLIntrinsicElements;
}

export function ColorContextChangerContainer({
  colorTheme,
  className,
  as,
  children,
}: ColorChangeContainerProps): React.ReactNode {
  const ref = React.useRef(null);

  const { setColorContext } = React.useContext(ColorContext);

  const CurrentTag: HTMLIntrinsicElements = as || 'div';
  // @ts-expect-error Element mismatch between motion
  const ColorContextChanger = motion[CurrentTag];

  const handleColorContext = useCallback(
    () => setColorContext(colorTheme),
    [colorTheme, setColorContext],
  );

  return (
    <ColorContextChanger
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={className}
      onPointerEnter={handleColorContext}
      onTouchStart={handleColorContext}
      onDragStart={handleColorContext}
    >
      {children}
    </ColorContextChanger>
  );
}
