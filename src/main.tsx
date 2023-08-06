import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/index.js';
import { GlobalStyles } from './styles/global-styles.js';
import { MyThemeProvider } from './styles/MyThemeProvider.js';
import App from './template/App/index.js';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MyThemeProvider>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={App} />
        </Routes>
      </BrowserRouter>
      <GlobalStyles />
    </MyThemeProvider>
  </React.StrictMode>
);
