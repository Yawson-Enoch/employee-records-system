import styled from 'styled-components';

// use this interface to define theme: dark:DefaultTheme / white:DefaultTheme
declare module 'styled-components' {
  export interface DefaultTheme {
    bgColor: string;
    textColor: string;
    secondaryColor: string;
    tertiaryColor: string;
  }
}
