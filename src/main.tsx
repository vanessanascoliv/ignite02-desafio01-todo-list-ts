import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyled } from '../global';
import { App } from './Components/App/index';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyled/>
    <App />
  </React.StrictMode>
)
