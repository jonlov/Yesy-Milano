app.controller('MusicCtrl', ['$sce', '$scope', '$ocLazyLoad', '$timeout', '$cookies', function($sce, $scope, $ocLazyLoad, $timeout, $cookies) {
    $scope.API = null;
    $scope.active = 0;

    return $ocLazyLoad.load([
        'js/app/music/theme.css',
        'com.2fdevs.videogular',
        'com.2fdevs.videogular.plugins.controls',
        'com.2fdevs.videogular.plugins.overlayplay',
        'com.2fdevs.videogular.plugins.poster',
        'com.2fdevs.videogular.plugins.buffering'
    ]).then(function() {
        $scope.playerTemplate = '/tpl/blocks/music.player.html';

        $scope.audios = [{
            title: 'Ya no quiero tu amor',
            artist: 'Yesy Milano',
            poster: 'img/music/cover1.jpg',
            download: 'http://yesymilano.com/mp3/?file=1',
            sources: [{
                    src: $sce.trustAsResourceUrl('mp3/Yesy Milano - Ya no quiero.mp3'),
                    type: 'audio/mpeg'
                }]
                // }, {
                //     title: 'Cuidalo bien ft. Mario Reyes',
                //     artist: 'Yesy Milando',
                //     poster: '/img/music/cover2.jpg',
                //     sources: [{
                //         src: $sce.trustAsResourceUrl('mp3/Beso Acido - Akapella.mp3'),
                //         type: 'audio/mpeg'
                //     }]
        }, {
            title: 'Perdóname ft. Roming',
            artist: 'Yesy Milano',
            poster: 'img/music/cover2.jpg',
            sources: [{
                src: $sce.trustAsResourceUrl('mp3/Yesy Milano - Perdoname Feat. Roming.mp3'),
                type: 'audio/mpeg'
            }]
        }, {
            title: 'Mala falsa mala',
            artist: 'Yesy Milano',
            poster: 'img/music/cover3.jpg',
            sources: [{
                src: $sce.trustAsResourceUrl('mp3/Yesy Milano - Mala falsa mala.mp3'),
                type: 'audio/mpeg'
            }]
        }];

        $scope.audio = $scope.audios[0];

        $scope.config = {
            repeat: false,
            shuffle: false,
            autoPlay: false,
            theme: {
                url: "/js/app/music/videogular.css"
            }
        };

        var playerCookie = function() {
            return $cookies.getObject($scope.app.shortName + '-player');
        }
        if (playerCookie()) {
            $scope.config = playerCookie();
        } else {
            $cookies.putObject($scope.app.shortName + '-player', $scope.config);
        }

        $scope.onPlayerReady = function(API) {
            $scope.API = API;
            if ($scope.API.currentState == 'play' || $scope.isCompleted) $scope.API.play();
            $scope.isCompleted = false;

            $scope.$watch('API.currentState', function(newValue) {
                if (!$scope.isCompleted) {
                    if (newValue === 'play')
                        $scope.API.autoPlay = true;
                    else
                        $scope.API.autoPlay = false;

                } else
                    $scope.API.autoPlay = true;

            });

        };

        $scope.onComplete = function() {
            $scope.isCompleted = true;

            var now = $scope.active;

            if ($scope.config.repeat) {
                $scope.API.seekTime(0);
                $scope.API.play();

            } else $scope.setActive('next');
        };

        $scope.getRandom = function(index) {
            var i = Math.floor(Math.random() * $scope.audios.length);
            if (!(i - index)) {
                i = $scope.getRandom(index);
            }
            return i;
        }

        $scope.play = function(index) {
            // play it
            $scope.setActive(index);
            $scope.API.play();

        };

        $scope.setActive = function(index) {
            if ($scope.config.shuffle) {
                $scope.active = $scope.getRandom($scope.active);

            } else {
                // get prev or next item
                if (index == "next") $scope.active++;
                else if (index == "prev") $scope.active--;
                else $scope.active = index;

                if ($scope.active >= $scope.audios.length) $scope.active = 0;
                if ($scope.active == -1) $scope.active = $scope.audios.length - 1;

            }

        };
    });
}]);
