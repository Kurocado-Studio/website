import get from 'lodash-es/get';
import React from 'react';

import { BaseIcon, type IconVariantProps } from '~/icons/Icon';

export function TailwindIcon(props: IconVariantProps): React.ReactNode {
  return (
    <BaseIcon
      regular={
        <i className='devicon-tailwindcss-plain-wordmark colored' {...props} />
      }
      inverted={<i className='devicon-tailwindcss-plain-wordmark' {...props} />}
      plain={<i className='devicon-tailwindcss-original colored' {...props} />}
      plainInverted={<i className='devicon-tailwindcss-original' {...props} />}
      variant={get(props, ['variant'])}
    />
  );
}
