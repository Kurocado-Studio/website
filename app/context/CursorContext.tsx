import type { CursorState } from 'ahooks/lib/useMouse';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { get } from 'lodash-es';
import { createContext } from 'react';
import * as React from 'react';

import type { CustomCursor } from '~/components/Cursors';
import {
  ContactUsVariant,
  DribbbleVariant,
  GithubVariant,
} from '~/components/Cursors';
import { FramerMotionIcon } from '~/icons/FramerMotionIcon';
import { NestJsIcon } from '~/icons/NestJsIcon';
import { ReactIcon } from '~/icons/ReactIcon';
import { TailwindIcon } from '~/icons/TailwindIcon';
import { TypescriptIcon } from '~/icons/TypescriptIcon';
import { VueIcon } from '~/icons/VueIcon';
import type { GrayscaleImageProps } from '~/lib/GrayscaleImage';

export enum CursorVariants {
  CONTACT = 'CONTACT',
  CONTACT_CTA = 'CONTACT_CTA',
  DEFAULT = 'DEFAULT',
  DRIBBBLE = 'DRIBBBLE',
  FRAMER_MOTION = 'FRAMER_MOTION',
  GITHUB = 'GITHUB',
  HIDDEN = 'HIDDEN',
  IMG = 'IMG',
  NEST_JS = 'NEST_JS',
  REACT = 'REACT',
  SHRUG = 'SHRUG',
  TAILWIND = 'TAILWIND',
  TYPESCRIPT = 'TYPESCRIPT',
  VUE = 'VUE',
}

type CursorContext = {
  cursorVariant: CursorVariants | GrayscaleImageProps;
  setCursorVariant: (cursorVariant: CursorVariants) => void;
};
export const CursorContext = createContext<CursorContext>({
  cursorVariant: CursorVariants.DEFAULT,
  setCursorVariant: (cursorVariant) => {
    /**
     * as we need a default action to handle the param
     */
    // eslint-disable-next-line no-console
    console.debug({ cursorVariant });
  },
});

const spring = {
  type: 'spring',
  stiffness: 500,
  damping: 28,
};

