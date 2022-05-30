import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/index.css';
import App from './pages/home/App';
import { store } from './store/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
