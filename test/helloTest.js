//Setup client with automatic tests on each response
var api = require('nodeunit-httpclient').create({
    host: '192.168.33.41', 
    port: 8080,
    path: '/',   //Base URL for requests
    status: 200,    //Test each response is OK (can override later)
    headers: {      //Test that each response must have these headers (can override later)
        'content-type': 'text/plain'
    }

});

//Automatic tests on response object
//exports.test1 = function(test) {
//    api.get(test, '/', {
//        status: 200,
//        headers: { 'content-type': 'text/plain' },
//        body: 'Hello World'
//    })
//};

exports.test1 = function(test) {
    api.get(test, '/', function(res) {
        test.equal(res.body,'Hello World');
        test.done();
    });
};
