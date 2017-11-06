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
            LightboxProvider.templateUrl = '@@domainProject/tpl/default/galery-lightbox.html';

            // lazy controller, directive and service
            app.controller = $controllerProvider.register;
            app.directive = $compileProvider.directive;
            app.filter = $filterProvider.register;
            app.factory = $provide.factory;
            app.service = $provide.service;
            app.constant = $provide.constant;
            app.value = $provide.value;
        }
    ]);
