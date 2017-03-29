/**
 * Alias for `td.verify(.., { times: 1 })`
 * @param td The TestDouble instance
 */
module.exports = function makeVerifyOnce(td) {
  return function verifyOnce(x) {
    return td.verify(x, { times: 1 });
  };
};
