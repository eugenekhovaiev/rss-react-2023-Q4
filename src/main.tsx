import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App.tsx';
import ErrorBoundary from './entities/errorBoundary/ErrorBoundary.tsx';

import './app/scss/main.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
);
