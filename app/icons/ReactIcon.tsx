import clsx from 'clsx';
import get from 'lodash-es/get';
import React from 'react';

import { BaseIcon, type IconVariantProps } from '~/icons/Icon';

export function ReactIcon(props: IconVariantProps): React.ReactNode {
  const { className, ...rest } = props;

  return (
    <BaseIcon
      regular={
        <i
          className={clsx('devicon-react-original-wordmark colored', className)}
          {...rest}
        />
      }
      inverted={
        <i
          className={clsx('devicon-react-original-wordmark', className)}
          {...rest}
        />
      }
      plain={
        <i
          className={clsx('devicon-react-original colored', className)}
          {...rest}
        />
      }
      plainInverted={
        <i className={clsx('devicon-react-original', className)} {...rest} />
      }
      variant={get(props, ['variant'])}
    />
  );
}
