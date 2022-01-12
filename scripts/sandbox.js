const irori = require('../lib/');

(async () => {
  const fixedText = await irori.fix('This is usefull accross the baord');
  console.info(fixedText);
})();
