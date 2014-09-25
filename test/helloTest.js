exports.testHelloWorld = function(test) {
    test.expect(1);
    httputil(app.cgi(), function(server, client) {
        client.fetch('GET', '/', {}, function (resp) {
            test.equals('Hello World'), resp.body);
            test.done();
        });
    });
}