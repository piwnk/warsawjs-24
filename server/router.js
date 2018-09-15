const { Router } = require('express');
const fetch = require('isomorphic-fetch');

const { NBP_API_URL } = require('./consts');
const { processErrors, parseJson } = require('./utils');
const logic = require('./logic');

const router = new Router();

router.get('/rates', (req, res) => {
  fetch(NBP_API_URL, { method: 'GET' })
    .then(processErrors)
    .then(parseJson)
    .then(data => {
      logic.setNbpRates(data);
      res.json(logic.rates);
    })
    .catch(() => {
      res.sendStatus(500);
    });
});

router.post('/exchange', (req, res) => {
  global.console.warn(req.body);
  const result = logic.operation(req.body);
  res.json(result);
});

router.get('/stats', (req, res) => {
  res.json(logic.statistics);
});

router.delete('/stats', (req, res) => {
  logic.resetStatistics();
  res.json(logic.statistics).end();
});

router.get('/settings', (req, res) => {
  res.json(logic.settings);
});

router.put('/settings', (req, res) => {
  global.console.warn(req.body);
  res.json({
    status: 'ok',
  });
});

module.exports = router;
