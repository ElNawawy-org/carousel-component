import { Html, Head, Main, NextScript } from 'next/document';

//TODO: Check lang and dir
const lang = 'ar';
const dir = 'rtl';

export default function Document() {
  return (
    <Html lang={lang}>
      <Head />

      <body dir={dir}>
        <Main />

        <NextScript />
      </body>
    </Html>
  );
}
