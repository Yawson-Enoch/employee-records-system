import { FaMoon, FaSun } from 'react-icons/fa';
import { useAppThemeContext } from '../../styles/AppThemeContext';
import { StyledThemeToggler } from './ThemeToggler.styles';

const ThemeToggler = () => {
  const { theme, themeHandler } = useAppThemeContext();

  return (
    <StyledThemeToggler>
      <button type='button' onClick={themeHandler}>
        {theme === 'dark' ? <FaSun /> : <FaMoon />}
      </button>
    </StyledThemeToggler>
  );
};

export default ThemeToggler;
