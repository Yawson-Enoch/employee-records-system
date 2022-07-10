import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
  render(): JSX.Element {
    return (
      <Html lang='en'>
        {/* <Head>
          <link
            rel='preload'
            href='/fonts/poppins/Poppins-Regular.ttf'
            as='font'
            type='font/ttf'
            crossOrigin=''
          />
          <link
            rel='preload'
            href='/fonts/poppins/Poppins-Bold.ttf'
            as='font'
            type='font/ttf'
            crossOrigin=''
          />
          <link
            rel='preload'
            href='/fonts/pt-serif/PTSerif-Regular.ttf'
            as='font'
            type='font/ttf'
            crossOrigin=''
          />
          <link
            rel='preload'
            href='/fonts/pt-serif/PTSerif-Italic.ttf'
            as='font'
            type='font/ttf'
            crossOrigin=''
          />
        </Head> */}
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
