import type { motion } from 'framer-motion';
import type React from 'react';

export type PropsWithoutRef<T extends keyof React.JSX.IntrinsicElements> =
  T extends keyof typeof motion
    ? React.ComponentPropsWithoutRef<(typeof motion)[T]>
    : React.ComponentPropsWithoutRef<T>;

export type HTMLIntrinsicElements = keyof React.JSX.IntrinsicElements;

export type ClassName = React.JSX.IntrinsicElements['div']['className'];
