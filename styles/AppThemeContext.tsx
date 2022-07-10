import { createContext, FC, useContext, useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global-styles';
import { dark, light } from './theme';

interface IAppThemeContext {
  theme: string;
  switchTheme(): void;
}

const AppThemeContext = createContext({} as IAppThemeContext);

const AppThemeProvider: FC = ({ children }) => {
  // const isServer = typeof window === 'undefined';
  // not needed if it is run in useEffect

  const [theme, setTheme] = useState<string>('light');
  const switchTheme = (): void => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  useEffect(() => {
    // if (!isServer) {
    const themeFromLocalStorage = localStorage.getItem('theme');
    if (themeFromLocalStorage) {
      setTheme(themeFromLocalStorage);
    } else {
      setTheme('light');
    }
    // }
  }, []);

  useEffect(() => {
    // if (!isServer) {
    localStorage.setItem('theme', theme);
    // }
  }, [theme]);

  const value: IAppThemeContext = {
    theme,
    switchTheme,
  };

  return (
    <AppThemeContext.Provider value={value}>
      <ThemeProvider theme={theme === 'light' ? light : dark}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </AppThemeContext.Provider>
  );
};

const useThemeContext = (): IAppThemeContext => useContext(AppThemeContext);

export { AppThemeProvider, useThemeContext };
