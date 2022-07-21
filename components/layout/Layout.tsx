import { FC } from 'react';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import { LayoutWrapper } from './Layout.styles';

const Layout: FC = ({ children }) => {
  return (
    <LayoutWrapper>
      <Header />
      {children}
      <Footer />
    </LayoutWrapper>
  );
};

export default Layout;
