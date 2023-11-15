const helper = require('./helper.js');

module.exports = {
  async run(inputText) {
    const kernel = helper.getKernel();
    const options = helper.getOptions();

    const result = await kernel.fixText(inputText, options);
    return result.output;
  },
};
