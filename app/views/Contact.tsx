import clsx from 'clsx';
import React from 'react';

import { Container } from '~/components/Container';
import { PointOfContacts } from '~/components/PointOfContacts';
import { ContactPoints } from '~/config/enums';
import { ColorContext } from '~/context/ColorContext';
import { CursorContext, CursorVariants } from '~/context/CursorContext';
import { ColorThemes } from '~/context/types';
import { HorizontalScrollText } from '~/lib/HorizontalScrollText';

export function Contact(): React.ReactNode {
  const { setColorContext } = React.useContext(ColorContext);
  const { setCursorVariant } = React.useContext(CursorContext);

  return (
    <Container
      withMaxWidth={false}
      as='section'
      className={'mb-24'}
      onPointerEnter={() => setColorContext(ColorThemes.GREEN)}
    >
      <HorizontalScrollText
        baseVelocity={-2}
        href={ContactPoints.EMAIL}
        onPointerEnter={() => {
          setCursorVariant(CursorVariants.CONTACT);
        }}
        onPointerLeave={() => {
          setCursorVariant(CursorVariants.DEFAULT);
        }}
      >
        Contact
      </HorizontalScrollText>
      <Container>
        <p
          className={clsx(
            'mb-24 block max-w-7xl font-body text-5xl font-medium tracking-tight [text-wrap:balance]',
          )}
        >
          Whether you need a new website, custom illustrations, or just want to
          chat about your ideas, I am here help however I can.
        </p>
        <PointOfContacts />
      </Container>
    </Container>
  );
}
