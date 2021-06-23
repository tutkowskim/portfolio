import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import './index.css';
import App from './App';

const history = createBrowserHistory();

history.listen((location) => {
  window.ga('set', 'page', location.pathname + location.search);
  window.ga('send', 'pageview');
});

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter history={history} >
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
