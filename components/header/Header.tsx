import Link from 'next/link';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useThemeContext } from '../../styles/AppThemeContext';
import {
  HeaderContent,
  HeaderWrapper,
  Logo,
  NavLinks,
  ThemeToggler,
  ThemeTogglerAndNav,
} from './Header.styles';
import { pages } from './pages';

const Header = () => {
  const { theme, switchTheme } = useThemeContext();
  return (
    <HeaderWrapper>
      <HeaderContent>
        <Link href='/'>
          <a>
            <Logo>GYBEX</Logo>
          </a>
        </Link>
        <ThemeTogglerAndNav>
          <ThemeToggler>
            <button type='button' onClick={switchTheme}>
              {theme === 'dark' ? <FaSun /> : <FaMoon />}
            </button>
          </ThemeToggler>

          <nav>
            <NavLinks>
              {pages.map((page, index) => {
                const { href, text } = page;
                return (
                  <li key={index}>
                    <Link href={href}>
                      <a>{text}</a>
                    </Link>
                  </li>
                );
              })}
            </NavLinks>
          </nav>
        </ThemeTogglerAndNav>
      </HeaderContent>
    </HeaderWrapper>
  );
};

export default Header;
