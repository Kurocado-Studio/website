import {
  easeInOut,
  motion,
  useInView,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';

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
  const {
    size: { innerHeight },
  } = useWindowSize();

  const { setColorContext } = React.useContext(ColorContext);

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
    [-(initialX * 4), initialX * 5],
  );

  const springConfig = {
    stiffness: 60,
    damping: 15,
    // restDelta: 0.5,
    ease: easeInOut,
  };

  const translateX = useSpring(xAxisScrollRange, springConfig);

  return (
    <section
      onMouseEnter={() => setColorContext(ColorThemes.DEFAULT)}
      ref={triggerRef}
      style={{
        overflow: 'hidden',
        height: `${innerHeight * (innerHeight > 1024 ? 2 : 14)}px`,
      }}
    >
      <motion.div
        ref={containerRef}
        className='sticky top-[5%] flex w-max md:top-[10%]'
        style={{
          position: isInView ? 'fixed' : 'relative',
          x: translateX,
        }}
      >
        {children}
      </motion.div>
    </section>
  );
}
