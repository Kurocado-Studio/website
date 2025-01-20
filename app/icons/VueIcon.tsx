import { motion } from 'framer-motion';
import get from 'lodash-es/get';
import React from 'react';

import { BaseIcon, type IconVariantProps } from '~/icons/Icon';

export function VueIcon(props: IconVariantProps): React.ReactNode {
  return (
    <BaseIcon
      regular={
        <motion.i className='devicon-vuejs-plain-wordmark colored' {...props} />
      }
      inverted={<motion.i className='devicon-vuejs-line-wordmark' {...props} />}
      plain={<motion.i className='devicon-vuejs-plain colored' {...props} />}
      plainInverted={<motion.i className='devicon-vuejs-plain' {...props} />}
      variant={get(props, ['variant'])}
    />
  );
}
