import { get } from 'lodash-es';
import { useState } from 'react';

import {
  BaseColorsEnum,
  ColorThemeContextEnum,
  PrimaryColorsEnum,
  SecondaryColorsEnum,
} from '~/context/types';
import type {
  ColorContextState,
  ColorThemeContextMap,
  CombinedColorsObject,
} from '~/context/types';

export type UseColorThemeResolver = () => {
  colorTheme: ColorThemeContextEnum;
  colorThemeMap: ColorThemeContextMap;
  resolveColorTheme: (theme: ColorThemeContextEnum) => ColorContextState;
};

export const useColorThemeResolver: UseColorThemeResolver = () => {
  const [colorTheme, setColorTheme] = useState<ColorThemeContextEnum>(
    ColorThemeContextEnum.DEFAULT,
  );

  const colors: {
    [K in keyof CombinedColorsObject]: string;
  } = {
    [BaseColorsEnum.BLACK]: 'Black',
    [BaseColorsEnum.WHITE]: 'GhostWhite',
    [PrimaryColorsEnum.BLUE]: 'DarkBlue',
    [PrimaryColorsEnum.RED]: 'Crimson',
    [PrimaryColorsEnum.YELLOW]: 'Khaki',
    [SecondaryColorsEnum.GREEN]: 'MediumSeaGreen',
    [SecondaryColorsEnum.ORANGE]: 'DarkOrange',
    [SecondaryColorsEnum.PURPLE]: 'Indigo',
  };
  const colorThemeMap: ColorThemeContextMap = {
    [ColorThemeContextEnum.DEFAULT]: {
      background: get(colors, [BaseColorsEnum.BLACK]),
      foreground: get(colors, [PrimaryColorsEnum.RED]),
    },
    [ColorThemeContextEnum.WHITE]: {
      background: get(colors, [BaseColorsEnum.WHITE]),
      foreground: get(colors, [BaseColorsEnum.BLACK]),
    },
    [ColorThemeContextEnum.RED]: {
      background: get(colors, [PrimaryColorsEnum.RED]),
      foreground: get(colors, [SecondaryColorsEnum.GREEN]),
    },
    [ColorThemeContextEnum.GREEN]: {
      background: get(colors, [SecondaryColorsEnum.GREEN]),
      foreground: get(colors, [PrimaryColorsEnum.RED]),
    },
    [ColorThemeContextEnum.BLUE]: {
      background: get(colors, [PrimaryColorsEnum.BLUE]),
      foreground: get(colors, [SecondaryColorsEnum.ORANGE]),
    },
    [ColorThemeContextEnum.ORANGE]: {
      background: get(colors, [SecondaryColorsEnum.ORANGE]),
      foreground: get(colors, [PrimaryColorsEnum.BLUE]),
    },
    [ColorThemeContextEnum.PURPLE]: {
      background: get(colors, [SecondaryColorsEnum.PURPLE]),
      foreground: get(colors, [PrimaryColorsEnum.YELLOW]),
    },
    [ColorThemeContextEnum.YELLOW]: {
      background: get(colors, [PrimaryColorsEnum.YELLOW]),
      foreground: get(colors, [SecondaryColorsEnum.PURPLE]),
    },
  };

  const resolveColorTheme = (
    selectedColorContext: ColorThemeContextEnum,
  ): ColorContextState => {
    setColorTheme(selectedColorContext);

    return get(
      colorThemeMap,
      [selectedColorContext],
      get(colorThemeMap, [ColorThemeContextEnum.DEFAULT]),
    );
  };

  return {
    resolveColorTheme,
    colorThemeMap,
    colorTheme,
  };
};
