import clsx from 'clsx';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import type { MotionValue } from 'framer-motion';
import { get } from 'lodash-es';
import React from 'react';

import { Container } from '~/components/Container';
import { uiProjectImages } from '~/config/projects';
import { ColorContext } from '~/context/ColorContext';
import { ColorThemes } from '~/context/types';
import { GrayscaleImage } from '~/lib/GrayscaleImage';

interface DesignPreviewProps {
  product: {
    title: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
}

export function DesignProjects(): React.ReactNode {
  const header = `As a Product Designer`;
  const body = `I’ve led design strategies for startups and large enterprises, including spearheading a major product revamp at SpotOn when it transition from marketing to payment processing.`;

  const [projectCards, setProjectCards] = React.useState<
    { title: string; thumbnail: string }[]
  >([]);

  const firstRow = projectCards.slice(0, 10);
  const secondRow = projectCards.slice(10, 20);
  const thirdRow = projectCards.slice(20, 30);
  const ref = React.useRef(null);

  const { setColorContext } = React.useContext(ColorContext);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const springConfig = { stiffness: 100, damping: 25, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig,
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig,
  );

  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.1], [0, 1]),
    springConfig,
  );

  React.useEffect(() => {
    let lastIndex = -1;

    const projectPreviewCards = Array.from({ length: 30 }, () => {
      let randomIndex;

      do {
        randomIndex = Math.floor(Math.random() * uiProjectImages.length);
      } while (randomIndex === lastIndex);

      lastIndex = randomIndex;

      return get(uiProjectImages, [randomIndex]);
    }) as { title: string; thumbnail: string }[];

    setProjectCards(projectPreviewCards);
  }, []);

  return (
    <section
      onMouseEnter={() => setColorContext(ColorThemes.BLUE)}
      ref={ref}
      className='antialiasing relative flex flex-col self-auto overflow-hidden py-40 [perspective:1000px] [transform-style:preserve-3d] sm:mt-32 lg:py-56'
    >
      <Container className='relative z-10 mt-4'>
        <span className='sr-only'> - </span>
        <h2 className='block font-display text-4xl font-medium tracking-tight [text-wrap:balance] lg:text-7xl'>
          {header}
        </h2>
        <h3
          className={clsx(
            'mt-12 block font-body text-base [text-wrap:balance] md:text-3xl',
          )}
        >
          {body}
        </h3>
      </Container>
      <motion.div
        style={{
          opacity,
        }}
        className='relative z-0 mx-auto my-24 max-w-screen-2xl overflow-hidden rounded-full border border-gray-200 bg-dark-tile py-24'
      >
        <motion.article className='relative mb-8 flex flex-row-reverse space-x-8 space-x-reverse'>
          {firstRow.map((product, idx) => (
            <DesignPreviewCard
              product={product}
              translate={translateX}
              key={`${product.title}_${String(idx)}`}
            />
          ))}
        </motion.article>
        <motion.article className='relative mb-8 flex flex-row space-x-8'>
          {secondRow.map((product, idx) => (
            <DesignPreviewCard
              product={product}
              translate={translateXReverse}
              key={`${product.title}_${String(idx)}`}
            />
          ))}
        </motion.article>
        <motion.article className='relative mb-8 flex flex-row-reverse space-x-8 space-x-reverse'>
          {thirdRow.map((product, idx) => (
            <DesignPreviewCard
              product={product}
              translate={translateX}
              key={`${product.title}_${String(idx)}`}
            />
          ))}
        </motion.article>
        <motion.article className='relative mb-8 flex flex-row space-x-8'>
          {secondRow.reverse().map((product, idx) => (
            <DesignPreviewCard
              product={product}
              translate={translateXReverse}
              key={`${product.title}_${String(idx)}`}
            />
          ))}
        </motion.article>
        <motion.article className='relative flex flex-row-reverse space-x-8 space-x-reverse'>
          {thirdRow.reverse().map((product, idx) => (
            <DesignPreviewCard
              product={product}
              translate={translateX}
              key={`${product.title}_${String(idx)}`}
            />
          ))}
        </motion.article>
      </motion.div>
    </section>
  );
}

export function DesignPreviewCard({
  product,
  translate,
}: DesignPreviewProps): React.ReactNode {
  return (
    <motion.div
      style={{ x: translate }}
      key={product.title}
      className='group/product relative aspect-square w-[12rem] flex-shrink-0 md:w-[18rem] lg:w-[24rem]'
    >
      <GrayscaleImage src={product.thumbnail} alt={product.title} />
    </motion.div>
  );
}