export function CursorContextProvider({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode {
  const [cursorText, setCursorText] = React.useState<string | React.ReactNode>(
    '',
  );

  const [mouseCursorState, setMouseCursorState] = React.useState<
    Partial<CursorState>
  >({
    clientX: 0,
    clientY: 0,
  });

  const [cursorVariant, setCursorVariant] = React.useState<CursorVariants>(
    CursorVariants.DEFAULT,
  );

  React.useEffect(() => {
    window.addEventListener('mousemove', setMouseCursorState);

    return () => {
      window.removeEventListener('mousemove', setMouseCursorState);
    };
  }, []);

  let mouseXPosition: number =
    typeof window !== 'undefined'
      ? Math.floor(get(window, ['innerWidth'], 0) / 2)
      : 0;

  let mouseYPosition = 0;

  if (get(mouseCursorState, ['x']) !== null) {
    mouseXPosition = get(mouseCursorState, ['clientX'], 0);
  }

  if (get(mouseCursorState, ['y']) !== null) {
    mouseYPosition = get(mouseCursorState, ['clientY'], 0);
  }

  const isMouseAtStartPoint = [mouseXPosition, mouseYPosition].some(
    (mousePosition) => mousePosition === 0,
  );

  const opacity: number = isMouseAtStartPoint ? 0 : 1;

  const commonInteractiveCursor: CustomCursor = {
    alignItems: 'center',
    backgroundColor: '#dbfd39',
    color: '#000',
    display: 'flex',
    height: 164,
    justifyContent: 'center',
    opacity,
    width: 164,
    x: mouseXPosition - 82,
    y: mouseYPosition - 82,
  };

  const commonSocialCustomCursor: CustomCursor = {
    borderRadius: '100%',
    color: '#fdfdfd',
    fontSize: '60px',
    height: 96,
    textAlign: 'center',
    width: 96,
    x: mouseXPosition - 48,
    y: mouseYPosition - 48,
  };

  const cursorVariantMap: { [K in CursorVariants]: CustomCursor } = {
    [CursorVariants.HIDDEN]: {
      height: 0,
      width: 0,
      x: mouseXPosition,
      y: mouseYPosition,
    },
    [CursorVariants.DEFAULT]: {
      backgroundBlendMode: 'difference',
      backgroundColor: 'rgba(245, 40, 145, 0.8)',
      border: '1px solid papayawhip',
      display: 'flex',
      fontSize: '0',
      height: 10,
      mixBlendMode: 'difference',
      opacity,
      transition: { type: 'spring', mass: 0.6 },
      width: 10,
      x: mouseXPosition - 14,
      y: mouseYPosition - 14,
    },
    [CursorVariants.CONTACT]: commonInteractiveCursor,
    [CursorVariants.CONTACT_CTA]: {
      ...commonInteractiveCursor,
      height: 46,
      justifyContent: 'center',
      width: 160,
      x: mouseXPosition - 160,
      y: mouseYPosition - 20,
    },
    [CursorVariants.SHRUG]: {
      backgroundBlendMode: 'difference',
      backgroundColor: 'rgb(9,40,64)',
      borderRadius: '100%',
      color: '#fff',
      fontSize: '24px',
      height: 120,
      opacity,
      textAlign: 'center',
      width: 120,
      x: mouseXPosition - 60,
      y: mouseYPosition - 140,
    },
    [CursorVariants.IMG]: {
      backgroundColor: 'rgb(9,40,64)',
      borderRadius: '28px',
      display: 'flex',
      height: 113,
      opacity,
      padding: '4px',
      width: 200,
      x: mouseXPosition - 50,
      y: mouseYPosition - 100,
    },
    [CursorVariants.DRIBBBLE]: commonInteractiveCursor,
    [CursorVariants.GITHUB]: commonInteractiveCursor,
    [CursorVariants.NEST_JS]: {
      ...commonSocialCustomCursor,
      backgroundColor: '#ed1543',
      opacity,
    },
    [CursorVariants.TAILWIND]: {
      ...commonSocialCustomCursor,
      backgroundColor: '#00b4b6',
      opacity,
    },
    [CursorVariants.REACT]: {
      ...commonSocialCustomCursor,
      backgroundColor: '#61DBFB',
      opacity,
    },
    [CursorVariants.FRAMER_MOTION]: {
      ...commonSocialCustomCursor,
      backgroundColor: 'rgb(0,0,0)',
      opacity,
    },
    [CursorVariants.TYPESCRIPT]: {
      ...commonSocialCustomCursor,
      backgroundColor: '#007ACC',
      opacity,
    },
    [CursorVariants.VUE]: {
      ...commonSocialCustomCursor,
      backgroundColor: '#42b883',
      opacity,
    },
  };

  const cursorVariantHandlers: { [K in CursorVariants]: () => void } =
    React.useMemo(
      () => ({
        [CursorVariants.CONTACT]: () => {
          setCursorText(<ContactUsVariant />);
          setCursorVariant(CursorVariants.CONTACT);
        },
        [CursorVariants.CONTACT_CTA]: () => {
          setCursorText('Contact Us');
          setCursorVariant(CursorVariants.CONTACT_CTA);
        },
        [CursorVariants.DEFAULT]: () => {
          setCursorText('');
          setCursorVariant(CursorVariants.DEFAULT);
        },
        [CursorVariants.DRIBBBLE]: () => {
          setCursorText(<DribbbleVariant />);
          setCursorVariant(CursorVariants.DRIBBBLE);
        },
        [CursorVariants.GITHUB]: () => {
          setCursorText(<GithubVariant />);
          setCursorVariant(CursorVariants.GITHUB);
        },
        [CursorVariants.HIDDEN]: () => {
          setCursorText('');
          setCursorVariant(CursorVariants.HIDDEN);
        },
        [CursorVariants.NEST_JS]: () => {
          setCursorText(<NestJsIcon />);
          setCursorVariant(CursorVariants.NEST_JS);
        },
        [CursorVariants.TAILWIND]: () => {
          setCursorText(<TailwindIcon />);
          setCursorVariant(CursorVariants.TAILWIND);
        },
        [CursorVariants.REACT]: () => {
          setCursorText(<ReactIcon />);
          setCursorVariant(CursorVariants.REACT);
        },
        [CursorVariants.FRAMER_MOTION]: () => {
          setCursorText(<FramerMotionIcon />);
          setCursorVariant(CursorVariants.FRAMER_MOTION);
        },
        [CursorVariants.SHRUG]: () => {
          setCursorText('¯\\_(ツ)_/¯');
          setCursorVariant(CursorVariants.SHRUG);
        },
        [CursorVariants.TYPESCRIPT]: () => {
          setCursorText(<TypescriptIcon />);
          setCursorVariant(CursorVariants.TYPESCRIPT);
        },
        [CursorVariants.VUE]: () => {
          setCursorText(<VueIcon />);
          setCursorVariant(CursorVariants.VUE);
        },
        [CursorVariants.IMG]: () => {
          if (typeof cursorVariant === 'object') {
            setCursorVariant(CursorVariants.IMG);
          }
        },
      }),
      [cursorVariant],
    );

  const cursorContextProviderValue = React.useMemo(
    () => ({
      cursorVariant,
      setCursorVariant: (
        nextCursorVariant: CursorVariants | GrayscaleImageProps,
      ) => {
        if (typeof nextCursorVariant === 'object') {
          setCursorText(
            <motion.img
              className='relative left-0 top-0 h-full w-full rounded-3xl object-cover object-left-top transition duration-300 group-hover:opacity-100'
              {...nextCursorVariant}
            />,
          );
          cursorVariantHandlers[CursorVariants.IMG]();
        } else {
          get(cursorVariantHandlers, [nextCursorVariant], () => null)();
        }
      },
    }),
    [cursorVariant, cursorVariantHandlers],
  );

  return (
    <CursorContext.Provider value={cursorContextProviderValue}>
      <motion.div
        variants={cursorVariantMap}
        animate={cursorVariant}
        transition={spring}
        className={clsx(
          `max-xl:d-flex pointer-events-none fixed left-0 top-0 z-[100] hidden h-[10px] w-[10px] content-center items-center justify-center justify-items-center bg-[#1e91d6] text-base text-white md:block`,
          get(cursorVariantMap, [cursorVariant, 'isRounded'])
            ? 'rounded-full'
            : 'rounded-sm',
        )}
      >
        {cursorText}
      </motion.div>
      {children}
    </CursorContext.Provider>
  );
}
