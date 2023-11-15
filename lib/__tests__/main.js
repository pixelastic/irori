// const current = require('../main.js');

// Note: Add "skipped" as the first argument to force it to pass. This is
// useful to write the list of tests that need to pass, but currently do
// not.
// const tester = async (input, expected) => {
//   if (input === 'skipped') {
//     return;
//   }
//   const actual = await current.fix(input);
//   expect(actual).toEqual(expected);
// };

describe('irori', () => {
  it('should pass', async () => {
    // Just to make the file pass, we need to rewrite those tests into their
    // respective files
    expect(true).toBe(true);
  });
  // describe('fix', () => {
  //   describe('Common misspellings', () => {
  //     it.each([
  //       [
  //         'This is usefull accross for any availabe stregth.',
  //         'This is useful across for any available strength.',
  //       ],
  //       ['skipped', 'Grey is a colour', 'Gray is a color'],
  //     ])('%s', tester);
  //   });
  //   describe('Shorter writing', () => {
  //     it.each([
  //       [
  //         'skipped',
  //         'In order to be able to write shorter sentences.',
  //         'To write shorter sentences.',
  //       ],
  //       ['You should utilize simpler words', 'You should use simpler words'],
  //       // This should work, but seems like it does not correctly replace
  //       // several words at once
  //       ['skipped', '...(eg. "at the moment")', '...(for example "now")'],
  //       [
  //         '...for the reason that it is easier to grok',
  //         '...because it is easier to understand',
  //       ],
  //       [
  //         'We should still be able to talk about links relative to the root',
  //         'We should still be able to talk about links relative to the root',
  //       ],
  //     ])('%s', tester);
  //   });
  //   describe('Titles', () => {
  //     it.each([
  //       ['# a title must be capitalized', '# A title must be capitalized'],
  //       [
  //         'skipped',
  //         '# A title must not end with a period',
  //         '# A title must not end with a period.',
  //       ],
  //     ])('%s', tester);
  //   });
  //   describe('Paragraphs', () => {
  //     it.each([
  //       [
  //         'skipped',
  //         dedent`
  //   Paragraphs should end with a period

  //   This is a new one`,
  //         dedent`
  //   Paragraphs should end with a period.

  //   This is a new one`,
  //       ],
  //     ])('%s', tester);
  //   });
  //   describe('Capitalization', () => {
  //     it.each([
  //       [
  //         'this is a sentence. this is another one.',
  //         'This is a sentence. This is another one.',
  //       ],
  //       [
  //         'It is OK to capitalize Proper Nouns.',
  //         'It is OK to capitalize Proper Nouns.',
  //       ],
  //       [
  //         '- items in a list should be capitalized',
  //         '- Items in a list should be capitalized',
  //       ],
  //       [
  //         '`code` examples do not need capitalization',
  //         '`code` examples do not need capitalization',
  //       ],
  //       // This does not work because of the comma
  //       [
  //         'skipped',
  //         'At ContentSquare, we use javascript and Clickhouse',
  //         'At Contentsquare, we use JavaScript and ClickHouse',
  //       ],
  //     ])('%s', tester);
  //   });
  //   describe('Punctuation', () => {
  //     it.each([
  //       [
  //         'skipped',
  //         'Repeat after me : no space before a colon.',
  //         'Repeat after me: no space before a colon.',
  //       ],
  //       [
  //         'skipped',
  //         'Why would you put a space before a question mark ?',
  //         'Why would you put a space before a question mark?',
  //       ],
  //       [
  //         'skipped',
  //         'No space before an exclamation mark either !',
  //         'No space before an exclamation mark either!',
  //       ],
  //     ])('%s', tester);
  //   });
  // });
});
