import { type MotionStyle, motion } from 'framer-motion';
import * as React from 'react';

export function StaggerSplitText(props: { text: string }): React.ReactNode {
  const { text } = props;

  return (
    <motion.div
      initial='hidden'
      animate='visible'
      style={{ display: 'inline-flex', flexWrap: 'wrap' } as MotionStyle}
    >
      {text.split('').map((individualLetter, individualLetterIndex) => (
        <motion.span
          key={String(individualLetterIndex + 1)}
          style={
            {
              display: 'inline-block',
              whiteSpace: 'pre',
            } as MotionStyle
          }
          custom={individualLetterIndex}
          variants={{
            hidden: { opacity: 0, y: 12 },
            visible: (currentIndex: number) => ({
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.6,
                delay: currentIndex * 0.04,
              },
            }),
          }}
        >
          {individualLetter}
        </motion.span>
      ))}
    </motion.div>
  );
}
