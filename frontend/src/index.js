// index.js or your main entry point
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { CartProvider } from '../src/Context/CartContext';

ReactDOM.render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
