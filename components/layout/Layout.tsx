import { ReactNode } from 'react';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import { LayoutWrapper } from './Layout.styles';

interface ILayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
  return (
    <LayoutWrapper>
      <Header />
      {children}
      <Footer />
    </LayoutWrapper>
  );
};

export default Layout;
