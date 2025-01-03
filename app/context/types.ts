export type ColorContextState = {
  background: string;
  foreground: string;
};

export enum BaseColors {
  WHITE = 'WHITE',
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

type PrimaryColorsObject = {
  [K in keyof typeof PrimaryColors]: string;
};

type SecondaryColorsObject = {
  [K in keyof typeof SecondaryColors]: string;
};

type BaseColorsObject = {
  [K in keyof typeof BaseColors]: string;
};

export type CombinedColorsObject = PrimaryColorsObject &
  SecondaryColorsObject &
  BaseColorsObject;

export enum ColorThemeContext {
  BLUE = PrimaryColors.BLUE,
  DEFAULT = BaseColors.BLACK,
  WHITE = BaseColors.WHITE,
  RED = PrimaryColors.RED,
  YELLOW = PrimaryColors.YELLOW,

  GREEN = SecondaryColors.GREEN,
  ORANGE = SecondaryColors.ORANGE,
  PURPLE = SecondaryColors.PURPLE,
}

export type ColorThemeContextMap = {
  [K in ColorThemeContext]: ColorContextState;
};
