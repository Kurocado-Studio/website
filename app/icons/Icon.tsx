import get from 'lodash-es/get';
import { type ReactNode } from 'react';
import type React from 'react';

import type { PropsWithoutRef } from '~/domain/types';

enum IconVariant {
  REGULAR = 'REGULAR',
  INVERTED = 'INVERTED',
  PLAIN_REGULAR = 'PLAIN_REGULAR',
  PLAIN_INVERTED = 'PLAIN_INVERTED',
}

interface BaseIconProps {
  regular: ReactNode;
  inverted: ReactNode;
  plain: ReactNode;
  plainInverted: ReactNode;
  variant?: IconVariant;
}

type IconComponentProps = PropsWithoutRef<'i'>;

export type IconVariantFC = React.FC<
  IconComponentProps & { variant?: IconVariant }
>;

export interface IconVariantProps extends IconComponentProps {
  variant?: IconVariant;
}

export const BaseIcon: React.FC<BaseIconProps> = (props) => {
  const UnknownIcon = null;

  const variant: IconVariant = get(
    props,
    ['variant'],
    IconVariant.PLAIN_INVERTED,
  );

  switch (variant) {
    case IconVariant.INVERTED:
      return get(props, ['inverted'], UnknownIcon);
    case IconVariant.PLAIN_INVERTED:
      return get(props, ['plainInverted'], UnknownIcon);
    case IconVariant.PLAIN_REGULAR:
      return get(props, ['plain'], UnknownIcon);
    case IconVariant.REGULAR:
      return get(props, ['regular'], UnknownIcon);
    default:
      return UnknownIcon;
  }
};
