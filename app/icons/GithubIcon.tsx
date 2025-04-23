import { motion } from 'framer-motion';
import get from 'lodash-es/get';
import React from 'react';

import { BaseIcon, type IconVariantProps } from '~/icons/Icon';

export function GitHubIcon(props: IconVariantProps): React.ReactNode {
  return (
    <BaseIcon
      regular={
        <motion.i className='devicon-github-original colored' {...props} />
      }
      inverted={<motion.i className='devicon-github-original' {...props} />}
      plain={
        <motion.i className='devicon-github-original-wordmark' {...props} />
      }
      plainInverted={
        <motion.i
          className='devicon-github-original-wordmark colored'
          {...props}
        />
      }
      variant={get(props, ['variant'])}
    />
  );
}
