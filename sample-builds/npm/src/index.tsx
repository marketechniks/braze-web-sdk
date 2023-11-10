import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import type { ReactElement } from 'react';

declare global {
  interface Window {
    Braze: any;
  }
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
