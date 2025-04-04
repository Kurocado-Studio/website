import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';

import { ColorContext } from '~/context/ColorContext';
import { ColorThemes } from '~/context/types';

export interface HorizontalScrollerProps {
  children: React.ReactNode[] | React.ReactNode;
  itemWidth?: number;
  gap?: number;
  fixedScrollDistance?: number;
}

export function HorizontalScroller({
  children,
}: HorizontalScrollerProps): React.ReactNode {
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

  return (
    <section
      onMouseEnter={() => setColorContext(ColorThemes.DEFAULT)}
      ref={triggerRef}
      style={{
        height: '650vh',
      }}
    >
      <motion.div
        ref={containerRef}
        className='sticky top-0 flex w-max'
        style={{
          position: isInView ? 'fixed' : 'relative',
          top: '20%',
          x: xAxisScrollRange,
        }}
      >
        {children}
      </motion.div>
    </section>
  );
}
