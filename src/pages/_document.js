import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheets } from '@material-ui/core/styles';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <meta name="theme-color" content="#222B45" />
          {/* Social tags */}
          <meta
            name="keywords"
            content="Digitech Milan, Expo, Digital Expo, Digitech Expo, Milan, Tech, Technology, Summit"
          />
          <meta
            name="description"
            content="Digitech Milan brings together the people and companies redefining the global tech industry. Join, present and develop your business at Digitech Milan."
          />

          {/* Schema.org  */}
          <meta itemProp="name" content="Digitech Milan" />
          <meta
            itemProp="description"
            content="Digitech Milan brings together the people and companies redefining the global tech industry. Join, present and develop your business at Digitech Milan."
          />
          <meta itemProp="image" content="https://digitechmilan.com/social.jpg" />

          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@digitechmilan" />
          <meta name="twitter:title" content="Digitech Milan" />
          <meta
            name="twitter:description"
            content="Digitech Milan brings together the people and companies redefining the global tech industry. Join, present and develop your business at Digitech Milan."
          />
          <meta name="twitter:creator" content="@digitechmilan" />
          <meta name="twitter:image" content="https://digitechmilan.com/social.jpg" />

          {/* Open Graph */}
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="Digitech Milan" />
          <meta property="og:title" content="Digitech Milan" />
          <meta property="og:description" content="Digitech Milan brings together the people and companies redefining the global tech industry. Join, present and develop your business at Digitech Milan."/>
          <meta property="og:url" content="https://digitechmilan.com/" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:image" content="https://digitechmilan.com/social.png" />
          <meta property="og:image:secure_url" content="https://digitechmilan.com/social.jpg" />
          <meta
            name="robots"
            content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
          />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@300;500;600;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with server-side generation (SSG).
MyDocument.getInitialProps = async (ctx) => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  // Render app and page and get the context of the page with collected side effects.
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [
      ...React.Children.toArray(initialProps.styles),
      sheets.getStyleElement(),
    ],
  };
};
