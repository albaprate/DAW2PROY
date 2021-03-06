import Document, { Html, Head, Main, NextScript } from 'next/document';

import { AppConfig } from '@/utils/AppConfig';

// Need to create a custom _document because i18n support is not compatible with `next export`.
class MyDocument extends Document {
  render() {
    return (
      <Html lang={AppConfig.locale}>
        <Head>
          {/*  <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin /> */}
          <link
            href="https://fonts.googleapis.com/css2?family=Jost:wght@300&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=DM+Serif+Text&display=swap"
            rel="stylesheet"
          />
          <link href="https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Koulen&display=swap" rel="stylesheet"/>
          <link href="https://fonts.googleapis.com/css2?family=Lexend&display=swap" rel="stylesheet"/>
          <link href="https://fonts.googleapis.com/css2?family=Tapestry&display=swap" rel="stylesheet"/>
          <link href="https://fonts.googleapis.com/css2?family=Viga&display=swap" rel="stylesheet"></link>
          <link href="https://fonts.googleapis.com/css2?family=Shrikhand&display=swap" rel="stylesheet"></link>
          <link href="https://fonts.googleapis.com/css2?family=Allerta+Stencil&display=swap" rel="stylesheet"></link>
        </Head>
        <body className="font-jost">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
