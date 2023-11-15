const lint = require('./commands/lint.js');
const fix = require('./commands/fix.js');

module.exports = {
  async lint(inputText) {
    return await lint.run(inputText);
  },
  async fix(inputText) {
    return await fix.run(inputText);
  },
};
