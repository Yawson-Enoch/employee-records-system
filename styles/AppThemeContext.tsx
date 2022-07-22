import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { GlobalStyles } from './global-styles';

interface IAppThemeContext {
  theme: string;
  themeHandler(): void;
}

interface IAppThemeContextProviderProps {
  children: ReactNode;
}

const AppThemeContext = createContext({} as IAppThemeContext);

const setUserPreferredTheme = (): string => {
  if (typeof window !== 'undefined') {
    return document.body.dataset.theme as string;
  }
  return 'dark';
};

export const AppThemeContextProvider = ({ children }: IAppThemeContextProviderProps) => {
  const [theme, setTheme] = useState<string>(() => setUserPreferredTheme());

  const themeHandler = (): void => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    document.body.dataset.theme = theme;
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  const value: IAppThemeContext = {
    theme,
    themeHandler,
  };

  return (
    <AppThemeContext.Provider value={value}>
      <GlobalStyles />
      {children}
    </AppThemeContext.Provider>
  );
};

export const useAppThemeContext = () => useContext(AppThemeContext);
