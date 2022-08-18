import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';
import { Fragment } from 'react';
import { ServerStyleSheet } from 'styled-components';

const injectScriptOnInitialLoad = `
const getUserPreference = () => {
  const themeFromLocalStorage = window.localStorage.getItem('theme');
  const userBrowserThemePreference = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  if(themeFromLocalStorage) {
    return themeFromLocalStorage;
  }
  return userBrowserThemePreference;
}
document.body.dataset.theme = getUserPreference();
`;

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
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
    return (
      <Html lang='en'>
        <Head>
          <meta name='author' content='Yawson Enoch' />
          <meta name='keywords' content='ers, employee records system' />
          <meta
            name='description'
            content='Employee records system with real-time CRUD operations.'
          />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <body>
          <script dangerouslySetInnerHTML={{ __html: injectScriptOnInitialLoad }} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
