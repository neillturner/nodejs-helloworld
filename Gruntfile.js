module.exports = function(grunt) {

 grunt.registerTask('start', function() {
    grunt.util.spawn({
      cmd: 'node',
      args: ['lib/app.js']
    });
//    grunt.task.run('watch');
  });

  grunt.registerTask('default', 'start');

    // Project configuration.                                                                                                                                                                
    grunt.initConfig({
//          nodemon: {
//             dev: {
//              script: 'lib/app.js'
//             }
//          }       
    
          nodeunit: {
            all: ['test/*Test.js']
        }
    });
    
 

    // Load nodeunit task  
    
//    grunt.loadNpmTasks('grunt-nodemon');
    grunt.loadNpmTasks('grunt-contrib-nodeunit');

};

