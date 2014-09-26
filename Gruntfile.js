module.exports = function(grunt) {

    // Project configuration.                                                                                                                                                                
    grunt.initConfig({
          nodemon: {
             dev: {
              script: 'lib/app.js'
             }
          }       
    
 //         nodeunit: {
 //           all: ['test/*Test.js']
 //       }
    });
    
 

    // Load nodeunit task  
    
    grunt.loadNpmTasks('grunt-nodemon');
//    grunt.loadNpmTasks('grunt-contrib-nodeunit');

};

