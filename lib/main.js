const { TextFixEngine } = require('textlint');
const { absolute } = require('firost');

module.exports = {
  async fix(text) {
    const configFile = absolute(`${__dirname}/configs/textlintrc.js`);
    // Note: Passing options.rules as an object gets merged with any user-defined
    // .textlintrc.js files. Passing options.configFile completely overwrites
    // user-defined configuration, so this is what we use here.
    const options = {
      configFile,
    };
    const engine = new TextFixEngine(options);
    const result = await engine.executeOnText(text, '.md');
    return result[0].output;

    // console.info(engine);
  },
};
