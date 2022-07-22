import type { AppProps } from 'next/app';
import Layout from '../components/layout/Layout';
import { ErsContextProvider } from '../store/ers/ErsContext';
import { AppThemeContextProvider } from '../styles/AppThemeContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppThemeContextProvider>
      <ErsContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ErsContextProvider>
    </AppThemeContextProvider>
  );
}

export default MyApp;
