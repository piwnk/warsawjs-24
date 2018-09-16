import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';

import * as urls from '../urls';
import Layout from '../components/Layout';
import About from './About';
import ExchangeRates from './ExchangeRates';
import Exchange from './Exchange';
import Statistics from './Statistics';
import Settings from './Settings';

class App extends PureComponent {
  static propTypes = {
    store: PropTypes.shape({}).isRequired,
    history: PropTypes.shape({}).isRequired,
  };

  render() {
    const { store, history } = this.props;
    return (
      <Provider store={store}>
        <Router history={history}>
          <CssBaseline>
            <Layout>
              <Route path={urls.EXCHANGE_RATES} component={ExchangeRates} />
              <Route path={urls.EXCHANGE} component={Exchange} />
              <Route path={urls.REPORTING} component={Statistics} />
              <Route path={urls.SETUP} component={Settings} />
              <Route path={urls.ABOUT} component={About} />
            </Layout>
          </CssBaseline>
        </Router>
      </Provider>
    );
  }
}

export default App;
