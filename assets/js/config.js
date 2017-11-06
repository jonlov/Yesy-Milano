// config

var app =
    angular.module('app')
    .constant('appConfig', {
        name: 'Yesy Milano',
        shortName: 'YM',
        version: '0.0.1',
        APIurl: '/api/',
        // for chart colors
        color: {
            primary: '#FA7A21',
            info: '#23b7e5',
            success: '#27c24c',
            warning: '#fad733',
            danger: '#f05050',
            light: '#e8eff0',
            dark: '#3a3f51',
            black: '#1c2b36'
        },
        settings: {
            themeID: 7,
            navbarHeaderColor: 'box-shadow bg-black',
            navbarCollapseColor: 'bg-black-opacity',
            asideColor: 'bg-white b-r',

            headerFixed: true,
            asideFixed: true,
            asideFolded: false,
            asideDock: false,
            container: false,

            hideAside: true,
            hideHeader: true,
            hideFooter: true
        },
        noHeader: ['construction'],
        noFooter: ['construction']
    })
    .config(['$controllerProvider', '$compileProvider', '$filterProvider', '$provide','appConfig', 'LightboxProvider',
        function($controllerProvider, $compileProvider, $filterProvider, $provide, appConfig, LightboxProvider) {
            // set a custom template
            LightboxProvider.templateUrl = '/tpl/default/galery-lightbox.html';

            // lazy controller, directive and service
            app.controller = $controllerProvider.register;
            app.directive = $compileProvider.directive;
            app.filter = $filterProvider.register;
            app.factory = $provide.factory;
            app.service = $provide.service;
            app.constant = $provide.constant;
            app.value = $provide.value;
        }
    ])
    .config(['$translateProvider', function($translateProvider) {
        // Register a loader for the static files
        // So, the module will search missing translation tables under the specified urls.
        // Those urls are [prefix][langKey][suffix].
        $translateProvider.useStaticFilesLoader({
            prefix: '/l10n/',
            suffix: '.js'
        });
        // Tell the module what language to use by default
        $translateProvider.preferredLanguage('en');
        // Tell the module to store the language in the local storage
        $translateProvider.useLocalStorage();
    }]);