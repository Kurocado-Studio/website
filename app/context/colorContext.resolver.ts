import { get } from 'lodash-es';

import {
  BaseColorsEnum,
  ColorContextEnum,
  PrimaryColorsEnum,
  SecondaryColorsEnum,
} from '~/context/types';
import type {
  ColorContextMap,
  ColorContextState,
  CombinedColorsObject,
} from '~/context/types';

export class ColorContextResolver {
  protected colors: {
    [K in keyof CombinedColorsObject]: string;
  } = {
    [BaseColorsEnum.BLACK]: 'Black',
    [BaseColorsEnum.WHITE]: 'GhostWhite',
    [PrimaryColorsEnum.BLUE]: 'DarkBlue',
    [PrimaryColorsEnum.RED]: 'Crimson',
    [PrimaryColorsEnum.YELLOW]: 'Khaki',
    [SecondaryColorsEnum.GREEN]: 'MediumSpringGreen',
    [SecondaryColorsEnum.ORANGE]: 'DarkOrange',
    [SecondaryColorsEnum.PURPLE]: 'Indigo',
  };

  private resolvers: ColorContextMap = {
    [ColorContextEnum.DEFAULT]: {
      background: get(this, ['colors', BaseColorsEnum.BLACK]),
      foreground: get(this, ['colors', PrimaryColorsEnum.RED]),
    },
    [ColorContextEnum.WHITE]: {
      background: get(this, ['colors', BaseColorsEnum.WHITE]),
      foreground: get(this, ['colors', BaseColorsEnum.BLACK]),
    },
    [ColorContextEnum.RED]: {
      background: get(this, ['colors', PrimaryColorsEnum.RED]),
      foreground: get(this, ['colors', SecondaryColorsEnum.GREEN]),
    },
    [ColorContextEnum.GREEN]: {
      background: get(this, ['colors', SecondaryColorsEnum.GREEN]),
      foreground: get(this, ['colors', PrimaryColorsEnum.RED]),
    },
    [ColorContextEnum.BLUE]: {
      background: get(this, ['colors', PrimaryColorsEnum.BLUE]),
      foreground: get(this, ['colors', SecondaryColorsEnum.ORANGE]),
    },
    [ColorContextEnum.ORANGE]: {
      background: get(this, ['colors', SecondaryColorsEnum.ORANGE]),
      foreground: get(this, ['colors', PrimaryColorsEnum.BLUE]),
    },
    [ColorContextEnum.PURPLE]: {
      background: get(this, ['colors', SecondaryColorsEnum.PURPLE]),
      foreground: get(this, ['colors', PrimaryColorsEnum.YELLOW]),
    },
    [ColorContextEnum.YELLOW]: {
      background: get(this, ['colors', PrimaryColorsEnum.YELLOW]),
      foreground: get(this, ['colors', SecondaryColorsEnum.PURPLE]),
    },
  };

  resolve(selectedColorContext: ColorContextEnum): ColorContextState {
    return get(
      this,
      ['resolvers', selectedColorContext],
      get(this, ['resolvers', ColorContextEnum.DEFAULT]),
    );
  }

  public static createColorContextMap = (): ColorContextMap => {
    return new ColorContextResolver().resolvers;
  };

  public static create = (): ColorContextResolver => {
    return new ColorContextResolver();
  };
}
