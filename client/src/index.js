import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import axios from 'axios'
import {Provider} from 'react-redux'
import {store} from './redux/store'
const root = ReactDOM.createRoot(document.getElementById('root'));
axios.defaults.withCredentials = true
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);


