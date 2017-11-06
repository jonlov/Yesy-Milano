module.exports = function (grunt) {
	grunt.registerTask('default', [
		'compileAssets',
		'linkAssets',
		'replace:dev',
		// 'express',
        'php',
        'watch'
	]);
};
