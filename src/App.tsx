import React from 'react';
import { ThemeProvider } from 'styled-components';
import Routes from './routes';

import GlobalStyle from './styles/global';
import light from './styles/themes/light';

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={light}>
      <div className="App">
        <GlobalStyle />
        <Routes />
      </div>
    </ThemeProvider>
  );
};

export default App;
