import React from 'react';
import Head from 'next/head';
import Cookies from 'views/Cookies';
import Main from 'layouts/Main';
import WithLayout from 'WithLayout';

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>FullPM customer interface</title>
      </Head>
      <WithLayout component={Cookies} layout={Main} />
    </>
  );
}
