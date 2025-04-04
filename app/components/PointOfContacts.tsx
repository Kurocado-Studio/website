import clsx from 'clsx';
import { motion } from 'framer-motion';
import get from 'lodash-es/get';
import React, { type PropsWithChildren, useCallback, useContext } from 'react';

import { FadeIn, FadeInDirection, FadeInStagger } from '~/components/FadeIn';
import { CursorContext } from '~/context/CursorContext';
import { ContactPoints, CursorVariants } from '~/domain/enums';
import { socialMediaProfiles } from '~/domain/socialMediaProfiles';
import type { PropsWithoutRef } from '~/domain/types';

type SocialMediaCursorVariantMap = {
  [CursorVariants.GITHUB]: {
    cursor: () => void;
    icon: React.FC;
  };
  [CursorVariants.LINKEDIN]: {
    cursor: () => void;
    icon: React.FC;
  };
};

export const interactiveClassName =
  'inline-flex h-16 items-center justify-center bg-[GreenYellow] text-lg fill-current px-3 align-bottom font-display font-semibold text-neutral-900 shadow-sm hover:bg-[Black] hover:text-[GreenYellow]';

export function PointOfContacts({
  className,
}: {
  className?: string;
  invert?: boolean;
}): React.ReactNode {
  const { setCursorVariant } = useContext(CursorContext);

  const setDefaultVariant = (): void => {
    setCursorVariant(CursorVariants.DEFAULT);
  };

  const setGithubVariant = (): void => {
    setCursorVariant(CursorVariants.GITHUB);
  };

  const setLinkedInVariant = (): void => {
    setCursorVariant(CursorVariants.LINKEDIN);
  };

  const socialMediaCursorVariantMap: SocialMediaCursorVariantMap = {
    [CursorVariants.GITHUB]: {
      cursor: useCallback(setGithubVariant, [setCursorVariant]),
      icon: GitHubIcon,
    },
    [CursorVariants.LINKEDIN]: {
      cursor: useCallback(setLinkedInVariant, [setCursorVariant]),
      icon: LinkedInIcon,
    },
  };

  return (
    <FadeInStagger>
      <ul className={clsx('', className)}>
        <FadeIn direction={FadeInDirection.UP} as='li'>
          <motion.a
            onPointerEnter={() => setCursorVariant(CursorVariants.HIDDEN)}
            onPointerLeave={() => setDefaultVariant()}
            className={interactiveClassName}
            rel='noreferrer'
            href='./Carlos_Santiago_Resume.pdf'
            target='_blank'
            download='Carlos_Santiago_Resume.pdf'
          >
            Download my resume
          </motion.a>
        </FadeIn>
        <FadeIn direction={FadeInDirection.UP} as='li'>
          <motion.a
            rel='noreferrer'
            href={ContactPoints.EMAIL}
            target='_blank'
            onPointerEnter={() => setCursorVariant(CursorVariants.CONTACT)}
            onPointerLeave={() => setDefaultVariant()}
            className={interactiveClassName}
          >
            E-mail me
          </motion.a>
        </FadeIn>
        {socialMediaProfiles.map((socialMediaProfile, idx) => (
          <FadeIn
            direction={FadeInDirection.UP}
            as='li'
            key={`${socialMediaProfile.title}_${String(idx)}`}
          >
            <motion.a
              rel='noreferrer'
              href={socialMediaProfile.href}
              aria-label={socialMediaProfile.title}
              target='_blank'
              onPointerEnter={get(socialMediaCursorVariantMap, [
                socialMediaProfile.cursorVariant,
                'cursor',
              ])}
              onPointerLeave={setDefaultVariant}
            >
              <RenderSocialMediaCursorVariant
                Component={get(socialMediaCursorVariantMap, [
                  socialMediaProfile.cursorVariant,
                  'icon',
                ])}
                className={clsx(interactiveClassName, 'h-16 w-16 text-sm')}
              />
            </motion.a>
          </FadeIn>
        ))}
      </ul>
    </FadeInStagger>
  );
}

export function GitHubIcon(props: PropsWithoutRef<'svg'>): React.ReactNode {
  return (
    <motion.svg viewBox='0 0 24 24' aria-hidden='true' {...props}>
      <motion.path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z'
      />
    </motion.svg>
  );
}

export function LinkedInIcon(props: PropsWithoutRef<'svg'>): React.ReactNode {
  return (
    <motion.svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      {...props}
    >
      <motion.path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' />
    </motion.svg>
  );
}

export function DribbbleIcon(props: PropsWithoutRef<'svg'>): React.ReactNode {
  return (
    <motion.svg viewBox='0 0 24 24' aria-hidden='true' {...props}>
      <motion.path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2Zm6.605 4.61a8.502 8.502 0 0 1 1.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.42 25.42 0 0 0-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362ZM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.688 8.688 0 0 1 12 3.475Zm-3.633.803a53.889 53.889 0 0 1 3.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 0 1 4.729-5.975ZM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.523 8.523 0 0 1-2.191-5.705ZM12 20.547a8.482 8.482 0 0 1-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.32 35.32 0 0 1 1.823 6.475 8.402 8.402 0 0 1-3.341.684Zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 0 1-3.655 5.715Z'
      />
    </motion.svg>
  );
}

function RenderSocialMediaCursorVariant<
  T extends PropsWithChildren<React.HTMLAttributes<HTMLElement>>,
>({
  Component,
  ...rest
}: {
  Component?: React.FC<{ className?: string }>;
} & T): React.ReactNode {
  return Component ? <Component {...rest} /> : null;
}
