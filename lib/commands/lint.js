const { absolute } = require('firost');
const {
  createLinter,
  loadTextlintrc,
  loadLinterFormatter,
} = require('textlint');

module.exports = {
  async run(args) {
    const filepath = absolute(args._[0]);

    // Init the linter.
    // TextLint expects some hoops, like giving the absolute path to the config,
    // and the path to the node_modules.
    // Path to config is easy, as it's relative to this file
    // Path to node_modules is harder as in dev we're in a monorepo environment,
    // so the node_modules is two levels higher, but in prod, I'm not sure where
    // it's going to be? Root of the project, or in a node_modules/irori folder?
    const configFilepath = absolute(`${__dirname}/../configs/textlintrc.js`);
    const node_modulesDir = absolute(`${__dirname}/../../node_modules`);
    const descriptor = await loadTextlintrc({
      configFilepath,
      node_modulesDir,
    });
    const linter = createLinter({ descriptor });
    const results = await linter.lintFiles([filepath]);
    const formatter = await loadLinterFormatter({ formatterName: 'json' });
    const output = formatter.format(results);
    console.log(output);
  },
};
