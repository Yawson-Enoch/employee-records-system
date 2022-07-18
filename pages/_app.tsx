import type { AppProps } from 'next/app';
import Layout from '../layout/Layout';
import { EmployeesDbContextProvider } from '../store/context/EmployeesDbContext';
import { ModalContextProvider } from '../store/context/ModalContext';
import { AppThemeContextProvider } from '../styles/AppThemeContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppThemeContextProvider>
      <ModalContextProvider>
        <EmployeesDbContextProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </EmployeesDbContextProvider>
      </ModalContextProvider>
    </AppThemeContextProvider>
  );
}

export default MyApp;
