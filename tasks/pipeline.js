/**
 * grunt/pipeline.js
 *
 * The order in which your css, javascript, and template files should be
 * compiled and linked from your views and static HTML files.
 *
 * (Note that you can take advantage of Grunt-style wildcard/glob/splat expressions
 * for matching multiple files.)
 */

var temporalFolder = 'docs';

module.exports.temporalFolder = temporalFolder;

// CSS files to inject in order
//
// (if you're using LESS with the built-in default config, you'll want
//  to change `assets/styles/importer.less` instead.)
var cssFiles = {
    inject: [
        'bower_components/font-awesome/css/font-awesome.min.css',
        'bower_components/simple-line-icons/css/simple-line-icons.css'
    ],
    concat: [
        'bower_components/bootstrap/dist/css/bootstrap.css',
        'bower_components/fullpage.js/dist/jquery.fullpage.min.css',
        'bower_components/animate.css/animate.css',
        'bower_components/angular-bootstrap-lightbox/dist/angular-bootstrap-lightbox.css',
        'bower_components/textangular/dist/textAngular.css',

        'css/font.css',
        'css/app.css'
    ]
};

// Client-side javascript files to inject in order
// (uses Grunt-style wildcard/glob/splat expressions)
var jsFiles = {
    inject: [
        'js/jquery.min.js', //  --------------- > > > renewMe.js NEEDS JQUERY
        'js/renewMe.js'
    ],
    concat: [
        // 'bower_components/jquery/dist/jquery.min.js',
        // jQuery
        'bower_components/jquery-slimscroll/jquery.slimscroll.min.js',
        'bower_components/fullpage.js/dist/jquery.fullpage.js',

        // Angular
        'bower_components/angular/angular.min.js',

        'bower_components/angular-animate/angular-animate.min.js',
        'bower_components/angular-cookies/angular-cookies.min.js',
        'bower_components/angular-sanitize/angular-sanitize.min.js',
        'bower_components/angular-touch/angular-touch.min.js',
        'bower_components/angular-fullpage.js/angular-fullpage.min.js',

        'bower_components/angular-ui-router/release/angular-ui-router.min.js',
        'bower_components/ngstorage/ngStorage.js',

        'bower_components/angular-ui-utils/ui-utils.min.js',

        // bootstrap
        'bower_components/angular-bootstrap/ui-bootstrap-tpls.js',

        'bower_components/ng-videosharing-embed/build/ng-videosharing-embed.min.js',
        'bower_components_personal/angular-bootstrap-lightbox/dist/angular-bootstrap-lightbox.js',

        // lazyload
        'bower_components/oclazyload/dist/ocLazyLoad.min.js',

        // App
        'js/app.js',
        'js/config.js',
        'js/config.lazyload.js',
        'js/config.router.js',
        'js/main.js',
        'js/services/ui-load.js',
        'js/factory/ngSilent.js',
        'js/directives/ui-jq.js',
        'js/directives/ui-toggleclass.js',
        'js/controllers/bootstrap.js',
        'js/app/music/ctrl.js',
        // Lazy loading

        // Dependencies like jQuery, or Angular are brought in here
        // 'js/dependencies/**/*.js',

        // All of the rest of your client-side js files
        // will be injected here in no particular order.
        // 'js/**/*.js'
    ]
};


// Client-side HTML templates are injected using the sources below
// The ordering of these templates shouldn't matter.
// (uses Grunt-style wildcard/glob/splat expressions)
//
// By default, Sails uses JST templates and precompiles them into
// functions for you.  If you want to use jade, handlebars, dust, etc.,
// with the linker, no problem-- you'll just want to make sure the precompiled
// templates get spit out to the same file.  Be sure and check out `tasks/README.md`
// for information on customizing and installing new tasks.
var templateFilesToInject = [
    'assets/*.html',
    'assets/views/**/*.html'
];

// Prefix relative paths to source files so they point to the proper locations
// (i.e. where the other Grunt tasks spit them out, or in some cases, where
// they reside in the first place)

//
// CSS FILES
//
module.exports.cssFilesToInject = cssFiles.inject.map(function(path) {
    return temporalFolder + '/' + path;
});

module.exports.cssFilesToConcat = cssFiles.concat.map(function(path) {
    return temporalFolder + '/' + path;
});

module.exports.cssFilesToConcatProd = cssFiles.concat.map(function(path) {
    return 'assets/' + path;
});


//
// JS FILES
//
module.exports.jsFilesToInject = jsFiles.inject.map(function(path) {
    return temporalFolder + '/' + path;
});

module.exports.jsFilesToConcat = jsFiles.concat.map(function(path) {
    return temporalFolder + '/' + path;
});

module.exports.jsFilesToConcatProd = jsFiles.concat.map(function(path) {
    return 'assets/' + path;
});

//
// COPY FILES
//
var assetsFilesToCopy = ['**/*.!(coffee|less)', '**/.*'];
jsFiles.concat.map(function(path) {
    var pathName = path.split('/');

    if(pathName[0] == 'bower_components')
        pathName = pathName[0]+'/'+pathName[1]+'/**/*';
    else
        pathName = path;

    console.log(pathName)

    assetsFilesToCopy.push('!' + pathName);
});
cssFiles.concat.map(function(path) {
    var pathName = path.split('/');
    if(pathName[0] == 'bower_components')
        pathName = pathName[0]+'/'+pathName[1]+'/**/*';
    else
        pathName = path;

    assetsFilesToCopy.push('!' + path);
});
// assetsFilesToCopy.push('!bower_components/**/*');

module.exports.assetsFilesToCopy = assetsFilesToCopy;

module.exports.stripBanners = true;
var renewDomain = 'https://jonlov.github.io';
module.exports.renewDomain = renewDomain;

module.exports.banner = '/*! PLEASE DO NOT TOUCH THIS FILE YOU CAN PERMANTLY DAMAGE YOUR APPLICATION, CONTACT THE RENEW TEAM TO MODIFY\n' +
    ' * <%= grunt.template.today("yyyy") %> - Jonathan Lovera (' + renewDomain + ')\n' +
    ' * <%= pkg.name %> v<%= pkg.version %> */';

//
// TEMPLATE FILES
//
module.exports.templateFilesToInject = templateFilesToInject.map(function(path) {
    return 'assets/' + path;
});
