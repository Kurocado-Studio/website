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
import type { LinksFunction } from '@remix-run/node';
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import React from 'react';

import { Footer } from '~/components/Footer';
import { BodyHTMLTagColorProvider } from '~/context/ColorContext';
import { CursorContextProvider } from '~/context/CursorContext';
import '~/tailwind.css';

export const links: LinksFunction = () => [
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '32x32',
    href: '/favicon-32x32.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '16x16',
    href: '/favicon-16x16.png',
  },
  {
    rel: 'icon',
    type: 'image/x-icon',
    href: '/favicon.ico',
  },
];

export function Layout({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode {
  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <Meta />
        <link
          rel='stylesheet'
          type='text/css'
          href='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css'
        />
        <Links />
        <title>Kurocado Studio</title>
        <script
          src='https://cdn.usefathom.com/script.js'
          data-spa='auto'
          data-site='VEHTFGUH'
          defer
        />
      </head>
      <BodyHTMLTagColorProvider>
        <CursorContextProvider>{children}</CursorContextProvider>
        <Footer />
        <ScrollRestoration />
        <Scripts />
      </BodyHTMLTagColorProvider>
    </html>
  );
}

export default function App(): React.ReactNode {
  return <Outlet />;
}
