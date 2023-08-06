import { ThemeProvider } from 'styled-components';
import { theme } from './theme.js';

interface MyThemeProviderProps {
  children: React.ReactNode;
}

export const MyThemeProvider = ({ children }: MyThemeProviderProps) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
