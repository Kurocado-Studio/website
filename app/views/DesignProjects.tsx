import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import type { MotionValue } from 'framer-motion';
import { get } from 'lodash-es';
import React from 'react';

import { Container } from '~/components/Container';
import { FadeIn, FadeInDirection } from '~/components/FadeIn';
import { uiProjectImages } from '~/config/projects';
import type { DribbbleShot } from '~/config/types';
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
  const [projectCards, setProjectCards] = React.useState<Array<DribbbleShot>>(
    [],
  );

  const firstRow = projectCards.slice(0, 10);
  const secondRow = projectCards.slice(10, 20);
  const thirdRow = projectCards.slice(20, 30);
  const ref = React.useRef(null);

  const { setColorContext } = React.useContext(ColorContext);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const springConfig = { stiffness: 30 };

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

    const projectPreviewCards: Array<DribbbleShot> = Array.from(
      { length: 30 },
      () => {
        let randomIndex;

        do {
          randomIndex = Math.floor(
            Math.random() * get(uiProjectImages, ['length'], 0),
          );
        } while (randomIndex === lastIndex);

        lastIndex = randomIndex;

        return get(uiProjectImages, [randomIndex]);
      },
    ) as { title: string; thumbnail: string }[];

    setProjectCards(projectPreviewCards);
  }, []);

  return (
    <Container
      as='section'
      onPointerEnter={() => setColorContext(ColorThemes.PURPLE)}
      className='antialiasing relative flex flex-col self-auto overflow-hidden [perspective:1000px] [transform-style:preserve-3d]'
    >
      <div ref={ref}>
        <div className='relative z-10'>
          <FadeIn
            as='p'
            direction={FadeInDirection.DOWN}
            className='block max-w-prose font-body text-base [text-wrap:balance] md:mt-8 md:text-3xl'
          >
            With a background in Design and Sculpture, I bring a unique
            perspective to front-end development—blending aesthetics with
            functionality. My approach is deeply rooted in creating visually
            engaging and intuitive user experiences, where form meets function
            in the digital space.
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
          <motion.article className='relative my-12 flex flex-row space-x-8 lg:my-24'>
            {secondRow.map((product, idx) => (
              <DesignPreviewCard
                product={product}
                translate={translateXReverse}
                key={`${product.title}_${String(idx)}`}
              />
            ))}
          </motion.article>
          <motion.article className='relative my-12 flex flex-row-reverse space-x-8 space-x-reverse lg:my-24'>
            {thirdRow.map((product, idx) => (
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
      className='group/product backface-hidden transform-translateZ-0 relative flex-shrink-0 will-change-transform'
    >
      <GrayscaleImage
        className='aspect-auto h-36 w-auto rounded md:h-auto md:w-96 md:rounded-l'
        onPointerEnter={() => setCursorVariant(CursorVariants.HIDDEN)}
        onPointerLeave={() => setCursorVariant(CursorVariants.DEFAULT)}
        src={product.thumbnail}
        alt={product.title}
      />
    </motion.div>
  );
}
