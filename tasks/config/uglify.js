/**
 * Minify files with UglifyJS.
 *
 * ---------------------------------------------------------------
 *
 * Minifies client-side javascript `assets`.
 *
 * For usage docs see:
 * 		https://github.com/gruntjs/grunt-contrib-uglify
 *
 */
module.exports = function(grunt) {

	grunt.config.set('uglify', {
		options: {
            mangle: false
        },
		dist: {
            expand: true,
            src: ['js/**/*.js','bower_components_personal/**/*.js'],
            dest: 'docs',
            cwd: 'docs'
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
};
