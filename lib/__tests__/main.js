const current = require('../main.js');

describe('irori', () => {
  describe('lint', () => {
    it.each([['This is usefull.', 'This is useful.']])(
      '%s => %s',
      async (input, expected) => {
        const actual = await current.fix(input);
        expect(actual).toEqual(expected);
      }
    );
  });
});
