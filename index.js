var fs = require('fs');

module.exports = function (testResults) {
  var testResultsString = JSON.stringify(testResults);

  fs.writeFile('./test-results.json', testResultsString, function (err) {
    if (err) {
      console.error(err);
      return 1;
    }
  });

  return 0;
};
