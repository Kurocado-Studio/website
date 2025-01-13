/**
 * Made with ❤️ and adobo by Kurocado Studio
 * Copyright (c) 2024. All Rights Reserved.
 *
 * Learn more about Kurocado Studio: {@link https://www.kurocado.studio}
 *
 * Explore our open-source projects: {@link https://github.com/kurocado-studio}
 */

/* eslint unicorn/filename-case: 0 */

/* eslint import/no-default-export: 0 */
import type { MetaFunction } from '@remix-run/node';
import React from 'react';

import { ColorContextChangerContainer } from '~/components/ColorContextChangerContainer';
import { ColorThemes } from '~/context/types';
import { About } from '~/views/About';
import { Intro } from '~/views/Intro';
import { Projects } from '~/views/Projects';

export const meta: MetaFunction = () => {
  return [
    { title: 'Kurocado Studio' },
    {
      name: 'description',
      content:
        'Kurocado Studio specializes in SaaS development, open-source projects, and personalized web solutions.',
    },
    {
      name: 'keywords',
      content:
        'Kurocado Studio, SaaS, open-source, web development, TypeScript',
    },
    { name: 'author', content: 'Carlos Santiago' },
    { property: 'og:title', content: 'Kurocado Studio' },
  ];
};

export default function Index(): React.ReactNode {
  return (
    <>
      <ColorContextChangerContainer
        as='section'
        className='mt-24 sm:mt-32 md:mt-56'
        colorTheme={ColorThemes.WHITE}
      >
        <Intro />
        <About />
      </ColorContextChangerContainer>
      <ColorContextChangerContainer as='section' colorTheme={ColorThemes.BLUE}>
        <Projects />
      </ColorContextChangerContainer>
      <ColorContextChangerContainer
        as='section'
        colorTheme={ColorThemes.YELLOW}
      >
        <Intro />
        <About />
      </ColorContextChangerContainer>
    </>
  );
}
