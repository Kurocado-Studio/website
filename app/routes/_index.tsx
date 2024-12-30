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
import { ColorContextEnum } from '~/context/types';
import { Intro } from '~/views/Intro';

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
      <Intro />
      <ColorContextChangerContainer
        colorContext={ColorContextEnum.WHITE}
        className='py-112'
      >
        Some Children
      </ColorContextChangerContainer>

      <ColorContextChangerContainer
        colorContext={ColorContextEnum.RED}
        className='py-112'
      >
        Some Children
      </ColorContextChangerContainer>

      <ColorContextChangerContainer
        colorContext={ColorContextEnum.GREEN}
        className='py-112'
      >
        Some Children
      </ColorContextChangerContainer>

      <ColorContextChangerContainer
        colorContext={ColorContextEnum.BLUE}
        className='py-112'
      >
        Some Children
      </ColorContextChangerContainer>

      <ColorContextChangerContainer
        colorContext={ColorContextEnum.ORANGE}
        className='py-112'
      >
        Some Children
      </ColorContextChangerContainer>

      <ColorContextChangerContainer
        colorContext={ColorContextEnum.PURPLE}
        className='py-112'
      >
        Some Children
      </ColorContextChangerContainer>

      <ColorContextChangerContainer
        colorContext={ColorContextEnum.YELLOW}
        className='py-112'
      >
        Some Children
      </ColorContextChangerContainer>
    </>
  );
}
