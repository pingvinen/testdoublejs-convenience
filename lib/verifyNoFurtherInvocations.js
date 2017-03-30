const _ = require('lodash');

/**
 * Alias for calling `td.verify(object.method, { ignoreExtraArgs: true, times: 0 })`
 * on all methods
 * @param td The TestDouble instance
 */
module.exports = function makeVerifyNoFurtherInvocations(td) {
  return function verifyNoFurtherInvocations(mock) {

    _.functions(mock).forEach((key) => {
      td.verify(mock[key](), { ignoreExtraArgs: true, times: 0 });
    });
  };
};
