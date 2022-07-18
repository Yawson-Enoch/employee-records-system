import dynamic from 'next/dynamic';
import Link from 'next/link';
import {
  HeaderContent,
  HeaderWrapper,
  Logo,
  ThemeTogglerAndNav,
} from './Header.styles';

const ThemeToggler = dynamic(() => import('../theme-toggler/ThemeToggler'), {
  ssr: false,
});

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderContent>
        <Link href='/'>
          <a>
            <Logo>Employee Records System</Logo>
          </a>
        </Link>
        <ThemeTogglerAndNav>
          <ThemeToggler />
        </ThemeTogglerAndNav>
      </HeaderContent>
    </HeaderWrapper>
  );
};

export default Header;
