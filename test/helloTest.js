var http = require('http');

exports.test1 = function (test) {
  test.expect(1);
  http.get({hostname: "localhost:8080", path: "/"}, function (res) {
    test.equal(res.statusCode, 200, 'got 200');
    test.done();
  }).on('error', function() {
    // Comment line below out to repro the "Undone tests" error
    test.done();
  });
};