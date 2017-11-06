'use strict';

angular.module('app')
    // Controllers
    .controller('AppCtrl', ['$scope', '$window', '$ngSilentLocation', '$timeout', '$http', 'appConfig', 'Lightbox', '$location', '$rootScope',
        function($scope, $window, $ngSilentLocation, $timeout, $http, appConfig, Lightbox, $location, $rootScope) {
            // add 'ie' classes to html
            var isIE = !!navigator.userAgent.match(/MSIE/i);
            isIE && angular.element($window.document.body).addClass('ie');
            isSmartDevice($window) && angular.element($window.document.body).addClass('smart');

            // config
            $scope.app = appConfig;

            function isSmartDevice($window) {
                // Adapted from http://www.detectmobilebrowsers.com
                var ua = $window['navigator']['userAgent'] || $window['navigator']['vendor'] || $window['opera'];
                // Checks for iOs, Android, Blackberry, Opera Mini, and Windows mobile devices
                return (/iPhone|iPod|iPad|Silk|Android|BlackBerry|Opera Mini|IEMobile/).test(ua);
            }

            $scope.albums = [{
                title: 'Gira - Ya no quiero tu amor',
                thumbUrl: 'img/galery/mini7.png',
                images: [{
                    url: 'img/galery/gira-ya-no-quiero/photo1.jpg'
                }, {
                    url: 'img/galery/gira-ya-no-quiero/photo2.jpg'
                }, {
                    url: 'img/galery/gira-ya-no-quiero/photo3.jpg'
                }, {
                    url: 'img/galery/gira-ya-no-quiero/photo4.jpg'
                }, {
                    url: 'img/galery/gira-ya-no-quiero/photo5.jpg'
                }, {
                    url: 'img/galery/gira-ya-no-quiero/photo6.jpg'
                }, {
                    url: 'img/galery/gira-ya-no-quiero/photo7.jpg'
                }, {
                    url: 'img/galery/gira-ya-no-quiero/photo8.jpg'
                }, {
                    url: 'img/galery/gira-ya-no-quiero/photo9.jpg'
                }, {
                    url: 'img/galery/gira-ya-no-quiero/photo10.jpg'
                }, {
                    url: 'img/galery/gira-ya-no-quiero/photo11.jpg'
                }, {
                    url: 'img/galery/gira-ya-no-quiero/photo12.jpg'
                }, {
                    url: 'img/galery/gira-ya-no-quiero/photo13.jpg'
                }, {
                    url: 'img/galery/gira-ya-no-quiero/photo14.jpg'
                }, {
                    url: 'img/galery/gira-ya-no-quiero/photo15.jpg'
                }, {
                    url: 'img/galery/gira-ya-no-quiero/photo16.jpg'
                }, {
                    url: 'img/galery/gira-ya-no-quiero/photo17.jpg'
                }, {
                    url: 'img/galery/gira-ya-no-quiero/photo18.jpg'
                }, {
                    url: 'img/galery/gira-ya-no-quiero/photo19.jpg'
                }, {
                    url: 'img/galery/gira-ya-no-quiero/photo20.jpg'
                }, {
                    url: 'img/galery/gira-ya-no-quiero/photo21.jpg'
                }, {
                    url: 'img/galery/gira-ya-no-quiero/photo22.jpg'
                }, {
                    url: 'img/galery/gira-ya-no-quiero/photo23.jpg'
                }, {
                    url: 'img/galery/gira-ya-no-quiero/photo24.jpg'
                }, {
                    url: 'img/galery/gira-ya-no-quiero/photo25.jpg'
                }, {
                    url: 'img/galery/gira-ya-no-quiero/photo26.jpg'
                }, {
                    url: 'img/galery/gira-ya-no-quiero/photo27.jpg'
                }, {
                    url: 'img/galery/gira-ya-no-quiero/photo28.jpg'
                }, {
                    url: 'img/galery/gira-ya-no-quiero/photo29.jpg'
                }, {
                    url: 'img/galery/gira-ya-no-quiero/photo30.jpg'
                }, {
                    url: 'img/galery/gira-ya-no-quiero/photo31.jpg'
                }, {
                    url: 'img/galery/gira-ya-no-quiero/photo32.jpg'
                }]
            }, {
                title: 'Ya no quiero tu amor',
                thumbUrl: 'img/galery/mini6.png',
                images: [{
                    url: 'img/galery/ya-no-quiero-tu-amor/photo1.jpg'
                }, {
                    url: 'img/galery/ya-no-quiero-tu-amor/photo2.jpg'
                }, {
                    url: 'img/galery/ya-no-quiero-tu-amor/photo3.jpg'
                }, {
                    url: 'img/galery/ya-no-quiero-tu-amor/photo4.jpg'
                }, {
                    url: 'img/galery/ya-no-quiero-tu-amor/photo5.jpg'
                }, {
                    url: 'img/galery/ya-no-quiero-tu-amor/photo6.jpg'
                }, {
                    url: 'img/galery/ya-no-quiero-tu-amor/photo7.jpg'
                }, {
                    url: 'img/galery/ya-no-quiero-tu-amor/photo8.jpg'
                }, {
                    url: 'img/galery/ya-no-quiero-tu-amor/photo9.jpg'
                }, {
                    url: 'img/galery/ya-no-quiero-tu-amor/photo10.jpg'
                }, {
                    url: 'img/galery/ya-no-quiero-tu-amor/photo11.jpg'
                }, {
                    url: 'img/galery/ya-no-quiero-tu-amor/photo12.jpg'
                }, {
                    url: 'img/galery/ya-no-quiero-tu-amor/photo13.jpg'
                }, {
                    url: 'img/galery/ya-no-quiero-tu-amor/photo14.jpg'
                }, {
                    url: 'img/galery/ya-no-quiero-tu-amor/photo15.jpg'
                }, {
                    url: 'img/galery/ya-no-quiero-tu-amor/photo16.jpg'
                }, {
                    url: 'img/galery/ya-no-quiero-tu-amor/photo17.jpg'
                }, {
                    url: 'img/galery/ya-no-quiero-tu-amor/photo18.jpg'
                }, {
                    url: 'img/galery/ya-no-quiero-tu-amor/photo19.jpg'
                }, {
                    url: 'img/galery/ya-no-quiero-tu-amor/photo20.jpg'
                }, {
                    url: 'img/galery/ya-no-quiero-tu-amor/photo21.jpg'
                }, {
                    url: 'img/galery/ya-no-quiero-tu-amor/photo22.jpg'
                }, {
                    url: 'img/galery/ya-no-quiero-tu-amor/photo23.jpg'
                }, {
                    url: 'img/galery/ya-no-quiero-tu-amor/photo24.jpg'
                }, {
                    url: 'img/galery/ya-no-quiero-tu-amor/photo25.jpg'
                }, {
                    url: 'img/galery/ya-no-quiero-tu-amor/photo26.jpg'
                }, {
                    url: 'img/galery/ya-no-quiero-tu-amor/photo27.jpg'
                }, {
                    url: 'img/galery/ya-no-quiero-tu-amor/photo28.jpg'
                }, {
                    url: 'img/galery/ya-no-quiero-tu-amor/photo29.jpg'
                }, {
                    url: 'img/galery/ya-no-quiero-tu-amor/photo30.jpg'
                }, {
                    url: 'img/galery/ya-no-quiero-tu-amor/photo31.jpg'
                }, {
                    url: 'img/galery/ya-no-quiero-tu-amor/photo32.jpg'
                }, {
                    url: 'img/galery/ya-no-quiero-tu-amor/photo33.jpg'
                }, {
                    url: 'img/galery/ya-no-quiero-tu-amor/photo34.jpg'
                }, {
                    url: 'img/galery/ya-no-quiero-tu-amor/photo35.jpg'
                }]
            }, {
                title: 'Making of - Perdoname',
                thumbUrl: 'img/galery/mini5.png',
                images: [{
                    url: 'img/galery/making-of-perdoname/photo1.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo2.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo3.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo4.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo5.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo6.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo7.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo8.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo9.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo10.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo11.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo12.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo13.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo14.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo15.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo16.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo17.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo18.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo19.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo20.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo21.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo22.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo23.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo24.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo25.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo26.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo27.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo28.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo29.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo30.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo31.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo32.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo33.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo34.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo35.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo36.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo37.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo38.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo39.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo40.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo41.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo42.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo43.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo44.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo45.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo46.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo47.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo48.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo49.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo50.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo51.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo52.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo53.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo54.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo55.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo56.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo57.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo58.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo59.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo60.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo61.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo62.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo63.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo64.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo65.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo66.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo67.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo68.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo69.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo70.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo71.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo72.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo73.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo74.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo75.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo76.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo77.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo78.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo79.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo80.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo81.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo82.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo83.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo84.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo85.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo86.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo87.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo88.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo89.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo90.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo91.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo92.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo93.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo94.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo95.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo96.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo97.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo98.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo99.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo100.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo101.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo102.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo103.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo104.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo105.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo106.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo107.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo108.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo109.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo110.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo111.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo112.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo113.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo114.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo115.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo116.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo117.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo118.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo119.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo120.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo121.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo122.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo123.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo124.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo125.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo126.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo127.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo128.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo129.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo130.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo131.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo132.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo133.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo134.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo135.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo136.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo137.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo138.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo139.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo140.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo141.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo142.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo143.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo144.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo145.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo146.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo147.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo148.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo149.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo150.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo151.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo152.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo153.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo154.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo155.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo156.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo157.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo158.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo159.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo160.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo161.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo162.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo163.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo164.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo165.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo166.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo167.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo168.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo169.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo170.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo171.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo172.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo173.jpg'
                }, {
                    url: 'img/galery/making-of-perdoname/photo174.jpg'
                }]
            }, {
                title: 'Making of - Mala falsa mala',
                thumbUrl: 'img/galery/mini4.png',
                images: [{
                    url: 'img/galery/making-of-mala-falsa-mala/photo1.jpg'
                }, {
                    url: 'img/galery/making-of-mala-falsa-mala/photo2.jpg'
                }, {
                    url: 'img/galery/making-of-mala-falsa-mala/photo3.jpg'
                }, {
                    url: 'img/galery/making-of-mala-falsa-mala/photo4.jpg'
                }, {
                    url: 'img/galery/making-of-mala-falsa-mala/photo5.jpg'
                }, {
                    url: 'img/galery/making-of-mala-falsa-mala/photo6.jpg'
                }, {
                    url: 'img/galery/making-of-mala-falsa-mala/photo7.jpg'
                }, {
                    url: 'img/galery/making-of-mala-falsa-mala/photo8.jpg'
                }, {
                    url: 'img/galery/making-of-mala-falsa-mala/photo9.jpg'
                }, {
                    url: 'img/galery/making-of-mala-falsa-mala/photo10.jpg'
                }, {
                    url: 'img/galery/making-of-mala-falsa-mala/photo11.jpg'
                }, {
                    url: 'img/galery/making-of-mala-falsa-mala/photo12.jpg'
                }, {
                    url: 'img/galery/making-of-mala-falsa-mala/photo13.jpg'
                }, {
                    url: 'img/galery/making-of-mala-falsa-mala/photo14.jpg'
                }, {
                    url: 'img/galery/making-of-mala-falsa-mala/photo15.jpg'
                }, {
                    url: 'img/galery/making-of-mala-falsa-mala/photo16.jpg'
                }, {
                    url: 'img/galery/making-of-mala-falsa-mala/photo17.jpg'
                }, {
                    url: 'img/galery/making-of-mala-falsa-mala/photo18.jpg'
                }, {
                    url: 'img/galery/making-of-mala-falsa-mala/photo19.jpg'
                }, {
                    url: 'img/galery/making-of-mala-falsa-mala/photo20.jpg'
                }, {
                    url: 'img/galery/making-of-mala-falsa-mala/photo21.jpg'
                }, {
                    url: 'img/galery/making-of-mala-falsa-mala/photo22.jpg'
                }, {
                    url: 'img/galery/making-of-mala-falsa-mala/photo23.jpg'
                }, {
                    url: 'img/galery/making-of-mala-falsa-mala/photo24.jpg'
                }, {
                    url: 'img/galery/making-of-mala-falsa-mala/photo25.jpg'
                }, {
                    url: 'img/galery/making-of-mala-falsa-mala/photo26.jpg'
                }, {
                    url: 'img/galery/making-of-mala-falsa-mala/photo27.jpg'
                }, {
                    url: 'img/galery/making-of-mala-falsa-mala/photo28.jpg'
                }, {
                    url: 'img/galery/making-of-mala-falsa-mala/photo29.jpg'
                }, {
                    url: 'img/galery/making-of-mala-falsa-mala/photo30.jpg'
                }, {
                    url: 'img/galery/making-of-mala-falsa-mala/photo31.jpg'
                }, {
                    url: 'img/galery/making-of-mala-falsa-mala/photo32.jpg'
                }, {
                    url: 'img/galery/making-of-mala-falsa-mala/photo33.jpg'
                }, {
                    url: 'img/galery/making-of-mala-falsa-mala/photo34.jpg'
                }, {
                    url: 'img/galery/making-of-mala-falsa-mala/photo35.jpg'
                }, {
                    url: 'img/galery/making-of-mala-falsa-mala/photo36.jpg'
                }, {
                    url: 'img/galery/making-of-mala-falsa-mala/photo37.jpg'
                }, {
                    url: 'img/galery/making-of-mala-falsa-mala/photo38.jpg'
                }]
            }, {
                title: 'Perdoname',
                thumbUrl: 'img/galery/mini3.png',
                images: [{
                    url: 'img/galery/perdoname/photo1.jpg'
                }, {
                    url: 'img/galery/perdoname/photo2.jpg'
                }, {
                    url: 'img/galery/perdoname/photo3.jpg'
                }]
            }, {
                title: 'Sesiones',
                thumbUrl: 'img/galery/mini2.png',
                images: [{
                    url: 'img/galery/sesiones/photo1.jpg'
                }, {
                    url: 'img/galery/sesiones/photo2.jpg'
                }, {
                    url: 'img/galery/sesiones/photo3.jpg'
                }, {
                    url: 'img/galery/sesiones/photo4.jpg'
                }, {
                    url: 'img/galery/sesiones/photo5.jpg'
                }]
            }, {
                title: 'Wallpapers',
                thumbUrl: 'img/galery/mini1.png',
                images: [{
                    url: 'img/galery/wallpaper/photo1.jpg'
                }, {
                    url: 'img/galery/wallpaper/photo2.jpg'
                }]
            }];

            $scope.videos = [{
                title: 'Videos',
                thumbUrl: 'img/galery/mini1.png',
                images: [{
                    'type': 'video',
                    'url': 'https://www.youtube.com/watch?v=-Kaf_X0GX2c',
                    'thumbUrl': 'img/videos/yano.png'
                }, {
                    'type': 'video',
                    'url': 'https://www.youtube.com/watch?v=PtR7CCtQKdA',
                    'thumbUrl': 'img/videos/perdoname.png'
                }, {
                    'type': 'video',
                    'url': 'https://www.youtube.com/watch?v=Ffu71hT-FRk',
                    'thumbUrl': 'img/videos/lagota.png'
                }, {
                    'type': 'video',
                    'url': 'https://www.youtube.com/watch?v=jkGcpiS_lw4',
                    'thumbUrl': 'img/videos/dimeque.png'
                }, {
                    'type': 'video',
                    'url': 'https://www.youtube.com/watch?v=YAippGx-qtE',
                    'thumbUrl': 'img/videos/dimeque-behind.png'
                }]
            }];

            $scope.openLightboxModal = function(index, section) {
                var player = (section == 'videos');
                var paused = $('audio')[0].paused;

                if (!paused && player)
                    $('audio')[0].pause();
                    console.log($scope.albums[index]);
                console.log($scope.albums[index]);

                if (section == 'galery')
                    $scope.modal = Lightbox.openModal($scope.albums[index], 0, null, $scope.albums[index].thumbUrl);
                else if (section == 'videos')
                    $scope.modal = Lightbox.openModal($scope.videos[0], index);

                $scope.modal.closed.then(function() {
                    if (!paused && player)
                        $('audio')[0].play();
                });
            };

            var count = 0;
            $scope.mainOptions = {
                // sectionsColor: ['#fff', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff','#7BAABE', 'whitesmoke'],
                anchors: ['home', 'bio', 'music', 'galery', 'videos', 'tours', 'contact'],
                menu: '#menu',
                scrollOverflow: true,
                scrollingSpeed: 1000,
                lockAnchors: true,
                stopMedia: false,

                afterLoad: function(anchorLink, index) {
                    // console.log(anchorLink);
                    // var loadedSection = $(this);

                    // if (count > 3) {
                        $timeout(function() {
                            $scope.loadBar = true;
                        //
                            $timeout(function() {
                                $scope.noLoading = true;
                        //
                        //         $timeout(function() {
                                    $scope.ready = true;
                        //         }, 1000);
                            }, 1000);
                        }, 1000);
                        $ngSilentLocation.silent(anchorLink);
                        // count = 4;

                    // } else count++;
                }
            };

            $scope.contact = {};
            $scope.change = function(input) {
                $scope.contact.message = input.replace(/(\r\n|\n|\r)/gm, "<br />");

            }

            $scope.submit = function() {
                $scope.response = null;
                $scope.sending = true;

                // $http.post(appConfig.APIurl + 'contact/', $scope.contact)
                //     .success(function(data, status) {
                        $scope.response = {
                            success: 'Formulario enviado correctamente.',
                            error: null
                        }

                        $scope.sending = false;
                    // })
                    // .error(function(data, status) {
                    //     $scope.response = {
                    //         success: null,
                    //         error: "Hubo un error inexperado, intentelo de nuevo."
                    //     }
                    //
                    //     $scope.sending = false;
                    // });
            }

        }
    ])
    .filter('secondsToDate', function() {
        return function(input) {
            var d = Number(input / 1000),
                h = Math.floor(d / 3600),
                m = Math.floor(d % 3600 / 60),
                s = Math.floor(d % 3600 % 60);

            return ((h > 0 ? h + ":" : "") + (m < 10 ? "0" : "") + m + ":" + (s < 10 ? "0" : "") + s);
        }

    });;
