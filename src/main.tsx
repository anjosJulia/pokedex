import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyles } from './styles/global-styles.js';
import { MyThemeProvider } from './styles/MyThemeProvider.js';
import { App } from './template/App/index.js';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MyThemeProvider>
      <App />
      <GlobalStyles />
    </MyThemeProvider>
  </React.StrictMode>
);
