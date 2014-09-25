//Setup client with automatic tests on each response
var api = require('nodeunit-httpclient').create({
    port: 8080,
    path: '/api',   //Base URL for requests
    status: 200
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

