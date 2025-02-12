import { get } from 'lodash-es';

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

export type ColorThemeMap = {
  [K in ColorThemes]: ColorThemes;
};

export type InteractiveColorTheme = {
  defaultState: ColorContextState;
  interactiveState: ColorContextState;
  hoverState: ColorContextState;
};

export const colors: {
  [K in keyof CombinedColorsObject]: string;
} = {
  [BaseColors.BLACK]: 'Black',
  [BaseColors.WHITE]: 'GhostWhite',
  [BaseColors.OFF_WHITE]: 'Papayawhip',
  [PrimaryColors.BLUE]: 'DarkBlue',
  [PrimaryColors.RED]: 'Pink',
  [PrimaryColors.YELLOW]: 'Khaki',
  [SecondaryColors.GREEN]: 'DarkGreen',
  [SecondaryColors.ORANGE]: 'DarkOrange',
  [SecondaryColors.PURPLE]: 'Indigo',
};

export const colorThemeMap: ColorThemeContextMap = {
  [ColorThemes.DEFAULT]: {
    background: get(colors, [BaseColors.BLACK]),
    foreground: get(colors, [BaseColors.OFF_WHITE]),
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

export const hoverColorContextKeyMap: ColorThemeMap = {
  [ColorThemes.BLUE]: ColorThemes.ORANGE,
  [ColorThemes.DEFAULT]: ColorThemes.PURPLE,
  [ColorThemes.GREEN]: ColorThemes.RED,
  [ColorThemes.ORANGE]: ColorThemes.BLUE,
  [ColorThemes.PURPLE]: ColorThemes.YELLOW,
  [ColorThemes.RED]: ColorThemes.GREEN,
  [ColorThemes.WHITE]: ColorThemes.PURPLE,
  [ColorThemes.YELLOW]: ColorThemes.PURPLE,
};

export const interactiveColorContextKeyMap: ColorThemeMap = {
  [ColorThemes.BLUE]: ColorThemes.YELLOW,
  [ColorThemes.DEFAULT]: ColorThemes.ORANGE,
  [ColorThemes.GREEN]: ColorThemes.ORANGE,
  [ColorThemes.ORANGE]: ColorThemes.PURPLE,
  [ColorThemes.PURPLE]: ColorThemes.YELLOW,
  [ColorThemes.RED]: ColorThemes.BLUE,
  [ColorThemes.WHITE]: ColorThemes.DEFAULT,
  [ColorThemes.YELLOW]: ColorThemes.BLUE,
};
