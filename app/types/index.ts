import React from 'react';

export type FramerCursorAttributes = Pick<
  Partial<React.DOMAttributes<HTMLElement>>,
  'onMouseEnter' | 'onMouseLeave'
>;
