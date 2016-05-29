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
   
  
    $scope.delRecipe = function(recipe) {
      // get index of the object to splice from $localStorage array
      var objID = $localStorage.savedRecipes.indexOf(recipe);
      $localStorage.savedRecipes.splice(objID,1);
      /*
      if($localStorage.savedRecipes.length === 0) {
      $scope.msg = 'No Saved Recipe Found';
      } else {
        $scope.msg = 'Saved Recipes';
        } */
    };
  });
