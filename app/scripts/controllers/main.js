'use strict';

/**
 * @ngdoc function
 * @name cookbriteApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cookbriteApp
 */
angular.module('cookbriteApp')
  .controller('MainCtrl', function ($scope, $sce, recipes) {
  
   
  
    $scope.getRecipes = function(){
        $scope.recipes = recipes.query({
            ingredient: $scope.ingredient
        });
    };
  });
