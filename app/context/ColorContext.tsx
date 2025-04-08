import { motion, useScroll } from 'framer-motion';
import type { MotionValue } from 'framer-motion';
import { get } from 'lodash-es';
import type { MutableRefObject } from 'react';
import React, { createContext, useRef } from 'react';

import { ColorThemes } from '~/context/types';
import {
  colorThemeMap,
  hoverColorContextKeyMap,
  interactiveColorContextKeyMap,
} from '~/domain/colors';
import type { InteractiveColorTheme } from '~/domain/colors';

type ColorContext = {
  targetRef: MutableRefObject<HTMLBodyElement | null>;
  colorContext: InteractiveColorTheme;
  setColorContext: (colorContext: ColorThemes) => void;
  scrollY: MotionValue<number>;
};

const initialInteractiveColorTheme: InteractiveColorTheme = {
  colorThemeName: ColorThemes.DEFAULT,
  defaultState: get(colorThemeMap, [ColorThemes.DEFAULT]),
  hoverState: get(colorThemeMap, [ColorThemes.BLUE]),
  interactiveState: get(colorThemeMap, [ColorThemes.ORANGE]),
};

export const ColorContext = createContext<ColorContext>({
  colorContext: initialInteractiveColorTheme,
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
  const [colorTheme, setColorTheme] = React.useState<InteractiveColorTheme>(
    initialInteractiveColorTheme,
  );

  const colorContextTargetRef = useRef<HTMLBodyElement | null>(null);

  const { scrollY } = useScroll({
    target: colorContextTargetRef,
    offset: ['start start', 'end end'],
  });

  const providerValue = {
    colorContext: colorTheme,
    targetRef: colorContextTargetRef,
    setColorContext: (selectedColorContext: ColorThemes): void => {
      const colorTheme = selectedColorContext;
      const hoverColorContextKey = get(hoverColorContextKeyMap, [
        selectedColorContext,
      ]);

      const interactiveColorContextKey = get(interactiveColorContextKeyMap, [
        selectedColorContext,
      ]);

      const defaultState = get(colorThemeMap, [selectedColorContext]);
      const hoverState = get(colorThemeMap, [hoverColorContextKey]);
      const interactiveState = get(colorThemeMap, [interactiveColorContextKey]);

      setColorTheme({
        colorThemeName: colorTheme,
        defaultState,
        interactiveState,
        hoverState,
      });
    },
    scrollY,
  };

  return (
    <ColorContext.Provider value={providerValue}>
      <motion.body
        ref={colorContextTargetRef}
        style={{
          backgroundColor: get(colorTheme, ['defaultState', 'background']),
          color: get(colorTheme, ['defaultState', 'foreground']),
          transition: 'background-color 0.9s, color 1.2s',
        }}
        className='relative selection:bg-lime-200 selection:text-[magenta]'
        data-testid='root-body-test-id'
      >
        {children}
      </motion.body>
    </ColorContext.Provider>
  );
}
