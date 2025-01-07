import { get } from 'lodash-es';
import { useState } from 'react';

import {
  BaseColors,
  ColorThemes,
  PrimaryColors,
  SecondaryColors,
} from '~/context/types';
import type {
  ColorContextState,
  ColorThemeContextMap,
  CombinedColorsObject,
} from '~/context/types';

export type UseColorThemes = () => {
  colorTheme: ColorThemes;
  colorThemeMap: ColorThemeContextMap;
  resolveColorTheme: (theme: ColorThemes) => ColorContextState;
};

export const useColorThemes: UseColorThemes = () => {
  const [colorTheme, setColorTheme] = useState<ColorThemes>(
    ColorThemes.DEFAULT,
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
    [ColorThemes.DEFAULT]: {
      background: get(colors, [BaseColors.BLACK]),
      foreground: get(colors, [PrimaryColors.RED]),
    },
    [ColorThemes.WHITE]: {
      background: get(colors, [BaseColors.WHITE]),
      foreground: get(colors, [BaseColors.BLACK]),
    },
    [ColorThemes.RED]: {
      background: get(colors, [PrimaryColors.RED]),
      foreground: get(colors, [SecondaryColors.GREEN]),
    },
    [ColorThemes.GREEN]: {
      background: get(colors, [SecondaryColors.GREEN]),
      foreground: get(colors, [PrimaryColors.RED]),
    },
    [ColorThemes.BLUE]: {
      background: get(colors, [PrimaryColors.BLUE]),
      foreground: get(colors, [SecondaryColors.ORANGE]),
    },
    [ColorThemes.ORANGE]: {
      background: get(colors, [SecondaryColors.ORANGE]),
      foreground: get(colors, [PrimaryColors.BLUE]),
    },
    [ColorThemes.PURPLE]: {
      background: get(colors, [SecondaryColors.PURPLE]),
      foreground: get(colors, [PrimaryColors.YELLOW]),
    },
    [ColorThemes.YELLOW]: {
      background: get(colors, [PrimaryColors.YELLOW]),
      foreground: get(colors, [SecondaryColors.PURPLE]),
    },
  };

  const resolveColorTheme = (
    selectedColorContext: ColorThemes,
  ): ColorContextState => {
    setColorTheme(selectedColorContext);

    return get(
      colorThemeMap,
      [selectedColorContext],
      get(colorThemeMap, [ColorThemes.DEFAULT]),
    );
  };

  return {
    resolveColorTheme,
    colorThemeMap,
    colorTheme,
  };
};
