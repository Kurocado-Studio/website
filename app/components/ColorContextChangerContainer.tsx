import { motion, useInView } from 'framer-motion';
import { debounce, get } from 'lodash-es';
import * as React from 'react';

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

  const { setColorContext, ...restColorContext } =
    React.useContext(ColorContext);

  const isInView = useInView(ref, {
    once: false,
    margin: '-500px',
  });

  const debouncedColorContextHandler = debounce(
    (debounceColorContext: ColorThemes) => {
      setColorContext(debounceColorContext);
    },
    100,
  );

  const currentBackgroundColorContextKey = get(restColorContext, [
    'colorContext',
    'defaultState',
    'background',
  ]);

  React.useEffect(() => {
    if (isInView && currentBackgroundColorContextKey !== colorTheme) {
      debouncedColorContextHandler(colorTheme);
    }
  }, [
    isInView,
    colorTheme,
    debouncedColorContextHandler,
    currentBackgroundColorContextKey,
  ]);

  const CurrentTag: HTMLIntrinsicElements = as || 'div';
  // @ts-expect-error Element mismatch between motion
  const ColorContextChanger = motion[CurrentTag];

  return (
    <ColorContextChanger
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={className}
    >
      {children}
    </ColorContextChanger>
  );
}
