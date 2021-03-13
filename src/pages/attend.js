import React from 'react';
import Head from 'next/head';
import Attend from 'views/Attend';
import Main from 'layouts/Main';
import WithLayout from 'WithLayout';

export default function AttendPage() {
  return (
    <>
      <Head>
        <title>Digitech Milan | Come to Milan, attend Digitech Milan</title>
      </Head>
      <WithLayout component={Attend} layout={Main} />
    </>
  );
}
