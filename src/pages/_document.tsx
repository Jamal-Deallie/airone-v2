import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <link
          href='font/Headline.woff2'
          as='font'
          type='font/opentype'
          crossOrigin='anonymous'
        />
        <link rel='stylesheet' href='https://use.typekit.net/aqa8zgq.css' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
