import { motion } from 'framer-motion';
import get from 'lodash-es/get';
import React from 'react';

import { BaseIcon, type IconVariantProps } from '~/icons/Icon';

export function TypescriptIcon(props: IconVariantProps): React.ReactNode {
  return (
    <BaseIcon
      regular={
        <motion.i className='devicon-typescript-plain colored' {...props} />
      }
      inverted={<motion.i className='devicon-typescript-plain' {...props} />}
      plain={
        <motion.i className='devicon-typescript-plain colored' {...props} />
      }
      plainInverted={
        <motion.i className='devicon-typescript-plain' {...props} />
      }
      variant={get(props, ['variant'])}
    />
  );
}
