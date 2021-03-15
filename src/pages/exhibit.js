import React from 'react';
import Head from 'next/head';
import Exhibit from 'views/Exhibit';
import Main from 'layouts/Main';
import WithLayout from 'WithLayout';

export default function ExhibitPage() {
  return (
    <>
      <Head>
        <title>DigiTech Milan | Join, present and develop your business at DigiTech Milan</title>
      </Head>
      <WithLayout component={Exhibit} layout={Main} />
    </>
  );
}
