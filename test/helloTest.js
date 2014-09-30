//Setup client with automatic tests on each response
var api = require('nodeunit-httpclient').create({
    host: 'localhost', 
    port: 8080,
    path: '/',   //Base URL for requests
    status: 200,    //Test each response is OK (can override later)
    headers: {      //Test that each response must have these headers (can override later)
        'content-type': 'text/plain'
    }

});

//Automatic tests on response object
exports.test1 = function(test) {
    test.expect(1);
    api.get(test, '/', {
        status: 200,
        headers: { 'content-type': 'text/plain' },
        body: 'Hello Fail World\n'
   })
   test.done();
};


