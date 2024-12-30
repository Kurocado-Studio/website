export type ColorContextState = {
  background: string;
  foreground: string;
};

export enum BaseColorsEnum {
  WHITE = 'WHITE',
  BLACK = 'BLACK',
}

export enum PrimaryColorsEnum {
  RED = 'RED',
  BLUE = 'BLUE',
  YELLOW = 'YELLOW',
}

export enum SecondaryColorsEnum {
  GREEN = 'GREEN',
  ORANGE = 'ORANGE',
  PURPLE = 'PURPLE',
}

type PrimaryColorsObject = {
  [K in keyof typeof PrimaryColorsEnum]: string;
};

type SecondaryColorsObject = {
  [K in keyof typeof SecondaryColorsEnum]: string;
};

type BaseColorsObject = {
  [K in keyof typeof BaseColorsEnum]: string;
};

export type CombinedColorsObject = PrimaryColorsObject &
  SecondaryColorsObject &
  BaseColorsObject;

export enum ColorContextEnum {
  BLUE = PrimaryColorsEnum.BLUE,
  DEFAULT = BaseColorsEnum.BLACK,
  WHITE = BaseColorsEnum.WHITE,
  RED = PrimaryColorsEnum.RED,
  YELLOW = PrimaryColorsEnum.YELLOW,

  GREEN = SecondaryColorsEnum.GREEN,
  ORANGE = SecondaryColorsEnum.ORANGE,
  PURPLE = SecondaryColorsEnum.PURPLE,
}

export type ColorContextMap = {
  [K in ColorContextEnum]: ColorContextState;
};
