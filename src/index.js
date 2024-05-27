import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App';
import { BrowserRouter } from 'react-router-dom';
import './index.less';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/building-Indusri">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
