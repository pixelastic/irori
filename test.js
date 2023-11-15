const irori = require('./lib/main.js');

(async () => {
  const result = await irori.fix('I walk accross the pond');
  console.info(result);
})();
