import type { MotionValue } from 'framer-motion';
import { motion, useTransform } from 'framer-motion';
import { get } from 'lodash-es';
import * as React from 'react';
import { twMerge } from 'tailwind-merge';

import { ColorContext } from '~/context/ColorContext';
import { CursorContext, CursorVariants } from '~/context/CursorContext';
import { ColorThemes } from '~/context/types';
import { useColorThemes } from '~/hooks/useColorThemes';
import { GrayscaleImage } from '~/lib/GrayscaleImage';

export interface FrontEndProject {
  alt: string;
  category?: Array<string>;
  heading: string;
  imgBackground: string;
}

export interface FrontEndProjectMotionProps extends FrontEndProject {
  opacity: [Array<number>, Array<number>];
  scale: [Array<number>, Array<number>];
  scrollY: MotionValue<number>;
  shouldNotScale?: boolean;
}

export const PROJECT_CARD_HEIGHT = 500;

export function FrontEndProjectCard(
  props: FrontEndProjectMotionProps,
): React.ReactNode {
  const scrollY = get(props, ['scrollY']);
  const scale = useTransform(scrollY, ...get(props, ['scale']));
  const opacity = useTransform(scrollY, ...get(props, ['opacity']));

  const { setCursorVariant } = React.useContext(CursorContext);

  const [isHovered, setIsHovered] = React.useState(false);
  const [isHydrated, setIsHydrated] = React.useState(false);

  const { colorContext } = React.useContext(ColorContext);

  const { resolveHoverColorTheme, colorThemeMap } = useColorThemes();

  const hoverColorTheme = React.useMemo(
    () => resolveHoverColorTheme(colorContext),
    [colorContext, resolveHoverColorTheme],
  );

  const defaultColorTheme = get(colorThemeMap, [
    typeof colorContext === 'string' ? colorContext : ColorThemes.DEFAULT,
  ]);

  React.useEffect(() => {
    setIsHydrated(true);
  }, []);

  return (
    <motion.article
      className='sticky top-0 m-auto max-w-screen-2xl py-20'
      {...{
        style: isHydrated
          ? {
              height: `${PROJECT_CARD_HEIGHT * 1.6}px`,
              scale: !get(props, ['shouldNotScale']) ? scale : undefined,
              opacity,
            }
          : undefined,
      }}
    >
      <a
        href='#'
        className={twMerge(
          'flex flex-col items-center overflow-hidden rounded-lg md:flex-row',
          `shadow transition-all duration-300 ease-in-out hover:bg-lime-400`,
        )}
        onPointerEnter={() => setCursorVariant(CursorVariants.HIDDEN)}
        onPointerLeave={() => setCursorVariant(CursorVariants.DEFAULT)}
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
        style={{
          border: `1px solid ${get(defaultColorTheme, ['foreground'])}`,
          background: get(isHovered ? hoverColorTheme : defaultColorTheme, [
            'background',
          ]),
          color: get(isHovered ? hoverColorTheme : defaultColorTheme, [
            'foreground',
          ]),
        }}
      >
        <div className='h-min w-auto overflow-hidden rounded-md'>
          <GrayscaleImage
            className='object-cover transition-all md:h-96'
            src={get(props, ['imgBackground'])}
            alt={get(props, ['alt'])}
          />
        </div>
        <div className='flex flex-col justify-between pl-8 leading-normal'>
          <h2 className='block font-display text-4xl font-medium tracking-tight [text-wrap:balance] lg:text-6xl'>
            {get(props, ['heading'], '--')}
          </h2>
          <p className='mt-12 block font-body text-base [text-wrap:balance] md:text-3xl'>
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </div>
      </a>
    </motion.article>
  );
}
