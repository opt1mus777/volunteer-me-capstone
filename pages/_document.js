/**
 * Can delete file if not using @magiclabs/ui
 */

import Document, { Html, Head, Main, NextScript } from 'next/document';
/*import { DEFAULT_THEME, getThemeVariables } from '@magiclabs/ui';*/

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="shortcut icon" href="https://static.thenounproject.com/png/3637517-200.png" />
          {/*<style
            type='text/css'
            dangerouslySetInnerHTML={{ __html: getThemeVariables(DEFAULT_THEME).toCSS() }}
          />*/}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
