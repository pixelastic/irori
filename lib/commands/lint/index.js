const { TextlintKernel } = require('@textlint/kernel');

module.exports = {
  async run(inputText) {
    const kernel = new TextlintKernel();
    const options = {
      filePath: '/path/to/file.md',
      ext: '.md',
      plugins: [
        {
          pluginId: 'markdown',
          plugin: require('@textlint/textlint-plugin-markdown').default,
        },
      ],
      rules: [
        {
          ruleId: 'common-misspelling',
          rule: require('textlint-rule-common-misspellings').default,
        },
      ],
    };
    const result = await kernel.lintText(inputText, options);
    return result;
  },
};
