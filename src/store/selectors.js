import _ from 'lodash';

export function getExchangeRates(state) {
  return _.get(state, 'rates.result.rates', []);
}

export function getCurrencies(state) {
  return _.get(state, 'rates.result.currencies', []);
}

export function getCurrencyOptions(state) {
  return getCurrencies(state).map(({ name, code }) => ({
    value: code,
    label: name,
  }));
}

export function getStatistics(state) {
  return state.statistics.result;
}

export function getSettings(state) {
  return state.settings.result;
}
