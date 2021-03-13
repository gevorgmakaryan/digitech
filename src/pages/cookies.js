import React from 'react';
import Head from 'next/head';
import Cookies from 'views/Cookies';
import Main from 'layouts/Main';
import WithLayout from 'WithLayout';

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>Digitech Milan | Cookie Policy</title>
      </Head>
      <WithLayout component={Cookies} layout={Main} />
    </>
  );
}
