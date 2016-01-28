'use strict';


angular.module('song',[]);


/**
 * @ngdoc overview
 * @name pnsPolymusicClientApp
 * @description
 * # pnsPolymusicClientApp
 *
 * Main module of the application.
 */
angular
  .module('pnsPolymusicClientApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngFileUpload',
    'ngStorage',
    'song'
  ])

  .config(function() {
    window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame;
    window.AudioContext = window.AudioContext || window.webkitAudioContext;
  })

  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/sign-in', {
        templateUrl: 'views/sign_in.html',
        controller: 'AuthentificationCtrl',
      })
      .when('/sign-up', {
        templateUrl: 'views/sign_up.html',
        controller: 'AuthentificationCtrl'
      })
      .when('/upload', {
        templateUrl: 'views/upload.html',
        controller: 'MusicUploadController',
        controllerAs: 'uploaderCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  })

  .constant('SERVER_ADDR', 'http://localhost:3000/');


