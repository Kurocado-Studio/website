import type { motion } from 'framer-motion';
import type React from 'react';

import type { CursorVariants, SocialMediaLinks } from '~/domain/enums';

export interface DribbbleShot {
  title: string;
  thumbnail: string;
}

export interface FrontEndProject {
  title: string;
  description: string;
  url: string;
  tags?: Array<string>;
}

export interface PlatformProject {
  title: string;
  description: string;
  url: string;
}

export type CaseStudy = Omit<FrontEndProject, 'description'> & {
  descriptions: Array<string>;
};

export type FramerCursorAttributes = Pick<
  Partial<React.DOMAttributes<HTMLElement>>,
  'onPointerEnter' | 'onPointerLeave'
>;

export type PropsWithoutRef<T extends HTMLIntrinsicElements> =
  T extends keyof typeof motion
    ? Omit<React.ComponentPropsWithoutRef<(typeof motion)[T]>, 'ref'>
    : never;

export type PropsWithRef<T extends HTMLIntrinsicElements> =
  T extends keyof typeof motion
    ? Omit<React.ComponentPropsWithRef<(typeof motion)[T]>, 'ref'>
    : never;

export type HTMLIntrinsicElements = keyof React.JSX.IntrinsicElements;

export type ClassName = React.JSX.IntrinsicElements['div']['className'];

export type SocialMediaProfile = {
  title: string;
  href: SocialMediaLinks;
  cursorVariant: CursorVariants;
};
