const expect = require('unexpected');
const td = require('testdouble');
require('../../lib')(td);

describe('td.verifyNever', () => {

  /** **************************************************************************
   */
  it('works as expected when the call was not made', () => {
    const fn = td.function();
    td.when(fn(td.matchers.anything())).thenReturn('yay');

    fn('something else');

    td.verifyNever(fn('something'));
  });


  /** **************************************************************************
   */
  it('throws as normal when call was made', () => {
    const fn = td.function();
    td.when(fn(td.matchers.anything())).thenReturn('yay');

    fn('same thing');

    try {
      td.verifyNever(fn('same thing'));
    } catch (err) {
      expect(err.message, 'to begin with', 'Unsatisfied verification on test double.\n\n');
    }
  });
});
