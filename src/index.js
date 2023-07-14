import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { PrivadoApp } from './PrivadoApp';
import { BrowserRouter } from 'react-router-dom';
import 'animate.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
        <PrivadoApp />
      </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
