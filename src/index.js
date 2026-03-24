import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.css';
import AppRoutes from './App';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </RecoilRoot>
  </React.StrictMode>
);
