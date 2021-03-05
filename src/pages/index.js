import React from 'react';
import Head from 'next/head';
import Home from 'views/Home';
import Main from 'layouts/Main';
import WithLayout from 'WithLayout';

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>FullPM customer interface</title>
      </Head>
      <WithLayout component={Home} layout={Main} />
    </>
  );
}
