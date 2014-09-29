module.exports = function(grunt) {

 grunt.registerTask('start', function() {
    grunt.util.spawn({
      cmd: 'node',
      args: ['lib/app.js']
    });
  });

  grunt.registerTask('default', 'start');
  
  grunt.initConfig({
      wait: {
          options: {
              delay: 500
          },
          pause: {      
              options: {
                  before : function(options) {
                      console.log('pausing %dms', options.delay);
                  },
                  after : function() {
                      console.log('pause end');
                  }
              }
          },
          random: {      
              options: {
                  delay: 10,
                  after : function() {
                      console.log('gamble');
                      return Math.random() < 0.05 ? false : true;
                  }
              }
          }
      }
})

    // Project configuration.                                                                                                                                                                
    //grunt.initConfig({
    //      wait: {
    //        options: {
    //            delay: 60000
    //        },
    //        pause: {      
	//	        options: {
	//	           before : function(options) {
	//	                 console.log('pausing %dms', options.delay);
	//	           },
	//	           after : function() {
	//	                 console.log('pause end');
	//	           }
	//	       }
    //        }
    //      },    
    //      nodeunit: {
    //        all: ['test/*Test.js']
    //      }
    //});

    // Load nodeunit task  
    grunt.loadNpmTasks('grunt-wait');
    //grunt.loadNpmTasks('grunt-contrib-nodeunit');

};

