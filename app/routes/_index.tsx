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

import { About } from '~/views/About';
import { Contact } from '~/views/Contact';
import { DesignProjects } from '~/views/DesignProjects';
import { FrontEndProjects } from '~/views/FrontEndProjects';
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
      <About />
      <DesignProjects />
      <FrontEndProjects />
      <Contact />
    </>
  );
}
