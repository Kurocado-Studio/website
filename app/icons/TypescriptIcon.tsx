import get from 'lodash-es/get';
import React from 'react';

import { BaseIcon, type IconVariantProps } from '~/icons/Icon';

export function TypescriptIcon(props: IconVariantProps): React.ReactNode {
  return (
    <BaseIcon
      regular={<i className='devicon-typescript-plain colored' {...props} />}
      inverted={<i className='devicon-typescript-plain' {...props} />}
      plain={<i className='devicon-typescript-plain colored' {...props} />}
      plainInverted={<i className='devicon-typescript-plain' {...props} />}
      variant={get(props, ['variant'])}
    />
  );
}
