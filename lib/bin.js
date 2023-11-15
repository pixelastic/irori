const minimist = require('minimist');
const { consoleError, exit, isFile, read } = require('firost');
const _ = require('golgoth/lodash');
const irori = require('./main.js');
const { text: getStreamAsText } = require('node:stream/consumers');

module.exports = {
  /**
   * Run irori subcommand
   * @param {Array} rawArgs CLI args
   **/
  async run(rawArgs) {
    const args = minimist(rawArgs, {
      boolean: true,
    });

    // What command to run?
    const commandName = this.getCommandName(args);
    if (!this.allowedCommand(commandName)) {
      this.__consoleError(`Unknown command ${commandName}`);
      this.__exit(1);
      return;
    }

    // On what text?
    const inputText = await this.getInputText(args);
    if (!inputText) {
      this.__consoleError('No input passed');
      this.__exit(1);
      return;
    }

    // Run and output it
    try {
      const output = await this[commandName](inputText);
      console.info(output);
      this.__exit(0);
    } catch (err) {
      this.__consoleError(err.message);
      this.__exit(1);
    }
  },
  /**
   * Get the command name from the args
   * @param {Array} args CLI args
   * @returns {string} Command name
   **/
  getCommandName(args) {
    return args._[0];
  },
  /**
   * Get the input text
   * @param {Array} args CLI args
   * @returns {string} Input text
   **/
  async getInputText(args) {
    // From stdin
    if (!process.stdin.isTTY) {
      return await getStreamAsText(process.stdin);
    }

    const firstArgument = args._[1];
    // No argument
    if (!firstArgument) {
      return null;
    }
    // Argument is a filepath
    if (await isFile(firstArgument)) {
      return await read(firstArgument);
    }
    // Argument is text
    return firstArgument;
  },
  /**
   * Lint the text and output errors as JSON
   * @param {string} inputText Text to lint
   * @returns {string} JSON representation of errors
   **/
  async lint(inputText) {
    const result = await irori.lint(inputText);
    return JSON.stringify(result);
  },
  /**
   * Return fixed version of text
   * @param {string} inputText Text to lint
   **/
  async fix(inputText) {
    return await irori.fix(inputText);
  },
  /**
   * List of allowed commands to run
   * @param commandName
   * @returns {Array} List of allowed commands to run
   **/
  allowedCommand(commandName) {
    // Check if commandName is in array
    return _.includes(['lint', 'fix'], commandName);
  },
  __consoleError: consoleError,
  __exit: exit,
  __require: require,
};
