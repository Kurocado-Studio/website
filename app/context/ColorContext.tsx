import { motion } from 'framer-motion';
import { get } from 'lodash-es';
import React, { createContext, useMemo, useState } from 'react';

import { ColorThemes } from '~/context/types';
import type { ColorContextState } from '~/context/types';
import { useColorThemes } from '~/hooks/useColorThemes';
import type { GrayscaleImageProps } from '~/lib/GrayscaleImage';

type ColorContext = {
  colorContext: ColorThemes | GrayscaleImageProps;
  setColorContext: (colorContext: ColorThemes) => void;
};

export const ColorContext = createContext<ColorContext>({
  colorContext: ColorThemes.DEFAULT,
  setColorContext: (colorContext: ColorThemes): void => {
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
  const { resolveColorTheme, colorThemeMap, colorTheme } = useColorThemes();

  const [colors, setColors] = useState<ColorContextState>(
    get(colorThemeMap, [ColorThemes.DEFAULT]),
  );

  const providerValue = useMemo<ColorContext>(
    () => ({
      colorContext: colorTheme,
      setColorContext: (selectedColorContext: ColorThemes): void => {
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
