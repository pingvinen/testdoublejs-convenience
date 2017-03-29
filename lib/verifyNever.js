/**
 * Alias for `td.verify(.., { times: 0 })`
 * @param td The TestDouble instance
 */
module.exports = function makeVerifyNever(td) {
  return function verifyNever(x) {
    return td.verify(x, { times: 0 });
  };
};
