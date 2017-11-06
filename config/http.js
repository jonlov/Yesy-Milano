/**
 * HTTP Server Settings
 * (sails.config.http)
 *
 * Configuration for the underlying HTTP server in Sails.
 * Only applies to HTTP requests (not WebSockets)
 *
 * For more information on configuration, check out:
 * http://sailsjs.org/#/documentation/reference/sails.config/sails.config.http.html
 */

// The absolute first piece of middle-ware we would register, to block requests
// before we spend any time on them.
module.exports.http = {
    middleware: {
        compress: require('compression')(),

        p3p: require('lusca').p3p('ABCDEF'),
        xframe: require('lusca').xframe('SAMEORIGIN'),
        strictTransportSecurity: require('lusca').hsts({
            maxAge: 31536000
        }),
        order: [
            'strictTransportSecurity',
            'xframe',
            'startRequestTimer',
            'p3p',
            'cookieParser',
            'session',
            'bodyParser',
            'handleBodyParserError',
            'compress',
            'methodOverride',
            'poweredBy',
            '$custom',
            'router',
            'pathPolicy',
            'www',
            'favicon',
            '404',
            '500'
        ],

        pathPolicy: function(req, res, next) {

            var url = req.path,
                urlParam = url.split('/'),
                filePath = url.replace(urlParam[urlParam.length - 1].toString(), ''),
                firstParam = urlParam[1],
                lastParam = urlParam[urlParam.length - 1],

                noPolicy = {
                    folders: [
                        'bower_components',
                        'bower_components_personal',
                        'js',
                        'css',
                        'img',
                        'images',
                        'fonts',
                        'mp3',
                        'l10n',
                        'favicon.ico'
                    ],
                    subFolders: [
                        '/js/controllers/',
                        '/tpl/blocks/',
                        '/tpl/default/',
                        '/tpl/default/carousel/'
                    ],
                    urls: [
                        // <!-- FONTS -->
                        '/bower_components/simple-line-icons/fonts/Simple-Line-Icons.woff',
                        '/bower_components/simple-line-icons/fonts/Simple-Line-Icons.ttf',

                        '/bower_components/font-awesome/fonts/fontawesome-webfont.woff',
                        '/bower_components/font-awesome/fonts/fontawesome-webfont.ttf',

                        // <!-- CSS -->
                        '/bower_components/bootstrap/dist/css/bootstrap.css',
                        '/bower_components/animate.css/animate.css',
                        '/bower_components/font-awesome/css/font-awesome.min.css',
                        '/bower_components/simple-line-icons/css/simple-line-icons.css',
                        '/css/font.css',
                        '/css/app.css',

                        // <!-- jQuery -->
                        '/bower_components/jquery/dist/jquery.min.js',
                        '/bower_components/jquery-slimscroll/jquery-slimscroll.min.js',


                        // <!-- Angular -->
                        '/bower_components/angular/angular.js',

                        '/bower_components/angular-animate/angular-animate.js',
                        '/bower_components/angular-cookies/angular-cookies.js',
                        '/bower_components/angular-resource/angular-resource.js',
                        '/bower_components/angular-sanitize/angular-sanitize.js',
                        '/bower_components/angular-touch/angular-touch.js',
                        '/bower_components/fullpage.js/dist/jquery.fullpage.min.js',
                        '/bower_components/fullpage.js/dist/jquery.fullpage.min.css',
                        '/bower_components/angular-fullpage.js/angular-fullpage.min.js',

                        '/bower_components/angular-ui-router/release/angular-ui-router.js',
                        '/bower_components/ngstorage/ngStorage.js',
                        '/bower_components/angular-ui-utils/ui-utils.js',

                        // <!-- bootstrap -->
                        '/bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
                        // <!-- lazyload -->
                        '/bower_components/oclazyload/dist/ocLazyLoad.js',
                        // <!-- translate -->
                        '/bower_components/angular-translate/angular-translate.js',
                        '/bower_components/angular-translate-loader-static-files/angular-translate-loader-static-files.js',
                        '/bower_components/angular-translate-storage-cookie/angular-translate-storage-cookie.js',
                        '/bower_components/angular-translate-storage-local/angular-translate-storage-local.js',
                        // <!-- satellizer -->
                        '/bower_components/satellizer/satellizer.min.js',

                        '/bower_components/ngCart/ngCart.min.js',

                        // <!-- App -->
                        '/js/app.js',
                        '/js/config.js',
                        '/js/config.lazyload.js',
                        '/js/config.router.js',
                        '/js/main.js',
                        '/js/services/ui-load.js',
                        '/js/filters/fromNow.js',
                        '/js/directives/setnganimate.js',
                        '/js/directives/ui-butterbar.js',
                        '/js/directives/ui-focus.js',
                        '/js/directives/ui-fullscreen.js',
                        '/js/directives/ui-jq.js',
                        '/js/directives/ui-module.js',
                        '/js/directives/ui-nav.js',
                        '/js/directives/ui-scroll.js',
                        '/js/directives/ui-shift.js',
                        '/js/directives/ui-toggleclass.js',
                        '/js/controllers/bootstrap.js',

                        // <!-- Music -->
                        '/js/app/music/videogular.css',
                        '/js/app/music/ctrl.js',
                        '/js/app/music/theme.css',
                        '/bower_components/videogular/videogular.min.js',
                        '/bower_components/videogular-controls/controls.min.js',
                        '/bower_components/videogular-buffering/buffering.min.js',
                        '/bower_components/videogular-overlay-play/overlay-play.min.js',
                        '/bower_components/videogular-poster/poster.min.js',
                        '/bower_components/videogular-ima-ads/ima-ads.min.js',

                        // <!-- Charts -->
                        'bower_components/ng-videosharing-embed/build/ng-videosharing-embed.min.js',

                        '/bower_components/jquery.easy-pie-chart/dist/jquery.easypiechart.fill.js',
                        '/bower_components/screenfull/dist/screenfull.min.js'
                    ]
                };

            function pathPolicy() {
                if (noPolicy.urls.indexOf(url) > -1) return false;
                if (noPolicy.folders.indexOf(firstParam) > -1)
                    return false;

                if (noPolicy.subFolders.indexOf(filePath) > -1)
                    return false;

                if (!req.session.authenticated) return true;
                else return false;
            }

            if (pathPolicy()) {
                return res.unauthorized();

            } else {
                return next();

            }
        }


    }

    /****************************************************************************
     *                                                                           *
     * Express middleware to use for every Sails request. To add custom          *
     * middleware to the mix, add a function to the middleware config object and *
     * add its key to the "order" array. The $custom key is reserved for         *
     * backwards-compatibility with Sails v0.9.x apps that use the               *
     * `customMiddleware` config option.                                         *
     *                                                                           *
     ****************************************************************************/

    // middleware: {

    /***************************************************************************
     *                                                                          *
     * The order in which middleware should be run for HTTP request. (the Sails *
     * router is invoked by the "router" middleware below.)                     *
     *                                                                          *
     ***************************************************************************/

    // order: [
    //   'startRequestTimer',
    //   'cookieParser',
    //   'session',
    //   'myRequestLogger',
    //   'bodyParser',
    //   'handleBodyParserError',
    //   'compress',
    //   'methodOverride',
    //   'poweredBy',
    //   '$custom',
    //   'router',
    //   'www',
    //   'favicon',
    //   '404',
    //   '500'
    // ],

    /****************************************************************************
     *                                                                           *
     * Example custom middleware; logs each request to the console.              *
     *                                                                           *
     ****************************************************************************/

    // myRequestLogger: function (req, res, next) {
    //     console.log("Requested :: ", req.method, req.url);
    //     return next();
    // }


    /***************************************************************************
     *                                                                          *
     * The body parser that will handle incoming multipart HTTP requests. By    *
     * default as of v0.10, Sails uses                                          *
     * [skipper](http://github.com/balderdashy/skipper). See                    *
     * http://www.senchalabs.org/connect/multipart.html for other options.      *
     *                                                                          *
     ***************************************************************************/

    // bodyParser: require('skipper')

    // },

    /***************************************************************************
     *                                                                          *
     * The number of seconds to cache flat files on disk being served by        *
     * Express static middleware (by default, these files are in `.tmp/public`) *
     *                                                                          *
     * The HTTP static cache is only active in a 'production' environment,      *
     * since that's the only time Express will cache flat-files.                *
     *                                                                          *
     ***************************************************************************/

    // cache: 31557600000
};