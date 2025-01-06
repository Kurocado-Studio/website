import { motion } from 'framer-motion';
import get from 'lodash-es/get';
import React from 'react';

import { BaseIcon, type IconVariantProps } from '~/icons/Icon';

export function TailwindIcon(props: IconVariantProps): React.ReactNode {
  return (
    <BaseIcon
      regular={
        <motion.i
          className='devicon-tailwindcss-plain-wordmark colored'
          {...props}
        />
      }
      inverted={
        <motion.i className='devicon-tailwindcss-plain-wordmark' {...props} />
      }
      plain={
        <motion.i className='devicon-tailwindcss-original colored' {...props} />
      }
      plainInverted={
        <motion.i className='devicon-tailwindcss-original' {...props} />
      }
      variant={get(props, ['variant'])}
    />
  );
}
