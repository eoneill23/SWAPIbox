import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './reset.css';
import './index.css';
import App from './App/App.js';
import * as serviceWorker from './serviceWorker';

const router = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

ReactDOM.render(router, document.getElementById('root'));

serviceWorker.unregister();
