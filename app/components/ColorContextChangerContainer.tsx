import { motion, useInView } from 'framer-motion';
import { debounce } from 'lodash-es';
import * as React from 'react';

import { ColorContext } from '~/context/ColorContext';
import type { ColorThemeContextEnum } from '~/context/types';

export interface ColorChangeContainerProps {
  children: React.ReactNode;
  className?: string;
  colorContext: ColorThemeContextEnum;
  tag?: string;
}

export function ColorContextChangerContainer({
  colorContext,
  className,
  tag,
  children,
}: ColorChangeContainerProps): React.ReactNode {
  const ref = React.useRef(null);

  const { setColorContext } = React.useContext(ColorContext);

  const isInView = useInView(ref, { once: false, margin: '-500px' });

  const debouncedColorContextHandler = debounce(
    (debounceColorContext: ColorThemeContextEnum) => {
      setColorContext(debounceColorContext);
    },
    100,
  );

  React.useEffect(() => {
    if (isInView) {
      debouncedColorContextHandler(colorContext);
    }
  }, [isInView, colorContext, debouncedColorContextHandler]);

  const CurrentTag = tag || 'div';
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
