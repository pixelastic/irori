const lint = require('./commands/lint');
const fix = require('./commands/fix');

module.exports = {
  async lint(inputText) {
    return await lint.run(inputText);
  },
  async fix(inputText) {
    return await fix.run(inputText);
  },
};
