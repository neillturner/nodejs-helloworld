var nodeunit = require('../lib/nodeunit/lib/nodeunit.js')
var http = require('http');
var logfile = require('../src/logfile.js');

var testmsg = 'Hello World';


exports.testLogentry = function(test) {
    test.expect(1); // make sure all the async expectations are fulfilled

    var options = {
        host: 'localhost',
        port: 8080,
        path: '/',
        method: 'POST',
        record_message: function(msg) {
            console.log('received ' + msg + '\n');
            test.equal(msg, testmsg);

            logger.stop();
            setTimeout(test.done, 2000);
        }
    };

    var logger = logfile.loggerFactory(options);

    logfile.write(testmsg, options);
};



//Setup client with automatic tests on each response
//var api = require('nodeunit-httpclient').create({
//    host: 'localhost', 
//    port: 8080,
//    path: '/',   //Base URL for requests
//    status: 200,    //Test each response is OK (can override later)
//    headers: {      //Test that each response must have these headers (can override later)
//        'content-type': 'text/plain'
//    }

//});

//Automatic tests on response object
//exports.test1 = function(test) {
//    api.get(test, '/', {
//        status: 200,
//        headers: { 'content-type': 'text/plain' },
//        body: 'Hello World'
//    })
//};

//exports.test1 = function(test) {
//    api.get(test, '/', function(res) {
//        test.equal(res.body,'Hello World');
//        test.done();
//    });
//};
