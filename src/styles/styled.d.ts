import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secundary: string;

      background: string;
      text: string;
      textSecundary: string;
      textTertiary: string;
      // eslint-disable-next-line @typescript-eslint/ban-types
      [key: string]: string | object;
    };

    // eslint-disable-next-line @typescript-eslint/ban-types
    [key: string]: string | object;
  }
}
