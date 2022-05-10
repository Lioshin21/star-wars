import React from 'react';
import ReactDOM from 'react-dom/client';

// Styles
import './styles/index.css';

// Components
import App from './containers/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);