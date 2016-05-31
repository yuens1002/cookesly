'use strict';

/**
 * @ngdoc overview
 * @name cookbriteApp
 * @description
 * # cookbriteApp
 *
 * Main module of the application.
 */
angular
  .module('cookbriteApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ui.bootstrap',
    'ngStorage',
    'angularGrid',
    //'wu.masonry',
    // 'picardy.fontawesome',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl', 
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/save', {
        templateUrl: 'views/save.html',
        controller: 'SaveCtrl',
        controllerAs: 'save'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
