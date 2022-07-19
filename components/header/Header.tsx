import dynamic from 'next/dynamic';
import Link from 'next/link';
import {
  HeaderContent,
  StyledHeader,
  Logo,
  ThemeTogglerAndNav,
} from './Header.styles';

const ThemeToggler = dynamic(() => import('../theme-toggler/ThemeToggler'), {
  ssr: false,
});

const Header = () => {
  return (
    <StyledHeader>
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
    </StyledHeader>
  );
};

export default Header;
