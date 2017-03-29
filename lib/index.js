/* eslint-disable global-require */
/* eslint-disable no-param-reassign */

module.exports = function extendTestdouble(td) {
  /**
   * Alias for `td.matchers.anything()`
   * @type {td.matchers.anything}
   */
  td.any = require('./any')(td);

  /**
   * Alias for `td.verify(.., { times: 1 })`
   */
  td.verifyOnce = require('./verifyOnce')(td);
};
