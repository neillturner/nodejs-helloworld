module.exports = function(grunt) {

 //grunt.registerTask('start', function() {
 //   grunt.util.spawn({
 //     cmd: 'node',
 //     args: ['lib/app.js']
 //   });
 // });

 // grunt.registerTask('default', 'start');
  
     // Project configuration.                                                                                                                                                                
    grunt.initConfig({
          bgShell: {
	          _defaults: {
	               bg: true
              },
              runNode: {
                 cmd: 'node lib/app.js',
              }
              endNode: {
                 cmd: 'kill $(ps aux | grep \'[n]ode lib/app.js\' | awk \'{print $2}\')',
              }           

          },    
 //         shell: {
 //             server: {
 //                 command: 'node lib/app.js',
 //                   options: {
 //                     async: true,
 //                     execOptions: { detached: false },
 //                   }
 //             }
 //         },      
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
          },
    //      passfail: {
    //         options: {
   //             force: true,
   //          },
  //          all: {
   //            success: function() {
   //               console.log("Cool :)")
   //            },
   //            fail: function() {
  //                console.log("Lame :'(")
   //            }
    //         }
   //       },          
          exit: {
            normal: {
            } 
          }
    });

    // Load nodeunit task 
    grunt.loadNpmTasks('grunt-bg-shell');
    grunt.loadNpmTasks('grunt-wait');
    grunt.loadNpmTasks('grunt-contrib-nodeunit');
   // grunt.loadNpmTasks('grunt-passfail');
    grunt.loadNpmTasks('grunt-exit');

};

