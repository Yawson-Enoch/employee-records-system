import Link from 'next/link';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useThemeContext } from '../../styles/AppThemeContext';
import {
  HeaderContent,
  HeaderWrapper,
  Logo,
  ThemeToggler,
  ThemeTogglerAndNav,
} from './Header.styles';

const Header = () => {
  const { theme, switchTheme } = useThemeContext();
  return (
    <HeaderWrapper>
      <HeaderContent>
        <Link href='/'>
          <a>
            <Logo>Employee Records System</Logo>
          </a>
        </Link>
        <ThemeTogglerAndNav>
          <ThemeToggler>
            <button type='button' onClick={switchTheme}>
              {theme === 'dark' ? <FaSun /> : <FaMoon />}
            </button>
          </ThemeToggler>
        </ThemeTogglerAndNav>
      </HeaderContent>
    </HeaderWrapper>
  );
};

export default Header;
