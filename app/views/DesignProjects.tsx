import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import type { MotionValue } from 'framer-motion';
import { get } from 'lodash-es';
import React from 'react';

import { Container } from '~/components/Container';
import { FadeIn, FadeInDirection } from '~/components/FadeIn';
import { uiProjectImages } from '~/config/projects';
import { ColorContext } from '~/context/ColorContext';
import { CursorContext, CursorVariants } from '~/context/CursorContext';
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

  const springConfig = {
    bounce: 100,
    damping: 20,
    mass: 1.5,
    stiffness: 60,
  };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 800]),
    springConfig,
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -800]),
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
    <Container
      as='section'
      onPointerEnter={() => setColorContext(ColorThemes.WHITE)}
      className='antialiasing relative flex flex-col self-auto overflow-hidden [perspective:1000px] [transform-style:preserve-3d]'
    >
      <div ref={ref}>
        <div className='relative z-10 mt-4'>
          <FadeIn
            as='h2'
            direction={FadeInDirection.UP}
            className='block font-display text-4xl font-medium tracking-tight [text-wrap:balance] lg:text-7xl'
          >
            As a Product Designer
          </FadeIn>
          <FadeIn
            as='p'
            direction={FadeInDirection.DOWN}
            className='mt-4 block max-w-prose font-body text-base [text-wrap:balance] md:mt-8 md:text-3xl'
          >
            I’ve led design strategies for startups and large enterprises,
            including spearheading a major product revamp at SpotOn when it
            transition from marketing to payment processing.
          </FadeIn>
        </div>
        <motion.div className='relative z-0 mx-auto mt-12 w-full max-w-screen-2xl overflow-hidden rounded-lg border border-gray-200 bg-dark-tile py-12 md:mt-24 md:rounded-full md:py-24'>
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
      </div>
    </Container>
  );
}

export function DesignPreviewCard({
  product,
  translate,
}: DesignPreviewProps): React.ReactNode {
  const { setCursorVariant } = React.useContext(CursorContext);

  return (
    <motion.div
      style={{ x: translate }}
      key={product.title}
      className='group/product backface-hidden transform-translateZ-0 relative aspect-square w-[12rem] flex-shrink-0 will-change-transform md:w-[18rem] lg:w-[24rem]'
    >
      <GrayscaleImage
        onPointerEnter={() => setCursorVariant(CursorVariants.HIDDEN)}
        onPointerLeave={() => setCursorVariant(CursorVariants.DEFAULT)}
        src={product.thumbnail}
        alt={product.title}
      />
    </motion.div>
  );
}
