import { wrap } from '@motionone/utils';
import clsx from 'clsx';
import type { MotionValue } from 'framer-motion';
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from 'framer-motion';
import React, { useRef } from 'react';

import type { FramerCursorAttributes } from '~/types';

interface HorizontalScrollTextProps extends FramerCursorAttributes {
  children: string;
  baseVelocity: number;
  className?: string;
  href?: string;
}

export function HorizontalScrollText({
  children,
  baseVelocity = 100,
  className,
  href,
  onPointerEnter,
  onPointerLeave,
}: HorizontalScrollTextProps): React.ReactNode {
  const baseX = useMotionValue(0);

  const { scrollY } = useScroll();

  const scrollVelocity = useVelocity(scrollY);

  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  }) as MotionValue<number>;

  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const motionValuePayload = useTransform(
    baseX,

    (baseY) => `${String(wrap(-20, -45, baseY))}%`,
  );

  const directionFactor = useRef<number>(1);

  useAnimationFrame((_, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
    directionFactor.current = velocityFactor.get() < 0 ? -1 : 1;
    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  const HtmlTag = typeof href === 'string' ? motion.a : motion.h1;

  return (
    <div className='relative flex overflow-hidden whitespace-nowrap'>
      <motion.div
        className='relative flex whitespace-nowrap font-semibold uppercase'
        style={{ x: motionValuePayload }}
      >
        {Array.from({ length: 12 }, (_, idx) => (
          <HtmlTag
            {...(href && { href })}
            onPointerEnter={onPointerEnter}
            onPointerLeave={onPointerLeave}
            key={idx}
            className={clsx(
              'block font-display text-6xl font-semibold [text-wrap:balance] md:text-7xl lg:text-8xl',
              className,
            )}
            style={{
              lineHeight: '1.0',
              color: idx % 3 === 0 ? undefined : '#e0e6e6',
            }}
          >
            {children}
          </HtmlTag>
        ))}
      </motion.div>
    </div>
  );
}
