import type { Variants } from 'framer-motion';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { get } from 'lodash-es';
import React, { createContext, useContext } from 'react';

import type { HTMLIntrinsicElements, PropsWithoutRef } from '~/domain/types';

const FadeInStaggerContext = createContext(false);

const viewport = { once: false, margin: '0px 0px -200px' };

interface FadeInStaggerProps extends PropsWithoutRef<'div'> {
  faster?: boolean;
}

export enum FadeInDirection {
  DEFAULT = 'DEFAULT',
  UP = 'UP',
  DOWN = 'DOWN',
  LEFT_TO_RIGHT = 'LEFT_TO_RIGHT',
  RIGHT_TO_LEFT = 'RIGHT_TO_LEFT',
}

export type FadeInProps<T extends HTMLIntrinsicElements> =
  PropsWithoutRef<T> & {
    direction?: FadeInDirection;
    as?: T;
  };

export function FadeIn<T extends HTMLIntrinsicElements = 'div'>(
  props: FadeInProps<T>,
): React.ReactNode {
  const shouldReduceMotion = useReducedMotion();
  const isInStaggerGroup = useContext(FadeInStaggerContext);

  const { direction, as, ...restProps } = props;

  const intrinsicElement: HTMLIntrinsicElements = as ?? 'div';
  // @ts-expect-error Element mismatch between motion
  const MotionHTMLIntrinsicElement = motion[intrinsicElement];

  const variantMap: { [K in FadeInDirection]: Variants } = {
    [FadeInDirection.DEFAULT]: {
      hidden: { opacity: 0, y: 0 },
      visible: { opacity: 1, y: 0 },
    },
    [FadeInDirection.UP]: {
      hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
      visible: { opacity: 1, y: 0 },
    },
    [FadeInDirection.DOWN]: {
      hidden: { opacity: 0, y: shouldReduceMotion ? 0 : -24 },
      visible: { opacity: 1, y: 0 },
    },
    [FadeInDirection.LEFT_TO_RIGHT]: {
      hidden: { opacity: 0, x: shouldReduceMotion ? 0 : -24 },
      visible: { opacity: 1, x: 0 },
    },
    [FadeInDirection.RIGHT_TO_LEFT]: {
      hidden: { opacity: 0, x: shouldReduceMotion ? 0 : 24 },
      visible: { opacity: 1, x: 0 },
    },
  };

  return (
    <AnimatePresence>
      <MotionHTMLIntrinsicElement
        {...restProps}
        {...(!isInStaggerGroup && {
          initial: 'hidden',
          whileInView: 'visible',
          viewport,
        })}
        variants={get(variantMap, [direction ?? FadeInDirection.DEFAULT])}
        transition={{ duration: 0.5 }}
      />
    </AnimatePresence>
  );
}

export function FadeInStagger({
  faster = false,
  ...props
}: FadeInStaggerProps): React.ReactNode {
  return (
    <FadeInStaggerContext.Provider value>
      <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={viewport}
        transition={{ staggerChildren: faster ? 0.12 : 0.2 }}
        {...props}
      />
    </FadeInStaggerContext.Provider>
  );
}
