// lazyload config

angular.module('app')
    /**
     * jQuery plugin config use ui-jq directive , config the js and css files that required
     * key: function name of the jQuery plugin
     * value: array of the css js file located
     */
    .constant('JQ_CONFIG', {
        wysiwyg: ['/bower_components/bootstrap-wysiwyg/bootstrap-wysiwyg.js',
            '/bower_components/bootstrap-wysiwyg/external/jquery.hotkeys.js'
        ]
    })
    // oclazyload config
    .config(['$ocLazyLoadProvider',
        function($ocLazyLoadProvider) {
            // We configure ocLazyLoad to use the lib script.js as the async loader
            $ocLazyLoadProvider.config({
                debug: false,
                events: false,
                modules: [{
                    name: 'com.2fdevs.videogular',
                    files: [
                        '/bower_components/videogular/videogular.js'
                    ]
                }, {
                    name: 'com.2fdevs.videogular.plugins.controls',
                    files: [
                        '/bower_components_personal/videogular-controls/vg-controls.js'
                    ]
                }, {
                    name: 'com.2fdevs.videogular.plugins.buffering',
                    files: [
                        '/bower_components/videogular-buffering/vg-buffering.min.js'
                    ]
                }, {
                    name: 'com.2fdevs.videogular.plugins.overlayplay',
                    files: [
                        '/bower_components/videogular-overlay-play/vg-overlay-play.min.js'
                    ]
                }, {
                    name: 'com.2fdevs.videogular.plugins.poster',
                    files: [
                        '/bower_components/videogular-poster/vg-poster.min.js'
                    ]
                }, {
                    name: 'com.2fdevs.videogular.plugins.imaads',
                    files: [
                        '/bower_components/videogular-ima-ads/ima-ads.min.js'
                    ]
                }]
            });
        }
    ]);