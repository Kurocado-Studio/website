import { motion } from 'framer-motion';
import { get } from 'lodash-es';
import React, { createContext, useMemo, useState } from 'react';

import { ColorThemeContext } from '~/context/types';
import type { ColorContextState } from '~/context/types';
import { useColorThemeResolver } from '~/hooks/useColorThemeResolver';

export const ColorContext = createContext({
  colorContext: ColorThemeContext.DEFAULT,
  setColorContext: (colorContext: ColorThemeContext): void => {
    /**
     * as we need a default action to handle the param
     */
    // eslint-disable-next-line no-console
    console.debug(colorContext);
  },
});

export function BodyHTMLTagColorProvider({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode {
  const { resolveColorTheme, colorThemeMap, colorTheme } =
    useColorThemeResolver();

  const [colors, setColors] = useState<ColorContextState>(
    get(colorThemeMap, [ColorThemeContext.DEFAULT]),
  );

  const providerValue = useMemo(
    () => ({
      colorContext: colorTheme,
      setColorContext: (selectedColorContext: ColorThemeContext): void => {
        const { background, foreground } =
          resolveColorTheme(selectedColorContext);

        setColors({ background, foreground });
      },
    }),
    [colorTheme, resolveColorTheme],
  );

  return (
    <ColorContext.Provider value={providerValue}>
      <motion.body
        style={{
          backgroundColor: get(colors, ['background']),
          color: get(colors, ['foreground']),
          transition: 'background-color 0.9s, color 1.2s',
        }}
        className='selection:bg-lime-200 selection:text-[#f52891cc]'
        data-testid='root-body-test-id'
      >
        {children}
      </motion.body>
    </ColorContext.Provider>
  );
}
