import React from 'react';
import ReactDOM from 'react-dom/client'; // استيراد ReactDOM من 'react-dom/client'

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); // استخدام createRoot هنا
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
