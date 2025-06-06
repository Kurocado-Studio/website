import type { CursorState } from 'ahooks/lib/useMouse';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { get } from 'lodash-es';
import { createContext } from 'react';
import * as React from 'react';

import type { CustomCursor } from '~/components/Cursors';
import {
  ContactUsVariant,
  OpenInNewTabCursorVariant,
} from '~/components/Cursors';
import { FadeIn } from '~/components/FadeIn';
import { CursorVariants } from '~/domain/enums';
import type { GrayscaleImageProps } from '~/domain/lib/GrayscaleImage';
import { useWindowSize } from '~/hooks/useWindowSize';
import { FramerMotionIcon } from '~/icons/FramerMotionIcon';
import { GitHubActionsIcon } from '~/icons/GithubActionsIcon';
import { GitHubIcon } from '~/icons/GithubIcon';
import { NestJsIcon } from '~/icons/NestJsIcon';
import { ReactIcon } from '~/icons/ReactIcon';
import { TailwindIcon } from '~/icons/TailwindIcon';
import { TypescriptIcon } from '~/icons/TypescriptIcon';
import { VueIcon } from '~/icons/VueIcon';

type CursorContext = {
  cursorVariant: CursorVariants | GrayscaleImageProps;
  setCursorVariant: (
    cursorVariant: CursorVariants | GrayscaleImageProps,
  ) => void;
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
  const [cursorText, setCursorText] = React.useState<React.ReactNode>('');

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
    backgroundColor: '#2F4F4F',
    color: '#00FF00',
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
    fontSize: '48px',
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
    [CursorVariants.OPEN_IN_NEW_TAB]: commonInteractiveCursor,
    [CursorVariants.CONTACT]: commonInteractiveCursor,
    [CursorVariants.LINKEDIN]: commonInteractiveCursor,
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
      padding: '0px',
      width: 200,
      x: mouseXPosition - 50,
      y: mouseYPosition - 100,
    },
    [CursorVariants.DRIBBBLE]: commonInteractiveCursor,
    [CursorVariants.EXTERNAL_GITHUB]: {
      ...commonInteractiveCursor,
      borderRadius: '100%',
    },
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
    [CursorVariants.GITHUB]: {
      ...commonSocialCustomCursor,
      backgroundColor: 'white',
      color: '#fff',
      opacity,
    },
    [CursorVariants.GITHUB_ACTIONS]: {
      ...commonSocialCustomCursor,
      backgroundColor: 'white',
      color: '#fff',
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
          setCursorText('Contact Me');
          setCursorVariant(CursorVariants.CONTACT_CTA);
        },
        [CursorVariants.DEFAULT]: () => {
          setCursorText('');
          setCursorVariant(CursorVariants.DEFAULT);
        },
        [CursorVariants.DRIBBBLE]: () => {
          setCursorText(<OpenInNewTabCursorVariant title='Dribbble' />);
          setCursorVariant(CursorVariants.DRIBBBLE);
        },
        [CursorVariants.EXTERNAL_GITHUB]: () => {
          setCursorText(<OpenInNewTabCursorVariant title='GitHub' />);
          setCursorVariant(CursorVariants.EXTERNAL_GITHUB);
        },
        [CursorVariants.GITHUB]: () => {
          setCursorText(<GitHubIcon />);
          setCursorVariant(CursorVariants.GITHUB);
        },
        [CursorVariants.GITHUB_ACTIONS]: () => {
          setCursorText(<GitHubActionsIcon />);
          setCursorVariant(CursorVariants.GITHUB_ACTIONS);
        },
        [CursorVariants.OPEN_IN_NEW_TAB]: () => {
          setCursorText(<OpenInNewTabCursorVariant title='Open' />);
          setCursorVariant(CursorVariants.OPEN_IN_NEW_TAB);
        },
        [CursorVariants.LINKEDIN]: () => {
          setCursorText(<OpenInNewTabCursorVariant title='LinkedIn' />);
          setCursorVariant(CursorVariants.LINKEDIN);
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
          setCursorVariant(CursorVariants.IMG);
        },
      }),
      [],
    );

  const providerValue = React.useMemo<CursorContext>(
    () => ({
      cursorVariant,
      setCursorVariant: (nextCursorVariant) => {
        if (typeof nextCursorVariant === 'object') {
          setCursorText(
            <motion.img
              {...nextCursorVariant}
              className='relative left-0 top-0 h-full w-full overflow-hidden rounded-3xl object-cover object-left-top transition duration-300 group-hover:opacity-100'
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

  const {
    size: { innerWidth },
  } = useWindowSize();

  return (
    <CursorContext.Provider value={providerValue}>
      {innerWidth > 1024 && (
        <motion.span
          initial='hidden'
          variants={cursorVariantMap}
          animate={cursorVariant}
          transition={spring}
          className={clsx(
            `pointer-events-none fixed left-0 top-0 z-[100] hidden h-[10px] w-[10px] content-center items-center justify-center justify-items-center bg-[#1e91d6] text-base text-white md:block`,
            get(cursorVariantMap, [cursorVariant, 'isRounded'])
              ? 'rounded-full'
              : 'rounded-sm',
          )}
        >
          <FadeIn>{cursorText}</FadeIn>
        </motion.span>
      )}
      {children}
    </CursorContext.Provider>
  );
}
