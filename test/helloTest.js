//Setup client with automatic tests on each response
var api = require('nodeunit-httpclient').create({
    port: 8080,
    path: '/api',   //Base URL for requests
    status: 200,    //Test each response is OK (can override later)
    headers: {      //Test that each response must have these headers (can override later)
        'content-type': 'text/plain'
    }

});

//Automatic tests on response object
exports.test1 = function(test) {
    api.get(test, '/', {
        status: 200,
        headers: { 'content-type': 'text/plain' },
        body: 'Hello World'
    })
};

