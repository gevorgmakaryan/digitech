import React from 'react';
import Head from 'next/head';
import Privacy from 'views/Privacy';
import Main from 'layouts/Main';
import WithLayout from 'WithLayout';

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>Digitech Milan | Privacy Policy</title>
      </Head>
      <WithLayout component={Privacy} layout={Main} />
    </>
  );
}
