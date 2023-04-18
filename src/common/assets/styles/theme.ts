import { DefaultTheme } from 'styled-components';

export const lightTheme: DefaultTheme = {
  colors: {
    primary: '#ef9d10',
    secondary: '#3b4d61',
    tertiary: '#6b7b8c',
    body: '#EFF1E9',
  },
  fontSize: {
    xxl: '5rem',
    xl: '1.5rem',
    l: '1rem',
    m: '0.75rem',
    s: '0.68rem',
  },
  mq: {
    smartphone: '@media only screen and (max-width: 767px)',
    tablet: '@media only screen and (min-width: 768px) and (max-width: 1023px)',
    desktop: '@media only screen and (min-width: 1024px)',
  },
  family: {
    primary: '"Montserrat", sans-serif',
    secondary: '"Roboto Mono", monospace',
  },
};

export const darkTheme: DefaultTheme = {
  colors: {
    primary: '#285095',
    secondary: '#093A4B',
    tertiary: '#06D59F',
    body: '#293B4C',
  },
  fontSize: {
    xxl: '2.5rem',
    xl: '1.5rem',
    l: '1rem',
    m: '0.75rem',
    s: '0.68rem',
  },
  mq: {
    smartphone: '@media only screen and (max-width: 767px)',
    tablet: '@media only screen and (min-width: 768px) and (max-width: 1023px)',
    desktop: '@media only screen and (min-width: 1024px)',
  },
  family: {
    primary: '"Montserrat", sans-serif',
    secondary: '"Roboto Mono", monospace',
  },
};

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      tertiary: string;
      body: string;
    };
    fontSize: {
      xxl: string;
      xl: string;
      l: string;
      m: string;
      s: string;
    };
    mq: {
      smartphone: string;
      tablet: string;
      desktop: string;
    };
    family: {
      primary: string;
      secondary: string;
    };
  }
}
