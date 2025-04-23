import React from 'react';
import { twMerge } from 'tailwind-merge';

import { GitHubRepositoryCard } from '~/components/GitHubRepositoryCard';
import { HorizontalScroller } from '~/components/HorizontalScroller';
import { frontEndProjects } from '~/domain/projects.frontEnd';

export function FrontEndProjects(): React.ReactNode {
  return (
    <HorizontalScroller>
      {frontEndProjects.map((project) => (
        <GitHubRepositoryCard
          key={project.url}
          {...project}
          className={twMerge('group/project mx-2 md:mx-4 lg:mx-8')}
        />
      ))}
    </HorizontalScroller>
  );
}
