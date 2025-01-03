import { get } from 'lodash-es';
import { useState } from 'react';

import {
  BaseColors,
  ColorThemeContext,
  PrimaryColors,
  SecondaryColors,
} from '~/context/types';
import type {
  ColorContextState,
  ColorThemeContextMap,
  CombinedColorsObject,
} from '~/context/types';

export type UseColorThemeResolver = () => {
  colorTheme: ColorThemeContext;
  colorThemeMap: ColorThemeContextMap;
  resolveColorTheme: (theme: ColorThemeContext) => ColorContextState;
};

export const useColorThemeResolver: UseColorThemeResolver = () => {
  const [colorTheme, setColorTheme] = useState<ColorThemeContext>(
    ColorThemeContext.DEFAULT,
  );

  const colors: {
    [K in keyof CombinedColorsObject]: string;
  } = {
    [BaseColors.BLACK]: 'Black',
    [BaseColors.WHITE]: 'GhostWhite',
    [PrimaryColors.BLUE]: 'DarkBlue',
    [PrimaryColors.RED]: 'Crimson',
    [PrimaryColors.YELLOW]: 'Khaki',
    [SecondaryColors.GREEN]: 'MediumSeaGreen',
    [SecondaryColors.ORANGE]: 'DarkOrange',
    [SecondaryColors.PURPLE]: 'Indigo',
  };
  const colorThemeMap: ColorThemeContextMap = {
    [ColorThemeContext.DEFAULT]: {
      background: get(colors, [BaseColors.BLACK]),
      foreground: get(colors, [PrimaryColors.RED]),
    },
    [ColorThemeContext.WHITE]: {
      background: get(colors, [BaseColors.WHITE]),
      foreground: get(colors, [BaseColors.BLACK]),
    },
    [ColorThemeContext.RED]: {
      background: get(colors, [PrimaryColors.RED]),
      foreground: get(colors, [SecondaryColors.GREEN]),
    },
    [ColorThemeContext.GREEN]: {
      background: get(colors, [SecondaryColors.GREEN]),
      foreground: get(colors, [PrimaryColors.RED]),
    },
    [ColorThemeContext.BLUE]: {
      background: get(colors, [PrimaryColors.BLUE]),
      foreground: get(colors, [SecondaryColors.ORANGE]),
    },
    [ColorThemeContext.ORANGE]: {
      background: get(colors, [SecondaryColors.ORANGE]),
      foreground: get(colors, [PrimaryColors.BLUE]),
    },
    [ColorThemeContext.PURPLE]: {
      background: get(colors, [SecondaryColors.PURPLE]),
      foreground: get(colors, [PrimaryColors.YELLOW]),
    },
    [ColorThemeContext.YELLOW]: {
      background: get(colors, [PrimaryColors.YELLOW]),
      foreground: get(colors, [SecondaryColors.PURPLE]),
    },
  };

  const resolveColorTheme = (
    selectedColorContext: ColorThemeContext,
  ): ColorContextState => {
    setColorTheme(selectedColorContext);

    return get(
      colorThemeMap,
      [selectedColorContext],
      get(colorThemeMap, [ColorThemeContext.DEFAULT]),
    );
  };

  return {
    resolveColorTheme,
    colorThemeMap,
    colorTheme,
  };
};
