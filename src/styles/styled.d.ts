import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secundary: string;

      background: string;
      backgroundPopup: string;
      text: string;
      textSecundary: string;
      textTertiary: string;
      notifications: string;
      // eslint-disable-next-line @typescript-eslint/ban-types
      [key: string]: string | object;
    };

    // eslint-disable-next-line @typescript-eslint/ban-types
    [key: string]: string | object;
  }
}
