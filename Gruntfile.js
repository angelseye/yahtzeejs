// Gruntfile.js
module.exports = function(grunt){
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
		
		// Static Server Start
		connect: {
			server: {
				options: {
					port: 9001,
					livereload: true,
					keepalive: true
				}
			}
		},

		// Mocha
		mocha: {
			all: {
				src: ['tests/testrunner.html']
			},
			options: {
				run: true
			}
		}

  });


	// Load tasks
	grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.registerTask('default', ['connect']);

	grunt.loadNpmTasks('grunt-mocha');
	grunt.registerTask('test', ['mocha']);
};
