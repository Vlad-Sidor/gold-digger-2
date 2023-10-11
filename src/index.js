import React from 'react';
import ReactDOM from 'react-dom/client';
import '@assets/scss/home-page/hero.scss'
import '@assets/scss/home-page/contract.scss'
import '@assets/scss/home-page/advantages.scss'
import '@assets/scss/home-page/deposit.scss'
import '@assets/scss/home-page/mine.scss'
import '@assets/scss/play-page/play-page.scss'
import '@assets/scss/footer/footer.scss'
import './index.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename='/'>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
