const NBP_API_URL = `http://api.nbp.pl/api/exchangerates/tables/C/?format=json`;

const OPERATION_TYPE = {
  BUY: 'buy',
  SELL: 'sell',
  EXCHANGE: 'exchange',
};

module.exports = {
  OPERATION_TYPE,
  NBP_API_URL,
};
