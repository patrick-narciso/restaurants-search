import React from 'react';
import theme from './theme';
import { ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset'
import Home from './pages/Home';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Reset />
      <Home />
    </ThemeProvider>
  );
}

export default App;
