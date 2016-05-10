'use strict';

/**
 * @ngdoc function
 * @name cookbriteApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cookbriteApp
 */
angular.module('cookbriteApp')
  .controller('MainCtrl', function ($scope, recipes) {
    $scope.recipes = recipes.query();
  
    $scope.refreshRecipes = function(){
        $scope.recipes = recipes.query({
            ingredient: $scope.ingredient
        });
    };
  });
