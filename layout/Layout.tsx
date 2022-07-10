import { FC } from 'react';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
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
