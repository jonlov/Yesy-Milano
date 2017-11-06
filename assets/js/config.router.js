'use strict';

/**
 * Config for the router
 */
angular.module('app')
    .run(['$rootScope', '$state', '$stateParams', 'appConfig',
        function($rootScope, $state, $stateParams, appConfig) {
            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;

            $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
                // FOR PAGES WITHOUT HEADER
                var noHeader = appConfig.noHeader;
                if (noHeader.indexOf(toState.name) + 1) appConfig.settings.hideHeader = true;
                else appConfig.settings.hideHeader = false;

                // FOR PAGES WITHOUT FOOTER
                var noFooter = appConfig.noFooter;
                if (noFooter.indexOf(toState.name) + 1) appConfig.settings.hideFooter = true;
                else appConfig.settings.hideFooter = false;
            });

            $rootScope.$on('$stateChangeSuccess', function() {
                // Page Title
                if ($state.current.data && $state.current.data.title) document.title = $state.current.data.title + ' | ' + appConfig.name;
                else document.title = appConfig.name + ' | The Official Site';
            });
        }
    ])
    .config(['$stateProvider', '$locationProvider',
        function($stateProvider, $locationProvider) {

            $locationProvider.html5Mode({
                enabled: true,
                requireBase: false
            });

            $stateProvider
                .state('home', {
                    url: '*path',
                    templateUrl: 'tpl/default/page_about.html',
                    data: {
                        noNeedAuth: true
                    },
                    controller: ['$scope', '$location', '$stateParams', '$timeout', '$interval', '$rootScope',
                        function($scope, $location, $stateParams, $timeout, $interval, $rootScope) {
                            var pageRefresh = function() {
                                    var page = $location.path().split('/')[1]
                                    if (page == '') page = 'home';
                                    $rootScope.page = page;
                                },
                                promise;

                            pageRefresh();

                            if ($rootScope.page) {
                                var $clientcarousel = $('#partners-list'),
                                    partners = $clientcarousel.children().length + 1,
                                    clientwidth = (partners * 164),
                                    partnerspeed = 0;

                                $clientcarousel.css('width', clientwidth);


                                $scope.rotating = true;
                                $scope.rotatingSet = function(value) {
                                    (value) ? $scope.stop(): $scope.start();
                                }

                                // starts the interval
                                $scope.start = function() {
                                    // stops any running interval to avoid two intervals running at the same time
                                    $scope.stop();

                                    // store the interval promise
                                    promise = $interval(rotatePartners, partnerspeed);
                                };

                                // stops the interval
                                $scope.stop = function() {
                                    $interval.cancel(promise);
                                }

                                $scope.$on("$locationChangeSuccess", function() {
                                    pageRefresh();
                                    ($rootScope.page != 'music') ? $scope.stop(): $scope.start();
                                });

                                function rotatePartners() {
                                    if ($scope.rotating != false) {
                                        var $first = $('#partners-list li:first');
                                        $first.animate({ 'margin-left': '-164px' }, 2000, "linear", function() {
                                            $first.remove().css({ 'margin-left': '0px' });
                                            $('#partners-list li:last').after($first);
                                        });
                                    }
                                }
                                // starting the interval by default
                                $scope.start();

                                $timeout(function() {
                                    $.fn.fullpage.moveTo($rootScope.page);
                                });
                            }
                        }
                    ]
                });
        }
    ]);
