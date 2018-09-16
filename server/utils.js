function processErrors(response) {
  if (!response.ok) {
    throw new Error('Invalid response');
  }
  return response;
}

function parseJson(response) {
  return response.json();
}

function titleCase(str) {
  const result = str || '';
  return result[0].toUpperCase() + result.slice(1);
}

module.exports = {
  processErrors,
  parseJson,
  titleCase,
};
