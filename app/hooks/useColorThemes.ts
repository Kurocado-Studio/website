import { get } from 'lodash-es';
import React from 'react';

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
import type { GrayscaleImageProps } from '~/lib/GrayscaleImage';

export type UseColorThemes = () => {
  resolveHoverColorTheme: (
    colorContextOrImageProps: ColorThemes | GrayscaleImageProps,
  ) => ColorContextState;
  hoverColorContextKeyMap: {
    [K in ColorThemes]: ColorThemes;
  };
  colorTheme: ColorThemes;
  colorThemeMap: ColorThemeContextMap;
  resolveColorTheme: (
    themeOrImageProps: ColorThemes | GrayscaleImageProps,
  ) => ColorContextState;
};

export const useColorThemes: UseColorThemes = () => {
  const [colorTheme, setColorTheme] = React.useState<ColorThemes>(
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

  const hoverColorContextKeyMap: {
    [K in ColorThemes]: ColorThemes;
  } = {
    [ColorThemes.BLUE]: ColorThemes.ORANGE,
    [ColorThemes.DEFAULT]: ColorThemes.PURPLE,
    [ColorThemes.GREEN]: ColorThemes.RED,
    [ColorThemes.ORANGE]: ColorThemes.BLUE,
    [ColorThemes.PURPLE]: ColorThemes.YELLOW,
    [ColorThemes.RED]: ColorThemes.GREEN,
    [ColorThemes.WHITE]: ColorThemes.PURPLE,
    [ColorThemes.YELLOW]: ColorThemes.PURPLE,
  };

  const resolveColorTheme = (
    selectedColorContext: ColorThemes | GrayscaleImageProps,
  ): ColorContextState => {
    if (typeof selectedColorContext === 'string') {
      setColorTheme(selectedColorContext);
      return get(colorThemeMap, [selectedColorContext]);
    }

    return get(colorThemeMap, [ColorThemes.DEFAULT]);
  };

  const resolveHoverColorTheme = (
    colorContextOrImageProps: ColorThemes | GrayscaleImageProps,
  ): ColorContextState => {
    if (typeof colorContextOrImageProps === 'string') {
      const hoverColorContextKey = get(hoverColorContextKeyMap, [
        colorContextOrImageProps,
      ]);

      return get(colorThemeMap, [hoverColorContextKey]);
    }

    return get(colorThemeMap, [ColorThemes.DEFAULT]);
  };

  return {
    hoverColorContextKeyMap,
    resolveHoverColorTheme,
    resolveColorTheme,
    colorThemeMap,
    colorTheme,
  };
};
