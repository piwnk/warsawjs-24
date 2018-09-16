import fetch from 'isomorphic-fetch';

const API_ROOT = 'http://localhost:4000/api';

function processErrors(response) {
  if (!response.ok) {
    throw new Error('Invalid response');
  }
  return response;
}

function parseJson(response) {
  return response.json();
}

const COMMON_HEADERS = {
  'Content-Type': 'application/json; charset=utf-8',
};

export function readExchangeRates() {
  const options = {
    method: 'GET',
    headers: COMMON_HEADERS,
  };
  return fetch(`${API_ROOT}/rates`, options)
    .then(processErrors)
    .then(parseJson);
}

export function exchange(params) {
  const options = {
    method: 'POST',
    headers: COMMON_HEADERS,
    body: JSON.stringify(params),
  };
  return fetch(`${API_ROOT}/exchange`, options)
    .then(processErrors)
    .then(parseJson);
}

export function readStatistics() {
  const options = {
    method: 'GET',
    headers: COMMON_HEADERS,
  };
  return fetch(`${API_ROOT}/stats`, options)
    .then(processErrors)
    .then(parseJson);
}

export function resetStatistics() {
  const options = {
    method: 'GET',
    headers: COMMON_HEADERS,
  };
  return fetch(`${API_ROOT}/stats`, options)
    .then(processErrors)
    .then(parseJson);
}

export function readSettings() {
  const options = {
    method: 'GET',
    headers: COMMON_HEADERS,
  };
  return fetch(`${API_ROOT}/settings`, options)
    .then(processErrors)
    .then(parseJson);
}

export function updateSettings(params) {
  const options = {
    method: 'POST',
    headers: COMMON_HEADERS,
    body: JSON.stringify(params),
  };
  return fetch(`${API_ROOT}/settings`, options)
    .then(processErrors)
    .then(parseJson);
}
