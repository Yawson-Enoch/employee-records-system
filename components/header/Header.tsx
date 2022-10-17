import dynamic from 'next/dynamic';
import Link from 'next/link';
import { HeaderContent, StyledHeader, Logo, ThemeTogglerAndNav } from './Header.styles';

const ThemeToggler = dynamic(() => import('./ThemeToggler'), {
  ssr: false,
});

const Header = () => {
  return (
    <StyledHeader>
      <HeaderContent>
        <Link href='/'>
          <a>
            <Logo>ERS</Logo>
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
