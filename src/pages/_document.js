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
            content="DigiTech Milan, Expo, Digital Expo, DigiTech Expo, Milan, Tech, Technology, Summit"
          />
          <meta
            name="description"
            content="DigiTech Milan brings together the people and companies redefining the global tech industry. Join, present and develop your business at DigiTech Milan."
          />

          {/* Global site tag (gtag.js) - Google Analytics */}
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-XS2XT8M7DY"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
      
                  gtag('config', 'G-XS2XT8M7DY');
              `
            }}
          />

          {/* Schema.org  */}
          <meta itemProp="name" content="DigiTech Milan" />
          <meta
            itemProp="description"
            content="DigiTech Milan brings together the people and companies redefining the global tech industry. Join, present and develop your business at DigiTech Milan."
          />
          <meta itemProp="image" content="https://digitechmilan.com/social.png" />

          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@DigitechMilan" />
          <meta name="twitter:title" content="DigiTech Milan" />
          <meta
            name="twitter:description"
            content="DigiTech Milan brings together the people and companies redefining the global tech industry. Join, present and develop your business at DigiTech Milan."
          />
          <meta name="twitter:creator" content="@DigitechMilan" />
          <meta name="twitter:image" content="https://digitechmilan.com/social.png" />

          {/* Open Graph */}
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="DigiTech Milan" />
          <meta property="og:title" content="DigiTech Milan" />
          <meta property="og:description" content="DigiTech Milan brings together the people and companies redefining the global tech industry. Join, present and develop your business at DigiTech Milan."/>
          <meta property="og:url" content="https://digitechmilan.com/" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:image" content="https://digitechmilan.com/social.png" />
          <meta property="og:image:secure_url" content="https://digitechmilan.com/social.png" />
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
