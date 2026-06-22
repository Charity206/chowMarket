// import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
import CartProvider from './context.jsx/CartProvider.jsx';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </CartProvider>


  </React.StrictMode>
,
)
