import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global-styles';
import { dark, light } from './theme';

interface IAppThemeContext {
  theme: string;
  switchTheme(): void;
}

interface Props {
  children?: ReactNode;
}

// const isServer = typeof window === 'undefined';

const AppThemeContext = createContext({} as IAppThemeContext);

// const setUserPreferredTheme = (): string => {
//   if (typeof window !== 'undefined') {
//     const themeFromLocalStorage = window.localStorage.getItem('theme');
//     const userBrowserThemePreference = window.matchMedia(
//       '(prefers-color-scheme: dark)'
//     ).matches
//       ? 'dark'
//       : 'light';
//     if (themeFromLocalStorage) {
//       return themeFromLocalStorage;
//     }
//     return userBrowserThemePreference;
//   }
//   return 'dark';
// };

export const AppThemeProvider = ({ children }: Props) => {
  // let userTheme = 'light';

  // if (!isServer) {
  //   const setInitialTheme = function getUserPreference() {
  //     const themeFromLocalStorage = window.localStorage.getItem('theme');
  //     if (themeFromLocalStorage) {
  //       return themeFromLocalStorage;
  //     }
  //     return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  //   };

  // const themeFromLocalStorage = window.localStorage.getItem('theme');
  // themeFromLocalStorage && setTheme(themeFromLocalStorage);
  //   userTheme = setInitialTheme();
  // }
  const [theme, setTheme] = useState<string>('light');
  const toggledTheme = theme === 'light' ? 'dark' : 'light';

  const switchTheme = (): void => {
    setTheme(toggledTheme);
  };

  useEffect(() => {
    const setInitialTheme = function getUserPreference() {
      const themeFromLocalStorage = window.localStorage.getItem('theme');
      if (themeFromLocalStorage) {
        return themeFromLocalStorage;
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    };

    //   // const themeFromLocalStorage = window.localStorage.getItem('theme');
    //   // themeFromLocalStorage && setTheme(themeFromLocalStorage);
    setTheme(setInitialTheme());
    //   console.log(theme);
  }, []);

  useEffect(() => {
    window.localStorage.setItem('theme', theme);
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

export const useThemeContext = () => useContext(AppThemeContext);
