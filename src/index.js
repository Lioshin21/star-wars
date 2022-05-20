import React from 'react';
import ReactDOM from 'react-dom/client';

// Redux
import store from '@store/store'
import { Provider } from 'react-redux';

// Styles
import './styles/index.css';

// Components
import App from './containers/App';

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <Provider store={store}>
      <App />
    </Provider>
);