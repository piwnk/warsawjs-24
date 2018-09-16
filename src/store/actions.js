import { createAction } from 'redux-actions';

import * as TYPES from './constants';
import * as api from './api';

const readExchangeRatesStart = createAction(TYPES.READ_EXCHANGE_RATES_START);
const readExchangeRatesEnd = createAction(TYPES.READ_EXCHANGE_RATES_END);

export function readExchangeRates() {
  return dispatch => {
    dispatch(readExchangeRatesStart());
    return api.readExchangeRates()
      .then(result => {
        dispatch(readExchangeRatesEnd(result));
        return Promise.resolve(result);
      })
      .catch(error => {
        dispatch(readExchangeRatesEnd(error));
        return Promise.reject(error);
      });
  };
}

const exchangeStart = createAction(TYPES.EXCHANGE_START);
const exchangeEnd = createAction(TYPES.EXCHANGE_END);

export function exchange(values) {
  return dispatch => {
    dispatch(exchangeStart());
    return api.exchange(values)
      .then(result => {
        dispatch(exchangeEnd(result));
        return Promise.resolve(result);
      })
      .catch(error => {
        dispatch(exchangeEnd(error));
        return Promise.reject(error);
      });
  };
}

const readStatisticsStart = createAction(TYPES.READ_STATISTICS_START);
const readStatisticsEnd = createAction(TYPES.READ_STATISTICS_END);

export function readStatistics() {
  return dispatch => {
    dispatch(readStatisticsStart());
    return api.readStatistics()
      .then(result => {
        dispatch(readStatisticsEnd(result));
        return Promise.resolve(result);
      })
      .catch(error => {
        dispatch(readStatisticsEnd(error));
        return Promise.reject(error);
      });
  };
}

const readSettingsStart = createAction(TYPES.READ_SETTINGS_START);
const readSettingsEnd = createAction(TYPES.READ_SETTINGS_END);

export function readSettings() {
  return dispatch => {
    dispatch(readSettingsStart());
    return api.readSettings()
      .then(result => {
        dispatch(readSettingsEnd(result));
        return Promise.resolve(result);
      })
      .catch(error => {
        dispatch(readSettingsEnd(error));
        return Promise.reject(error);
      });
  };
}

const updateSettingsStart = createAction(TYPES.UPDATE_SETTINGS_START);
const updateSettingsEnd = createAction(TYPES.UPDATE_SETTINGS_END);

export function updateSettings(values) {
  return dispatch => {
    dispatch(updateSettingsStart());
    return api.updateSettings(values)
      .then(result => {
        dispatch(updateSettingsEnd(result));
        return Promise.resolve(result);
      })
      .catch(error => {
        dispatch(updateSettingsEnd(error));
        return Promise.reject(error);
      });
  };
}
