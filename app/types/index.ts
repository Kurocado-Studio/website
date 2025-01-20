import type React from 'react';

export type FramerCursorAttributes = Pick<
  Partial<React.DOMAttributes<HTMLElement>>,
  'onPointerEnter' | 'onPointerLeave'
>;
