import { motion } from 'framer-motion';
import get from 'lodash-es/get';
import React from 'react';

import { BaseIcon } from '~/icons/Icon';
import type { IconVariantProps } from '~/icons/Icon';

export function FramerMotionIcon(props: IconVariantProps): React.ReactNode {
  return (
    <BaseIcon
      regular={
        <motion.i
          className='devicon-framermotion-original-wordmark colored'
          {...props}
        />
      }
      inverted={
        <motion.i
          className='devicon-framermotion-original-wordmark'
          {...props}
        />
      }
      plain={
        <motion.i
          className='devicon-framermotion-original colored'
          {...props}
        />
      }
      plainInverted={
        <motion.i className='devicon-framermotion-original' {...props} />
      }
      variant={get(props, ['variant'])}
    />
  );
}
