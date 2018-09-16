import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';

import registerServiceWorker from './registerServiceWorker';
import store from './store';
import Application from './containers/Application';

const history = createBrowserHistory();

ReactDOM.render(
  <Application store={store} history={history} />,
  document.getElementById('root'),
);

registerServiceWorker();
