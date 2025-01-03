import type { Variant } from 'framer-motion';

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

export type UseCursorVariant = () => void;

export type CustomCursor = Variant & { isRounded?: boolean };
export const useCursorVariant: UseCursorVariant = () => {};
