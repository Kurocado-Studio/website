import { motion } from 'framer-motion';
import get from 'lodash-es/get';
import React from 'react';

import { BaseIcon, type IconVariantProps } from '~/icons/Icon';

export function NestJsIcon(props: IconVariantProps): React.ReactNode {
  return (
    <BaseIcon
      regular={
        <motion.i
          className='devicon-nestjs-original-wordmark colored'
          {...props}
        />
      }
      inverted={
        <motion.i className='devicon-nestjs-original-wordmark' {...props} />
      }
      plain={
        <motion.i className='devicon-nestjs-original colored' {...props} />
      }
      plainInverted={
        <motion.i className='devicon-nestjs-original' {...props} />
      }
      variant={get(props, ['variant'])}
    />
  );
}
