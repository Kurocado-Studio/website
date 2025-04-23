import { motion } from 'framer-motion';
import get from 'lodash-es/get';
import React from 'react';

import { BaseIcon, type IconVariantProps } from '~/icons/Icon';

export function GitHubActionsIcon(props: IconVariantProps): React.ReactNode {
  return (
    <BaseIcon
      regular={<motion.i className='devicon-githubactions-plain' {...props} />}
      inverted={<motion.i className='devicon-githubactions-plain' {...props} />}
      plain={
        <motion.i className='devicon-githubactions-plain colored' {...props} />
      }
      plainInverted={
        <motion.i className='devicon-githubactions-plain colored' {...props} />
      }
      variant={get(props, ['variant'])}
    />
  );
}
