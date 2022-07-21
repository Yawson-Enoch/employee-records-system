import type { AppProps } from 'next/app';
import Layout from '../components/layout/Layout';
import { EmsContextProvider } from '../store/ems/EmsContext';
import { AppThemeContextProvider } from '../styles/AppThemeContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppThemeContextProvider>
      <EmsContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </EmsContextProvider>
    </AppThemeContextProvider>
  );
}

export default MyApp;
