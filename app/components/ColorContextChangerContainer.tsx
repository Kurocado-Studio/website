import { motion, useInView } from 'framer-motion';
import { debounce } from 'lodash-es';
import * as React from 'react';

import { ColorContext } from '~/context/ColorContext';
import type { ColorThemes } from '~/context/types';
import type { ClassName, HTMLIntrinsicElements } from '~/lib/types';

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

  React.useEffect(() => {
    if (isInView && restColorContext.colorContext !== colorTheme) {
      debouncedColorContextHandler(colorTheme);
    }
  }, [
    isInView,
    colorTheme,
    debouncedColorContextHandler,
    restColorContext.colorContext,
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
