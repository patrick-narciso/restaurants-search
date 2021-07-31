import React from 'react';
import theme from './theme';
import { ThemeProvider } from 'styled-components';
import Home from './pages/Home';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
