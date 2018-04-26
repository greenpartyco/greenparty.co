module.exports = function(grunt) {

	// 1. All configuration goes here 
	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		concat: {
			dist: {
				src: [
					'web/themes/custom/candidate/js/src/*.js', // All JS in the libs folder
				],
				dest: 'web/themes/custom/candidate/js/build/script.js',
			}
		},

		uglify: {
			build: {
				src: 'web/themes/custom/candidate/js/build/script.js',
				dest: 'web/themes/custom/candidate/js/build/script.min.js'
			}
		},

		sass: {
			dist: {
				options: {
					style: 'compressed'
				},
				files: {
					'web/themes/custom/candidate/css/style.css': 'web/themes/custom/candidate/scss/style.scss'
				}
			} 
		},

		autoprefixer: {
			dist: {
				files: {
					'web/themes/custom/candidate/css/style.css': 'web/themes/custom/candidate/css/style.css' 
				}
			}
		},

		watch: {
			scripts: {
				files: ['web/themes/custom/candidate/js/*.js', 'web/themes/custom/candidate/js/build/*.js'],
				tasks: ['concat', 'uglify'],
				options: {
					spawn: false,
					livereload: true,
				},
			},

			css: {
				files: ['web/themes/custom/candidate/scss/*.scss'],
				tasks: ['sass', 'autoprefixer'],
				options: {
					spawn: false,
					livereload: true,
				}
			} 
		},

	});

	// 3. Where we tell Grunt we plan to use this plug-in.
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-devtools');

	// 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
	grunt.registerTask('default', ['concat', 'uglify', 'sass']);

	grunt.registerTask('dev', ['watch']);

};