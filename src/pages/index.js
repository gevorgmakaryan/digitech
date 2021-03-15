/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Head from 'next/head';
import Home from 'views/Home';
import Main from 'layouts/Main';
import WithLayout from 'WithLayout';

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>DigiTech Milan | Join, exhibit and attend to Milan's first technology expo</title>
      </Head>
      <WithLayout component={Home} layout={Main} />
    </>
  );
}
