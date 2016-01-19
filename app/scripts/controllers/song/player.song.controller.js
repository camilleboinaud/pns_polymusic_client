/**
 * Created by sth on 1/4/16.
 */
'use strict';
/**
 *
 */
angular.module('song').controller('PlayerController', ['$scope', '$window', 'SongService',
    function ($scope, $window, SongService) {

      var audioContext = SongService.initAudioContext();

      $scope.playingMusic = SongService.newPlayingSong(audioContext);
      $scope.isLoaded = false;
      $scope.isPaused = true;


      $scope.playingMusic.url = '/Users/sth/develope/polytech/pns_web/pns_polymusic_server/public/uploads/Adele - Hello.mp3';

      $scope.safeApply = function(fn) {
        var phase = this.$root.$$phase;
        if(phase === '$apply' || phase === '$digest') {
          if(fn && (typeof(fn) === 'function')) {
            fn();
          }
        }else {
          this.$apply(fn);
        }
      };



      $scope.play = function () {
        // for changing the button icon from play to pause
        $scope.playingMusic.play(function(){
          $scope.safeApply(function(){
            $scope.isLoaded = $scope.playingMusic.isLoaded;
            $scope.isPaused = $scope.playingMusic.isPaused;
          });
        });

      };

      $scope.pause = function () {
        $scope.playingMusic.pause(function() {
          $scope.safeApply(function(){
            $scope.isLoaded = $scope.playingMusic.isLoaded;
            $scope.isPaused = $scope.playingMusic.isPaused;
          });
        });
      };

      $scope.stop = function () {
        console.log('stop music');
      };

    }
]);