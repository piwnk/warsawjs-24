const { OPERATION_TYPE } = require('./consts');
const { titleCase } = require('./utils');

const DEFAULT_SETTINGS = {
  buyMargin: 10.0,
  sellMargin: 10.0,
  refreshInterval: 10,
};
const settings = { ...DEFAULT_SETTINGS };

const nbpRates = {};
const rates = {
  date: new Date(),
  currencies: [],
  rates: [],
};

function findRate(currencyCode) {
  return rates.rates.find(({ code }) => code === currencyCode);
}

function setNbpRates(newRates) {
  Object.assign(nbpRates, newRates[0]);

  rates.date = newRates[0].tradingDate;
  rates.rates = newRates[0].rates.map(({ currency, code, bid, ask }) => ({
    name: titleCase(currency),
    code,
    buy: bid,
    sell: ask,
  }));
  rates.currencies = newRates[0].rates.map(({ currency, code }) => ({
    code,
    name: titleCase(currency),
  }));
}

const DEFAULT_STATISTICS = {
  totalOperations: 0,
  totalSell: 0,
  totalBuy: 0,
}
const statistics = { ...DEFAULT_STATISTICS };

function resetStatistics() {
  Object.assign(statistics, DEFAULT_STATISTICS);
}

function buyOperation(currencyCode, plnAmount) {
  const rate = findRate(currencyCode);
  const resultAmount = (Number(plnAmount) / rate.sell).toFixed(2);
  statistics.totalBuy += Number(plnAmount).toFixed(2);
  statistics.totalOperations += 1;
  return {
    currency: currencyCode,
    amount: resultAmount,
  };
}

function sellOperation(currencyCode, currencyAmount) {
  const rate = findRate(currencyCode);
  const plnAmount = (Number(currencyAmount) * rate.buy).toFixed(2);
  statistics.totalSell += Number(plnAmount).toFixed(2);
  statistics.totalOperations += 1;
  return {
    currency: 'PLN',
    amount: plnAmount,
  };
}

function exchangeOperation(sellCurrencyCode, sellAmount, buyCurrencyCode) {
  const sellResult = sellOperation(sellCurrencyCode, sellAmount);
  const buyResult = buyOperation(buyCurrencyCode, sellResult.amount);
  return buyResult;
}

function operation({ operation, buyCurrency, sellCurrency, amount }) {
  switch (operation) {
    case OPERATION_TYPE.BUY:
      return buyOperation(buyCurrency, amount);
    case OPERATION_TYPE.SELL:
      return sellOperation(sellCurrency, amount);
    case OPERATION_TYPE.EXCHANGE:
      return exchangeOperation(sellCurrency, amount, buyCurrency);
    default:
      return {};
  }
}

module.exports = {
  rates,
  setNbpRates,
  operation,
  settings,
  statistics,
  resetStatistics,
};
