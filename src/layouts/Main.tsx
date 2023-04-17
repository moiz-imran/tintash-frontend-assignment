import React from 'react';
import Head from 'next/head';
import { Global, css } from '@emotion/react';

import type { FC } from 'react';

export const Main: FC = ({ children }) => {
  return (
    <>
      <Head>
        <title>Tintash - Frontend Assignment</title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
      </Head>
      <Global
        styles={css`
          html,
          body,
          #__next {
            height: 100%;
            width: 100%;
            scroll-behavior: smooth;
          }
        `}
      />
      {children}
    </>
  );
};
