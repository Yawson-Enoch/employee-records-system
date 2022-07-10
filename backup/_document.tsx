import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document';
import { Fragment } from 'react';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [
          <Fragment key='1'>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </Fragment>,
        ],
      };
    } finally {
      sheet.seal();
    }
  }
  render(): JSX.Element {
    const loadFontOnServer = `
    @font-face {
      font-family: 'Poppins';
      src: local('Poppins'),
        url('/fonts/poppins/Poppins-Regular.ttf') format('truetype');
        font-style: normal;
        font-weight: 400;
        font-display: swap;
    }
    
    @font-face {
      font-family: 'Poppins';
      src: local('Poppins'),
        url('/fonts/poppins/Poppins-Bold.ttf') format('truetype');
      font-style: normal;
      font-weight: 700;
      font-display: swap;
    }
    
    @font-face {
      font-family: 'PT Serif';
      src: local('PT Serif'),
        url('/fonts/pt-serif/PTSerif-Regular.ttf') format('truetype');
      font-style: normal;
      font-weight: 400;
      font-display: swap;
    }
    
    @font-face {
      font-family: 'PT Serif';
      src: local('PT Serif'),
        url('/fonts/pt-serif/PTSerif-Italic.ttf') format('truetype');
      font-style: italic;
      font-weight: 400;
      font-display: swap;
    }
  `;
    const setInitialTheme = `
    function getUserPreference() {
      if(window.localStorage.getItem('theme')) {
        return window.localStorage.getItem('theme')
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    }
    document.body.dataset.theme = getUserPreference();
  `;
    return (
      <Html lang='en'>
        <Head>
          <meta name='author' content='Yawson Enoch' />
          <meta
            name='keywords'
            content='frontend developer, gybex, enoch gybex, enoch yawson, portfolio site with blog posts'
          />
          <meta
            name='description'
            content="Hey, I'm Yawson Enoch, Frontend Web Developer and Linux Enthusiast."
          />
          <link rel='icon' href='/favicon.ico' />
          <style
            dangerouslySetInnerHTML={{
              __html: loadFontOnServer,
            }}
          />
          {/* <script dangerouslySetInnerHTML={{ __html: setInitialTheme }} /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
