'use strict';

/**
 * @ngdoc function
 * @name cookbriteApp.controller:SaveCtrl
 * @description
 * # SaveCtrl
 * Controller of the cookbriteApp
 */
angular.module('cookbriteApp')
  .controller('SaveCtrl', function ($scope, $localStorage) {
     
     
  
    //getting the data from storage to scope for the view  
    $scope.savedRecipes = $localStorage.savedRecipes;

  });
