import type { motion } from 'framer-motion';
import type React from 'react';

export type PropsWithoutRef<T extends HTMLTags> =
  React.ComponentPropsWithoutRef<
    (typeof motion)[T extends keyof typeof motion ? T : never]
  >;

export type PropsWithRef<T extends HTMLTags> = React.ComponentPropsWithRef<
  (typeof motion)[T extends keyof typeof motion ? T : never]
>;

export type HTMLTags = keyof React.JSX.IntrinsicElements;

export type ClassName = React.JSX.IntrinsicElements['div']['className'];
