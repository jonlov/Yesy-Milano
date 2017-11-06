/**
 * Copy files and folders.
 *
 * ---------------------------------------------------------------
 *
 * # dev task config
 * Copies all directories and files, exept coffescript and less fiels, from the sails
 * assets folder into the docs directory.
 *
 * # build task config
 * Copies all directories nd files from the docs directory into a www directory.
 *
 * For usage docs see:
 * 		https://github.com/gruntjs/grunt-contrib-copy
 */
module.exports = function(grunt) {

	grunt.config.set('copy', {
		dev: {
			files: [{
				expand: true,
				cwd: './assets',
				src: ['**/*.!(coffee|less)'],
				dest: 'docs'
			}]
		},
		prod: {
			files: [{
				expand: true,
				cwd: './assets',
				src: require('../pipeline').assetsFilesToCopy,
				dest: 'docs'
			}]
		},
		build: {
			files: [{
				expand: true,
				cwd: 'docs',
				src: ['**/*'],
				dest: 'www'
			}]
		}
	});

	grunt.loadNpmTasks('grunt-contrib-copy');
};
