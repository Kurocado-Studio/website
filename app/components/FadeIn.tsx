import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import React, { createContext, useContext } from 'react';

import type { PropsWithoutRef } from '~/lib/types';

const FadeInStaggerContext = createContext(false);

const viewport = { once: false, margin: '0px 0px -200px' };

export function FadeIn(props: PropsWithoutRef<'div'>): React.ReactNode {
  const shouldReduceMotion = useReducedMotion();

  const isInStaggerGroup = useContext(FadeInStaggerContext);

  return (
    <AnimatePresence>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.5 }}
        {...(isInStaggerGroup
          ? {}
          : {
              initial: 'hidden',
              whileInView: 'visible',
              viewport,
            })}
        {...props}
      />
    </AnimatePresence>
  );
}

export function FadeInDown(props: PropsWithoutRef<'div'>): React.ReactNode {
  const shouldReduceMotion = useReducedMotion();

  const isInStaggerGroup = useContext(FadeInStaggerContext);

  return (
    <AnimatePresence>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: shouldReduceMotion ? 0 : -24 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.5 }}
        {...(isInStaggerGroup
          ? {}
          : {
              initial: 'hidden',
              whileInView: 'visible',
              viewport,
            })}
        {...props}
      />
    </AnimatePresence>
  );
}

export function Fade(props: PropsWithoutRef<'div'>): React.ReactNode {
  const isInStaggerGroup = useContext(FadeInStaggerContext);

  return (
    <AnimatePresence>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 0 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.5 }}
        {...(isInStaggerGroup
          ? {}
          : {
              initial: 'hidden',
              whileInView: 'visible',
              viewport,
            })}
        {...props}
      />
    </AnimatePresence>
  );
}

export function FadeInStagger({
  faster = false,
  ...props
}: PropsWithoutRef<'div'> & { faster?: boolean }): React.ReactNode {
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
