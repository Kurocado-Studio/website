import { motion } from 'framer-motion';
import { get } from 'lodash-es';
import React, { createContext, useCallback, useState } from 'react';

import { ColorThemeContextEnum } from '~/context/types';
import type { ColorContextState } from '~/context/types';
import { useColorThemeResolver } from '~/hooks/useColorThemeResolver';

export const ColorContext = createContext({
  colorContext: ColorThemeContextEnum.DEFAULT,
  setColorContext: (colorContext: ColorThemeContextEnum): void => {
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
    get(colorThemeMap, [ColorThemeContextEnum.DEFAULT]),
  );

  const setColorsHandler = useCallback(
    () =>
      (selectedColorContext: ColorThemeContextEnum): void => {
        const { background, foreground } =
          resolveColorTheme(selectedColorContext);

        setColors({ background, foreground });
      },
    [resolveColorTheme],
  );

  const providerValue = React.useMemo(
    () => ({
      colorContext: colorTheme,
      setColorContext: setColorsHandler,
    }),
    [colorTheme, setColorsHandler],
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
