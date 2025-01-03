import get from 'lodash-es/get';
import React from 'react';

import { BaseIcon, type IconVariantProps } from '~/icons/Icon';

export function NestJsIcon(props: IconVariantProps): React.ReactNode {
  return (
    <BaseIcon
      regular={
        <i className='devicon-nestjs-original-wordmark colored' {...props} />
      }
      inverted={<i className='devicon-nestjs-original-wordmark' {...props} />}
      plain={<i className='devicon-nestjs-original colored' {...props} />}
      plainInverted={<i className='devicon-nestjs-original' {...props} />}
      variant={get(props, ['variant'])}
    />
  );
}
