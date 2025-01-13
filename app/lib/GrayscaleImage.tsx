import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from 'framer-motion';
import { get } from 'lodash-es';
import React, { useRef } from 'react';
import { twMerge } from 'tailwind-merge';

export type FramerCursorAttributes = Pick<
  Partial<React.DOMAttributes<HTMLElement>>,
  'onMouseEnter' | 'onMouseLeave'
>;

export type GrayscaleImageProps = Partial<
  Pick<HTMLImageElement, 'src' | 'sizes' | 'className'>
> & {
  alt?: string;
} & FramerCursorAttributes;

export function GrayscaleImage(props: GrayscaleImageProps): React.ReactNode {
  const ref = useRef<React.ElementRef<'div'>>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 65%', 'end 5%'],
  });

  const grayscale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0, 1]);
  const filter = useMotionTemplate`grayscale(${grayscale})`;

  return (
    <div ref={ref} className='group relative'>
      <motion.img
        style={{ filter } as unknown as React.CSSProperties}
        className={twMerge(
          'relative left-0 top-0 h-full w-full rounded-3xl object-cover object-left-top mix-blend-difference transition duration-300 group-hover:opacity-100',
          get(props, ['className'], ''),
        )}
        {...props}
      />
    </div>
  );
}
