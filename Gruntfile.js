module.exports = function(grunt) {

    // Project configuration.                                                                                                                                                                
    grunt.initConfig({
          bgShell: {
	          _defaults: {
	               bg: true
              },
              runNode: {
                 cmd: 'node lib/app.js',
              },
              endNode: {
                 cmd: 'kill $(ps aux | grep \'[n]ode lib/app.js\' | awk \'{print $2}\')',
                 bg: false
              }           

          },    
          wait: {
            options: {
                delay: 20000
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
            }
          },    
          nodeunit: {
            all: ['test/*Test.js']
          }
    });

    // Load nodeunit task 
    grunt.loadNpmTasks('grunt-bg-shell');
    grunt.loadNpmTasks('grunt-wait');
    grunt.loadNpmTasks('grunt-contrib-nodeunit');
};

