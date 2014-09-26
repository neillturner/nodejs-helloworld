module.exports = function(grunt) {

 grunt.registerTask('start', function() {
    grunt.util.spawn({
      cmd: 'node',
      args: ['lib/app.js']
 //     opts: {stdio: 'inherit'}
    });
  });

  grunt.registerTask('default', 'start');

    // Project configuration.                                                                                                                                                                
    grunt.initConfig({
          nodeunit: {
            all: ['test/*Test.js']
        }
    });

    // Load nodeunit task  
    grunt.loadNpmTasks('grunt-contrib-nodeunit');

};

