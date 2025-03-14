export type ColorContextState = {
  background: string;
  foreground: string;
};

export enum BaseColors {
  WHITE = 'WHITE',
  OFF_WHITE = 'OFF_WHITE',
  BLACK = 'BLACK',
}

export enum PrimaryColors {
  RED = 'RED',
  BLUE = 'BLUE',
  YELLOW = 'YELLOW',
}

export enum SecondaryColors {
  GREEN = 'GREEN',
  ORANGE = 'ORANGE',
  PURPLE = 'PURPLE',
}

export enum TertiaryColors {
  MAGENTA = 'MAGENTA',
}

type PrimaryColorsObject = {
  [K in keyof typeof PrimaryColors]: string;
};

type SecondaryColorsObject = {
  [K in keyof typeof SecondaryColors]: string;
};

type TertiaryColorsObject = {
  [K in keyof typeof TertiaryColors]: string;
};

type BaseColorsObject = {
  [K in keyof typeof BaseColors]: string;
};

export type CombinedColorsObject = PrimaryColorsObject &
  SecondaryColorsObject &
  TertiaryColorsObject &
  BaseColorsObject;

export enum ColorThemes {
  BLUE = PrimaryColors.BLUE,
  DEFAULT = BaseColors.BLACK,
  WHITE = BaseColors.WHITE,
  RED = PrimaryColors.RED,
  YELLOW = PrimaryColors.YELLOW,

  GREEN = SecondaryColors.GREEN,
  ORANGE = SecondaryColors.ORANGE,
  PURPLE = SecondaryColors.PURPLE,
  MAGENTA = TertiaryColors.MAGENTA,
}

export type ColorThemeContextMap = {
  [K in ColorThemes]: ColorContextState;
};
