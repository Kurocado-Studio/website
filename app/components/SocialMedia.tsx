import clsx from 'clsx';
import get from 'lodash-es/get';
import React, { useContext } from 'react';

import { FadeIn, FadeInDirection, FadeInStagger } from '~/components/FadeIn';
import { SocialMediaLinks } from '~/config/enums';
import { CursorContext, CursorVariants } from '~/context/CursorContext';
import type { PropsWithoutRef } from '~/lib/types';

export function GitHubIcon(props: PropsWithoutRef<'svg'>): React.ReactNode {
  return (
    // @ts-expect-error CustomValueType is not assignable to type string
    <svg viewBox='0 0 24 24' aria-hidden='true' {...props}>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z'
      />
    </svg>
  );
}

export function DribbbleIcon(props: PropsWithoutRef<'svg'>): React.ReactNode {
  return (
    // @ts-expect-error CustomValueType is not assignable to type string
    <svg viewBox='0 0 24 24' aria-hidden='true' {...props}>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2Zm6.605 4.61a8.502 8.502 0 0 1 1.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.42 25.42 0 0 0-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362ZM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.688 8.688 0 0 1 12 3.475Zm-3.633.803a53.889 53.889 0 0 1 3.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 0 1 4.729-5.975ZM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.523 8.523 0 0 1-2.191-5.705ZM12 20.547a8.482 8.482 0 0 1-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.32 35.32 0 0 1 1.823 6.475 8.402 8.402 0 0 1-3.341.684Zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 0 1-3.655 5.715Z'
      />
    </svg>
  );
}

export function SocialMedia({
  className,
  invert = false,
}: {
  className?: string;
  invert?: boolean;
}): React.ReactNode {
  const cursorContext = useContext(CursorContext);

  const setDefaultVariant = (): void => {
    cursorContext.setCursorVariant(CursorVariants.HIDDEN);
  };

  const setGithubVariant = (): void => {
    cursorContext.setCursorVariant(CursorVariants.GITHUB);
  };

  const setDribbbleVariant = (): void => {
    cursorContext.setCursorVariant(CursorVariants.DRIBBBLE);
  };

  const socialMediaProfiles = [
    {
      title: 'GitHub',
      href: SocialMediaLinks.GITHUB,
      icon: GitHubIcon,
      onMouseEnter: setGithubVariant,
      onMouseLeave: setDefaultVariant,
    },
    {
      title: 'Dribbble',
      href: SocialMediaLinks.DRIBBBLE,
      icon: DribbbleIcon,
      onMouseEnter: setDribbbleVariant,
      onMouseLeave: setDefaultVariant,
    },
  ];

  return (
    <FadeInStagger>
      <ul
        className={clsx(
          'flex gap-x-10',
          invert ? 'text-white' : 'text-neutral-950',
          className,
        )}
      >
        {socialMediaProfiles.map((socialMediaProfile, idx) => (
          <li key={`${socialMediaProfile.title}_${String(idx)}`}>
            <FadeIn direction={FadeInDirection.UP}>
              <a
                rel='noreferrer'
                href={socialMediaProfile.href}
                aria-label={socialMediaProfile.title}
                className={clsx(
                  'transition',
                  invert ? 'hover:text-neutral-200' : 'hover:text-neutral-700',
                )}
                target='_blank'
                onMouseEnter={get(socialMediaProfile, ['onMouseEnter'])}
                onMouseLeave={get(socialMediaProfile, ['onMouseLeave'])}
              >
                <socialMediaProfile.icon className='h-12 w-12 fill-current' />
              </a>
            </FadeIn>
          </li>
        ))}
      </ul>
    </FadeInStagger>
  );
}
