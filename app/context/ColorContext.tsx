import { motion, useScroll } from 'framer-motion';
import type { MotionValue } from 'framer-motion';
import { get } from 'lodash-es';
import type { MutableRefObject } from 'react';
import React, { createContext, useRef, useState } from 'react';

import { ColorThemes } from '~/context/types';
import type { ColorContextState } from '~/context/types';
import { useColorThemes } from '~/hooks/useColorThemes';
import type { GrayscaleImageProps } from '~/lib/GrayscaleImage';

type ColorContext = {
  targetRef: MutableRefObject<HTMLBodyElement | null>;
  colorContext: ColorThemes | GrayscaleImageProps;
  setColorContext: (colorContext: ColorThemes) => void;
  scrollY: MotionValue<number>;
};

export const ColorContext = createContext<ColorContext>({
  colorContext: ColorThemes.DEFAULT,
  targetRef: { current: null },
  scrollY: {
    current: null,
    version: '',
    prev: undefined,
    prevFrameValue: undefined,
    updatedAt: undefined,
    prevUpdatedAt: undefined,
    events: undefined,
  } as unknown as MotionValue<number>,
  setColorContext: (colorContext: ColorThemes): void => {
    //as we need a default action to handle the param
    // eslint-disable-next-line no-console
    console.debug(colorContext);
  },
});

export function BodyHTMLTagColorProvider({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode {
  const { resolveColorTheme, colorThemeMap, colorTheme } = useColorThemes();
  const colorContextTargetRef = useRef<HTMLBodyElement | null>(null);

  const { scrollY } = useScroll({
    target: colorContextTargetRef,
    offset: ['start start', 'end end'],
  });

  const [colors, setColors] = useState<ColorContextState>(
    get(colorThemeMap, [ColorThemes.DEFAULT]),
  );

  const providerValue = {
    colorContext: colorTheme,
    targetRef: colorContextTargetRef,
    setColorContext: (selectedColorContext: ColorThemes): void => {
      const { background, foreground } =
        resolveColorTheme(selectedColorContext);

      setColors({ background, foreground });
    },
    scrollY,
  };

  return (
    <ColorContext.Provider value={providerValue}>
      <motion.body
        ref={colorContextTargetRef}
        style={{
          backgroundColor: get(colors, ['background']),
          color: get(colors, ['foreground']),
          transition: 'background-color 0.9s, color 1.2s',
        }}
        className='relative selection:bg-lime-200 selection:text-[#f52891cc]'
        data-testid='root-body-test-id'
      >
        {children}
      </motion.body>
    </ColorContext.Provider>
  );
}
