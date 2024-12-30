import { motion } from 'framer-motion';
import { get } from 'lodash-es';
import React, { createContext, useState } from 'react';

import { ColorContextResolver } from '~/context/colorContext.resolver';
import { ColorContextEnum } from '~/context/types';
import type { ColorContextState } from '~/context/types';

const { createColorContextMap } = ColorContextResolver;

export const ColorContext = createContext({
  colorContextMap: createColorContextMap(),
  colorContext: ColorContextEnum.DEFAULT,
  setColorContext: (colorContext: ColorContextEnum): void => {
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
  const contextResolver = ColorContextResolver.create();

  const [colors, setColors] = useState<ColorContextState>(
    contextResolver.resolve(ColorContextEnum.DEFAULT),
  );

  const [colorContext, setColorContext] = useState<ColorContextEnum>(
    ColorContextEnum.DEFAULT,
  );

  const setColorsHandler = (selectedColorContext: ColorContextEnum): void => {
    setColorContext(selectedColorContext);

    const { background, foreground } = contextResolver.resolve(colorContext);

    setColors({ background, foreground });
  };

  const providerValue = React.useMemo(
    () => ({
      colorContext,
      colorContextMap: createColorContextMap(),
      setColorContext: setColorsHandler,
    }),
    [colorContext],
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
