import type { AppProps } from 'next/app';
import Head from 'next/head';
import Layout from '../layout/Layout';
import { EmployeesDbContextProvider } from '../store/context/EmployeesDbContext';
import { AppThemeProvider } from '../styles/AppThemeContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name='description' content='next project starter' />
        <meta name='keywords' content='project starter' />
        <meta name='author' content='yawson enoch' />
        <link rel='shortcut icon' href='/favicon.ico' type='image/x-icon' />
      </Head>
      <AppThemeProvider>
        <EmployeesDbContextProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </EmployeesDbContextProvider>
      </AppThemeProvider>
    </>
  );
}

export default MyApp;
