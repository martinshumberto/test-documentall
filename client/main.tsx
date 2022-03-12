import React from 'react';
import ReactDOM from 'react-dom';
import App from '@/App';
import '@/assets/css/global.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { StoreProvider } from './contexts/store';

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider>
      <Router>
        <App />
      </Router>
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
