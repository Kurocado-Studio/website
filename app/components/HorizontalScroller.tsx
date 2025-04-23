import {
  type MotionProps,
  easeInOut,
  motion,
  useInView,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import { get } from 'lodash-es';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';

import { Container } from '~/components/Container';
import { FadeIn, FadeInDirection } from '~/components/FadeIn';
import { StaggerSplitText } from '~/components/StaggerSplitText';
import { ColorContext } from '~/context/ColorContext';
import { ColorThemes } from '~/context/types';
import { useWindowSize } from '~/hooks/useWindowSize';

export interface HorizontalScrollerProps {
  children?: Array<React.ReactNode>;
  itemWidth?: number;
  className?: string;
}

export function HorizontalScroller({
  children,
}: HorizontalScrollerProps): React.ReactNode {
  const { setColorContext } = React.useContext(ColorContext);

  const {
    size: { innerHeight, innerWidth },
  } = useWindowSize();

  const [isPointerDevice, setIsPointerDevice] = useState(false);

  const triggerRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const isInView = useInView(triggerRef, {
    once: false,
    margin: '0px',
  });

  const { scrollYProgress } = useScroll({
    target: triggerRef,
    offset: ['start end', 'end start'],
  });
  const [initialX, setInitialX] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      const totalWidth = containerRef.current.scrollWidth;
      setInitialX(window.innerWidth - totalWidth);
    }
  }, []);

  const xAxisScrollRange = useTransform(
    scrollYProgress,
    [0, 1],
    [-(initialX * 3), initialX * 5],
  );

  const springConfig = {
    stiffness: 60,
    damping: 20,
    ease: easeInOut,
  };

  const translateX = useSpring(xAxisScrollRange, springConfig);

  const sectionProps = useMemo(() => {
    if (isPointerDevice) {
      return {
        style: {
          height: `${innerHeight * 8}px`,
        },
      };
    }
    return {
      style: {
        overflow: 'scroll',
        height: `${innerHeight * 1.1}px`,
      },
    };
  }, [isPointerDevice, innerHeight]);

  const containerProps = useMemo(() => {
    if (isPointerDevice) {
      return {
        className: 'sticky top-[5%] flex w-max md:top-[10%]',
        style: {
          position: isInView ? 'fixed' : 'relative',
          x: translateX,
        },
      };
    }
    return {
      className: 'flex w-max flex-row overflow-x-scroll',
    };
  }, [isPointerDevice, translateX, isInView]);

  useEffect(() => {
    const isPointerFine = get(
      window.matchMedia('(pointer: fine)'),
      ['matches'],
      false,
    );

    setIsPointerDevice(isPointerFine && innerWidth > 1024);
  }, [innerWidth]);

  return (
    <>
      <Container as='header' className='mt-96'>
        <FadeIn
          as='h2'
          direction={FadeInDirection.UP}
          className={twMerge(
            'mb-12 block lg:mb-36',
            'block font-display text-7xl font-semibold [text-wrap:balance] lg:text-8xl',
          )}
        >
          <StaggerSplitText text='Projects' />
        </FadeIn>
      </Container>
      <motion.section
        ref={triggerRef}
        onMouseEnter={() => setColorContext(ColorThemes.DEFAULT)}
        {...sectionProps}
      >
        <motion.div ref={containerRef} {...(containerProps as MotionProps)}>
          {children}
        </motion.div>
      </motion.section>
    </>
  );
}
