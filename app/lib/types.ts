import type { motion } from 'framer-motion';
import type React from 'react';

export type PropsWithoutRef<T extends HTMLIntrinsicElements> =
  T extends keyof typeof motion
    ? Omit<React.ComponentPropsWithoutRef<(typeof motion)[T]>, 'ref'>
    : never;

export type HTMLIntrinsicElements = keyof React.JSX.IntrinsicElements;

export type ClassName = React.JSX.IntrinsicElements['div']['className'];
