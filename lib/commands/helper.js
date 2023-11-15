const { TextlintKernel } = require('@textlint/kernel');
const plugins = require('../configs/plugins.js');
const rules = require('../configs/rules.js');

module.exports = {
  getKernel() {
    if (!this.__kernel) {
      this.__kernel = new TextlintKernel();
    }
    return this.__kernel;
  },
  getOptions() {
    return {
      filePath: '/path/to/file.md',
      ext: '.md',
      plugins,
      rules,
    };
  },
  __kernel: null,
};
