module.exports = function(grunt) {

 grunt.registerTask('start', function() {
    grunt.util.spawn({
      cmd: 'node',
      args: ['lib/app.js']
    });
  });

  grunt.registerTask('default', 'start');

    // Project configuration.                                                                                                                                                                
    grunt.initConfig({
          wait: {
            options: {
                delay: 300000
          },    
    
          nodeunit: {
            all: ['test/*Test.js']
        }
    });

    // Load nodeunit task  
    grunt.loadNpmTasks('grunt-wait');
    grunt.loadNpmTasks('grunt-contrib-nodeunit');

};

